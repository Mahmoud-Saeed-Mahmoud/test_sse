import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleCreateOrConnectWithoutUserInput } from "../../role/inputs/RoleCreateOrConnectWithoutUserInput.input";
import { RoleCreateWithoutUserInput } from "../../role/inputs/RoleCreateWithoutUserInput.input";
import { RoleUpdateWithoutUserInput } from "../../role/inputs/RoleUpdateWithoutUserInput.input";
import { RoleUpsertWithoutUserInput } from "../../role/inputs/RoleUpsertWithoutUserInput.input";
import { RoleWhereUniqueInput } from "../../role/inputs/RoleWhereUniqueInput.input";

@NestJsGraphQL.InputType('RoleUpdateOneRequiredWithoutUserNestedInput', { isAbstract: true })
export class RoleUpdateOneRequiredWithoutUserNestedInput {
  @NestJsGraphQL.Field(() => RoleCreateWithoutUserInput, { nullable: true })
  create?: RoleCreateWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => RoleCreateOrConnectWithoutUserInput, { nullable: true })
  connectOrCreate?: RoleCreateOrConnectWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => RoleUpsertWithoutUserInput, { nullable: true })
  upsert?: RoleUpsertWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => RoleWhereUniqueInput, { nullable: true })
  connect?: RoleWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => RoleUpdateWithoutUserInput, { nullable: true })
  update?: RoleUpdateWithoutUserInput | undefined;
}
