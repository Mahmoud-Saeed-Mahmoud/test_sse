import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleCreateOrConnectWithoutPermissionsInput } from "../../role/inputs/RoleCreateOrConnectWithoutPermissionsInput.input";
import { RoleCreateWithoutPermissionsInput } from "../../role/inputs/RoleCreateWithoutPermissionsInput.input";
import { RoleUpdateWithoutPermissionsInput } from "../../role/inputs/RoleUpdateWithoutPermissionsInput.input";
import { RoleUpsertWithoutPermissionsInput } from "../../role/inputs/RoleUpsertWithoutPermissionsInput.input";
import { RoleWhereUniqueInput } from "../../role/inputs/RoleWhereUniqueInput.input";

@NestJsGraphQL.InputType('RoleUpdateOneRequiredWithoutPermissionsNestedInput', { isAbstract: true })
export class RoleUpdateOneRequiredWithoutPermissionsNestedInput {
  @NestJsGraphQL.Field(() => RoleCreateWithoutPermissionsInput, { nullable: true })
  create?: RoleCreateWithoutPermissionsInput | undefined;

  @NestJsGraphQL.Field(() => RoleCreateOrConnectWithoutPermissionsInput, { nullable: true })
  connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | undefined;

  @NestJsGraphQL.Field(() => RoleUpsertWithoutPermissionsInput, { nullable: true })
  upsert?: RoleUpsertWithoutPermissionsInput | undefined;

  @NestJsGraphQL.Field(() => RoleWhereUniqueInput, { nullable: true })
  connect?: RoleWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => RoleUpdateWithoutPermissionsInput, { nullable: true })
  update?: RoleUpdateWithoutPermissionsInput | undefined;
}
