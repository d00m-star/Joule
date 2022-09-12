import { FoodList } from "./FoodList"

export const FoodData = ({foodList, foods, setFoods}) => {

  const sum = (propertyName) => foods.map(food => food[propertyName]).reduce((result, kcal) => result + kcal, 0)
  
  return (
    <div className="day-container">
      <div className="data-container">
      {foods.map((food) => (
        <div className="day-data" key={food.id}>
          <h3>{food.name}<br></br>{food.calories}</h3>
            <ul className="day-data-dropdown">
              <li>{food.type}</li>
              <li>Calories: {food.calories}</li>
              <li>Protein: {food.protein}</li>
              <li>Fats: {food.fats}</li>
              <li>Carbohydrates: {food.carbohydrates}</li>
            </ul> 
      </div>
      ))}
      </div>
      <div className="data-display">
        <div>
          <h3 className="total-title">Today's Nutritional Data</h3>
          <br></br>
          <ul>
            <li><b>Total Calories:</b> {sum("calories")}</li>
            <li><b>Total Protein:</b> {sum("protein")}</li>
            <li><b>Total Carbs:</b>{sum("carbohydrates")}</li>
            <li><b>Total Fats:</b>{sum("fats")}</li>
          </ul>
        </div>
      </div>
    <div className="food-list-container">
      <div className="food-data">
        <FoodList foodList={foodList} setFoods={setFoods} foods={foods}/></div>
      </div>
    </div>
  )
}

