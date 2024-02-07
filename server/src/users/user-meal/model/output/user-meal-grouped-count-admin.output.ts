import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserMealGroupedCountAdminOutput {
  @Field(() => String)
  date: string;

  @Field(() => String)
  meal: string;

  @Field(() => Int)
  count: number;
}
