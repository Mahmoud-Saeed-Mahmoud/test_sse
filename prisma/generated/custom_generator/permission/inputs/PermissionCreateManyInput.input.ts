import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionCreateallowedOperationsInput } from "../../permission/inputs/PermissionCreateallowedOperationsInput.input";

@NestJsGraphQL.InputType('PermissionCreateManyInput', { isAbstract: true })
export class PermissionCreateManyInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  modelName!: string;

  @NestJsGraphQL.Field(() => PermissionCreateallowedOperationsInput, { nullable: true })
  allowedOperations?: PermissionCreateallowedOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  rolePermissionsId!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
