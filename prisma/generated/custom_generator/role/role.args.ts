import * as NestJsGraphQL from "@nestjs/graphql";
import { RoleScalarFieldEnum } from "../common/enums";
import { RoleCreateInput } from "../role/inputs/RoleCreateInput.input";
import { RoleCreateManyInput } from "../role/inputs/RoleCreateManyInput.input";
import { RoleOrderByWithAggregationInput } from "../role/inputs/RoleOrderByWithAggregationInput.input";
import { RoleOrderByWithRelationInput } from "../role/inputs/RoleOrderByWithRelationInput.input";
import { RoleScalarWhereWithAggregatesInput } from "../role/inputs/RoleScalarWhereWithAggregatesInput.input";
import { RoleUpdateInput } from "../role/inputs/RoleUpdateInput.input";
import { RoleUpdateManyMutationInput } from "../role/inputs/RoleUpdateManyMutationInput.input";
import { RoleWhereInput } from "../role/inputs/RoleWhereInput.input";
import { RoleWhereUniqueInput } from "../role/inputs/RoleWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateRoleArgs {
  @NestJsGraphQL.Field(() => RoleWhereInput, { nullable: true })
  where?: RoleWhereInput | undefined;

  @NestJsGraphQL.Field(() => [RoleOrderByWithRelationInput], { nullable: true })
  orderBy?: RoleOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => RoleWhereUniqueInput, { nullable: true })
  cursor?: RoleWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyRoleArgs {
  @NestJsGraphQL.Field(() => [RoleCreateManyInput])
  data!: RoleCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneRoleArgs {
  @NestJsGraphQL.Field(() => RoleCreateInput)
  data!: RoleCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyRoleArgs {
  @NestJsGraphQL.Field(() => RoleWhereInput, { nullable: true })
  where?: RoleWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneRoleArgs {
  @NestJsGraphQL.Field(() => RoleWhereUniqueInput)
  where!: RoleWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstRoleArgs {
  @NestJsGraphQL.Field(() => RoleWhereInput, { nullable: true })
  where?: RoleWhereInput | undefined;

  @NestJsGraphQL.Field(() => [RoleOrderByWithRelationInput], { nullable: true })
  orderBy?: RoleOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => RoleWhereUniqueInput, { nullable: true })
  cursor?: RoleWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [RoleScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "roleType" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyRoleArgs {
  @NestJsGraphQL.Field(() => RoleWhereInput, { nullable: true })
  where?: RoleWhereInput | undefined;

  @NestJsGraphQL.Field(() => [RoleOrderByWithRelationInput], { nullable: true })
  orderBy?: RoleOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => RoleWhereUniqueInput, { nullable: true })
  cursor?: RoleWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [RoleScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "roleType" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueRoleArgs {
  @NestJsGraphQL.Field(() => RoleWhereUniqueInput)
  where!: RoleWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByRoleArgs {
  @NestJsGraphQL.Field(() => RoleWhereInput, { nullable: true })
  where?: RoleWhereInput | undefined;

  @NestJsGraphQL.Field(() => [RoleOrderByWithAggregationInput], { nullable: true })
  orderBy?: RoleOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [RoleScalarFieldEnum])
  by!: Array<"id" | "name" | "roleType" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => RoleScalarWhereWithAggregatesInput, { nullable: true })
  having?: RoleScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyRoleArgs {
  @NestJsGraphQL.Field(() => RoleUpdateManyMutationInput)
  data!: RoleUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => RoleWhereInput, { nullable: true })
  where?: RoleWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneRoleArgs {
  @NestJsGraphQL.Field(() => RoleUpdateInput)
  data!: RoleUpdateInput;

  @NestJsGraphQL.Field(() => RoleWhereUniqueInput)
  where!: RoleWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneRoleArgs {
  @NestJsGraphQL.Field(() => RoleWhereUniqueInput)
  where!: RoleWhereUniqueInput;

  @NestJsGraphQL.Field(() => RoleCreateInput)
  create!: RoleCreateInput;

  @NestJsGraphQL.Field(() => RoleUpdateInput)
  update!: RoleUpdateInput;
}
