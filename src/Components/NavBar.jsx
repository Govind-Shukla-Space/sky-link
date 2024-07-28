import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          Weather App
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/weather" className="text-white hover:text-gray-300">Weather</Link>
          <Link to="/nasaphoto" className="text-white hover:text-gray-300">NASA Photo</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
