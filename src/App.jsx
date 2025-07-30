import { useState } from 'react'
import {Route,Routes}   from 'react-router-dom'
import Home from './components/Home'
import Saved_Recipes from './components/Saved_Recipes'
import Meal_Plans from './components/Meal_Plans'
import RecipeInfo from './components/Recipe_info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved_Recipes/>} />
        <Route path="/meal-plan" element={<Meal_Plans />} />
      <  Route path="/recipe/:id" element={<RecipeInfo />} />
      </Routes>
    
    </>
  )
}

export default App
