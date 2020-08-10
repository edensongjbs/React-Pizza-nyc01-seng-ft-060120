import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const URL = "http://localhost:3000/pizzas"

class App extends Component {

  state = {pizzas:[], currentPizza: null}

  componentDidMount() {
    fetch(URL)
    .then( res => res.json())
    .then( json => this.setState({pizzas: json}))
  }

  editPizza = (pizza) => {
    this.setState({currentPizza: pizza})
  }

  findAndUpdatePizza = (pizza) => {
    const newPizzaAr = [...this.state.pizzas]
    const foundPizzaIndex = newPizzaAr.findIndex( p => p.id === pizza.id)
    newPizzaAr[foundPizzaIndex] = pizza
    this.setState({ pizzas: newPizzaAr, currentPizza: null })
  }

  updatePizza = (e) => {
    e.persist()
    const configObj = {
      method: "PATCH",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(this.state.currentPizza)
    }
    fetch(URL+"/"+this.state.currentPizza.id, configObj)
    .then( res => res.json())
    .then( json => this.findAndUpdatePizza(json))
  }

  formChangeHandler = (e) => {
    const changedPizza = {...this.state.currentPizza}
    if (e.target.name==="veg") {changedPizza.vegetarian=true}
    else if (e.target.name==="no-veg") {changedPizza.vegetarian=false}
    else {
      changedPizza[e.target.name]=e.target.value
    }
    this.setState({currentPizza: changedPizza})
  }

  render() {
    return (
      <Fragment>
        <Header/>
        {this.state.currentPizza ? <PizzaForm pizza={this.state.currentPizza} changeHandler={this.formChangeHandler} updatePizza={this.updatePizza}/> : null }
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
