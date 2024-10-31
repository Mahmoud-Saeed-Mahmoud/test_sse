import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleCreateWithoutPermissionsInput } from "../../role/inputs/RoleCreateWithoutPermissionsInput.input";
import { RoleWhereUniqueInput } from "../../role/inputs/RoleWhereUniqueInput.input";

@NestJsGraphQL.InputType('RoleCreateOrConnectWithoutPermissionsInput', { isAbstract: true })
export class RoleCreateOrConnectWithoutPermissionsInput {
  @NestJsGraphQL.Field(() => RoleWhereUniqueInput)
  where!: RoleWhereUniqueInput;

  @NestJsGraphQL.Field(() => RoleCreateWithoutPermissionsInput)
  create!: RoleCreateWithoutPermissionsInput;
}
