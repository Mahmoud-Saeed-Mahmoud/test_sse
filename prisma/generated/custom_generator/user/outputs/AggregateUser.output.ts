import * as NestJsGraphQL from "@nestjs/graphql";
import { UserAvgAggregate } from "./UserAvgAggregate.output";
import { UserCountAggregate } from "./UserCountAggregate.output";
import { UserMaxAggregate } from "./UserMaxAggregate.output";
import { UserMinAggregate } from "./UserMinAggregate.output";
import { UserSumAggregate } from "./UserSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregateUser', { isAbstract: true })
export class AggregateUser {
  @NestJsGraphQL.Field(() => UserCountAggregate, { nullable: true })
  _count!: UserCountAggregate | null;

  @NestJsGraphQL.Field(() => UserAvgAggregate, { nullable: true })
  _avg!: UserAvgAggregate | null;

  @NestJsGraphQL.Field(() => UserSumAggregate, { nullable: true })
  _sum!: UserSumAggregate | null;

  @NestJsGraphQL.Field(() => UserMinAggregate, { nullable: true })
  _min!: UserMinAggregate | null;

  @NestJsGraphQL.Field(() => UserMaxAggregate, { nullable: true })
  _max!: UserMaxAggregate | null;
}
