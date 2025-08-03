 import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">🍴 Recipe Planner</h1>
      <nav className="hidden md:flex gap-6">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/saved" className="hover:text-green-600">Saved</Link>
        <Link to="/meal-plan" className="hover:text-green-600">Meal Plan</Link>
           <Link to="/favorites" className="hover:text-green-600">Favorites</Link>
      </nav>
    </header>
  );
};

export default Header;
