import * as NestJsGraphQL from "@nestjs/graphql";
import { Operation } from "../enums/Operation.enum";
import { Role } from "../models/role.model";

@NestJsGraphQL.ObjectType('Permission', { isAbstract: true })
export class Permission {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  modelName!: string;

  @NestJsGraphQL.Field(() => [Operation])
  allowedOperations!: Array<"list" | "get" | "create" | "update" | "delete" | "search" | "onCreate" | "onUpdate" | "onDelete">;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  rolePermissionsId!: number;

  role?: Role;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;
}
