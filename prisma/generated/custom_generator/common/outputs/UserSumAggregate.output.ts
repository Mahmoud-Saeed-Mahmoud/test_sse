import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('UserSumAggregate', { isAbstract: true })
export class UserSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  userRoleId!: number | null;
}
