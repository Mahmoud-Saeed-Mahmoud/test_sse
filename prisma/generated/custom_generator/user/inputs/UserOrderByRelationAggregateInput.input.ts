import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";

@NestJsGraphQL.InputType('UserOrderByRelationAggregateInput', { isAbstract: true })
export class UserOrderByRelationAggregateInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  _count?: "asc" | "desc" | undefined;
}
