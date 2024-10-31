import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { NullableEnumRoleTypesFieldUpdateOperationsInput } from "../../common/inputs/NullableEnumRoleTypesFieldUpdateOperationsInput.input";
import { NullableStringFieldUpdateOperationsInput } from "../../common/inputs/NullableStringFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { RoleUpdateOneRequiredWithoutUserNestedInput } from "../../role/inputs/RoleUpdateOneRequiredWithoutUserNestedInput.input";

@NestJsGraphQL.InputType('UserUpdateInput', { isAbstract: true })
export class UserUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => RoleUpdateOneRequiredWithoutUserNestedInput, { nullable: true })
  role?: RoleUpdateOneRequiredWithoutUserNestedInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userStatus?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableEnumRoleTypesFieldUpdateOperationsInput, { nullable: true })
  roleType?: NullableEnumRoleTypesFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
