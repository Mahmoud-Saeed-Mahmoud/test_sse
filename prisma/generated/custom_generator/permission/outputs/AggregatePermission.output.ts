import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionAvgAggregate } from "./PermissionAvgAggregate.output";
import { PermissionCountAggregate } from "./PermissionCountAggregate.output";
import { PermissionMaxAggregate } from "./PermissionMaxAggregate.output";
import { PermissionMinAggregate } from "./PermissionMinAggregate.output";
import { PermissionSumAggregate } from "./PermissionSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregatePermission', { isAbstract: true })
export class AggregatePermission {
  @NestJsGraphQL.Field(() => PermissionCountAggregate, { nullable: true })
  _count!: PermissionCountAggregate | null;

  @NestJsGraphQL.Field(() => PermissionAvgAggregate, { nullable: true })
  _avg!: PermissionAvgAggregate | null;

  @NestJsGraphQL.Field(() => PermissionSumAggregate, { nullable: true })
  _sum!: PermissionSumAggregate | null;

  @NestJsGraphQL.Field(() => PermissionMinAggregate, { nullable: true })
  _min!: PermissionMinAggregate | null;

  @NestJsGraphQL.Field(() => PermissionMaxAggregate, { nullable: true })
  _max!: PermissionMaxAggregate | null;
}
