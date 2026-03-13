export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly STAFF: "STAFF";
    readonly PARENT_STUDENT: "PARENT_STUDENT";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const TeacherChargingModel: {
    readonly PER_STUDENT: "PER_STUDENT";
    readonly FIXED_MONTHLY: "FIXED_MONTHLY";
    readonly FREE: "FREE";
};
export type TeacherChargingModel = (typeof TeacherChargingModel)[keyof typeof TeacherChargingModel];
