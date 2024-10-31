import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../../enums/RoleTypes.enum";

@NestJsGraphQL.InputType('NestedEnumRoleTypesFilter', { isAbstract: true })
export class NestedEnumRoleTypesFilter {
  @NestJsGraphQL.Field(() => RoleTypes, { nullable: true })
  equals?: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER" | undefined;

  @NestJsGraphQL.Field(() => [RoleTypes], { nullable: true })
  in?: Array<"SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER"> | undefined;

  @NestJsGraphQL.Field(() => [RoleTypes], { nullable: true })
  notIn?: Array<"SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumRoleTypesFilter, { nullable: true })
  not?: NestedEnumRoleTypesFilter | undefined;
}
