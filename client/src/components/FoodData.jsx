import { useEffect } from "react"
import { useState } from "react"
import { FoodList } from "./FoodList"

export const FoodData = ({foodList, foods, setFoods}) => {
  const [calories, setCalories] = useState([])
  const [protein, setProtein] = useState([])
  const [fats, setFats] = useState([])
  const [carbohydrates, setCarbohydrates] = useState([])
  const [totalCalories, setTotalCalories] = useState(null)

  let sumCalories = calories.map((kcal) => {
    return sumCalories += kcal
  })

  let foodCals = foods.map((food) => {
  return food.calories
  })

  let foodProtein = foods.map((food) => {
  return food.protein
  })

  let foodFats = foods.map((food) => {
    return food.fats
  })

  let foodCarbs = foods.map((food) => {
    return food.carbohydrates
  })

useEffect(() => {
  setCalories(foodCals)
  setProtein(foodProtein)
  setFats(foodFats)
  setCarbohydrates(foodCarbs)
  setTotalCalories(sumCalories)
}, [])

console.log('sumCal', sumCalories)
console.log('foodcals', calories)
console.log('totCal', totalCalories)



  return (
    <div className="day-container">
      {foods.map((food) => (
        <div className="day-data" key={food.id}>
          <h3>{food.name}</h3>
            <ul>
              <li>Type: {food.type}</li>
              <li>Calories: {food.calories}</li>
              <li>Protein: {food.protein}</li>
              <li>Fats: {food.fats}</li>
              <li>Carbohydrates: {food.carbohydrates}</li>
            </ul>
      </div>
      ))}

    <div className="food-data-container">FoodData
    </div>
    <div className="food-list-container"><FoodList foodList={foodList} setFoods={setFoods} foods={foods} calories={calories} setCalories={setCalories}/></div>
    </div>
  )
}

