import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateManyRoleInput } from "../../user/inputs/UserCreateManyRoleInput.input";

@NestJsGraphQL.InputType('UserCreateManyRoleInputEnvelope', { isAbstract: true })
export class UserCreateManyRoleInputEnvelope {
  @NestJsGraphQL.Field(() => [UserCreateManyRoleInput])
  data!: UserCreateManyRoleInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
