import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionCreateallowedOperationsInput } from "../../permission/inputs/PermissionCreateallowedOperationsInput.input";

@NestJsGraphQL.InputType('PermissionCreateWithoutRoleInput', { isAbstract: true })
export class PermissionCreateWithoutRoleInput {
  @NestJsGraphQL.Field(() => String)
  modelName!: string;

  @NestJsGraphQL.Field(() => PermissionCreateallowedOperationsInput, { nullable: true })
  allowedOperations?: PermissionCreateallowedOperationsInput | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
