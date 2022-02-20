/** @format */
import axios from 'axios';
import { GetWeatherByCityIdResponse } from '../cities-weather/city-weather.model';

export const cityWeather = async (
  lon: number,
  lat: number,
): Promise<GetWeatherByCityIdResponse> => {
  const APIKey = '5f5a814446945852644d14b6c7428783';
  const url = 'http://api.openweathermap.org/data/2.5/weather';
  const params = {
    lat,
    lon,
    APIKey,
  };
  const { data } = await axios.get(url, { params });
  return {
    type: data.weather[0].main,
    type_description: data.weather[0].desctiption,
    sunrise: new Date(data.sys.sunrise).toISOString(),
    sunset: new Date(data.sys.sunset).toISOString(),
    temp: data.main.temp,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    clouds_percent: data.clouds.all,
    wind_speed: data.wind.speed,
  } as GetWeatherByCityIdResponse;
};
