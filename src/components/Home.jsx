 import { useState, useEffect } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import axios from 'axios'
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [alldata, setalldata] = useState([]);
  const [filterdata, setfilterdata] = useState([]);
  const [search, setsearch] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=81a31689b9484bca9e334d28bc88f883`
      );
      setalldata(response.data.results);
      setfilterdata(response.data.results); // show all initially
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data only once on mount
  useEffect(() => {
    fetchData();
  }, []);

  // Filter locally when search changes
  useEffect(() => {
    if (search.trim() === "") {
      setfilterdata(alldata); // show all if empty search
    } else {
      const filtered = alldata.filter(recipe =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
      );
      setfilterdata(filtered);
    }
  }, [search, alldata]);

  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to Recipe Planner</h2>
        <p className="mb-4">Discover and save your favorite recipes, plan your meals, and enjoy cooking!</p>

        <SearchBar search={setsearch} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <div className="col-span-4 text-center text-gray-500">Loading recipes...</div>
          ) : filterdata.length > 0 ? (
            filterdata.map((recipe) => (
              <div key={recipe.id} className="border rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
                <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded-md mb-2" />
                <Link to={`/recipe/${recipe.id}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    View Recipe
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center text-gray-500">No recipes found.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
