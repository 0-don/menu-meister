import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

@InputType()
export class LoginUserInput {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @Field(() => String)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @Field(() => String)
  password: string;
}
