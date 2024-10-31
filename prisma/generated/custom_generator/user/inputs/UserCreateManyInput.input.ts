import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../../enums/RoleTypes.enum";

@NestJsGraphQL.InputType('UserCreateManyInput', { isAbstract: true })
export class UserCreateManyInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  password!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  userRoleId!: number;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  userStatus?: string | undefined;

  @NestJsGraphQL.Field(() => RoleTypes, { nullable: true })
  roleType?: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER" | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  phoneNumber?: string | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
