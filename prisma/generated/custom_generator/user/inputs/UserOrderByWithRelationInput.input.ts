import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { RoleOrderByWithRelationInput } from "../../role/inputs/RoleOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('UserOrderByWithRelationInput', { isAbstract: true })
export class UserOrderByWithRelationInput {
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

  @NestJsGraphQL.Field(() => RoleOrderByWithRelationInput, { nullable: true })
  role?: RoleOrderByWithRelationInput | undefined;

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
}
