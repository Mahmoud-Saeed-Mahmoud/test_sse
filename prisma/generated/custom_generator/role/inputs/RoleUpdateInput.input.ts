import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { EnumRoleTypesFieldUpdateOperationsInput } from "../../common/inputs/EnumRoleTypesFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { PermissionUpdateManyWithoutRoleNestedInput } from "../../permission/inputs/PermissionUpdateManyWithoutRoleNestedInput.input";
import { UserUpdateManyWithoutRoleNestedInput } from "../../user/inputs/UserUpdateManyWithoutRoleNestedInput.input";

@NestJsGraphQL.InputType('RoleUpdateInput', { isAbstract: true })
export class RoleUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => EnumRoleTypesFieldUpdateOperationsInput, { nullable: true })
  roleType?: EnumRoleTypesFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => PermissionUpdateManyWithoutRoleNestedInput, { nullable: true })
  permissions?: PermissionUpdateManyWithoutRoleNestedInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateManyWithoutRoleNestedInput, { nullable: true })
  User?: UserUpdateManyWithoutRoleNestedInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
