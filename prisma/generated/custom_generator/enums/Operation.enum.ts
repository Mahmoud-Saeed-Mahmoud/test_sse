import * as NestJsGraphQL from "@nestjs/graphql";

export enum Operation {
  list = "list",
  get = "get",
  create = "create",
  update = "update",
  "delete" = "delete",
  search = "search",
  onCreate = "onCreate",
  onUpdate = "onUpdate",
  onDelete = "onDelete"
}
NestJsGraphQL.registerEnumType(Operation, {
  name: "Operation",
  description: undefined,
});
