import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleWhereInput } from "../../role/inputs/RoleWhereInput.input";

@NestJsGraphQL.InputType('RoleRelationFilter', { isAbstract: true })
export class RoleRelationFilter {
  @NestJsGraphQL.Field(() => RoleWhereInput, { nullable: true })
  is?: RoleWhereInput | undefined;

  @NestJsGraphQL.Field(() => RoleWhereInput, { nullable: true })
  isNot?: RoleWhereInput | undefined;
}
