import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('UserAvgAggregate', { isAbstract: true })
export class UserAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  userRoleId!: number | null;
}
