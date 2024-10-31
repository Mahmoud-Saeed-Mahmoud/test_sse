import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { EnumRoleTypesNullableWithAggregatesFilter } from "../../common/inputs/EnumRoleTypesNullableWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringNullableWithAggregatesFilter } from "../../common/inputs/StringNullableWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('UserScalarWhereWithAggregatesInput', { isAbstract: true })
export class UserScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: UserScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: UserScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: UserScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  userRoleId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  userStatus?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => EnumRoleTypesNullableWithAggregatesFilter, { nullable: true })
  roleType?: EnumRoleTypesNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  phoneNumber?: StringNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
