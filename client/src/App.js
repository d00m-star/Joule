import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import data from './food.json'
import { FoodData } from './components/FoodData'
import { useState } from 'react'
import Favorites from './components/Favorites'

function App() {
  const [foods, setFoods] = useState([])

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
          <Route path="/favorites" element={<Favorites foods={foods} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
