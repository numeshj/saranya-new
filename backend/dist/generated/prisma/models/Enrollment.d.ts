import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EnrollmentModel = runtime.Types.Result.DefaultSelection<Prisma.$EnrollmentPayload>;
export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null;
    _min: EnrollmentMinAggregateOutputType | null;
    _max: EnrollmentMaxAggregateOutputType | null;
};
export type EnrollmentMinAggregateOutputType = {
    id: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean | null;
    studentId: string | null;
    classGroupId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EnrollmentMaxAggregateOutputType = {
    id: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean | null;
    studentId: string | null;
    classGroupId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EnrollmentCountAggregateOutputType = {
    id: number;
    startDate: number;
    endDate: number;
    isActive: number;
    studentId: number;
    classGroupId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EnrollmentMinAggregateInputType = {
    id?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    studentId?: true;
    classGroupId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EnrollmentMaxAggregateInputType = {
    id?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    studentId?: true;
    classGroupId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EnrollmentCountAggregateInputType = {
    id?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    studentId?: true;
    classGroupId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EnrollmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithRelationInput | Prisma.EnrollmentOrderByWithRelationInput[];
    cursor?: Prisma.EnrollmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EnrollmentCountAggregateInputType;
    _min?: EnrollmentMinAggregateInputType;
    _max?: EnrollmentMaxAggregateInputType;
};
export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
    [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEnrollment[P]> : Prisma.GetScalarType<T[P], AggregateEnrollment[P]>;
};
export type EnrollmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithAggregationInput | Prisma.EnrollmentOrderByWithAggregationInput[];
    by: Prisma.EnrollmentScalarFieldEnum[] | Prisma.EnrollmentScalarFieldEnum;
    having?: Prisma.EnrollmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EnrollmentCountAggregateInputType | true;
    _min?: EnrollmentMinAggregateInputType;
    _max?: EnrollmentMaxAggregateInputType;
};
export type EnrollmentGroupByOutputType = {
    id: string;
    startDate: Date;
    endDate: Date | null;
    isActive: boolean;
    studentId: string;
    classGroupId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: EnrollmentCountAggregateOutputType | null;
    _min: EnrollmentMinAggregateOutputType | null;
    _max: EnrollmentMaxAggregateOutputType | null;
};
type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EnrollmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EnrollmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EnrollmentGroupByOutputType[P]>;
}>>;
export type EnrollmentWhereInput = {
    AND?: Prisma.EnrollmentWhereInput | Prisma.EnrollmentWhereInput[];
    OR?: Prisma.EnrollmentWhereInput[];
    NOT?: Prisma.EnrollmentWhereInput | Prisma.EnrollmentWhereInput[];
    id?: Prisma.StringFilter<"Enrollment"> | string;
    startDate?: Prisma.DateTimeFilter<"Enrollment"> | Date | string;
    endDate?: Prisma.DateTimeNullableFilter<"Enrollment"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"Enrollment"> | boolean;
    studentId?: Prisma.StringFilter<"Enrollment"> | string;
    classGroupId?: Prisma.StringFilter<"Enrollment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Enrollment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Enrollment"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    classGroup?: Prisma.XOR<Prisma.ClassGroupScalarRelationFilter, Prisma.ClassGroupWhereInput>;
};
export type EnrollmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    classGroupId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    student?: Prisma.StudentOrderByWithRelationInput;
    classGroup?: Prisma.ClassGroupOrderByWithRelationInput;
};
export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    studentId_classGroupId_startDate?: Prisma.EnrollmentStudentIdClassGroupIdStartDateCompoundUniqueInput;
    AND?: Prisma.EnrollmentWhereInput | Prisma.EnrollmentWhereInput[];
    OR?: Prisma.EnrollmentWhereInput[];
    NOT?: Prisma.EnrollmentWhereInput | Prisma.EnrollmentWhereInput[];
    startDate?: Prisma.DateTimeFilter<"Enrollment"> | Date | string;
    endDate?: Prisma.DateTimeNullableFilter<"Enrollment"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"Enrollment"> | boolean;
    studentId?: Prisma.StringFilter<"Enrollment"> | string;
    classGroupId?: Prisma.StringFilter<"Enrollment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Enrollment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Enrollment"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    classGroup?: Prisma.XOR<Prisma.ClassGroupScalarRelationFilter, Prisma.ClassGroupWhereInput>;
}, "id" | "studentId_classGroupId_startDate">;
export type EnrollmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    classGroupId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EnrollmentCountOrderByAggregateInput;
    _max?: Prisma.EnrollmentMaxOrderByAggregateInput;
    _min?: Prisma.EnrollmentMinOrderByAggregateInput;
};
export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.EnrollmentScalarWhereWithAggregatesInput | Prisma.EnrollmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.EnrollmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EnrollmentScalarWhereWithAggregatesInput | Prisma.EnrollmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Enrollment"> | string;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"Enrollment"> | Date | string;
    endDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Enrollment"> | Date | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Enrollment"> | boolean;
    studentId?: Prisma.StringWithAggregatesFilter<"Enrollment"> | string;
    classGroupId?: Prisma.StringWithAggregatesFilter<"Enrollment"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Enrollment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Enrollment"> | Date | string;
};
export type EnrollmentCreateInput = {
    id?: string;
    startDate?: Date | string;
    endDate?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutEnrollmentsInput;
    classGroup: Prisma.ClassGroupCreateNestedOneWithoutEnrollmentsInput;
};
export type EnrollmentUncheckedCreateInput = {
    id?: string;
    startDate?: Date | string;
    endDate?: Date | string | null;
    isActive?: boolean;
    studentId: string;
    classGroupId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EnrollmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutEnrollmentsNestedInput;
    classGroup?: Prisma.ClassGroupUpdateOneRequiredWithoutEnrollmentsNestedInput;
};
export type EnrollmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    classGroupId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentCreateManyInput = {
    id?: string;
    startDate?: Date | string;
    endDate?: Date | string | null;
    isActive?: boolean;
    studentId: string;
    classGroupId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EnrollmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    classGroupId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentListRelationFilter = {
    every?: Prisma.EnrollmentWhereInput;
    some?: Prisma.EnrollmentWhereInput;
    none?: Prisma.EnrollmentWhereInput;
};
export type EnrollmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnrollmentStudentIdClassGroupIdStartDateCompoundUniqueInput = {
    studentId: string;
    classGroupId: string;
    startDate: Date | string;
};
export type EnrollmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    classGroupId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnrollmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    classGroupId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnrollmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    classGroupId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnrollmentCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutStudentInput, Prisma.EnrollmentUncheckedCreateWithoutStudentInput> | Prisma.EnrollmentCreateWithoutStudentInput[] | Prisma.EnrollmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutStudentInput | Prisma.EnrollmentCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.EnrollmentCreateManyStudentInputEnvelope;
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
};
export type EnrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutStudentInput, Prisma.EnrollmentUncheckedCreateWithoutStudentInput> | Prisma.EnrollmentCreateWithoutStudentInput[] | Prisma.EnrollmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutStudentInput | Prisma.EnrollmentCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.EnrollmentCreateManyStudentInputEnvelope;
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
};
export type EnrollmentUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutStudentInput, Prisma.EnrollmentUncheckedCreateWithoutStudentInput> | Prisma.EnrollmentCreateWithoutStudentInput[] | Prisma.EnrollmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutStudentInput | Prisma.EnrollmentCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.EnrollmentUpsertWithWhereUniqueWithoutStudentInput | Prisma.EnrollmentUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.EnrollmentCreateManyStudentInputEnvelope;
    set?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    disconnect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    delete?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    update?: Prisma.EnrollmentUpdateWithWhereUniqueWithoutStudentInput | Prisma.EnrollmentUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.EnrollmentUpdateManyWithWhereWithoutStudentInput | Prisma.EnrollmentUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.EnrollmentScalarWhereInput | Prisma.EnrollmentScalarWhereInput[];
};
export type EnrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutStudentInput, Prisma.EnrollmentUncheckedCreateWithoutStudentInput> | Prisma.EnrollmentCreateWithoutStudentInput[] | Prisma.EnrollmentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutStudentInput | Prisma.EnrollmentCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.EnrollmentUpsertWithWhereUniqueWithoutStudentInput | Prisma.EnrollmentUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.EnrollmentCreateManyStudentInputEnvelope;
    set?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    disconnect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    delete?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    update?: Prisma.EnrollmentUpdateWithWhereUniqueWithoutStudentInput | Prisma.EnrollmentUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.EnrollmentUpdateManyWithWhereWithoutStudentInput | Prisma.EnrollmentUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.EnrollmentScalarWhereInput | Prisma.EnrollmentScalarWhereInput[];
};
export type EnrollmentCreateNestedManyWithoutClassGroupInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutClassGroupInput, Prisma.EnrollmentUncheckedCreateWithoutClassGroupInput> | Prisma.EnrollmentCreateWithoutClassGroupInput[] | Prisma.EnrollmentUncheckedCreateWithoutClassGroupInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutClassGroupInput | Prisma.EnrollmentCreateOrConnectWithoutClassGroupInput[];
    createMany?: Prisma.EnrollmentCreateManyClassGroupInputEnvelope;
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
};
export type EnrollmentUncheckedCreateNestedManyWithoutClassGroupInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutClassGroupInput, Prisma.EnrollmentUncheckedCreateWithoutClassGroupInput> | Prisma.EnrollmentCreateWithoutClassGroupInput[] | Prisma.EnrollmentUncheckedCreateWithoutClassGroupInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutClassGroupInput | Prisma.EnrollmentCreateOrConnectWithoutClassGroupInput[];
    createMany?: Prisma.EnrollmentCreateManyClassGroupInputEnvelope;
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
};
export type EnrollmentUpdateManyWithoutClassGroupNestedInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutClassGroupInput, Prisma.EnrollmentUncheckedCreateWithoutClassGroupInput> | Prisma.EnrollmentCreateWithoutClassGroupInput[] | Prisma.EnrollmentUncheckedCreateWithoutClassGroupInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutClassGroupInput | Prisma.EnrollmentCreateOrConnectWithoutClassGroupInput[];
    upsert?: Prisma.EnrollmentUpsertWithWhereUniqueWithoutClassGroupInput | Prisma.EnrollmentUpsertWithWhereUniqueWithoutClassGroupInput[];
    createMany?: Prisma.EnrollmentCreateManyClassGroupInputEnvelope;
    set?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    disconnect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    delete?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    update?: Prisma.EnrollmentUpdateWithWhereUniqueWithoutClassGroupInput | Prisma.EnrollmentUpdateWithWhereUniqueWithoutClassGroupInput[];
    updateMany?: Prisma.EnrollmentUpdateManyWithWhereWithoutClassGroupInput | Prisma.EnrollmentUpdateManyWithWhereWithoutClassGroupInput[];
    deleteMany?: Prisma.EnrollmentScalarWhereInput | Prisma.EnrollmentScalarWhereInput[];
};
export type EnrollmentUncheckedUpdateManyWithoutClassGroupNestedInput = {
    create?: Prisma.XOR<Prisma.EnrollmentCreateWithoutClassGroupInput, Prisma.EnrollmentUncheckedCreateWithoutClassGroupInput> | Prisma.EnrollmentCreateWithoutClassGroupInput[] | Prisma.EnrollmentUncheckedCreateWithoutClassGroupInput[];
    connectOrCreate?: Prisma.EnrollmentCreateOrConnectWithoutClassGroupInput | Prisma.EnrollmentCreateOrConnectWithoutClassGroupInput[];
    upsert?: Prisma.EnrollmentUpsertWithWhereUniqueWithoutClassGroupInput | Prisma.EnrollmentUpsertWithWhereUniqueWithoutClassGroupInput[];
    createMany?: Prisma.EnrollmentCreateManyClassGroupInputEnvelope;
    set?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    disconnect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    delete?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    connect?: Prisma.EnrollmentWhereUniqueInput | Prisma.EnrollmentWhereUniqueInput[];
    update?: Prisma.EnrollmentUpdateWithWhereUniqueWithoutClassGroupInput | Prisma.EnrollmentUpdateWithWhereUniqueWithoutClassGroupInput[];
    updateMany?: Prisma.EnrollmentUpdateManyWithWhereWithoutClassGroupInput | Prisma.EnrollmentUpdateManyWithWhereWithoutClassGroupInput[];
    deleteMany?: Prisma.EnrollmentScalarWhereInput | Prisma.EnrollmentScalarWhereInput[];
};
export type EnrollmentCreateWithoutStudentInput = {
    id?: string;
    startDate?: Date | string;
    endDate?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classGroup: Prisma.ClassGroupCreateNestedOneWithoutEnrollmentsInput;
};
export type EnrollmentUncheckedCreateWithoutStudentInput = {
    id?: string;
    startDate?: Date | string;
    endDate?: Date | string | null;
    isActive?: boolean;
    classGroupId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EnrollmentCreateOrConnectWithoutStudentInput = {
    where: Prisma.EnrollmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnrollmentCreateWithoutStudentInput, Prisma.EnrollmentUncheckedCreateWithoutStudentInput>;
};
export type EnrollmentCreateManyStudentInputEnvelope = {
    data: Prisma.EnrollmentCreateManyStudentInput | Prisma.EnrollmentCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type EnrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.EnrollmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.EnrollmentUpdateWithoutStudentInput, Prisma.EnrollmentUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.EnrollmentCreateWithoutStudentInput, Prisma.EnrollmentUncheckedCreateWithoutStudentInput>;
};
export type EnrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.EnrollmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.EnrollmentUpdateWithoutStudentInput, Prisma.EnrollmentUncheckedUpdateWithoutStudentInput>;
};
export type EnrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.EnrollmentScalarWhereInput;
    data: Prisma.XOR<Prisma.EnrollmentUpdateManyMutationInput, Prisma.EnrollmentUncheckedUpdateManyWithoutStudentInput>;
};
export type EnrollmentScalarWhereInput = {
    AND?: Prisma.EnrollmentScalarWhereInput | Prisma.EnrollmentScalarWhereInput[];
    OR?: Prisma.EnrollmentScalarWhereInput[];
    NOT?: Prisma.EnrollmentScalarWhereInput | Prisma.EnrollmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Enrollment"> | string;
    startDate?: Prisma.DateTimeFilter<"Enrollment"> | Date | string;
    endDate?: Prisma.DateTimeNullableFilter<"Enrollment"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"Enrollment"> | boolean;
    studentId?: Prisma.StringFilter<"Enrollment"> | string;
    classGroupId?: Prisma.StringFilter<"Enrollment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Enrollment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Enrollment"> | Date | string;
};
export type EnrollmentCreateWithoutClassGroupInput = {
    id?: string;
    startDate?: Date | string;
    endDate?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutEnrollmentsInput;
};
export type EnrollmentUncheckedCreateWithoutClassGroupInput = {
    id?: string;
    startDate?: Date | string;
    endDate?: Date | string | null;
    isActive?: boolean;
    studentId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EnrollmentCreateOrConnectWithoutClassGroupInput = {
    where: Prisma.EnrollmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnrollmentCreateWithoutClassGroupInput, Prisma.EnrollmentUncheckedCreateWithoutClassGroupInput>;
};
export type EnrollmentCreateManyClassGroupInputEnvelope = {
    data: Prisma.EnrollmentCreateManyClassGroupInput | Prisma.EnrollmentCreateManyClassGroupInput[];
    skipDuplicates?: boolean;
};
export type EnrollmentUpsertWithWhereUniqueWithoutClassGroupInput = {
    where: Prisma.EnrollmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.EnrollmentUpdateWithoutClassGroupInput, Prisma.EnrollmentUncheckedUpdateWithoutClassGroupInput>;
    create: Prisma.XOR<Prisma.EnrollmentCreateWithoutClassGroupInput, Prisma.EnrollmentUncheckedCreateWithoutClassGroupInput>;
};
export type EnrollmentUpdateWithWhereUniqueWithoutClassGroupInput = {
    where: Prisma.EnrollmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.EnrollmentUpdateWithoutClassGroupInput, Prisma.EnrollmentUncheckedUpdateWithoutClassGroupInput>;
};
export type EnrollmentUpdateManyWithWhereWithoutClassGroupInput = {
    where: Prisma.EnrollmentScalarWhereInput;
    data: Prisma.XOR<Prisma.EnrollmentUpdateManyMutationInput, Prisma.EnrollmentUncheckedUpdateManyWithoutClassGroupInput>;
};
export type EnrollmentCreateManyStudentInput = {
    id?: string;
    startDate?: Date | string;
    endDate?: Date | string | null;
    isActive?: boolean;
    classGroupId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EnrollmentUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classGroup?: Prisma.ClassGroupUpdateOneRequiredWithoutEnrollmentsNestedInput;
};
export type EnrollmentUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    classGroupId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    classGroupId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentCreateManyClassGroupInput = {
    id?: string;
    startDate?: Date | string;
    endDate?: Date | string | null;
    isActive?: boolean;
    studentId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EnrollmentUpdateWithoutClassGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutEnrollmentsNestedInput;
};
export type EnrollmentUncheckedUpdateWithoutClassGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentUncheckedUpdateManyWithoutClassGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnrollmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    studentId?: boolean;
    classGroupId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    classGroup?: boolean | Prisma.ClassGroupDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enrollment"]>;
export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    studentId?: boolean;
    classGroupId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    classGroup?: boolean | Prisma.ClassGroupDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enrollment"]>;
export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    studentId?: boolean;
    classGroupId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    classGroup?: boolean | Prisma.ClassGroupDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["enrollment"]>;
export type EnrollmentSelectScalar = {
    id?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    studentId?: boolean;
    classGroupId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EnrollmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "startDate" | "endDate" | "isActive" | "studentId" | "classGroupId" | "createdAt" | "updatedAt", ExtArgs["result"]["enrollment"]>;
export type EnrollmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    classGroup?: boolean | Prisma.ClassGroupDefaultArgs<ExtArgs>;
};
export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    classGroup?: boolean | Prisma.ClassGroupDefaultArgs<ExtArgs>;
};
export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    classGroup?: boolean | Prisma.ClassGroupDefaultArgs<ExtArgs>;
};
export type $EnrollmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Enrollment";
    objects: {
        student: Prisma.$StudentPayload<ExtArgs>;
        classGroup: Prisma.$ClassGroupPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        startDate: Date;
        endDate: Date | null;
        isActive: boolean;
        studentId: string;
        classGroupId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["enrollment"]>;
    composites: {};
};
export type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload, S>;
export type EnrollmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EnrollmentCountAggregateInputType | true;
};
export interface EnrollmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'];
        meta: {
            name: 'Enrollment';
        };
    };
    findUnique<T extends EnrollmentFindUniqueArgs>(args: Prisma.SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EnrollmentFindFirstArgs>(args?: Prisma.SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EnrollmentFindManyArgs>(args?: Prisma.SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EnrollmentCreateArgs>(args: Prisma.SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EnrollmentCreateManyArgs>(args?: Prisma.SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EnrollmentDeleteArgs>(args: Prisma.SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EnrollmentUpdateArgs>(args: Prisma.SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EnrollmentUpdateManyArgs>(args: Prisma.SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EnrollmentUpsertArgs>(args: Prisma.SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma.Prisma__EnrollmentClient<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EnrollmentCountArgs>(args?: Prisma.Subset<T, EnrollmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EnrollmentCountAggregateOutputType> : number>;
    aggregate<T extends EnrollmentAggregateArgs>(args: Prisma.Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>;
    groupBy<T extends EnrollmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EnrollmentGroupByArgs['orderBy'];
    } : {
        orderBy?: EnrollmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EnrollmentFieldRefs;
}
export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    classGroup<T extends Prisma.ClassGroupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClassGroupDefaultArgs<ExtArgs>>): Prisma.Prisma__ClassGroupClient<runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EnrollmentFieldRefs {
    readonly id: Prisma.FieldRef<"Enrollment", 'String'>;
    readonly startDate: Prisma.FieldRef<"Enrollment", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Enrollment", 'DateTime'>;
    readonly isActive: Prisma.FieldRef<"Enrollment", 'Boolean'>;
    readonly studentId: Prisma.FieldRef<"Enrollment", 'String'>;
    readonly classGroupId: Prisma.FieldRef<"Enrollment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Enrollment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Enrollment", 'DateTime'>;
}
export type EnrollmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where: Prisma.EnrollmentWhereUniqueInput;
};
export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where: Prisma.EnrollmentWhereUniqueInput;
};
export type EnrollmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EnrollmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EnrollmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnrollmentCreateInput, Prisma.EnrollmentUncheckedCreateInput>;
};
export type EnrollmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EnrollmentCreateManyInput | Prisma.EnrollmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    data: Prisma.EnrollmentCreateManyInput | Prisma.EnrollmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EnrollmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnrollmentUpdateInput, Prisma.EnrollmentUncheckedUpdateInput>;
    where: Prisma.EnrollmentWhereUniqueInput;
};
export type EnrollmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EnrollmentUpdateManyMutationInput, Prisma.EnrollmentUncheckedUpdateManyInput>;
    where?: Prisma.EnrollmentWhereInput;
    limit?: number;
};
export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnrollmentUpdateManyMutationInput, Prisma.EnrollmentUncheckedUpdateManyInput>;
    where?: Prisma.EnrollmentWhereInput;
    limit?: number;
    include?: Prisma.EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EnrollmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where: Prisma.EnrollmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnrollmentCreateInput, Prisma.EnrollmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EnrollmentUpdateInput, Prisma.EnrollmentUncheckedUpdateInput>;
};
export type EnrollmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where: Prisma.EnrollmentWhereUniqueInput;
};
export type EnrollmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnrollmentWhereInput;
    limit?: number;
};
export type EnrollmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
};
export {};
