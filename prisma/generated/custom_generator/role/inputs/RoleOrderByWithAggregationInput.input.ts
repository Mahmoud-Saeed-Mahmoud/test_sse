import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { RoleAvgOrderByAggregateInput } from "../../role/inputs/RoleAvgOrderByAggregateInput.input";
import { RoleCountOrderByAggregateInput } from "../../role/inputs/RoleCountOrderByAggregateInput.input";
import { RoleMaxOrderByAggregateInput } from "../../role/inputs/RoleMaxOrderByAggregateInput.input";
import { RoleMinOrderByAggregateInput } from "../../role/inputs/RoleMinOrderByAggregateInput.input";
import { RoleSumOrderByAggregateInput } from "../../role/inputs/RoleSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('RoleOrderByWithAggregationInput', { isAbstract: true })
export class RoleOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  roleType?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => RoleCountOrderByAggregateInput, { nullable: true })
  _count?: RoleCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => RoleAvgOrderByAggregateInput, { nullable: true })
  _avg?: RoleAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => RoleMaxOrderByAggregateInput, { nullable: true })
  _max?: RoleMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => RoleMinOrderByAggregateInput, { nullable: true })
  _min?: RoleMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => RoleSumOrderByAggregateInput, { nullable: true })
  _sum?: RoleSumOrderByAggregateInput | undefined;
}
