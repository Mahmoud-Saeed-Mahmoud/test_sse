import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { EnumOperationNullableListFilter } from "../../common/inputs/EnumOperationNullableListFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { RoleRelationFilter } from "../../role/inputs/RoleRelationFilter.input";

@NestJsGraphQL.InputType('PermissionWhereInput', { isAbstract: true })
export class PermissionWhereInput {
  @NestJsGraphQL.Field(() => [PermissionWhereInput], { nullable: true })
  AND?: PermissionWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionWhereInput], { nullable: true })
  OR?: PermissionWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionWhereInput], { nullable: true })
  NOT?: PermissionWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  modelName?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => EnumOperationNullableListFilter, { nullable: true })
  allowedOperations?: EnumOperationNullableListFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  rolePermissionsId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => RoleRelationFilter, { nullable: true })
  role?: RoleRelationFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;
}
