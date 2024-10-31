import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionCreateManyRoleInputEnvelope } from "../../permission/inputs/PermissionCreateManyRoleInputEnvelope.input";
import { PermissionCreateOrConnectWithoutRoleInput } from "../../permission/inputs/PermissionCreateOrConnectWithoutRoleInput.input";
import { PermissionCreateWithoutRoleInput } from "../../permission/inputs/PermissionCreateWithoutRoleInput.input";
import { PermissionWhereUniqueInput } from "../../permission/inputs/PermissionWhereUniqueInput.input";

@NestJsGraphQL.InputType('PermissionCreateNestedManyWithoutRoleInput', { isAbstract: true })
export class PermissionCreateNestedManyWithoutRoleInput {
  @NestJsGraphQL.Field(() => [PermissionCreateWithoutRoleInput], { nullable: true })
  create?: PermissionCreateWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionCreateOrConnectWithoutRoleInput], { nullable: true })
  connectOrCreate?: PermissionCreateOrConnectWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => PermissionCreateManyRoleInputEnvelope, { nullable: true })
  createMany?: PermissionCreateManyRoleInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [PermissionWhereUniqueInput], { nullable: true })
  connect?: PermissionWhereUniqueInput[] | undefined;
}
