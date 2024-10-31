import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleCreateWithoutUserInput } from "../../role/inputs/RoleCreateWithoutUserInput.input";
import { RoleUpdateWithoutUserInput } from "../../role/inputs/RoleUpdateWithoutUserInput.input";

@NestJsGraphQL.InputType('RoleUpsertWithoutUserInput', { isAbstract: true })
export class RoleUpsertWithoutUserInput {
  @NestJsGraphQL.Field(() => RoleUpdateWithoutUserInput)
  update!: RoleUpdateWithoutUserInput;

  @NestJsGraphQL.Field(() => RoleCreateWithoutUserInput)
  create!: RoleCreateWithoutUserInput;
}
