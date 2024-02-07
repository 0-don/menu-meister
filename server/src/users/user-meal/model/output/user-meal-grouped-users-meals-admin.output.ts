import { MealLocation } from "@/app_modules/@generated/prisma/meal-location.enum";
import { TimeOfDay } from "@/app_modules/@generated/prisma/time-of-day.enum";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserMealGroupedUsersMealsAdminOutput {
  @Field(() => Int)
  mealId: number;

  @Field(() => String)
  meal: string;

  @Field(() => TimeOfDay)
  timeOfDay: keyof typeof TimeOfDay;

  @Field(() => MealLocation, { defaultValue: MealLocation.InRoom })
  mealLocation: keyof typeof MealLocation;
}
