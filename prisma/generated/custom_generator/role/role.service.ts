import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../../src/prisma.service';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async findFirst(args: Prisma.RoleFindFirstArgs) {
    return await this.prisma.role.findFirst(args);
  }

  findUnique(args: Prisma.RoleFindUniqueArgs) {
    return this.prisma.role.findUnique(args);
  }

  findMany(args: Prisma.RoleFindManyArgs) {
    return this.prisma.role.findMany(args);
  }

  groupBy(args: Prisma.RoleGroupByArgs) {
    // @ts-ignore
    return this.prisma.role.groupBy(args);
  }

  aggregate(args: Prisma.RoleAggregateArgs) {
    return this.prisma.role.aggregate(args);
  }

  create(args: Prisma.RoleCreateArgs) {
    return this.prisma.role.create(args);
  }

  createMany(args: Prisma.RoleCreateManyArgs) {
    return this.prisma.role.createMany(args);
  }

  update(args: Prisma.RoleUpdateArgs) {
    return this.prisma.role.update(args);
  }

  updateMany(args: Prisma.RoleUpdateManyArgs) {
    return this.prisma.role.updateMany(args);
  }

  upsert(args: Prisma.RoleUpsertArgs) {
    return this.prisma.role.upsert(args);
  }

  delete(args: Prisma.RoleDeleteArgs) {
    return this.prisma.role.delete(args);
  }

  deleteMany(args: Prisma.RoleDeleteManyArgs) {
    return this.prisma.role.deleteMany(args);
  }
}
