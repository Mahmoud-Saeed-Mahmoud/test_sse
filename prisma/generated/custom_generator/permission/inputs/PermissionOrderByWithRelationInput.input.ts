import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { RoleOrderByWithRelationInput } from "../../role/inputs/RoleOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('PermissionOrderByWithRelationInput', { isAbstract: true })
export class PermissionOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  modelName?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  allowedOperations?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  rolePermissionsId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => RoleOrderByWithRelationInput, { nullable: true })
  role?: RoleOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;
}
