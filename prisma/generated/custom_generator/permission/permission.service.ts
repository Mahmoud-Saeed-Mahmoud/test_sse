import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../../src/prisma.service';

@Injectable()
export class PermissionService {
  constructor(private prisma: PrismaService) {}

  async findFirst(args: Prisma.PermissionFindFirstArgs) {
    return await this.prisma.permission.findFirst(args);
  }

  findUnique(args: Prisma.PermissionFindUniqueArgs) {
    return this.prisma.permission.findUnique(args);
  }

  findMany(args: Prisma.PermissionFindManyArgs) {
    return this.prisma.permission.findMany(args);
  }

  groupBy(args: Prisma.PermissionGroupByArgs) {
    // @ts-ignore
    return this.prisma.permission.groupBy(args);
  }

  aggregate(args: Prisma.PermissionAggregateArgs) {
    return this.prisma.permission.aggregate(args);
  }

  create(args: Prisma.PermissionCreateArgs) {
    return this.prisma.permission.create(args);
  }

  createMany(args: Prisma.PermissionCreateManyArgs) {
    return this.prisma.permission.createMany(args);
  }

  update(args: Prisma.PermissionUpdateArgs) {
    return this.prisma.permission.update(args);
  }

  updateMany(args: Prisma.PermissionUpdateManyArgs) {
    return this.prisma.permission.updateMany(args);
  }

  upsert(args: Prisma.PermissionUpsertArgs) {
    return this.prisma.permission.upsert(args);
  }

  delete(args: Prisma.PermissionDeleteArgs) {
    return this.prisma.permission.delete(args);
  }

  deleteMany(args: Prisma.PermissionDeleteManyArgs) {
    return this.prisma.permission.deleteMany(args);
  }
}
