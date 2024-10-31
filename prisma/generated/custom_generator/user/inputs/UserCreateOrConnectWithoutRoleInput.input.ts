import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutRoleInput } from "../../user/inputs/UserCreateWithoutRoleInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateOrConnectWithoutRoleInput', { isAbstract: true })
export class UserCreateOrConnectWithoutRoleInput {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutRoleInput)
  create!: UserCreateWithoutRoleInput;
}
