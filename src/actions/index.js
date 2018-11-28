import axios from 'axios'
const API_KEY = "479bb0dc919ab09af63fe8a49c6287d0"

const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=imperial`;
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},in`
	const request = axios.get(url);


	return {
		type: FETCH_WEATHER,
		payload: request

	}

}