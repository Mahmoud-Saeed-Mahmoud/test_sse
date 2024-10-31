import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../../enums/RoleTypes.enum";
import { NestedEnumRoleTypesFilter } from "./NestedEnumRoleTypesFilter.input";
import { NestedEnumRoleTypesWithAggregatesFilter } from "./NestedEnumRoleTypesWithAggregatesFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";

@NestJsGraphQL.InputType('EnumRoleTypesWithAggregatesFilter', { isAbstract: true })
export class EnumRoleTypesWithAggregatesFilter {
  @NestJsGraphQL.Field(() => RoleTypes, { nullable: true })
  equals?: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER" | undefined;

  @NestJsGraphQL.Field(() => [RoleTypes], { nullable: true })
  in?: Array<"SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER"> | undefined;

  @NestJsGraphQL.Field(() => [RoleTypes], { nullable: true })
  notIn?: Array<"SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumRoleTypesWithAggregatesFilter, { nullable: true })
  not?: NestedEnumRoleTypesWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumRoleTypesFilter, { nullable: true })
  _min?: NestedEnumRoleTypesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumRoleTypesFilter, { nullable: true })
  _max?: NestedEnumRoleTypesFilter | undefined;
}
