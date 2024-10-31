import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionCreateManyRoleInputEnvelope } from "../../permission/inputs/PermissionCreateManyRoleInputEnvelope.input";
import { PermissionCreateOrConnectWithoutRoleInput } from "../../permission/inputs/PermissionCreateOrConnectWithoutRoleInput.input";
import { PermissionCreateWithoutRoleInput } from "../../permission/inputs/PermissionCreateWithoutRoleInput.input";
import { PermissionScalarWhereInput } from "../../permission/inputs/PermissionScalarWhereInput.input";
import { PermissionUpdateManyWithWhereWithoutRoleInput } from "../../permission/inputs/PermissionUpdateManyWithWhereWithoutRoleInput.input";
import { PermissionUpdateWithWhereUniqueWithoutRoleInput } from "../../permission/inputs/PermissionUpdateWithWhereUniqueWithoutRoleInput.input";
import { PermissionUpsertWithWhereUniqueWithoutRoleInput } from "../../permission/inputs/PermissionUpsertWithWhereUniqueWithoutRoleInput.input";
import { PermissionWhereUniqueInput } from "../../permission/inputs/PermissionWhereUniqueInput.input";

@NestJsGraphQL.InputType('PermissionUpdateManyWithoutRoleNestedInput', { isAbstract: true })
export class PermissionUpdateManyWithoutRoleNestedInput {
  @NestJsGraphQL.Field(() => [PermissionCreateWithoutRoleInput], { nullable: true })
  create?: PermissionCreateWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionCreateOrConnectWithoutRoleInput], { nullable: true })
  connectOrCreate?: PermissionCreateOrConnectWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionUpsertWithWhereUniqueWithoutRoleInput], { nullable: true })
  upsert?: PermissionUpsertWithWhereUniqueWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => PermissionCreateManyRoleInputEnvelope, { nullable: true })
  createMany?: PermissionCreateManyRoleInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [PermissionWhereUniqueInput], { nullable: true })
  set?: PermissionWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionWhereUniqueInput], { nullable: true })
  disconnect?: PermissionWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionWhereUniqueInput], { nullable: true })
  delete?: PermissionWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionWhereUniqueInput], { nullable: true })
  connect?: PermissionWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionUpdateWithWhereUniqueWithoutRoleInput], { nullable: true })
  update?: PermissionUpdateWithWhereUniqueWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionUpdateManyWithWhereWithoutRoleInput], { nullable: true })
  updateMany?: PermissionUpdateManyWithWhereWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionScalarWhereInput], { nullable: true })
  deleteMany?: PermissionScalarWhereInput[] | undefined;
}
