import axios from 'axios';
const API_KEY = '61271f918c78b8b8a6a0d36276a886a3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
//place in a variable to avoid the possibility of typos and bugs

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}