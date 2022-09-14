import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import data from './food.json'
import { FoodData } from './components/FoodData'
import { useEffect, useState } from 'react'
import Favorites from './components/Favorites'
import WeekList from './components/WeekList'

function App() {
  const [days, setDays] = useState([])
  const [foods, setFoods] = useState([
    {
      id: 10,
      name: 'Cherry',
      type: 'Fruit',
      calories: 5,
      protein: 1,
      fat: 1,
      carbohydrates: 10
    }
  ])

  useEffect(() => {
    setDays(foods)
  }, [foods])

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <FoodData
                foodList={data.foodList}
                setFoods={setFoods}
                foods={foods}
              />
            }
          />
          <Route
            path="/weeks"
            element={<WeekList foods={foods} days={days} />}
          />
          <Route path="/favorites" element={<Favorites foods={foods} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
