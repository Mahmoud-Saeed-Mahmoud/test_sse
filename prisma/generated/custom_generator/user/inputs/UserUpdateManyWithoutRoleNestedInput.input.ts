import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateManyRoleInputEnvelope } from "../../user/inputs/UserCreateManyRoleInputEnvelope.input";
import { UserCreateOrConnectWithoutRoleInput } from "../../user/inputs/UserCreateOrConnectWithoutRoleInput.input";
import { UserCreateWithoutRoleInput } from "../../user/inputs/UserCreateWithoutRoleInput.input";
import { UserScalarWhereInput } from "../../user/inputs/UserScalarWhereInput.input";
import { UserUpdateManyWithWhereWithoutRoleInput } from "../../user/inputs/UserUpdateManyWithWhereWithoutRoleInput.input";
import { UserUpdateWithWhereUniqueWithoutRoleInput } from "../../user/inputs/UserUpdateWithWhereUniqueWithoutRoleInput.input";
import { UserUpsertWithWhereUniqueWithoutRoleInput } from "../../user/inputs/UserUpsertWithWhereUniqueWithoutRoleInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserUpdateManyWithoutRoleNestedInput', { isAbstract: true })
export class UserUpdateManyWithoutRoleNestedInput {
  @NestJsGraphQL.Field(() => [UserCreateWithoutRoleInput], { nullable: true })
  create?: UserCreateWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserCreateOrConnectWithoutRoleInput], { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserUpsertWithWhereUniqueWithoutRoleInput], { nullable: true })
  upsert?: UserUpsertWithWhereUniqueWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => UserCreateManyRoleInputEnvelope, { nullable: true })
  createMany?: UserCreateManyRoleInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [UserWhereUniqueInput], { nullable: true })
  set?: UserWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserWhereUniqueInput], { nullable: true })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserWhereUniqueInput], { nullable: true })
  delete?: UserWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserWhereUniqueInput], { nullable: true })
  connect?: UserWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserUpdateWithWhereUniqueWithoutRoleInput], { nullable: true })
  update?: UserUpdateWithWhereUniqueWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserUpdateManyWithWhereWithoutRoleInput], { nullable: true })
  updateMany?: UserUpdateManyWithWhereWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserScalarWhereInput], { nullable: true })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
