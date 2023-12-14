import { Injectable } from "@nestjs/common";
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ name: "user", async: true })
@Injectable()
export class UserSpaceValidator implements ValidatorConstraintInterface {
  /**
   * Method should return true, if name is not taken.
   */
  async validate(username: string) {
    return !username.includes(" ");
  }

  defaultMessage() {
    return "USER_WITH_SPACE";
  }
}
