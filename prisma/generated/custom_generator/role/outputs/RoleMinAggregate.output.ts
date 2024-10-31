import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../../enums/RoleTypes.enum";

@NestJsGraphQL.ObjectType('RoleMinAggregate', { isAbstract: true })
export class RoleMinAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  name!: string | null;

  @NestJsGraphQL.Field(() => RoleTypes, { nullable: true })
  roleType!: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER" | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt!: Date | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt!: Date | null;
}
