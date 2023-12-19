import { UserExistsValidator } from "@/auth/validators/user-exist.validator";
import { UserSpaceValidator } from "@/auth/validators/user-space.validators";
import { Field, InputType } from "@nestjs/graphql";
import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  Validate,
} from "class-validator";

@InputType()
export class RegisterUserInput {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @Validate(UserSpaceValidator)
  @Validate(UserExistsValidator)
  @Field(() => String)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @Field(() => String)
  password: string;
}
