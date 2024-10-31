import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('UserCountAggregate', { isAbstract: true })
export class UserCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  email!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  name!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  password!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  userRoleId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  userStatus!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  roleType!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  phoneNumber!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  createdAt!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  updatedAt!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
