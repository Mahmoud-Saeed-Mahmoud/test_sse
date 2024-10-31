import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";

@NestJsGraphQL.InputType('PermissionOrderByRelationAggregateInput', { isAbstract: true })
export class PermissionOrderByRelationAggregateInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  _count?: "asc" | "desc" | undefined;
}
