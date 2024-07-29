import React from 'react';

const StarMap = () => {
    return (
        <div className="container mx-auto p-8 bg-gray-800 bg-opacity-70 shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-4 text-white">Interactive Star Map</h1>
            <iframe 
                src="https://stellarium-web.org/" 
                title="Interactive Star Map" 
                frameBorder="0" 
                className="w-full h-96" 
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default StarMap;
