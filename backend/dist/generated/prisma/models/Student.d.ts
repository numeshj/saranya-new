import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentPayload>;
export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
export type StudentMinAggregateOutputType = {
    id: string | null;
    fullName: string | null;
    phone: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentMaxAggregateOutputType = {
    id: string | null;
    fullName: string | null;
    phone: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentCountAggregateOutputType = {
    id: number;
    fullName: number;
    phone: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StudentMinAggregateInputType = {
    id?: true;
    fullName?: true;
    phone?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentMaxAggregateInputType = {
    id?: true;
    fullName?: true;
    phone?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentCountAggregateInputType = {
    id?: true;
    fullName?: true;
    phone?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StudentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentCountAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudent[P]> : Prisma.GetScalarType<T[P], AggregateStudent[P]>;
};
export type StudentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithAggregationInput | Prisma.StudentOrderByWithAggregationInput[];
    by: Prisma.StudentScalarFieldEnum[] | Prisma.StudentScalarFieldEnum;
    having?: Prisma.StudentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type StudentGroupByOutputType = {
    id: string;
    fullName: string;
    phone: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: StudentCountAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]>;
}>>;
export type StudentWhereInput = {
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    id?: Prisma.StringFilter<"Student"> | string;
    fullName?: Prisma.StringFilter<"Student"> | string;
    phone?: Prisma.StringNullableFilter<"Student"> | string | null;
    isActive?: Prisma.BoolFilter<"Student"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Student"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Student"> | Date | string;
    qrTokens?: Prisma.StudentQrTokenListRelationFilter;
    enrollments?: Prisma.EnrollmentListRelationFilter;
};
export type StudentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    qrTokens?: Prisma.StudentQrTokenOrderByRelationAggregateInput;
    enrollments?: Prisma.EnrollmentOrderByRelationAggregateInput;
};
export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    fullName?: Prisma.StringFilter<"Student"> | string;
    phone?: Prisma.StringNullableFilter<"Student"> | string | null;
    isActive?: Prisma.BoolFilter<"Student"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Student"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Student"> | Date | string;
    qrTokens?: Prisma.StudentQrTokenListRelationFilter;
    enrollments?: Prisma.EnrollmentListRelationFilter;
}, "id">;
export type StudentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StudentCountOrderByAggregateInput;
    _max?: Prisma.StudentMaxOrderByAggregateInput;
    _min?: Prisma.StudentMinOrderByAggregateInput;
};
export type StudentScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Student"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Student"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Student"> | Date | string;
};
export type StudentCreateInput = {
    id?: string;
    fullName: string;
    phone?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    qrTokens?: Prisma.StudentQrTokenCreateNestedManyWithoutStudentInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateInput = {
    id?: string;
    fullName: string;
    phone?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    qrTokens?: Prisma.StudentQrTokenUncheckedCreateNestedManyWithoutStudentInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    qrTokens?: Prisma.StudentQrTokenUpdateManyWithoutStudentNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    qrTokens?: Prisma.StudentQrTokenUncheckedUpdateManyWithoutStudentNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateManyInput = {
    id?: string;
    fullName: string;
    phone?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentScalarRelationFilter = {
    is?: Prisma.StudentWhereInput;
    isNot?: Prisma.StudentWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type StudentCreateNestedOneWithoutQrTokensInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutQrTokensInput, Prisma.StudentUncheckedCreateWithoutQrTokensInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutQrTokensInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutQrTokensNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutQrTokensInput, Prisma.StudentUncheckedCreateWithoutQrTokensInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutQrTokensInput;
    upsert?: Prisma.StudentUpsertWithoutQrTokensInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutQrTokensInput, Prisma.StudentUpdateWithoutQrTokensInput>, Prisma.StudentUncheckedUpdateWithoutQrTokensInput>;
};
export type StudentCreateNestedOneWithoutEnrollmentsInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutEnrollmentsInput, Prisma.StudentUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutEnrollmentsInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutEnrollmentsInput, Prisma.StudentUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutEnrollmentsInput;
    upsert?: Prisma.StudentUpsertWithoutEnrollmentsInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutEnrollmentsInput, Prisma.StudentUpdateWithoutEnrollmentsInput>, Prisma.StudentUncheckedUpdateWithoutEnrollmentsInput>;
};
export type StudentCreateWithoutQrTokensInput = {
    id?: string;
    fullName: string;
    phone?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutQrTokensInput = {
    id?: string;
    fullName: string;
    phone?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutQrTokensInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutQrTokensInput, Prisma.StudentUncheckedCreateWithoutQrTokensInput>;
};
export type StudentUpsertWithoutQrTokensInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutQrTokensInput, Prisma.StudentUncheckedUpdateWithoutQrTokensInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutQrTokensInput, Prisma.StudentUncheckedCreateWithoutQrTokensInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutQrTokensInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutQrTokensInput, Prisma.StudentUncheckedUpdateWithoutQrTokensInput>;
};
export type StudentUpdateWithoutQrTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutQrTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateWithoutEnrollmentsInput = {
    id?: string;
    fullName: string;
    phone?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    qrTokens?: Prisma.StudentQrTokenCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutEnrollmentsInput = {
    id?: string;
    fullName: string;
    phone?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    qrTokens?: Prisma.StudentQrTokenUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutEnrollmentsInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutEnrollmentsInput, Prisma.StudentUncheckedCreateWithoutEnrollmentsInput>;
};
export type StudentUpsertWithoutEnrollmentsInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutEnrollmentsInput, Prisma.StudentUncheckedUpdateWithoutEnrollmentsInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutEnrollmentsInput, Prisma.StudentUncheckedCreateWithoutEnrollmentsInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutEnrollmentsInput, Prisma.StudentUncheckedUpdateWithoutEnrollmentsInput>;
};
export type StudentUpdateWithoutEnrollmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    qrTokens?: Prisma.StudentQrTokenUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutEnrollmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    qrTokens?: Prisma.StudentQrTokenUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCountOutputType = {
    qrTokens: number;
    enrollments: number;
};
export type StudentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    qrTokens?: boolean | StudentCountOutputTypeCountQrTokensArgs;
    enrollments?: boolean | StudentCountOutputTypeCountEnrollmentsArgs;
};
export type StudentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentCountOutputTypeSelect<ExtArgs> | null;
};
export type StudentCountOutputTypeCountQrTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentQrTokenWhereInput;
};
export type StudentCountOutputTypeCountEnrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnrollmentWhereInput;
};
export type StudentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    phone?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    qrTokens?: boolean | Prisma.Student$qrTokensArgs<ExtArgs>;
    enrollments?: boolean | Prisma.Student$enrollmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    phone?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["student"]>;
