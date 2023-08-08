import { Exclude, Expose } from "class-transformer";

@Exclude()
export class LocationDto {
  @Expose()
  country: number;

  @Expose({ name: 'name'})
  city: boolean;

  @Expose({ name: 'tz_id' })
  timezone: string;

  @Expose()
  localtime: string;
}