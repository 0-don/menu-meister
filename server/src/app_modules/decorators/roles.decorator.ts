import { SetMetadata } from "@nestjs/common";
import { UserRoleName } from "@prisma/client";

export const ROLES = "roles";

export const Roles = (...roles: `${UserRoleName}`[]) =>
  SetMetadata(ROLES, roles);
