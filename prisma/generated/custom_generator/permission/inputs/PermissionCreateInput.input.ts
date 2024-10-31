import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionCreateallowedOperationsInput } from "../../permission/inputs/PermissionCreateallowedOperationsInput.input";
import { RoleCreateNestedOneWithoutPermissionsInput } from "../../role/inputs/RoleCreateNestedOneWithoutPermissionsInput.input";

@NestJsGraphQL.InputType('PermissionCreateInput', { isAbstract: true })
export class PermissionCreateInput {
  @NestJsGraphQL.Field(() => String)
  modelName!: string;

  @NestJsGraphQL.Field(() => PermissionCreateallowedOperationsInput, { nullable: true })
  allowedOperations?: PermissionCreateallowedOperationsInput | undefined;

  @NestJsGraphQL.Field(() => RoleCreateNestedOneWithoutPermissionsInput)
  role!: RoleCreateNestedOneWithoutPermissionsInput;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
