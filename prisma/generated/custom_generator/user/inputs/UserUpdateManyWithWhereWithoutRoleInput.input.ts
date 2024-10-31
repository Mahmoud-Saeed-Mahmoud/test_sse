import * as NestJsGraphQL from "@nestjs/graphql";
import { UserScalarWhereInput } from "../../user/inputs/UserScalarWhereInput.input";
import { UserUpdateManyMutationInput } from "../../user/inputs/UserUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('UserUpdateManyWithWhereWithoutRoleInput', { isAbstract: true })
export class UserUpdateManyWithWhereWithoutRoleInput {
  @NestJsGraphQL.Field(() => UserScalarWhereInput)
  where!: UserScalarWhereInput;

  @NestJsGraphQL.Field(() => UserUpdateManyMutationInput)
  data!: UserUpdateManyMutationInput;
}
