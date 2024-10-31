import * as NestJsGraphQL from "@nestjs/graphql";

export enum RoleScalarFieldEnum {
  id = "id",
  name = "name",
  roleType = "roleType",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(RoleScalarFieldEnum, {
  name: "RoleScalarFieldEnum",
  description: undefined,
});

export enum PermissionScalarFieldEnum {
  id = "id",
  modelName = "modelName",
  allowedOperations = "allowedOperations",
  rolePermissionsId = "rolePermissionsId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(PermissionScalarFieldEnum, {
  name: "PermissionScalarFieldEnum",
  description: undefined,
});

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  name = "name",
  password = "password",
  userRoleId = "userRoleId",
  userStatus = "userStatus",
  roleType = "roleType",
  phoneNumber = "phoneNumber",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
NestJsGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});

export enum SortOrder {
  asc = "asc",
  desc = "desc"
}
NestJsGraphQL.registerEnumType(SortOrder, {
  name: "SortOrder",
  description: undefined,
});

export enum QueryMode {
  "default" = "default",
  insensitive = "insensitive"
}
NestJsGraphQL.registerEnumType(QueryMode, {
  name: "QueryMode",
  description: undefined,
});
