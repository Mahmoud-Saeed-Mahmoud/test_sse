import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionCreateWithoutRoleInput } from "../../permission/inputs/PermissionCreateWithoutRoleInput.input";
import { PermissionUpdateWithoutRoleInput } from "../../permission/inputs/PermissionUpdateWithoutRoleInput.input";
import { PermissionWhereUniqueInput } from "../../permission/inputs/PermissionWhereUniqueInput.input";

@NestJsGraphQL.InputType('PermissionUpsertWithWhereUniqueWithoutRoleInput', { isAbstract: true })
export class PermissionUpsertWithWhereUniqueWithoutRoleInput {
  @NestJsGraphQL.Field(() => PermissionWhereUniqueInput)
  where!: PermissionWhereUniqueInput;

  @NestJsGraphQL.Field(() => PermissionUpdateWithoutRoleInput)
  update!: PermissionUpdateWithoutRoleInput;

  @NestJsGraphQL.Field(() => PermissionCreateWithoutRoleInput)
  create!: PermissionCreateWithoutRoleInput;
}
