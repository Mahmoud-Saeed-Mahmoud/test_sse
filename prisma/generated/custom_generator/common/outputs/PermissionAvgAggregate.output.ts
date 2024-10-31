import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PermissionAvgAggregate', { isAbstract: true })
export class PermissionAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  rolePermissionsId!: number | null;
}
