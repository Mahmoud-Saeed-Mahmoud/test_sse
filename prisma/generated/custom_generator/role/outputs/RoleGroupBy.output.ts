import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../../enums/RoleTypes.enum";
import { RoleAvgAggregate } from "./RoleAvgAggregate.output";
import { RoleCountAggregate } from "./RoleCountAggregate.output";
import { RoleMaxAggregate } from "./RoleMaxAggregate.output";
import { RoleMinAggregate } from "./RoleMinAggregate.output";
import { RoleSumAggregate } from "./RoleSumAggregate.output";

@NestJsGraphQL.ObjectType('RoleGroupBy', { isAbstract: true })
export class RoleGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => RoleTypes)
  roleType!: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER";

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => RoleCountAggregate, { nullable: true })
  _count!: RoleCountAggregate | null;

  @NestJsGraphQL.Field(() => RoleAvgAggregate, { nullable: true })
  _avg!: RoleAvgAggregate | null;

  @NestJsGraphQL.Field(() => RoleSumAggregate, { nullable: true })
  _sum!: RoleSumAggregate | null;

  @NestJsGraphQL.Field(() => RoleMinAggregate, { nullable: true })
  _min!: RoleMinAggregate | null;

  @NestJsGraphQL.Field(() => RoleMaxAggregate, { nullable: true })
  _max!: RoleMaxAggregate | null;
}
