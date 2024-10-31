import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { PermissionOrderByRelationAggregateInput } from "../../permission/inputs/PermissionOrderByRelationAggregateInput.input";
import { UserOrderByRelationAggregateInput } from "../../user/inputs/UserOrderByRelationAggregateInput.input";

@NestJsGraphQL.InputType('RoleOrderByWithRelationInput', { isAbstract: true })
export class RoleOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  roleType?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PermissionOrderByRelationAggregateInput, { nullable: true })
  permissions?: PermissionOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  User?: UserOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;
}
