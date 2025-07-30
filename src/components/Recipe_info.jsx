 import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const RecipeInfo = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "81a31689b9484bca9e334d28bc88f883";

  useEffect(() => {
    const fetchRecipeInfo = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );
        setRecipe(res.data);
        console.log(res.data);
      } catch (err) {
        setError("Failed to fetch recipe details.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeInfo();
  }, [id]);

  if (loading)
    return <div className="text-center text-lg text-blue-500 mt-10">Loading recipe...</div>;
  if (error)
    return <div className="text-red-600 text-center font-semibold mt-10">{error}</div>;

  return (
    <div className="max-w-5xl mx-auto p-6  mt-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">{recipe.title}</h1>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />

        <div
          className="text-gray-700 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        />
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {recipe.extendedIngredients?.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">Instructions</h2>
        <div
          className="text-gray-700 text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: recipe.instructions }}
        />
      </div>
    </div>
  );
};

export default RecipeInfo;
