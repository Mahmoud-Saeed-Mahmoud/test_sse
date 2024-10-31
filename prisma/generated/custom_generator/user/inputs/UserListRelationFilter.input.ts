import * as NestJsGraphQL from "@nestjs/graphql";
import { UserWhereInput } from "../../user/inputs/UserWhereInput.input";

@NestJsGraphQL.InputType('UserListRelationFilter', { isAbstract: true })
export class UserListRelationFilter {
  @NestJsGraphQL.Field(() => UserWhereInput, { nullable: true })
  every?: UserWhereInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereInput, { nullable: true })
  some?: UserWhereInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereInput, { nullable: true })
  none?: UserWhereInput | undefined;
}
