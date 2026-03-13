import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClassGroupModel = runtime.Types.Result.DefaultSelection<Prisma.$ClassGroupPayload>;
export type AggregateClassGroup = {
    _count: ClassGroupCountAggregateOutputType | null;
    _min: ClassGroupMinAggregateOutputType | null;
    _max: ClassGroupMaxAggregateOutputType | null;
};
export type ClassGroupMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    isActive: boolean | null;
    gradeId: string | null;
    teacherId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClassGroupMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    isActive: boolean | null;
    gradeId: string | null;
    teacherId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClassGroupCountAggregateOutputType = {
    id: number;
    name: number;
    isActive: number;
    gradeId: number;
    teacherId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClassGroupMinAggregateInputType = {
    id?: true;
    name?: true;
    isActive?: true;
    gradeId?: true;
    teacherId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClassGroupMaxAggregateInputType = {
    id?: true;
    name?: true;
    isActive?: true;
    gradeId?: true;
    teacherId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClassGroupCountAggregateInputType = {
    id?: true;
    name?: true;
    isActive?: true;
    gradeId?: true;
    teacherId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClassGroupAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassGroupWhereInput;
    orderBy?: Prisma.ClassGroupOrderByWithRelationInput | Prisma.ClassGroupOrderByWithRelationInput[];
    cursor?: Prisma.ClassGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClassGroupCountAggregateInputType;
    _min?: ClassGroupMinAggregateInputType;
    _max?: ClassGroupMaxAggregateInputType;
};
export type GetClassGroupAggregateType<T extends ClassGroupAggregateArgs> = {
    [P in keyof T & keyof AggregateClassGroup]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClassGroup[P]> : Prisma.GetScalarType<T[P], AggregateClassGroup[P]>;
};
export type ClassGroupGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassGroupWhereInput;
    orderBy?: Prisma.ClassGroupOrderByWithAggregationInput | Prisma.ClassGroupOrderByWithAggregationInput[];
    by: Prisma.ClassGroupScalarFieldEnum[] | Prisma.ClassGroupScalarFieldEnum;
    having?: Prisma.ClassGroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClassGroupCountAggregateInputType | true;
    _min?: ClassGroupMinAggregateInputType;
    _max?: ClassGroupMaxAggregateInputType;
};
export type ClassGroupGroupByOutputType = {
    id: string;
    name: string;
    isActive: boolean;
    gradeId: string;
    teacherId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ClassGroupCountAggregateOutputType | null;
    _min: ClassGroupMinAggregateOutputType | null;
    _max: ClassGroupMaxAggregateOutputType | null;
};
type GetClassGroupGroupByPayload<T extends ClassGroupGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClassGroupGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClassGroupGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClassGroupGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClassGroupGroupByOutputType[P]>;
}>>;
export type ClassGroupWhereInput = {
    AND?: Prisma.ClassGroupWhereInput | Prisma.ClassGroupWhereInput[];
    OR?: Prisma.ClassGroupWhereInput[];
    NOT?: Prisma.ClassGroupWhereInput | Prisma.ClassGroupWhereInput[];
    id?: Prisma.StringFilter<"ClassGroup"> | string;
    name?: Prisma.StringFilter<"ClassGroup"> | string;
    isActive?: Prisma.BoolFilter<"ClassGroup"> | boolean;
    gradeId?: Prisma.StringFilter<"ClassGroup"> | string;
    teacherId?: Prisma.StringNullableFilter<"ClassGroup"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ClassGroup"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ClassGroup"> | Date | string;
    grade?: Prisma.XOR<Prisma.GradeScalarRelationFilter, Prisma.GradeWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    enrollments?: Prisma.EnrollmentListRelationFilter;
};
export type ClassGroupOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    gradeId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    grade?: Prisma.GradeOrderByWithRelationInput;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    enrollments?: Prisma.EnrollmentOrderByRelationAggregateInput;
};
export type ClassGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    gradeId_name?: Prisma.ClassGroupGradeIdNameCompoundUniqueInput;
    AND?: Prisma.ClassGroupWhereInput | Prisma.ClassGroupWhereInput[];
    OR?: Prisma.ClassGroupWhereInput[];
    NOT?: Prisma.ClassGroupWhereInput | Prisma.ClassGroupWhereInput[];
    name?: Prisma.StringFilter<"ClassGroup"> | string;
    isActive?: Prisma.BoolFilter<"ClassGroup"> | boolean;
    gradeId?: Prisma.StringFilter<"ClassGroup"> | string;
    teacherId?: Prisma.StringNullableFilter<"ClassGroup"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ClassGroup"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ClassGroup"> | Date | string;
    grade?: Prisma.XOR<Prisma.GradeScalarRelationFilter, Prisma.GradeWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    enrollments?: Prisma.EnrollmentListRelationFilter;
}, "id" | "gradeId_name">;
export type ClassGroupOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    gradeId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ClassGroupCountOrderByAggregateInput;
    _max?: Prisma.ClassGroupMaxOrderByAggregateInput;
    _min?: Prisma.ClassGroupMinOrderByAggregateInput;
};
export type ClassGroupScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClassGroupScalarWhereWithAggregatesInput | Prisma.ClassGroupScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClassGroupScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClassGroupScalarWhereWithAggregatesInput | Prisma.ClassGroupScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ClassGroup"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ClassGroup"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"ClassGroup"> | boolean;
    gradeId?: Prisma.StringWithAggregatesFilter<"ClassGroup"> | string;
    teacherId?: Prisma.StringNullableWithAggregatesFilter<"ClassGroup"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ClassGroup"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ClassGroup"> | Date | string;
};
export type ClassGroupCreateInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    grade: Prisma.GradeCreateNestedOneWithoutClassGroupsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutClassGroupsInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutClassGroupInput;
};
export type ClassGroupUncheckedCreateInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    gradeId: string;
    teacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutClassGroupInput;
};
export type ClassGroupUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    grade?: Prisma.GradeUpdateOneRequiredWithoutClassGroupsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutClassGroupsNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutClassGroupNestedInput;
};
export type ClassGroupUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    gradeId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutClassGroupNestedInput;
};
export type ClassGroupCreateManyInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    gradeId: string;
    teacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClassGroupUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassGroupUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    gradeId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassGroupListRelationFilter = {
    every?: Prisma.ClassGroupWhereInput;
    some?: Prisma.ClassGroupWhereInput;
    none?: Prisma.ClassGroupWhereInput;
};
export type ClassGroupOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClassGroupGradeIdNameCompoundUniqueInput = {
    gradeId: string;
    name: string;
};
export type ClassGroupCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    gradeId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClassGroupMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    gradeId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClassGroupMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    gradeId?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClassGroupScalarRelationFilter = {
    is?: Prisma.ClassGroupWhereInput;
    isNot?: Prisma.ClassGroupWhereInput;
};
export type ClassGroupCreateNestedManyWithoutGradeInput = {
    create?: Prisma.XOR<Prisma.ClassGroupCreateWithoutGradeInput, Prisma.ClassGroupUncheckedCreateWithoutGradeInput> | Prisma.ClassGroupCreateWithoutGradeInput[] | Prisma.ClassGroupUncheckedCreateWithoutGradeInput[];
    connectOrCreate?: Prisma.ClassGroupCreateOrConnectWithoutGradeInput | Prisma.ClassGroupCreateOrConnectWithoutGradeInput[];
    createMany?: Prisma.ClassGroupCreateManyGradeInputEnvelope;
    connect?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
};
export type ClassGroupUncheckedCreateNestedManyWithoutGradeInput = {
    create?: Prisma.XOR<Prisma.ClassGroupCreateWithoutGradeInput, Prisma.ClassGroupUncheckedCreateWithoutGradeInput> | Prisma.ClassGroupCreateWithoutGradeInput[] | Prisma.ClassGroupUncheckedCreateWithoutGradeInput[];
    connectOrCreate?: Prisma.ClassGroupCreateOrConnectWithoutGradeInput | Prisma.ClassGroupCreateOrConnectWithoutGradeInput[];
    createMany?: Prisma.ClassGroupCreateManyGradeInputEnvelope;
    connect?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
};
export type ClassGroupUpdateManyWithoutGradeNestedInput = {
    create?: Prisma.XOR<Prisma.ClassGroupCreateWithoutGradeInput, Prisma.ClassGroupUncheckedCreateWithoutGradeInput> | Prisma.ClassGroupCreateWithoutGradeInput[] | Prisma.ClassGroupUncheckedCreateWithoutGradeInput[];
    connectOrCreate?: Prisma.ClassGroupCreateOrConnectWithoutGradeInput | Prisma.ClassGroupCreateOrConnectWithoutGradeInput[];
    upsert?: Prisma.ClassGroupUpsertWithWhereUniqueWithoutGradeInput | Prisma.ClassGroupUpsertWithWhereUniqueWithoutGradeInput[];
    createMany?: Prisma.ClassGroupCreateManyGradeInputEnvelope;
    set?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    disconnect?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    delete?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    connect?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    update?: Prisma.ClassGroupUpdateWithWhereUniqueWithoutGradeInput | Prisma.ClassGroupUpdateWithWhereUniqueWithoutGradeInput[];
    updateMany?: Prisma.ClassGroupUpdateManyWithWhereWithoutGradeInput | Prisma.ClassGroupUpdateManyWithWhereWithoutGradeInput[];
    deleteMany?: Prisma.ClassGroupScalarWhereInput | Prisma.ClassGroupScalarWhereInput[];
};
export type ClassGroupUncheckedUpdateManyWithoutGradeNestedInput = {
    create?: Prisma.XOR<Prisma.ClassGroupCreateWithoutGradeInput, Prisma.ClassGroupUncheckedCreateWithoutGradeInput> | Prisma.ClassGroupCreateWithoutGradeInput[] | Prisma.ClassGroupUncheckedCreateWithoutGradeInput[];
    connectOrCreate?: Prisma.ClassGroupCreateOrConnectWithoutGradeInput | Prisma.ClassGroupCreateOrConnectWithoutGradeInput[];
    upsert?: Prisma.ClassGroupUpsertWithWhereUniqueWithoutGradeInput | Prisma.ClassGroupUpsertWithWhereUniqueWithoutGradeInput[];
    createMany?: Prisma.ClassGroupCreateManyGradeInputEnvelope;
    set?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    disconnect?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    delete?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    connect?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    update?: Prisma.ClassGroupUpdateWithWhereUniqueWithoutGradeInput | Prisma.ClassGroupUpdateWithWhereUniqueWithoutGradeInput[];
    updateMany?: Prisma.ClassGroupUpdateManyWithWhereWithoutGradeInput | Prisma.ClassGroupUpdateManyWithWhereWithoutGradeInput[];
    deleteMany?: Prisma.ClassGroupScalarWhereInput | Prisma.ClassGroupScalarWhereInput[];
};
export type ClassGroupCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.ClassGroupCreateWithoutTeacherInput, Prisma.ClassGroupUncheckedCreateWithoutTeacherInput> | Prisma.ClassGroupCreateWithoutTeacherInput[] | Prisma.ClassGroupUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.ClassGroupCreateOrConnectWithoutTeacherInput | Prisma.ClassGroupCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.ClassGroupCreateManyTeacherInputEnvelope;
    connect?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
};
export type ClassGroupUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.ClassGroupCreateWithoutTeacherInput, Prisma.ClassGroupUncheckedCreateWithoutTeacherInput> | Prisma.ClassGroupCreateWithoutTeacherInput[] | Prisma.ClassGroupUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.ClassGroupCreateOrConnectWithoutTeacherInput | Prisma.ClassGroupCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.ClassGroupCreateManyTeacherInputEnvelope;
    connect?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
};
export type ClassGroupUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.ClassGroupCreateWithoutTeacherInput, Prisma.ClassGroupUncheckedCreateWithoutTeacherInput> | Prisma.ClassGroupCreateWithoutTeacherInput[] | Prisma.ClassGroupUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.ClassGroupCreateOrConnectWithoutTeacherInput | Prisma.ClassGroupCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.ClassGroupUpsertWithWhereUniqueWithoutTeacherInput | Prisma.ClassGroupUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.ClassGroupCreateManyTeacherInputEnvelope;
    set?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    disconnect?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    delete?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    connect?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    update?: Prisma.ClassGroupUpdateWithWhereUniqueWithoutTeacherInput | Prisma.ClassGroupUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.ClassGroupUpdateManyWithWhereWithoutTeacherInput | Prisma.ClassGroupUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.ClassGroupScalarWhereInput | Prisma.ClassGroupScalarWhereInput[];
};
export type ClassGroupUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.ClassGroupCreateWithoutTeacherInput, Prisma.ClassGroupUncheckedCreateWithoutTeacherInput> | Prisma.ClassGroupCreateWithoutTeacherInput[] | Prisma.ClassGroupUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.ClassGroupCreateOrConnectWithoutTeacherInput | Prisma.ClassGroupCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.ClassGroupUpsertWithWhereUniqueWithoutTeacherInput | Prisma.ClassGroupUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.ClassGroupCreateManyTeacherInputEnvelope;
    set?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    disconnect?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    delete?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    connect?: Prisma.ClassGroupWhereUniqueInput | Prisma.ClassGroupWhereUniqueInput[];
    update?: Prisma.ClassGroupUpdateWithWhereUniqueWithoutTeacherInput | Prisma.ClassGroupUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.ClassGroupUpdateManyWithWhereWithoutTeacherInput | Prisma.ClassGroupUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.ClassGroupScalarWhereInput | Prisma.ClassGroupScalarWhereInput[];
};
export type ClassGroupCreateNestedOneWithoutEnrollmentsInput = {
    create?: Prisma.XOR<Prisma.ClassGroupCreateWithoutEnrollmentsInput, Prisma.ClassGroupUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.ClassGroupCreateOrConnectWithoutEnrollmentsInput;
    connect?: Prisma.ClassGroupWhereUniqueInput;
};
export type ClassGroupUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: Prisma.XOR<Prisma.ClassGroupCreateWithoutEnrollmentsInput, Prisma.ClassGroupUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.ClassGroupCreateOrConnectWithoutEnrollmentsInput;
    upsert?: Prisma.ClassGroupUpsertWithoutEnrollmentsInput;
    connect?: Prisma.ClassGroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClassGroupUpdateToOneWithWhereWithoutEnrollmentsInput, Prisma.ClassGroupUpdateWithoutEnrollmentsInput>, Prisma.ClassGroupUncheckedUpdateWithoutEnrollmentsInput>;
};
export type ClassGroupCreateWithoutGradeInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutClassGroupsInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutClassGroupInput;
};
export type ClassGroupUncheckedCreateWithoutGradeInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    teacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutClassGroupInput;
};
export type ClassGroupCreateOrConnectWithoutGradeInput = {
    where: Prisma.ClassGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassGroupCreateWithoutGradeInput, Prisma.ClassGroupUncheckedCreateWithoutGradeInput>;
};
export type ClassGroupCreateManyGradeInputEnvelope = {
    data: Prisma.ClassGroupCreateManyGradeInput | Prisma.ClassGroupCreateManyGradeInput[];
    skipDuplicates?: boolean;
};
export type ClassGroupUpsertWithWhereUniqueWithoutGradeInput = {
    where: Prisma.ClassGroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClassGroupUpdateWithoutGradeInput, Prisma.ClassGroupUncheckedUpdateWithoutGradeInput>;
    create: Prisma.XOR<Prisma.ClassGroupCreateWithoutGradeInput, Prisma.ClassGroupUncheckedCreateWithoutGradeInput>;
};
export type ClassGroupUpdateWithWhereUniqueWithoutGradeInput = {
    where: Prisma.ClassGroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClassGroupUpdateWithoutGradeInput, Prisma.ClassGroupUncheckedUpdateWithoutGradeInput>;
};
export type ClassGroupUpdateManyWithWhereWithoutGradeInput = {
    where: Prisma.ClassGroupScalarWhereInput;
    data: Prisma.XOR<Prisma.ClassGroupUpdateManyMutationInput, Prisma.ClassGroupUncheckedUpdateManyWithoutGradeInput>;
};
export type ClassGroupScalarWhereInput = {
    AND?: Prisma.ClassGroupScalarWhereInput | Prisma.ClassGroupScalarWhereInput[];
    OR?: Prisma.ClassGroupScalarWhereInput[];
    NOT?: Prisma.ClassGroupScalarWhereInput | Prisma.ClassGroupScalarWhereInput[];
    id?: Prisma.StringFilter<"ClassGroup"> | string;
    name?: Prisma.StringFilter<"ClassGroup"> | string;
    isActive?: Prisma.BoolFilter<"ClassGroup"> | boolean;
    gradeId?: Prisma.StringFilter<"ClassGroup"> | string;
    teacherId?: Prisma.StringNullableFilter<"ClassGroup"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ClassGroup"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ClassGroup"> | Date | string;
};
export type ClassGroupCreateWithoutTeacherInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    grade: Prisma.GradeCreateNestedOneWithoutClassGroupsInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutClassGroupInput;
};
export type ClassGroupUncheckedCreateWithoutTeacherInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    gradeId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutClassGroupInput;
};
export type ClassGroupCreateOrConnectWithoutTeacherInput = {
    where: Prisma.ClassGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassGroupCreateWithoutTeacherInput, Prisma.ClassGroupUncheckedCreateWithoutTeacherInput>;
};
export type ClassGroupCreateManyTeacherInputEnvelope = {
    data: Prisma.ClassGroupCreateManyTeacherInput | Prisma.ClassGroupCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type ClassGroupUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.ClassGroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClassGroupUpdateWithoutTeacherInput, Prisma.ClassGroupUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.ClassGroupCreateWithoutTeacherInput, Prisma.ClassGroupUncheckedCreateWithoutTeacherInput>;
};
export type ClassGroupUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.ClassGroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClassGroupUpdateWithoutTeacherInput, Prisma.ClassGroupUncheckedUpdateWithoutTeacherInput>;
};
export type ClassGroupUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.ClassGroupScalarWhereInput;
    data: Prisma.XOR<Prisma.ClassGroupUpdateManyMutationInput, Prisma.ClassGroupUncheckedUpdateManyWithoutTeacherInput>;
};
export type ClassGroupCreateWithoutEnrollmentsInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    grade: Prisma.GradeCreateNestedOneWithoutClassGroupsInput;
    teacher?: Prisma.TeacherCreateNestedOneWithoutClassGroupsInput;
};
export type ClassGroupUncheckedCreateWithoutEnrollmentsInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    gradeId: string;
    teacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClassGroupCreateOrConnectWithoutEnrollmentsInput = {
    where: Prisma.ClassGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassGroupCreateWithoutEnrollmentsInput, Prisma.ClassGroupUncheckedCreateWithoutEnrollmentsInput>;
};
export type ClassGroupUpsertWithoutEnrollmentsInput = {
    update: Prisma.XOR<Prisma.ClassGroupUpdateWithoutEnrollmentsInput, Prisma.ClassGroupUncheckedUpdateWithoutEnrollmentsInput>;
    create: Prisma.XOR<Prisma.ClassGroupCreateWithoutEnrollmentsInput, Prisma.ClassGroupUncheckedCreateWithoutEnrollmentsInput>;
    where?: Prisma.ClassGroupWhereInput;
};
export type ClassGroupUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: Prisma.ClassGroupWhereInput;
    data: Prisma.XOR<Prisma.ClassGroupUpdateWithoutEnrollmentsInput, Prisma.ClassGroupUncheckedUpdateWithoutEnrollmentsInput>;
};
export type ClassGroupUpdateWithoutEnrollmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    grade?: Prisma.GradeUpdateOneRequiredWithoutClassGroupsNestedInput;
    teacher?: Prisma.TeacherUpdateOneWithoutClassGroupsNestedInput;
};
export type ClassGroupUncheckedUpdateWithoutEnrollmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    gradeId?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassGroupCreateManyGradeInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    teacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClassGroupUpdateWithoutGradeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutClassGroupsNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutClassGroupNestedInput;
};
export type ClassGroupUncheckedUpdateWithoutGradeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutClassGroupNestedInput;
};
export type ClassGroupUncheckedUpdateManyWithoutGradeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassGroupCreateManyTeacherInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    gradeId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClassGroupUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    grade?: Prisma.GradeUpdateOneRequiredWithoutClassGroupsNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutClassGroupNestedInput;
};
export type ClassGroupUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    gradeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutClassGroupNestedInput;
};
export type ClassGroupUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    gradeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassGroupCountOutputType = {
    enrollments: number;
};
export type ClassGroupCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    enrollments?: boolean | ClassGroupCountOutputTypeCountEnrollmentsArgs;
};
export type ClassGroupCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassGroupCountOutputTypeSelect<ExtArgs> | null;
};
export type ClassGroupCountOutputTypeCountEnrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnrollmentWhereInput;
};
export type ClassGroupSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isActive?: boolean;
    gradeId?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    grade?: boolean | Prisma.GradeDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.ClassGroup$teacherArgs<ExtArgs>;
    enrollments?: boolean | Prisma.ClassGroup$enrollmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClassGroupCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["classGroup"]>;
