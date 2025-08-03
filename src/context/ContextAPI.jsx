 import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  

  const addFavorite = (recipe) => {
    const isAlreadyFav = favorites.some((fav) => fav.id === recipe.id);
    if (!isAlreadyFav) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
