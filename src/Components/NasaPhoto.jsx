import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';

const NasaPhoto = () => {
    const [photoData, setPhotoData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const api_key = import.meta.env.VITE_APP_NASA_KEY;

    useEffect(() => {
        async function fetchPhoto() {
            try {
                const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);
                const data = await res.json();
                setPhotoData(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching NASA photo:", error);
            }
        }

        fetchPhoto();
    }, [api_key]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    if (!photoData) return <div className="flex items-center justify-center h-screen text-white">Loading...</div>;

    return (
        <>
             <div className="min-h-screen bg-cover bg-center"  style={{ backgroundImage: "url('https://media.giphy.com/media/GC7C2Fi902BDG/giphy.gif')" }}>
                <div className="container mx-auto p-8 flex justify-center items-center min-h-screen">
                    <div className="bg-white bg-opacity-80 shadow-md rounded-lg overflow-hidden w-full max-w-2xl">
                        <div className="nasa-photo cursor-pointer" onClick={toggleModal}>
                            {photoData.media_type === 'image' ? (
                                <img src={photoData.url} alt={photoData.title} className="w-full h-64 object-cover" />
                            ) : (
                                <iframe
                                    title="space-video"
                                    src={photoData.url}
                                    frameBorder="0"
                                    gesture="media"
                                    allow="encrypted-media"
                                    allowFullScreen
                                    className="w-full h-64"
                                />
                            )}
                        </div>
                        <div className="p-6">
                            <h1 className="text-2xl font-bold mb-2 text-pink-500">{photoData.title}</h1>
                            <p className="text-lg text-blue-400 mb-4">{photoData.date}</p>
                            <p className="text-base text-green-500">{photoData.explanation}</p>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            className="absolute top-0 right-0 text-white text-3xl p-2"
                            onClick={toggleModal}
                        >
                            &times;
                        </button>
                        {photoData.media_type === 'image' ? (
                            <img src={photoData.url} alt={photoData.title} className="max-h-screen" />
                        ) : (
                            <iframe
                                title="space-video"
                                src={photoData.url}
                                frameBorder="0"
                                gesture="media"
                                allow="encrypted-media"
                                allowFullScreen
                                className="max-h-screen"
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default NasaPhoto;