export type StudentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    phone?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["student"]>;
export type StudentSelectScalar = {
    id?: boolean;
    fullName?: boolean;
    phone?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StudentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fullName" | "phone" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>;
export type StudentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    qrTokens?: boolean | Prisma.Student$qrTokensArgs<ExtArgs>;
    enrollments?: boolean | Prisma.Student$enrollmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StudentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type StudentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $StudentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Student";
    objects: {
        qrTokens: Prisma.$StudentQrTokenPayload<ExtArgs>[];
        enrollments: Prisma.$EnrollmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fullName: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["student"]>;
    composites: {};
};
export type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentPayload, S>;
export type StudentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentCountAggregateInputType | true;
};
export interface StudentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Student'];
        meta: {
            name: 'Student';
        };
    };
    findUnique<T extends StudentFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentFindManyArgs>(args?: Prisma.SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentCreateArgs>(args: Prisma.SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentDeleteArgs>(args: Prisma.SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentUpdateArgs>(args: Prisma.SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentUpsertArgs>(args: Prisma.SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentCountArgs>(args?: Prisma.Subset<T, StudentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentCountAggregateOutputType> : number>;
    aggregate<T extends StudentAggregateArgs>(args: Prisma.Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>;
    groupBy<T extends StudentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentFieldRefs;
}
export interface Prisma__StudentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    qrTokens<T extends Prisma.Student$qrTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$qrTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentQrTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    enrollments<T extends Prisma.Student$enrollmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentFieldRefs {
    readonly id: Prisma.FieldRef<"Student", 'String'>;
    readonly fullName: Prisma.FieldRef<"Student", 'String'>;
    readonly phone: Prisma.FieldRef<"Student", 'String'>;
    readonly isActive: Prisma.FieldRef<"Student", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Student", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Student", 'DateTime'>;
}
export type StudentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
};
export type StudentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type StudentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type StudentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
};
export type StudentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type Student$qrTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentQrTokenSelect<ExtArgs> | null;
    omit?: Prisma.StudentQrTokenOmit<ExtArgs> | null;
    include?: Prisma.StudentQrTokenInclude<ExtArgs> | null;
    where?: Prisma.StudentQrTokenWhereInput;
    orderBy?: Prisma.StudentQrTokenOrderByWithRelationInput | Prisma.StudentQrTokenOrderByWithRelationInput[];
    cursor?: Prisma.StudentQrTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentQrTokenScalarFieldEnum | Prisma.StudentQrTokenScalarFieldEnum[];
};
export type Student$enrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
};
export {};
