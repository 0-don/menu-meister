import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UserMealGroupedCountAdminInput {
  @Field(() => Int)
  mealBoardPlanId: number;

  @Field(() => String)
  dateFrom: string;

  @Field(() => String)
  dateTo: string;
}
