import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionWhereInput } from "../../permission/inputs/PermissionWhereInput.input";

@NestJsGraphQL.InputType('PermissionListRelationFilter', { isAbstract: true })
export class PermissionListRelationFilter {
  @NestJsGraphQL.Field(() => PermissionWhereInput, { nullable: true })
  every?: PermissionWhereInput | undefined;

  @NestJsGraphQL.Field(() => PermissionWhereInput, { nullable: true })
  some?: PermissionWhereInput | undefined;

  @NestJsGraphQL.Field(() => PermissionWhereInput, { nullable: true })
  none?: PermissionWhereInput | undefined;
}
