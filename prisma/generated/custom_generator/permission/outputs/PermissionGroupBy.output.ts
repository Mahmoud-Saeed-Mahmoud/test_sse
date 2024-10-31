import * as NestJsGraphQL from "@nestjs/graphql";
import { Operation } from "../../enums/Operation.enum";
import { PermissionAvgAggregate } from "./PermissionAvgAggregate.output";
import { PermissionCountAggregate } from "./PermissionCountAggregate.output";
import { PermissionMaxAggregate } from "./PermissionMaxAggregate.output";
import { PermissionMinAggregate } from "./PermissionMinAggregate.output";
import { PermissionSumAggregate } from "./PermissionSumAggregate.output";

@NestJsGraphQL.ObjectType('PermissionGroupBy', { isAbstract: true })
export class PermissionGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  modelName!: string;

  @NestJsGraphQL.Field(() => [Operation], { nullable: true })
  allowedOperations!: Array<"list" | "get" | "create" | "update" | "delete" | "search" | "onCreate" | "onUpdate" | "onDelete"> | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  rolePermissionsId!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

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
