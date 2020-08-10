import React from "react"

const PizzaForm = (props) => {
  console.log(props)
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={props.changeHandler} name="topping" className="form-control" placeholder="Pizza Topping" value={
                props.pizza ? props.pizza.topping : ""
              }/>
        </div>
        <div className="col">
          <select name="size" onChange={props.changeHandler} value={props.pizza ? props.pizza.size : null} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input name="veg" className="form-check-input" onChange={props.changeHandler} type="radio" value="Vegetarian" checked={props.pizza ? props.pizza.vegetarian : null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input name="no-veg" className="form-check-input" onChange={props.changeHandler} type="radio" value="Not Vegetarian" checked={props.pizza ? !props.pizza.vegetarian : null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.updatePizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
