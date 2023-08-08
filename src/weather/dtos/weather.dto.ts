import { Exclude, Expose, Type } from "class-transformer";
import { LocationDto } from "./location.dto";
import { DayDto } from "./day.dto";

@Exclude()
export class WeatherDto {
  @Expose()
  @Type(() => LocationDto)
  location: LocationDto;

  @Expose({ name: 'current' })
  @Type(() => DayDto)
  dayTime: DayDto;  
}