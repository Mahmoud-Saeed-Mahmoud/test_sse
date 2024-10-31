import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleCreateWithoutPermissionsInput } from "../../role/inputs/RoleCreateWithoutPermissionsInput.input";
import { RoleUpdateWithoutPermissionsInput } from "../../role/inputs/RoleUpdateWithoutPermissionsInput.input";

@NestJsGraphQL.InputType('RoleUpsertWithoutPermissionsInput', { isAbstract: true })
export class RoleUpsertWithoutPermissionsInput {
  @NestJsGraphQL.Field(() => RoleUpdateWithoutPermissionsInput)
  update!: RoleUpdateWithoutPermissionsInput;

  @NestJsGraphQL.Field(() => RoleCreateWithoutPermissionsInput)
  create!: RoleCreateWithoutPermissionsInput;
}
