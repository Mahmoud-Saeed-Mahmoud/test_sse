import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleCreateOrConnectWithoutUserInput } from "../../role/inputs/RoleCreateOrConnectWithoutUserInput.input";
import { RoleCreateWithoutUserInput } from "../../role/inputs/RoleCreateWithoutUserInput.input";
import { RoleWhereUniqueInput } from "../../role/inputs/RoleWhereUniqueInput.input";

@NestJsGraphQL.InputType('RoleCreateNestedOneWithoutUserInput', { isAbstract: true })
export class RoleCreateNestedOneWithoutUserInput {
  @NestJsGraphQL.Field(() => RoleCreateWithoutUserInput, { nullable: true })
  create?: RoleCreateWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => RoleCreateOrConnectWithoutUserInput, { nullable: true })
  connectOrCreate?: RoleCreateOrConnectWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => RoleWhereUniqueInput, { nullable: true })
  connect?: RoleWhereUniqueInput | undefined;
}
