import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PermissionMaxAggregate', { isAbstract: true })
export class PermissionMaxAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  modelName!: string | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  rolePermissionsId!: number | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt!: Date | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt!: Date | null;
}
