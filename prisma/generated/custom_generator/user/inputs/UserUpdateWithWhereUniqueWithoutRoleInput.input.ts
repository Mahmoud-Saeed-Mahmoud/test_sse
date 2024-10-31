import * as NestJsGraphQL from "@nestjs/graphql";
import { UserUpdateWithoutRoleInput } from "../../user/inputs/UserUpdateWithoutRoleInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserUpdateWithWhereUniqueWithoutRoleInput', { isAbstract: true })
export class UserUpdateWithWhereUniqueWithoutRoleInput {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @NestJsGraphQL.Field(() => UserUpdateWithoutRoleInput)
  data!: UserUpdateWithoutRoleInput;
}
