import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionUpdateWithoutRoleInput } from "../../permission/inputs/PermissionUpdateWithoutRoleInput.input";
import { PermissionWhereUniqueInput } from "../../permission/inputs/PermissionWhereUniqueInput.input";

@NestJsGraphQL.InputType('PermissionUpdateWithWhereUniqueWithoutRoleInput', { isAbstract: true })
export class PermissionUpdateWithWhereUniqueWithoutRoleInput {
  @NestJsGraphQL.Field(() => PermissionWhereUniqueInput)
  where!: PermissionWhereUniqueInput;

  @NestJsGraphQL.Field(() => PermissionUpdateWithoutRoleInput)
  data!: PermissionUpdateWithoutRoleInput;
}
