import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SettingsUserOutput {
  @Field(() => Int)
  maxEditOrderDays: number;
}
