import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { EnumRoleTypesFieldUpdateOperationsInput } from "../../common/inputs/EnumRoleTypesFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { PermissionUpdateManyWithoutRoleNestedInput } from "../../permission/inputs/PermissionUpdateManyWithoutRoleNestedInput.input";

@NestJsGraphQL.InputType('RoleUpdateWithoutUserInput', { isAbstract: true })
export class RoleUpdateWithoutUserInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => EnumRoleTypesFieldUpdateOperationsInput, { nullable: true })
  roleType?: EnumRoleTypesFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => PermissionUpdateManyWithoutRoleNestedInput, { nullable: true })
  permissions?: PermissionUpdateManyWithoutRoleNestedInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
