import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../enums/RoleTypes.enum";
import { Role } from "../models/role.model";

@NestJsGraphQL.ObjectType('User', { isAbstract: true })
export class User {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  password!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  userRoleId!: number;

  role?: Role;

  @NestJsGraphQL.Field(() => String)
  userStatus!: string;

  @NestJsGraphQL.Field(() => RoleTypes, { nullable: true })
  roleType?: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER" | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  phoneNumber?: string | null;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;
}
