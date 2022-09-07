import { FoodList } from "./FoodList"

export const FoodData = (props) => {

  return (
    <div className="day-container">
      
      <div className="day-data">

      </div>
    <div className="food-data-container">FoodData
    </div>
    <div className="food-list-container"><FoodList foodList={props.foodList}/></div>
    </div>
  )
}

