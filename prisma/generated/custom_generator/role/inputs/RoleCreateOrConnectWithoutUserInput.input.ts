import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleCreateWithoutUserInput } from "../../role/inputs/RoleCreateWithoutUserInput.input";
import { RoleWhereUniqueInput } from "../../role/inputs/RoleWhereUniqueInput.input";

@NestJsGraphQL.InputType('RoleCreateOrConnectWithoutUserInput', { isAbstract: true })
export class RoleCreateOrConnectWithoutUserInput {
  @NestJsGraphQL.Field(() => RoleWhereUniqueInput)
  where!: RoleWhereUniqueInput;

  @NestJsGraphQL.Field(() => RoleCreateWithoutUserInput)
  create!: RoleCreateWithoutUserInput;
}
