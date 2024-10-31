import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('RoleSumAggregate', { isAbstract: true })
export class RoleSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;
}
