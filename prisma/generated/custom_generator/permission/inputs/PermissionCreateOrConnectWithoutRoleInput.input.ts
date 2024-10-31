import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionCreateWithoutRoleInput } from "../../permission/inputs/PermissionCreateWithoutRoleInput.input";
import { PermissionWhereUniqueInput } from "../../permission/inputs/PermissionWhereUniqueInput.input";

@NestJsGraphQL.InputType('PermissionCreateOrConnectWithoutRoleInput', { isAbstract: true })
export class PermissionCreateOrConnectWithoutRoleInput {
  @NestJsGraphQL.Field(() => PermissionWhereUniqueInput)
  where!: PermissionWhereUniqueInput;

  @NestJsGraphQL.Field(() => PermissionCreateWithoutRoleInput)
  create!: PermissionCreateWithoutRoleInput;
}
