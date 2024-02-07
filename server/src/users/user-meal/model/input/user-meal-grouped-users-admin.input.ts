import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UserMealGroupedUsersAdminInput {
  @Field(() => Int)
  mealBoardPlanId: number;

  @Field(() => String)
  date: string;
}
