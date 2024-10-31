import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { PermissionAvgOrderByAggregateInput } from "../../permission/inputs/PermissionAvgOrderByAggregateInput.input";
import { PermissionCountOrderByAggregateInput } from "../../permission/inputs/PermissionCountOrderByAggregateInput.input";
import { PermissionMaxOrderByAggregateInput } from "../../permission/inputs/PermissionMaxOrderByAggregateInput.input";
import { PermissionMinOrderByAggregateInput } from "../../permission/inputs/PermissionMinOrderByAggregateInput.input";
import { PermissionSumOrderByAggregateInput } from "../../permission/inputs/PermissionSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('PermissionOrderByWithAggregationInput', { isAbstract: true })
export class PermissionOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  modelName?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  allowedOperations?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  rolePermissionsId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PermissionCountOrderByAggregateInput, { nullable: true })
  _count?: PermissionCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PermissionAvgOrderByAggregateInput, { nullable: true })
  _avg?: PermissionAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PermissionMaxOrderByAggregateInput, { nullable: true })
  _max?: PermissionMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PermissionMinOrderByAggregateInput, { nullable: true })
  _min?: PermissionMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PermissionSumOrderByAggregateInput, { nullable: true })
  _sum?: PermissionSumOrderByAggregateInput | undefined;
}
