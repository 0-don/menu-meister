import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class SwitchWeeklyMealGroupInput {
  @IsNotEmpty()
  @Field(() => Int)
  activeMealId: number;

  @IsNotEmpty()
  @Field(() => String)
  activeDay: string;

  @IsNotEmpty()
  @Field(() => Int)
  activeGroupId: number;

  @Field(() => Int, { nullable: true })
  overMealId: number;

  @IsNotEmpty()
  @Field(() => String)
  overDay: string;

  @IsNotEmpty()
  @Field(() => Int)
  overGroupId: number;
}
