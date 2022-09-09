import { useEffect } from "react"
import { useState } from "react"
import { FoodList } from "./FoodList"

export const FoodData = ({foodList, foods, setFoods}) => {
  const [calories, setCalories] = useState([]) //foodData
  const [protein, setProtein] = useState([]) //foodData
  const [fats, setFats] = useState([]) //foodData
  const [carbohydrates, setCarbohydrates] = useState([]) //foodData
  const [totalCalories, setTotalCalories] = useState(null) //foodData

  

  let sumCalories= () => { calories.map((kcal) => { //sums the state array of calories
    return sumCalories += kcal
  })}

  let foodCals = () => foods.map(food => food.calories) //grabs calories from foods
  let foodProtein = () => foods.map(food => food.protein) //grabs protein from foods
  let foodFats = () => foods.map(food => food.fats) //grabs fats from foods
  let foodCarbs = () => foods.map(food => food.carbohydrates) //grabs carbs from foods

useEffect(() => {
  setCalories(foodCals()) //set state of calories ..
  setProtein(foodProtein()) //set state of protein
  setFats(foodFats()) //set state of fats
  setCarbohydrates(foodCarbs()) //set state of carbs
  setTotalCalories(sumCalories()) //set state of total calories from sumCalories function
}, [])

console.log('sumCal', sumCalories)
console.log('cal state', calories)
console.log('total cal state', totalCalories)
console.log('protein state', protein)
console.log('carb state', carbohydrates)
console.log('fat state', fats)



  return (
    <div className="day-container">
      <div className="data-data-container">
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
      </div>
    <div className="food-list-container">
      <div className="food-data">
        <FoodList foodList={foodList} setFoods={setFoods} foods={foods} calories={calories} setCalories={setCalories}/></div>
      </div>
    </div>
  )
}

