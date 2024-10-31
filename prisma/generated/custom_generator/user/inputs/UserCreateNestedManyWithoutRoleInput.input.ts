import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateManyRoleInputEnvelope } from "../../user/inputs/UserCreateManyRoleInputEnvelope.input";
import { UserCreateOrConnectWithoutRoleInput } from "../../user/inputs/UserCreateOrConnectWithoutRoleInput.input";
import { UserCreateWithoutRoleInput } from "../../user/inputs/UserCreateWithoutRoleInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateNestedManyWithoutRoleInput', { isAbstract: true })
export class UserCreateNestedManyWithoutRoleInput {
  @NestJsGraphQL.Field(() => [UserCreateWithoutRoleInput], { nullable: true })
  create?: UserCreateWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserCreateOrConnectWithoutRoleInput], { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutRoleInput[] | undefined;

  @NestJsGraphQL.Field(() => UserCreateManyRoleInputEnvelope, { nullable: true })
  createMany?: UserCreateManyRoleInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [UserWhereUniqueInput], { nullable: true })
  connect?: UserWhereUniqueInput[] | undefined;
}
