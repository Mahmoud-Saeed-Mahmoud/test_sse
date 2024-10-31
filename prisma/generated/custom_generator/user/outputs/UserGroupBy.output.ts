import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../../enums/RoleTypes.enum";
import { UserAvgAggregate } from "./UserAvgAggregate.output";
import { UserCountAggregate } from "./UserCountAggregate.output";
import { UserMaxAggregate } from "./UserMaxAggregate.output";
import { UserMinAggregate } from "./UserMinAggregate.output";
import { UserSumAggregate } from "./UserSumAggregate.output";

@NestJsGraphQL.ObjectType('UserGroupBy', { isAbstract: true })
export class UserGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  password!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  userRoleId!: number;

  @NestJsGraphQL.Field(() => String)
  userStatus!: string;

  @NestJsGraphQL.Field(() => RoleTypes, { nullable: true })
  roleType!: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER" | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  phoneNumber!: string | null;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

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
