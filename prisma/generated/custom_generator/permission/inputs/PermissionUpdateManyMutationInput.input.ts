import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { PermissionUpdateallowedOperationsInput } from "../../permission/inputs/PermissionUpdateallowedOperationsInput.input";

@NestJsGraphQL.InputType('PermissionUpdateManyMutationInput', { isAbstract: true })
export class PermissionUpdateManyMutationInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  modelName?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => PermissionUpdateallowedOperationsInput, { nullable: true })
  allowedOperations?: PermissionUpdateallowedOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
