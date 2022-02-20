/** @format */
export type GetCityByIdResponse = CityItem & LngLat;
export type LngLat = {
  lat: number;
  lng: number;
};
export type LonLat = {
  lat: number;
  lon: number;
};
export type CityItem = {
  id: number;
  name: string;
};
export type GetWeatherByCityIdResponse = {
  type: string;
  type_description: string;
  sunrise: string;
  sunset: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  clouds_percent: number;
  wind_speed: number;
};
