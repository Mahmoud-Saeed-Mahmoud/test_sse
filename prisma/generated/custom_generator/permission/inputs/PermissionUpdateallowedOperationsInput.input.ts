import * as NestJsGraphQL from "@nestjs/graphql";
import { Operation } from "../../enums/Operation.enum";

@NestJsGraphQL.InputType('PermissionUpdateallowedOperationsInput', { isAbstract: true })
export class PermissionUpdateallowedOperationsInput {
  @NestJsGraphQL.Field(() => [Operation], { nullable: true })
  set?: Array<"list" | "get" | "create" | "update" | "delete" | "search" | "onCreate" | "onUpdate" | "onDelete"> | undefined;

  @NestJsGraphQL.Field(() => [Operation], { nullable: true })
  push?: Array<"list" | "get" | "create" | "update" | "delete" | "search" | "onCreate" | "onUpdate" | "onDelete"> | undefined;
}
