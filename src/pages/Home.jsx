import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-pink-100 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Catering Service</h1>
      <p className="text-lg text-gray-600 mb-6">
        Enjoy personalized meals and event catering with ease.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link to="/login" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-xl">
          Login
        </Link>
        <Link to="/register" className="bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded-xl">
          Register
        </Link>
        <Link to="/products" className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded-xl">
          View Menu
        </Link>
      </div>
    </div>
  );
};

export default Home;
