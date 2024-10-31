import { Operation, RoleTypes } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeRole() {
  return {
    name: faker.person.fullName(),
    roleType: faker.helpers.arrayElement([RoleTypes.SUPER_ADMIN, RoleTypes.ADMIN, RoleTypes.EDITOR, RoleTypes.AUTHOR, RoleTypes.READER] as const),
  };
}
export function fakeRoleComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    roleType: faker.helpers.arrayElement([RoleTypes.SUPER_ADMIN, RoleTypes.ADMIN, RoleTypes.EDITOR, RoleTypes.AUTHOR, RoleTypes.READER] as const),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
export function fakePermission() {
  return {
    modelName: faker.lorem.words(5),
    allowedOperations: faker.helpers.arrayElement([Operation.list, Operation.get, Operation.create, Operation.update, Operation.delete, Operation.search, Operation.onCreate, Operation.onUpdate, Operation.onDelete] as const),
  };
}
export function fakePermissionComplete() {
  return {
    id: faker.number.int(),
    modelName: faker.lorem.words(5),
    allowedOperations: faker.helpers.arrayElement([Operation.list, Operation.get, Operation.create, Operation.update, Operation.delete, Operation.search, Operation.onCreate, Operation.onUpdate, Operation.onDelete] as const),
    rolePermissionsId: faker.number.int(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
export function fakeUser() {
  return {
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: faker.lorem.words(5),
    roleType: undefined,
    phoneNumber: undefined,
  };
}
export function fakeUserComplete() {
  return {
    id: faker.number.int(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: faker.lorem.words(5),
    userRoleId: faker.number.int(),
    userStatus: 'Active',
    roleType: undefined,
    phoneNumber: undefined,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
