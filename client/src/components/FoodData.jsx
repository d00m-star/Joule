import { useEffect } from "react"
import { useState } from "react"
import { FoodList } from "./FoodList"

export const FoodData = ({foodList, foods, setFoods}) => {
  const [totalCalories, setTotalCalories] = useState(0) //foodData
  const [totalPro, setTotalPro] = useState(0)
  const [totalFats, setTotalFats] = useState(0)
  const [totalCarbs, setTotalCarbs] = useState(0)

  const sum = (propertyName) => foods.map(food => food[propertyName]).reduce((result, kcal) => result + kcal, 0)
  

  useEffect(() => {
    // setTotalFats(sumFats())
    // setTotalCarbs(sumCarbs())
    // setTotalPro(sumProtein())
    // setTotalCalories(sumCalories())
    console.log('foodCals', sum("calories"))
    console.log('foodCals', sum("fats"))
    console.log('foodCals', sum("protein"))
  }, [foods])
  
  
  




  return (
    <div className="day-container">
      <div className="data-data-container">
      {foods.map((food) => (
        <div className="day-data" key={food.id}>
          <h3>{food.name}<br></br>{food.calories}</h3>
            <ul className="day-data-dropdown">
              <li>Type: {food.type}</li>
              <li>Calories: {food.calories}</li>
              <li>Protein: {food.protein}</li>
              <li>Fats: {food.fats}</li>
              <li>Carbohydrates: {food.carbohydrates}</li>
            </ul> 
      </div>
      ))}
      </div>
      <div className="data-display">
        <div>{sum("fats")}</div>
      </div>
    <div className="food-list-container">
      <div className="food-data">
        <FoodList foodList={foodList} setFoods={setFoods} foods={foods} calories={totalCalories} setCalories={setTotalCalories}/></div>
      </div>
    </div>
  )
}

