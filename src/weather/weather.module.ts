import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { WeatherService } from "./services/weather.service";
import { WeatherController } from "./controllers/weather.controller";

@Module({
    imports: [HttpModule],
    providers: [WeatherService],
    controllers: [WeatherController]
  })
  export class WeatherModule {}