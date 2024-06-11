import { DataContext } from '../contexts/DataContext';
import {useState } from 'react';


// eslint-disable-next-line react/prop-types
export function DataContextProvider({ children }) {

    const [countries, setCountries] = useState([]);
    const [weather, setWeather] = useState({});
    const [cities, setCities] = useState([]);
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false);

    return (
        <DataContext.Provider value={{
            countries,
            weather,
            cities,
            news,
            loading,
            setLoading,
            setWeather,
            setCountries,
            setCities,
            setNews
        }}>
            {children}
        </DataContext.Provider>
    );
}
