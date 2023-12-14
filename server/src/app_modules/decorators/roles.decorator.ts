import { SetMetadata } from "@nestjs/common";
import { UserRoleName } from "../@generated/prisma/user-role-name.enum";

export const ROLES = "roles";

export const Roles = (...roles: `${UserRoleName}`[]) =>
  SetMetadata(ROLES, roles);
