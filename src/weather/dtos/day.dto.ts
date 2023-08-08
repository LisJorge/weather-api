import { Exclude, Expose, Type } from "class-transformer";
import { ConditionDto } from "./condition.dto";

@Exclude()
export class DayDto {
  @Expose({name: 'temp_c'})
  currentTemperature: number;

  @Expose({ name: 'is_day'})
  isDay: boolean;

  @Expose({ name: 'wind_kph'})
  windVelocity: number;

  @Expose({ name: 'humidity'})
  humidityPercentage: number;

  @Expose()
  @Type(() => ConditionDto)
  condition: ConditionDto;
}