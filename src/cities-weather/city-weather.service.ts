/** @format */
import { CityItem } from './city-weather.model';
import { getDistance } from 'geolib';
import * as fs from 'fs';
import { StatusError } from '../errors/StatusError';
import { cityWeather } from '../service/openweathermap';

export const getCitiesByCoordinates = async (coordinates: any = {}): Promise<CityItem[] | any> => {
  if (!coordinates.lng || !coordinates.lat) {
    throw new StatusError(400, 'BadRequestError', 'lat/lng required');
  }
  const cities = JSON.parse(fs.readFileSync('city.list.json').toString());
  return cities.filter((item: { coord: any }) => {
    const { coord } = item;
    return (
      getDistance(
        { longitude: coordinates.lng, latitude: coordinates.lat },
        { longitude: coord.lon, latitude: coord.lat },
      ) <= 10000
    );
  });
};
const cityById = async (cityId: number): Promise<CityItem | null> => {
  const cities = JSON.parse(fs.readFileSync('city.list.json').toString());
  return cities.filter((item: CityItem) => item.id === cityId);
};
export const getCityById = async (cityId: number): Promise<any> => {
  const city = await cityById(cityId);
  if (!city) {
    throw new StatusError(404, 'NotFoundError', 'not found');
  }
  return city;
};
export const getWeatherByCityId = async (cityId: number): Promise<any> => {
  const city = (await getCityById(cityId))[0];
  if (!city) {
    throw new StatusError(404, 'NotFoundError', 'not found');
  }
  const { coord } = city;
  return cityWeather(coord.lon, coord.lat);
};