export type ClassGroupSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isActive?: boolean;
    gradeId?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    grade?: boolean | Prisma.GradeDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.ClassGroup$teacherArgs<ExtArgs>;
}, ExtArgs["result"]["classGroup"]>;
export type ClassGroupSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isActive?: boolean;
    gradeId?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    grade?: boolean | Prisma.GradeDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.ClassGroup$teacherArgs<ExtArgs>;
}, ExtArgs["result"]["classGroup"]>;
export type ClassGroupSelectScalar = {
    id?: boolean;
    name?: boolean;
    isActive?: boolean;
    gradeId?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ClassGroupOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "isActive" | "gradeId" | "teacherId" | "createdAt" | "updatedAt", ExtArgs["result"]["classGroup"]>;
export type ClassGroupInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    grade?: boolean | Prisma.GradeDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.ClassGroup$teacherArgs<ExtArgs>;
    enrollments?: boolean | Prisma.ClassGroup$enrollmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClassGroupCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClassGroupIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    grade?: boolean | Prisma.GradeDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.ClassGroup$teacherArgs<ExtArgs>;
};
export type ClassGroupIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    grade?: boolean | Prisma.GradeDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.ClassGroup$teacherArgs<ExtArgs>;
};
export type $ClassGroupPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ClassGroup";
    objects: {
        grade: Prisma.$GradePayload<ExtArgs>;
        teacher: Prisma.$TeacherPayload<ExtArgs> | null;
        enrollments: Prisma.$EnrollmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        isActive: boolean;
        gradeId: string;
        teacherId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["classGroup"]>;
    composites: {};
};
export type ClassGroupGetPayload<S extends boolean | null | undefined | ClassGroupDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload, S>;
export type ClassGroupCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClassGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClassGroupCountAggregateInputType | true;
};
export interface ClassGroupDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ClassGroup'];
        meta: {
            name: 'ClassGroup';
        };
    };
    findUnique<T extends ClassGroupFindUniqueArgs>(args: Prisma.SelectSubset<T, ClassGroupFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClassGroupClient<runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClassGroupFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClassGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClassGroupClient<runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClassGroupFindFirstArgs>(args?: Prisma.SelectSubset<T, ClassGroupFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClassGroupClient<runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClassGroupFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClassGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClassGroupClient<runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClassGroupFindManyArgs>(args?: Prisma.SelectSubset<T, ClassGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClassGroupCreateArgs>(args: Prisma.SelectSubset<T, ClassGroupCreateArgs<ExtArgs>>): Prisma.Prisma__ClassGroupClient<runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClassGroupCreateManyArgs>(args?: Prisma.SelectSubset<T, ClassGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClassGroupCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClassGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClassGroupDeleteArgs>(args: Prisma.SelectSubset<T, ClassGroupDeleteArgs<ExtArgs>>): Prisma.Prisma__ClassGroupClient<runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClassGroupUpdateArgs>(args: Prisma.SelectSubset<T, ClassGroupUpdateArgs<ExtArgs>>): Prisma.Prisma__ClassGroupClient<runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClassGroupDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClassGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClassGroupUpdateManyArgs>(args: Prisma.SelectSubset<T, ClassGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClassGroupUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClassGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClassGroupUpsertArgs>(args: Prisma.SelectSubset<T, ClassGroupUpsertArgs<ExtArgs>>): Prisma.Prisma__ClassGroupClient<runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClassGroupCountArgs>(args?: Prisma.Subset<T, ClassGroupCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClassGroupCountAggregateOutputType> : number>;
    aggregate<T extends ClassGroupAggregateArgs>(args: Prisma.Subset<T, ClassGroupAggregateArgs>): Prisma.PrismaPromise<GetClassGroupAggregateType<T>>;
    groupBy<T extends ClassGroupGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClassGroupGroupByArgs['orderBy'];
    } : {
        orderBy?: ClassGroupGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClassGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClassGroupFieldRefs;
}
export interface Prisma__ClassGroupClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    grade<T extends Prisma.GradeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GradeDefaultArgs<ExtArgs>>): Prisma.Prisma__GradeClient<runtime.Types.Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    teacher<T extends Prisma.ClassGroup$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClassGroup$teacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    enrollments<T extends Prisma.ClassGroup$enrollmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClassGroup$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClassGroupFieldRefs {
    readonly id: Prisma.FieldRef<"ClassGroup", 'String'>;
    readonly name: Prisma.FieldRef<"ClassGroup", 'String'>;
    readonly isActive: Prisma.FieldRef<"ClassGroup", 'Boolean'>;
    readonly gradeId: Prisma.FieldRef<"ClassGroup", 'String'>;
    readonly teacherId: Prisma.FieldRef<"ClassGroup", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ClassGroup", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ClassGroup", 'DateTime'>;
}
export type ClassGroupFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassGroupSelect<ExtArgs> | null;
    omit?: Prisma.ClassGroupOmit<ExtArgs> | null;
    include?: Prisma.ClassGroupInclude<ExtArgs> | null;
    where: Prisma.ClassGroupWhereUniqueInput;
};
export type ClassGroupFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassGroupSelect<ExtArgs> | null;
    omit?: Prisma.ClassGroupOmit<ExtArgs> | null;
    include?: Prisma.ClassGroupInclude<ExtArgs> | null;
    where: Prisma.ClassGroupWhereUniqueInput;
};
export type ClassGroupFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassGroupSelect<ExtArgs> | null;
    omit?: Prisma.ClassGroupOmit<ExtArgs> | null;
    include?: Prisma.ClassGroupInclude<ExtArgs> | null;
    where?: Prisma.ClassGroupWhereInput;
    orderBy?: Prisma.ClassGroupOrderByWithRelationInput | Prisma.ClassGroupOrderByWithRelationInput[];
    cursor?: Prisma.ClassGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassGroupScalarFieldEnum | Prisma.ClassGroupScalarFieldEnum[];
};
export type ClassGroupFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassGroupSelect<ExtArgs> | null;
    omit?: Prisma.ClassGroupOmit<ExtArgs> | null;
    include?: Prisma.ClassGroupInclude<ExtArgs> | null;
    where?: Prisma.ClassGroupWhereInput;
    orderBy?: Prisma.ClassGroupOrderByWithRelationInput | Prisma.ClassGroupOrderByWithRelationInput[];
    cursor?: Prisma.ClassGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassGroupScalarFieldEnum | Prisma.ClassGroupScalarFieldEnum[];
};
export type ClassGroupFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassGroupSelect<ExtArgs> | null;
    omit?: Prisma.ClassGroupOmit<ExtArgs> | null;
    include?: Prisma.ClassGroupInclude<ExtArgs> | null;
    where?: Prisma.ClassGroupWhereInput;
    orderBy?: Prisma.ClassGroupOrderByWithRelationInput | Prisma.ClassGroupOrderByWithRelationInput[];
    cursor?: Prisma.ClassGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassGroupScalarFieldEnum | Prisma.ClassGroupScalarFieldEnum[];
};
export type ClassGroupCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassGroupSelect<ExtArgs> | null;
    omit?: Prisma.ClassGroupOmit<ExtArgs> | null;
    include?: Prisma.ClassGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassGroupCreateInput, Prisma.ClassGroupUncheckedCreateInput>;
};
export type ClassGroupCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClassGroupCreateManyInput | Prisma.ClassGroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClassGroupCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassGroupSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClassGroupOmit<ExtArgs> | null;
    data: Prisma.ClassGroupCreateManyInput | Prisma.ClassGroupCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClassGroupIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClassGroupUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassGroupSelect<ExtArgs> | null;
    omit?: Prisma.ClassGroupOmit<ExtArgs> | null;
    include?: Prisma.ClassGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassGroupUpdateInput, Prisma.ClassGroupUncheckedUpdateInput>;
    where: Prisma.ClassGroupWhereUniqueInput;
};
export type ClassGroupUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClassGroupUpdateManyMutationInput, Prisma.ClassGroupUncheckedUpdateManyInput>;
    where?: Prisma.ClassGroupWhereInput;
    limit?: number;
};
export type ClassGroupUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassGroupSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClassGroupOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassGroupUpdateManyMutationInput, Prisma.ClassGroupUncheckedUpdateManyInput>;
    where?: Prisma.ClassGroupWhereInput;
    limit?: number;
    include?: Prisma.ClassGroupIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClassGroupUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassGroupSelect<ExtArgs> | null;
    omit?: Prisma.ClassGroupOmit<ExtArgs> | null;
    include?: Prisma.ClassGroupInclude<ExtArgs> | null;
    where: Prisma.ClassGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassGroupCreateInput, Prisma.ClassGroupUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClassGroupUpdateInput, Prisma.ClassGroupUncheckedUpdateInput>;
};
export type ClassGroupDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassGroupSelect<ExtArgs> | null;
    omit?: Prisma.ClassGroupOmit<ExtArgs> | null;
    include?: Prisma.ClassGroupInclude<ExtArgs> | null;
    where: Prisma.ClassGroupWhereUniqueInput;
};
export type ClassGroupDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassGroupWhereInput;
    limit?: number;
};
export type ClassGroup$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
};
export type ClassGroup$enrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithRelationInput | Prisma.EnrollmentOrderByWithRelationInput[];
    cursor?: Prisma.EnrollmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnrollmentScalarFieldEnum | Prisma.EnrollmentScalarFieldEnum[];
};
export type ClassGroupDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassGroupSelect<ExtArgs> | null;
    omit?: Prisma.ClassGroupOmit<ExtArgs> | null;
    include?: Prisma.ClassGroupInclude<ExtArgs> | null;
};
export {};
