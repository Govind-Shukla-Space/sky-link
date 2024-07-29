import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Weather from './Components/Weather';
import NasaPhoto from './Components/NasaPhoto';
import SpaceNews from './Components/SpaceNews';
import StarMap from './Components/StarMap';
import NavBar from './Components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/nasaphoto" element={<NasaPhoto />} />
                    <Route path="/spacenews" element={<SpaceNews />} />
                    <Route path="/starmap" element={<StarMap />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
