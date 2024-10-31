import * as NestJsGraphQL from "@nestjs/graphql";
import { Operation } from "../../enums/Operation.enum";

@NestJsGraphQL.InputType('PermissionCreateallowedOperationsInput', { isAbstract: true })
export class PermissionCreateallowedOperationsInput {
  @NestJsGraphQL.Field(() => [Operation])
  set!: Array<"list" | "get" | "create" | "update" | "delete" | "search" | "onCreate" | "onUpdate" | "onDelete">;
}
