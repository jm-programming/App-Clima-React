import { ajax } from "../tools/ajax";


const URI_CLIMA = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_KEY_API_WEATHER}&lang=es&q=`;

export const getWeather = async(city) => {
    const optionsRequest = {
        method: "GET",
        url: URI_CLIMA + city,
    };
    return await ajax(optionsRequest);
}

