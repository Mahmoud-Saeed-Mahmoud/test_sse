import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../../enums/RoleTypes.enum";

@NestJsGraphQL.ObjectType('UserMaxAggregate', { isAbstract: true })
export class UserMaxAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  email!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  name!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  password!: string | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  userRoleId!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  userStatus!: string | null;

  @NestJsGraphQL.Field(() => RoleTypes, { nullable: true })
  roleType!: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER" | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  phoneNumber!: string | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt!: Date | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt!: Date | null;
}
