import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../../enums/RoleTypes.enum";

@NestJsGraphQL.InputType('NestedEnumRoleTypesNullableFilter', { isAbstract: true })
export class NestedEnumRoleTypesNullableFilter {
  @NestJsGraphQL.Field(() => RoleTypes, { nullable: true })
  equals?: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER" | undefined;

  @NestJsGraphQL.Field(() => [RoleTypes], { nullable: true })
  in?: Array<"SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER"> | undefined;

  @NestJsGraphQL.Field(() => [RoleTypes], { nullable: true })
  notIn?: Array<"SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumRoleTypesNullableFilter, { nullable: true })
  not?: NestedEnumRoleTypesNullableFilter | undefined;
}
