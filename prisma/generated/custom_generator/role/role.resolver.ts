import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Role } from '../models/role.model'
import { AggregateRole } from './outputs/AggregateRole.output'
import { RoleGroupBy } from './outputs/RoleGroupBy.output'
import {
  AggregateRoleArgs,
  CreateManyRoleArgs,
  CreateOneRoleArgs,
  DeleteManyRoleArgs,
  DeleteOneRoleArgs,
  FindFirstRoleArgs,
  FindManyRoleArgs,
  FindUniqueRoleArgs,
  GroupByRoleArgs,
  UpdateManyRoleArgs,
  UpdateOneRoleArgs,
  UpsertOneRoleArgs
} from './role.args'
import { RoleService } from './role.service'

@NestJsGraphql.Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) { }

  @NestJsGraphql.Query(() => Role, { nullable: false })
  findFirstRole(@NestJsGraphql.Args() args: FindFirstRoleArgs) {
    return this.roleService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Role, { nullable: false })
  findUniqueRole(@NestJsGraphql.Args() args: FindUniqueRoleArgs) {
    return this.roleService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Role], { nullable: false })
  findManyRole(@NestJsGraphql.Args() args: FindManyRoleArgs) {
    return this.roleService.findMany(args)
  }

  @NestJsGraphql.Query(() => [RoleGroupBy], { nullable: false })
  groupByRole(@NestJsGraphql.Args() args: GroupByRoleArgs) {
    return this.roleService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateRole, { nullable: false })
  aggregateRole(@NestJsGraphql.Args() args: AggregateRoleArgs) {
    return this.roleService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Role, { nullable: true })
  createRole(@NestJsGraphql.Args() args: CreateOneRoleArgs) {
    return this.roleService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyRole(@NestJsGraphql.Args() args: CreateManyRoleArgs) {
    return this.roleService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Role, { nullable: true })
  updateRole(@NestJsGraphql.Args() args: UpdateOneRoleArgs) {
    return this.roleService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyRole(@NestJsGraphql.Args() args: UpdateManyRoleArgs) {
    return this.roleService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Role, { nullable: true })
  upsertRole(@NestJsGraphql.Args() args: UpsertOneRoleArgs) {
    return this.roleService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Role, { nullable: true })
  deleteRole(@NestJsGraphql.Args() args: DeleteOneRoleArgs) {
    return this.roleService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyRole(@NestJsGraphql.Args() args: DeleteManyRoleArgs) {
    return this.roleService.deleteMany(args)
  }
}

