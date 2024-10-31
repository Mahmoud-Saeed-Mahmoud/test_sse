import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('UserWhereUniqueInput', { isAbstract: true })
export class UserWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
