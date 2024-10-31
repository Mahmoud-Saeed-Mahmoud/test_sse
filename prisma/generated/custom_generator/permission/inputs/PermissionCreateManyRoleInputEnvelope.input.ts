import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionCreateManyRoleInput } from "../../permission/inputs/PermissionCreateManyRoleInput.input";

@NestJsGraphQL.InputType('PermissionCreateManyRoleInputEnvelope', { isAbstract: true })
export class PermissionCreateManyRoleInputEnvelope {
  @NestJsGraphQL.Field(() => [PermissionCreateManyRoleInput])
  data!: PermissionCreateManyRoleInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
