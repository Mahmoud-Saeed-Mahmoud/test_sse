import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { UserAvgOrderByAggregateInput } from "../../user/inputs/UserAvgOrderByAggregateInput.input";
import { UserCountOrderByAggregateInput } from "../../user/inputs/UserCountOrderByAggregateInput.input";
import { UserMaxOrderByAggregateInput } from "../../user/inputs/UserMaxOrderByAggregateInput.input";
import { UserMinOrderByAggregateInput } from "../../user/inputs/UserMinOrderByAggregateInput.input";
import { UserSumOrderByAggregateInput } from "../../user/inputs/UserSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('UserOrderByWithAggregationInput', { isAbstract: true })
export class UserOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  email?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  password?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  userRoleId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  userStatus?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  roleType?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  phoneNumber?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => UserCountOrderByAggregateInput, { nullable: true })
  _count?: UserCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => UserAvgOrderByAggregateInput, { nullable: true })
  _avg?: UserAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => UserMaxOrderByAggregateInput, { nullable: true })
  _max?: UserMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => UserMinOrderByAggregateInput, { nullable: true })
  _min?: UserMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => UserSumOrderByAggregateInput, { nullable: true })
  _sum?: UserSumOrderByAggregateInput | undefined;
}
