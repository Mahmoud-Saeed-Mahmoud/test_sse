import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { EnumRoleTypesWithAggregatesFilter } from "../../common/inputs/EnumRoleTypesWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('RoleScalarWhereWithAggregatesInput', { isAbstract: true })
export class RoleScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [RoleScalarWhereWithAggregatesInput], { nullable: true })
  AND?: RoleScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [RoleScalarWhereWithAggregatesInput], { nullable: true })
  OR?: RoleScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [RoleScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: RoleScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => EnumRoleTypesWithAggregatesFilter, { nullable: true })
  roleType?: EnumRoleTypesWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
