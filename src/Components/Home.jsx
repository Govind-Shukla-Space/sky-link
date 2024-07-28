import React from 'react';

const Home = () => {
  return (
    <div className="home container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Welcome to the Weather App</h1>
      <p className="text-lg text-center text-gray-700 mb-4">
        Discover current weather conditions and amazing NASA photos of the day.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="/weather" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Check Weather</a>
        <a href="/nasaphoto" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">View NASA Photo</a>
      </div>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Current weather updates for your location</li>
          <li>NASA's Astronomy Picture of the Day</li>
          <li>Easy navigation and user-friendly interface</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
