import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionScalarWhereInput } from "../../permission/inputs/PermissionScalarWhereInput.input";
import { PermissionUpdateManyMutationInput } from "../../permission/inputs/PermissionUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('PermissionUpdateManyWithWhereWithoutRoleInput', { isAbstract: true })
export class PermissionUpdateManyWithWhereWithoutRoleInput {
  @NestJsGraphQL.Field(() => PermissionScalarWhereInput)
  where!: PermissionScalarWhereInput;

  @NestJsGraphQL.Field(() => PermissionUpdateManyMutationInput)
  data!: PermissionUpdateManyMutationInput;
}
