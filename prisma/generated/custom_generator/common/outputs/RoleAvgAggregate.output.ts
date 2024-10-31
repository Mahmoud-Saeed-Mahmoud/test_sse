import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('RoleAvgAggregate', { isAbstract: true })
export class RoleAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;
}
