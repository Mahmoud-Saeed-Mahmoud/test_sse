import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PermissionCountAggregate', { isAbstract: true })
export class PermissionCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  modelName!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  allowedOperations!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  rolePermissionsId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  createdAt!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  updatedAt!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
