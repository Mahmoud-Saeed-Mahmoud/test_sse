import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutRoleInput } from "../../user/inputs/UserCreateWithoutRoleInput.input";
import { UserUpdateWithoutRoleInput } from "../../user/inputs/UserUpdateWithoutRoleInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserUpsertWithWhereUniqueWithoutRoleInput', { isAbstract: true })
export class UserUpsertWithWhereUniqueWithoutRoleInput {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @NestJsGraphQL.Field(() => UserUpdateWithoutRoleInput)
  update!: UserUpdateWithoutRoleInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutRoleInput)
  create!: UserCreateWithoutRoleInput;
}
