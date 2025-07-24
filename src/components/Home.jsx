import React, { use } from 'react'
import { useState, useEffect} from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import axios from 'axios'

const Home = () => {
const [alldata, setalldata] = useState( [])
const [filterdata, setfilterdata] = useState([])
const [search, setsearch] = useState('')
  useEffect(() => {
    const fetchData = async () => {
        if (search.trim() === "") {
    setalldata([]); // Optional: clear results if empty
    return;}
      try {
        const response = await axios.get  (
`https://api.spoonacular.com/recipes/complexSearch?query=${search }&apiKey=81a31689b9484bca9e334d28bc88f883`);
 
        setalldata(response.data);
        setfilterdata(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  
     
  }, [search]
 )
   
 

  return (
 <>
    <Header />
   
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to Recipe Planner</h2>
      <p className="mb-4">Discover and save your favorite recipes, plan your meals, and enjoy cooking!</p>  
 <SearchBar search={setsearch}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterdata && filterdata.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
            {/* <p className="text-gray-600 mb-2">{recipe.description}</p> */}
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded-md mb-2" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View Recipe</button>
          </div>
        ))}
      </div>
 
</div>
</>
)
}

export default Home