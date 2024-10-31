import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleCreateOrConnectWithoutPermissionsInput } from "../../role/inputs/RoleCreateOrConnectWithoutPermissionsInput.input";
import { RoleCreateWithoutPermissionsInput } from "../../role/inputs/RoleCreateWithoutPermissionsInput.input";
import { RoleWhereUniqueInput } from "../../role/inputs/RoleWhereUniqueInput.input";

@NestJsGraphQL.InputType('RoleCreateNestedOneWithoutPermissionsInput', { isAbstract: true })
export class RoleCreateNestedOneWithoutPermissionsInput {
  @NestJsGraphQL.Field(() => RoleCreateWithoutPermissionsInput, { nullable: true })
  create?: RoleCreateWithoutPermissionsInput | undefined;

  @NestJsGraphQL.Field(() => RoleCreateOrConnectWithoutPermissionsInput, { nullable: true })
  connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | undefined;

  @NestJsGraphQL.Field(() => RoleWhereUniqueInput, { nullable: true })
  connect?: RoleWhereUniqueInput | undefined;
}
