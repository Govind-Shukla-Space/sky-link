import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Weather from './Components/Weather';
import NasaPhoto from './Components/NasaPhoto';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/nasaphoto" element={<NasaPhoto />} />
      </Routes>
    </div>
  );
}

export default App;
