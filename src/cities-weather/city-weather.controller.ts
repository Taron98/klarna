/** @format */

import { Route, Controller, SuccessResponse, Get, Request } from 'tsoa';
import * as cityWeatherService from './city-weather.service';
import { CityItem } from './city-weather.model';
import * as express from 'express';
@Route('')
export class CityWeatherController extends Controller {
  @SuccessResponse('200', 'Success')
  @Get('cities')
  public async getCitiesByCoordinates(
    @Request() request: express.Request,
  ): Promise<CityItem[] | null> {
    return cityWeatherService.getCitiesByCoordinates(request.query);
  }
  @SuccessResponse('200', 'Success')
  @Get('cities/{cityId}')
  public async getCityById(cityId: number): Promise<any> {
    return cityWeatherService.getCityById(cityId);
  }
  @SuccessResponse('200', 'Success')
  @Get('cities/{cityId}/weather')
  public async getWeatherByCityId(cityId: number): Promise<any> {
    return cityWeatherService.getWeatherByCityId(cityId);
  }
}
