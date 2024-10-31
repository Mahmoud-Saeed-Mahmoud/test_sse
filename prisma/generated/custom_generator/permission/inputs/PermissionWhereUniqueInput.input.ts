import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('PermissionWhereUniqueInput', { isAbstract: true })
export class PermissionWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
