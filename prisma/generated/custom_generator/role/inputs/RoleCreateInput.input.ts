import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../../enums/RoleTypes.enum";
import { PermissionCreateNestedManyWithoutRoleInput } from "../../permission/inputs/PermissionCreateNestedManyWithoutRoleInput.input";
import { UserCreateNestedManyWithoutRoleInput } from "../../user/inputs/UserCreateNestedManyWithoutRoleInput.input";

@NestJsGraphQL.InputType('RoleCreateInput', { isAbstract: true })
export class RoleCreateInput {
  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => RoleTypes)
  roleType!: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER";

  @NestJsGraphQL.Field(() => PermissionCreateNestedManyWithoutRoleInput, { nullable: true })
  permissions?: PermissionCreateNestedManyWithoutRoleInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateNestedManyWithoutRoleInput, { nullable: true })
  User?: UserCreateNestedManyWithoutRoleInput | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
