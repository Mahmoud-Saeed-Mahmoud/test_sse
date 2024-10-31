import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { EnumRoleTypesFilter } from "../../common/inputs/EnumRoleTypesFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { PermissionListRelationFilter } from "../../permission/inputs/PermissionListRelationFilter.input";
import { UserListRelationFilter } from "../../user/inputs/UserListRelationFilter.input";

@NestJsGraphQL.InputType('RoleWhereInput', { isAbstract: true })
export class RoleWhereInput {
  @NestJsGraphQL.Field(() => [RoleWhereInput], { nullable: true })
  AND?: RoleWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [RoleWhereInput], { nullable: true })
  OR?: RoleWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [RoleWhereInput], { nullable: true })
  NOT?: RoleWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => EnumRoleTypesFilter, { nullable: true })
  roleType?: EnumRoleTypesFilter | undefined;

  @NestJsGraphQL.Field(() => PermissionListRelationFilter, { nullable: true })
  permissions?: PermissionListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => UserListRelationFilter, { nullable: true })
  User?: UserListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;
}
