 import React, { useContext } from 'react';
import { FavoritesContext } from '../context/ContextAPI';
import { Link } from 'react-router-dom';
import filled_heart from '../assets/filled_heart.png';

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-10">
      <h2 className="text-3xl font-bold text-center mb-6"> Your Favorite Recipes</h2>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">You haven't added any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl ">
          {favorites.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">{recipe.title}</h3>
                   <button className='text-blue-600' onClick={()=>removeFavorite(recipe.id)}>Remove</button>
                </div>
                <Link to={`/recipe/${recipe.id}`} className="mt-auto">
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    View Recipe
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
