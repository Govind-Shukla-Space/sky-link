import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

const SpaceNews = () => {
    const [news, setNews] = useState([]);

    const apiKey = import.meta.env.VITE_APP_SPACENEWS;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get(`https://newsapi.org/v2/everything?q=space&apiKey=${apiKey}`);
                const uniqueNews = res.data.articles.filter((article, index, self) =>
                    index === self.findIndex((t) => (
                        t.title === article.title
                    ))
                );
                setNews(uniqueNews);
            } catch (error) {
                console.error("Error fetching space news:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <>
                <div className="min-h-screen container mx-auto p-8 bg-gray-800 bg-opacity-80 shadow-md rounded-lg h-screen overflow-auto">
                    <h1 className="text-4xl font-bold mb-8 text-white text-center">Space News</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((article, index) => (
                            <div key={index} className="p-6 rounded-lg shadow-lg text-black transform transition-transform hover:scale-105 hover:shadow-2xl animate-color-change">
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:underline block mb-4 uppercase">
                                    {article.title}
                                </a>
                                <p className="mb-4">{article.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            
        </>
    );
};

export default SpaceNews;
