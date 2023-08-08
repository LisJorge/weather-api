import { Controller, Get } from '@nestjs/common';
import { WeatherService } from '../services/weather.service';
import { WeatherDto } from '../dtos';

@Controller('weather')
export class WeatherController {
  constructor(private readonly wheaterService: WeatherService) {}

  @Get()
  getCurrent(): Promise<WeatherDto> {
    return this.wheaterService.currentTime();
  }
}
