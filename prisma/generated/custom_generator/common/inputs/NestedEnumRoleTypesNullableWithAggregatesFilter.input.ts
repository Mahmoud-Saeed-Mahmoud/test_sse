import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../../enums/RoleTypes.enum";
import { NestedEnumRoleTypesNullableFilter } from "./NestedEnumRoleTypesNullableFilter.input";
import { NestedIntNullableFilter } from "./NestedIntNullableFilter.input";

@NestJsGraphQL.InputType('NestedEnumRoleTypesNullableWithAggregatesFilter', { isAbstract: true })
export class NestedEnumRoleTypesNullableWithAggregatesFilter {
  @NestJsGraphQL.Field(() => RoleTypes, { nullable: true })
  equals?: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER" | undefined;

  @NestJsGraphQL.Field(() => [RoleTypes], { nullable: true })
  in?: Array<"SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER"> | undefined;

  @NestJsGraphQL.Field(() => [RoleTypes], { nullable: true })
  notIn?: Array<"SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumRoleTypesNullableWithAggregatesFilter, { nullable: true })
  not?: NestedEnumRoleTypesNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumRoleTypesNullableFilter, { nullable: true })
  _min?: NestedEnumRoleTypesNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumRoleTypesNullableFilter, { nullable: true })
  _max?: NestedEnumRoleTypesNullableFilter | undefined;
}
