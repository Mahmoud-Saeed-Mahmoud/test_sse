import * as NestJsGraphQL from "@nestjs/graphql";

export enum RoleTypes {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  AUTHOR = "AUTHOR",
  READER = "READER"
}
NestJsGraphQL.registerEnumType(RoleTypes, {
  name: "RoleTypes",
  description: undefined,
});
