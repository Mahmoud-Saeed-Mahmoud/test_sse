import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { EnumRoleTypesNullableFilter } from "../../common/inputs/EnumRoleTypesNullableFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { StringNullableFilter } from "../../common/inputs/StringNullableFilter.input";

@NestJsGraphQL.InputType('UserScalarWhereInput', { isAbstract: true })
export class UserScalarWhereInput {
  @NestJsGraphQL.Field(() => [UserScalarWhereInput], { nullable: true })
  AND?: UserScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserScalarWhereInput], { nullable: true })
  OR?: UserScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserScalarWhereInput], { nullable: true })
  NOT?: UserScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  email?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  password?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  userRoleId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  userStatus?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => EnumRoleTypesNullableFilter, { nullable: true })
  roleType?: EnumRoleTypesNullableFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  phoneNumber?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;
}
