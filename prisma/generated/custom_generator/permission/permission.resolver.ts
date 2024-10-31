import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Permission } from '../models/permission.model'
import { AggregatePermission } from './outputs/AggregatePermission.output'
import { PermissionGroupBy } from './outputs/PermissionGroupBy.output'
import {
  AggregatePermissionArgs,
  CreateManyPermissionArgs,
  CreateOnePermissionArgs,
  DeleteManyPermissionArgs,
  DeleteOnePermissionArgs,
  FindFirstPermissionArgs,
  FindManyPermissionArgs,
  FindUniquePermissionArgs,
  GroupByPermissionArgs,
  UpdateManyPermissionArgs,
  UpdateOnePermissionArgs,
  UpsertOnePermissionArgs
} from './permission.args'
import { PermissionService } from './permission.service'

@NestJsGraphql.Resolver(() => Permission)
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) { }

  @NestJsGraphql.Query(() => Permission, { nullable: false })
  findFirstPermission(@NestJsGraphql.Args() args: FindFirstPermissionArgs) {
    return this.permissionService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Permission, { nullable: false })
  findUniquePermission(@NestJsGraphql.Args() args: FindUniquePermissionArgs) {
    return this.permissionService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Permission], { nullable: false })
  findManyPermission(@NestJsGraphql.Args() args: FindManyPermissionArgs) {
    return this.permissionService.findMany(args)
  }

  @NestJsGraphql.Query(() => [PermissionGroupBy], { nullable: false })
  groupByPermission(@NestJsGraphql.Args() args: GroupByPermissionArgs) {
    return this.permissionService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregatePermission, { nullable: false })
  aggregatePermission(@NestJsGraphql.Args() args: AggregatePermissionArgs) {
    return this.permissionService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Permission, { nullable: true })
  createPermission(@NestJsGraphql.Args() args: CreateOnePermissionArgs) {
    return this.permissionService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyPermission(@NestJsGraphql.Args() args: CreateManyPermissionArgs) {
    return this.permissionService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Permission, { nullable: true })
  updatePermission(@NestJsGraphql.Args() args: UpdateOnePermissionArgs) {
    return this.permissionService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyPermission(@NestJsGraphql.Args() args: UpdateManyPermissionArgs) {
    return this.permissionService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Permission, { nullable: true })
  upsertPermission(@NestJsGraphql.Args() args: UpsertOnePermissionArgs) {
    return this.permissionService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Permission, { nullable: true })
  deletePermission(@NestJsGraphql.Args() args: DeleteOnePermissionArgs) {
    return this.permissionService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyPermission(@NestJsGraphql.Args() args: DeleteManyPermissionArgs) {
    return this.permissionService.deleteMany(args)
  }
}

