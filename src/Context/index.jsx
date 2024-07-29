import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('Jaipur');
    const [thisLocation, setLocation] = useState('');
    const [locationEnabled, setLocationEnabled] = useState(false);

    // Fetch weather data based on location
    const fetchWeather = async (location) => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: location,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            const thisData = Object.values(response.data.locations)[0];
            setLocation(thisData.address);
            setValues(thisData.values);
            setWeather(thisData.values[0]);
        } catch (e) {
            console.error(e);
            // if the API throws an error.
            alert('This place does not exist');
        }
    };

    // Get user's location
    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                const location = `${latitude},${longitude}`;
                setPlace(location); // Update place with user's coordinates
                setLocationEnabled(true);
            }, (error) => {
                console.error("Error getting location:", error);
                // Fallback to default location if user denies or an error occurs
                setPlace('Jaipur');
                setLocationEnabled(false);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
            setPlace('Jaipur');
            setLocationEnabled(false);
        }
    };

    useEffect(() => {
        getUserLocation();
    }, []);

    useEffect(() => {
        fetchWeather(place);
    }, [place]);

    useEffect(() => {
        console.log(values);
    }, [values]);

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place,
            locationEnabled
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
