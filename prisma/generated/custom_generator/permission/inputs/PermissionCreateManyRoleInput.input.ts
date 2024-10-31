import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionCreateallowedOperationsInput } from "../../permission/inputs/PermissionCreateallowedOperationsInput.input";

@NestJsGraphQL.InputType('PermissionCreateManyRoleInput', { isAbstract: true })
export class PermissionCreateManyRoleInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  modelName!: string;

  @NestJsGraphQL.Field(() => PermissionCreateallowedOperationsInput, { nullable: true })
  allowedOperations?: PermissionCreateallowedOperationsInput | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
