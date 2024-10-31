import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../../enums/RoleTypes.enum";

@NestJsGraphQL.InputType('EnumRoleTypesFieldUpdateOperationsInput', { isAbstract: true })
export class EnumRoleTypesFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => RoleTypes, { nullable: true })
  set?: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER" | undefined;
}
