import React from 'react';
import ParticlesBackground from './ParticlesBackground';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-900 via-black to-purple-900">
      <ParticlesBackground />
      <div className="relative container mx-auto p-4 sm:p-8 bg-white bg-opacity-90 shadow-xl rounded-lg z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-700 mb-4 sm:mb-6">WELCOME TO SKY LINK</h1>
        <p className="text-base sm:text-lg text-center text-gray-700 mb-4 sm:mb-8">
          Discover current weather conditions, amazing NASA photo of the day and more...
        </p>
        <div className="flex flex-wrap justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2">
          <a href="/weather" className="bg-blue-600 text-white py-2 px-4 sm:px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Check Weather
          </a>
          <a href="/nasaphoto" className="bg-blue-600 text-white py-2 px-4 sm:px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Astronomical Photo Of The Day
          </a>
          <a href="/spacenews" className="bg-blue-600 text-white py-2 px-4 sm:px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Space News
          </a>
          <a href="/starmap" className="bg-blue-600 text-white py-2 px-4 sm:px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Star Map
          </a>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">Features</h2>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-800 space-y-2">
            <li>Current weather updates for your location</li>
            <li>NASA's Astronomy Picture of the Day</li>
            <li>Latest space-related news</li>
            <li>Interactive weather map</li>
            <li>Easy navigation and user-friendly interface</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
