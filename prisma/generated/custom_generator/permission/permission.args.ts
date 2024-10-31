import * as NestJsGraphQL from "@nestjs/graphql";
import { PermissionScalarFieldEnum } from "../common/enums";
import { PermissionCreateInput } from "../permission/inputs/PermissionCreateInput.input";
import { PermissionCreateManyInput } from "../permission/inputs/PermissionCreateManyInput.input";
import { PermissionOrderByWithAggregationInput } from "../permission/inputs/PermissionOrderByWithAggregationInput.input";
import { PermissionOrderByWithRelationInput } from "../permission/inputs/PermissionOrderByWithRelationInput.input";
import { PermissionScalarWhereWithAggregatesInput } from "../permission/inputs/PermissionScalarWhereWithAggregatesInput.input";
import { PermissionUpdateInput } from "../permission/inputs/PermissionUpdateInput.input";
import { PermissionUpdateManyMutationInput } from "../permission/inputs/PermissionUpdateManyMutationInput.input";
import { PermissionWhereInput } from "../permission/inputs/PermissionWhereInput.input";
import { PermissionWhereUniqueInput } from "../permission/inputs/PermissionWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregatePermissionArgs {
  @NestJsGraphQL.Field(() => PermissionWhereInput, { nullable: true })
  where?: PermissionWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PermissionOrderByWithRelationInput], { nullable: true })
  orderBy?: PermissionOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => PermissionWhereUniqueInput, { nullable: true })
  cursor?: PermissionWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyPermissionArgs {
  @NestJsGraphQL.Field(() => [PermissionCreateManyInput])
  data!: PermissionCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOnePermissionArgs {
  @NestJsGraphQL.Field(() => PermissionCreateInput)
  data!: PermissionCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyPermissionArgs {
  @NestJsGraphQL.Field(() => PermissionWhereInput, { nullable: true })
  where?: PermissionWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOnePermissionArgs {
  @NestJsGraphQL.Field(() => PermissionWhereUniqueInput)
  where!: PermissionWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstPermissionArgs {
  @NestJsGraphQL.Field(() => PermissionWhereInput, { nullable: true })
  where?: PermissionWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PermissionOrderByWithRelationInput], { nullable: true })
  orderBy?: PermissionOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => PermissionWhereUniqueInput, { nullable: true })
  cursor?: PermissionWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [PermissionScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "modelName" | "allowedOperations" | "rolePermissionsId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyPermissionArgs {
  @NestJsGraphQL.Field(() => PermissionWhereInput, { nullable: true })
  where?: PermissionWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PermissionOrderByWithRelationInput], { nullable: true })
  orderBy?: PermissionOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => PermissionWhereUniqueInput, { nullable: true })
  cursor?: PermissionWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [PermissionScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "modelName" | "allowedOperations" | "rolePermissionsId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniquePermissionArgs {
  @NestJsGraphQL.Field(() => PermissionWhereUniqueInput)
  where!: PermissionWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByPermissionArgs {
  @NestJsGraphQL.Field(() => PermissionWhereInput, { nullable: true })
  where?: PermissionWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PermissionOrderByWithAggregationInput], { nullable: true })
  orderBy?: PermissionOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [PermissionScalarFieldEnum])
  by!: Array<"id" | "modelName" | "allowedOperations" | "rolePermissionsId" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => PermissionScalarWhereWithAggregatesInput, { nullable: true })
  having?: PermissionScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyPermissionArgs {
  @NestJsGraphQL.Field(() => PermissionUpdateManyMutationInput)
  data!: PermissionUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => PermissionWhereInput, { nullable: true })
  where?: PermissionWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOnePermissionArgs {
  @NestJsGraphQL.Field(() => PermissionUpdateInput)
  data!: PermissionUpdateInput;

  @NestJsGraphQL.Field(() => PermissionWhereUniqueInput)
  where!: PermissionWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOnePermissionArgs {
  @NestJsGraphQL.Field(() => PermissionWhereUniqueInput)
  where!: PermissionWhereUniqueInput;

  @NestJsGraphQL.Field(() => PermissionCreateInput)
  create!: PermissionCreateInput;

  @NestJsGraphQL.Field(() => PermissionUpdateInput)
  update!: PermissionUpdateInput;
}
