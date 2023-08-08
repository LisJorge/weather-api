import { Expose } from "class-transformer";

export class ConditionDto{
    @Expose({name: 'text'})
    condition: string;

    @Expose()
    icon: string;
}