import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { EnumRoleTypesFieldUpdateOperationsInput } from "../../common/inputs/EnumRoleTypesFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";

@NestJsGraphQL.InputType('RoleUpdateManyMutationInput', { isAbstract: true })
export class RoleUpdateManyMutationInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => EnumRoleTypesFieldUpdateOperationsInput, { nullable: true })
  roleType?: EnumRoleTypesFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
