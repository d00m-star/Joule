import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import foodList from './food.json'
import { FoodData } from './components/FoodData'
import { useState } from 'react'

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
              <FoodData foodList={foodList} setFoods={setFoods} foods={foods} />
            }
          />
          {/* <Route path='/foods' element={}/>
          <Route path='/weeks' element={}/>
          <Route path='/days' element={}/> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
