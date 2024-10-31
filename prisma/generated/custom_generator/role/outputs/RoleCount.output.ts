import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('RoleCount', { isAbstract: true })
export class RoleCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  permissions!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  User!: number;
}
