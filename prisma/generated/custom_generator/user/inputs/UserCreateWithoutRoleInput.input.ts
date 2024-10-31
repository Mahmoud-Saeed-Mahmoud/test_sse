import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../../enums/RoleTypes.enum";

@NestJsGraphQL.InputType('UserCreateWithoutRoleInput', { isAbstract: true })
export class UserCreateWithoutRoleInput {
  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  password!: string;

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
