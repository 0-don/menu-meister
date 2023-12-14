import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

@InputType()
export class LoginUserInput {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  @Field(() => String)
  username: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @Field(() => String)
  password: string;
}
