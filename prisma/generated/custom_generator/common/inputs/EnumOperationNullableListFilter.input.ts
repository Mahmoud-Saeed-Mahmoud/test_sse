import * as NestJsGraphQL from "@nestjs/graphql";
import { Operation } from "../../enums/Operation.enum";

@NestJsGraphQL.InputType('EnumOperationNullableListFilter', { isAbstract: true })
export class EnumOperationNullableListFilter {
  @NestJsGraphQL.Field(() => [Operation], { nullable: true })
  equals?: Array<"list" | "get" | "create" | "update" | "delete" | "search" | "onCreate" | "onUpdate" | "onDelete"> | undefined;

  @NestJsGraphQL.Field(() => Operation, { nullable: true })
  has?: "list" | "get" | "create" | "update" | "delete" | "search" | "onCreate" | "onUpdate" | "onDelete" | undefined;

  @NestJsGraphQL.Field(() => [Operation], { nullable: true })
  hasEvery?: Array<"list" | "get" | "create" | "update" | "delete" | "search" | "onCreate" | "onUpdate" | "onDelete"> | undefined;

  @NestJsGraphQL.Field(() => [Operation], { nullable: true })
  hasSome?: Array<"list" | "get" | "create" | "update" | "delete" | "search" | "onCreate" | "onUpdate" | "onDelete"> | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  isEmpty?: boolean | undefined;
}
