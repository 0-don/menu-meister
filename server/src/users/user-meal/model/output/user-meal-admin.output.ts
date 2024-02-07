import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserMealAdminOutput {
  @Field(() => String)
  date: string;

  @Field(() => String)
  meal: string;

  @Field(() => Int)
  count: number;
}
