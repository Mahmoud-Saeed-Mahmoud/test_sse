import { Module } from '@nestjs/common';
import { PrismaService } from '../../../../src/prisma.service';
import { PermissionResolver } from './permission.resolver';
import { PermissionService } from './permission.service';

@Module({
  providers: [PermissionResolver, PermissionService, PrismaService],
})
export class PermissionModule {}
