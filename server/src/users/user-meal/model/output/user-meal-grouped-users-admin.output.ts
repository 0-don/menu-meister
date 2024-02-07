import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserMealGroupedUsersMealsAdminOutput } from "./user-meal-grouped-users-meals-admin.output";

@ObjectType()
export class UserMealGroupedUsersAdminOutput {
  @Field(() => Int)
  userId: number;

  @Field(() => String, { nullable: true })
  firstname?: string;

  @Field(() => String, { nullable: true })
  lastname?: string;

  @Field(() => [UserMealGroupedUsersMealsAdminOutput])
  meals: UserMealGroupedUsersMealsAdminOutput[];
}
