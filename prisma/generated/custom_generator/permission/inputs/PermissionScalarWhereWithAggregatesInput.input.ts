import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { EnumOperationNullableListFilter } from "../../common/inputs/EnumOperationNullableListFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('PermissionScalarWhereWithAggregatesInput', { isAbstract: true })
export class PermissionScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [PermissionScalarWhereWithAggregatesInput], { nullable: true })
  AND?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionScalarWhereWithAggregatesInput], { nullable: true })
  OR?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  modelName?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => EnumOperationNullableListFilter, { nullable: true })
  allowedOperations?: EnumOperationNullableListFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  rolePermissionsId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
