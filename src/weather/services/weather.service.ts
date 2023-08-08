import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosRequestConfig } from "axios";
import { firstValueFrom } from "rxjs";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../constants";
import { plainToInstance } from "class-transformer";
import { WeatherDto } from "../dtos";

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  async currentTime(): Promise<WeatherDto> {
   const config: AxiosRequestConfig = {
      params: {
         key: WEATHER_API_KEY,
         q: 'France'
      }
   }
   const { data: rawData } = await firstValueFrom(this.httpService.get(WEATHER_API_URL, config))
   const weatherData = plainToInstance(WeatherDto, rawData, {
      excludeExtraneousValues: true
   });
   return weatherData;
  }
}
