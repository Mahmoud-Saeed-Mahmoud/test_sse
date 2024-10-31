import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../enums/RoleTypes.enum";
import { Permission } from "../models/permission.model";
import { User } from "../models/user.model";
import { RoleCount } from "../role/outputs/RoleCount.output";

@NestJsGraphQL.ObjectType('Role', { isAbstract: true })
export class Role {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => RoleTypes)
  roleType!: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER";

  permissions?: Permission[];

  User?: User[];

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => RoleCount, { nullable: true })
  _count?: RoleCount | null;
}
