import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-900 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-500">SKY-LINK</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-pink-500">HOME</Link>
          <Link to="/weather" className="hover:text-blue-400">WEATHER</Link>
          <Link to="/nasaphoto" className="hover:text-green-500">NASA APOD</Link>
          <Link to="/spacenews" className="hover:text-yellow-500">SPACE NEWS</Link>
          <Link to="/starmap" className="hover:text-purple-500">STAR MAP</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
