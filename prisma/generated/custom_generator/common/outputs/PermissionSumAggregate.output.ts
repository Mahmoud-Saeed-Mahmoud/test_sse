import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PermissionSumAggregate', { isAbstract: true })
export class PermissionSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  rolePermissionsId!: number | null;
}
