import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { EnumOperationNullableListFilter } from "../../common/inputs/EnumOperationNullableListFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";

@NestJsGraphQL.InputType('PermissionScalarWhereInput', { isAbstract: true })
export class PermissionScalarWhereInput {
  @NestJsGraphQL.Field(() => [PermissionScalarWhereInput], { nullable: true })
  AND?: PermissionScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionScalarWhereInput], { nullable: true })
  OR?: PermissionScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionScalarWhereInput], { nullable: true })
  NOT?: PermissionScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  modelName?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => EnumOperationNullableListFilter, { nullable: true })
  allowedOperations?: EnumOperationNullableListFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  rolePermissionsId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;
}
