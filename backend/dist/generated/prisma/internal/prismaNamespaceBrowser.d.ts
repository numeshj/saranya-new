import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
export declare const ModelName: {
    readonly User: "User";
    readonly Student: "Student";
    readonly StudentQrToken: "StudentQrToken";
    readonly Grade: "Grade";
    readonly Teacher: "Teacher";
    readonly ClassGroup: "ClassGroup";
    readonly Enrollment: "Enrollment";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const StudentScalarFieldEnum: {
    readonly id: "id";
    readonly fullName: "fullName";
    readonly phone: "phone";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];
export declare const StudentQrTokenScalarFieldEnum: {
    readonly id: "id";
    readonly token: "token";
    readonly isActive: "isActive";
    readonly studentId: "studentId";
    readonly issuedAt: "issuedAt";
    readonly replacedAt: "replacedAt";
};
export type StudentQrTokenScalarFieldEnum = (typeof StudentQrTokenScalarFieldEnum)[keyof typeof StudentQrTokenScalarFieldEnum];
export declare const GradeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GradeScalarFieldEnum = (typeof GradeScalarFieldEnum)[keyof typeof GradeScalarFieldEnum];
export declare const TeacherScalarFieldEnum: {
    readonly id: "id";
    readonly displayName: "displayName";
    readonly phone: "phone";
    readonly chargingModel: "chargingModel";
    readonly perStudentRate: "perStudentRate";
    readonly fixedMonthlyAmount: "fixedMonthlyAmount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum];
export declare const ClassGroupScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly isActive: "isActive";
    readonly gradeId: "gradeId";
    readonly teacherId: "teacherId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClassGroupScalarFieldEnum = (typeof ClassGroupScalarFieldEnum)[keyof typeof ClassGroupScalarFieldEnum];
export declare const EnrollmentScalarFieldEnum: {
    readonly id: "id";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly isActive: "isActive";
    readonly studentId: "studentId";
    readonly classGroupId: "classGroupId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
