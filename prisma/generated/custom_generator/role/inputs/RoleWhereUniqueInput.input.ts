import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('RoleWhereUniqueInput', { isAbstract: true })
export class RoleWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
