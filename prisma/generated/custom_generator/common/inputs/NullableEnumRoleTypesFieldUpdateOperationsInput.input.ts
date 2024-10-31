import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleTypes } from "../../enums/RoleTypes.enum";

@NestJsGraphQL.InputType('NullableEnumRoleTypesFieldUpdateOperationsInput', { isAbstract: true })
export class NullableEnumRoleTypesFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => RoleTypes, { nullable: true })
  set?: "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "AUTHOR" | "READER" | undefined;
}
