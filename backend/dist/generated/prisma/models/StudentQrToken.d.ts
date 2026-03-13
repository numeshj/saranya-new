import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentQrTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentQrTokenPayload>;
export type AggregateStudentQrToken = {
    _count: StudentQrTokenCountAggregateOutputType | null;
    _min: StudentQrTokenMinAggregateOutputType | null;
    _max: StudentQrTokenMaxAggregateOutputType | null;
};
export type StudentQrTokenMinAggregateOutputType = {
    id: string | null;
    token: string | null;
    isActive: boolean | null;
    studentId: string | null;
    issuedAt: Date | null;
    replacedAt: Date | null;
};
export type StudentQrTokenMaxAggregateOutputType = {
    id: string | null;
    token: string | null;
    isActive: boolean | null;
    studentId: string | null;
    issuedAt: Date | null;
    replacedAt: Date | null;
};
export type StudentQrTokenCountAggregateOutputType = {
    id: number;
    token: number;
    isActive: number;
    studentId: number;
    issuedAt: number;
    replacedAt: number;
    _all: number;
};
export type StudentQrTokenMinAggregateInputType = {
    id?: true;
    token?: true;
    isActive?: true;
    studentId?: true;
    issuedAt?: true;
    replacedAt?: true;
};
export type StudentQrTokenMaxAggregateInputType = {
    id?: true;
    token?: true;
    isActive?: true;
    studentId?: true;
    issuedAt?: true;
    replacedAt?: true;
};
export type StudentQrTokenCountAggregateInputType = {
    id?: true;
    token?: true;
    isActive?: true;
    studentId?: true;
    issuedAt?: true;
    replacedAt?: true;
    _all?: true;
};
export type StudentQrTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentQrTokenWhereInput;
    orderBy?: Prisma.StudentQrTokenOrderByWithRelationInput | Prisma.StudentQrTokenOrderByWithRelationInput[];
    cursor?: Prisma.StudentQrTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentQrTokenCountAggregateInputType;
    _min?: StudentQrTokenMinAggregateInputType;
    _max?: StudentQrTokenMaxAggregateInputType;
};
export type GetStudentQrTokenAggregateType<T extends StudentQrTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateStudentQrToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudentQrToken[P]> : Prisma.GetScalarType<T[P], AggregateStudentQrToken[P]>;
};
export type StudentQrTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentQrTokenWhereInput;
    orderBy?: Prisma.StudentQrTokenOrderByWithAggregationInput | Prisma.StudentQrTokenOrderByWithAggregationInput[];
    by: Prisma.StudentQrTokenScalarFieldEnum[] | Prisma.StudentQrTokenScalarFieldEnum;
    having?: Prisma.StudentQrTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentQrTokenCountAggregateInputType | true;
    _min?: StudentQrTokenMinAggregateInputType;
    _max?: StudentQrTokenMaxAggregateInputType;
};
export type StudentQrTokenGroupByOutputType = {
    id: string;
    token: string;
    isActive: boolean;
    studentId: string;
    issuedAt: Date;
    replacedAt: Date | null;
    _count: StudentQrTokenCountAggregateOutputType | null;
    _min: StudentQrTokenMinAggregateOutputType | null;
    _max: StudentQrTokenMaxAggregateOutputType | null;
};
type GetStudentQrTokenGroupByPayload<T extends StudentQrTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentQrTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentQrTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentQrTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentQrTokenGroupByOutputType[P]>;
}>>;
export type StudentQrTokenWhereInput = {
    AND?: Prisma.StudentQrTokenWhereInput | Prisma.StudentQrTokenWhereInput[];
    OR?: Prisma.StudentQrTokenWhereInput[];
    NOT?: Prisma.StudentQrTokenWhereInput | Prisma.StudentQrTokenWhereInput[];
    id?: Prisma.StringFilter<"StudentQrToken"> | string;
    token?: Prisma.StringFilter<"StudentQrToken"> | string;
    isActive?: Prisma.BoolFilter<"StudentQrToken"> | boolean;
    studentId?: Prisma.StringFilter<"StudentQrToken"> | string;
    issuedAt?: Prisma.DateTimeFilter<"StudentQrToken"> | Date | string;
    replacedAt?: Prisma.DateTimeNullableFilter<"StudentQrToken"> | Date | string | null;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
};
export type StudentQrTokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    replacedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    student?: Prisma.StudentOrderByWithRelationInput;
};
export type StudentQrTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    AND?: Prisma.StudentQrTokenWhereInput | Prisma.StudentQrTokenWhereInput[];
    OR?: Prisma.StudentQrTokenWhereInput[];
    NOT?: Prisma.StudentQrTokenWhereInput | Prisma.StudentQrTokenWhereInput[];
    isActive?: Prisma.BoolFilter<"StudentQrToken"> | boolean;
    studentId?: Prisma.StringFilter<"StudentQrToken"> | string;
    issuedAt?: Prisma.DateTimeFilter<"StudentQrToken"> | Date | string;
    replacedAt?: Prisma.DateTimeNullableFilter<"StudentQrToken"> | Date | string | null;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
}, "id" | "token">;
export type StudentQrTokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    replacedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.StudentQrTokenCountOrderByAggregateInput;
    _max?: Prisma.StudentQrTokenMaxOrderByAggregateInput;
    _min?: Prisma.StudentQrTokenMinOrderByAggregateInput;
};
export type StudentQrTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentQrTokenScalarWhereWithAggregatesInput | Prisma.StudentQrTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentQrTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentQrTokenScalarWhereWithAggregatesInput | Prisma.StudentQrTokenScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StudentQrToken"> | string;
    token?: Prisma.StringWithAggregatesFilter<"StudentQrToken"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"StudentQrToken"> | boolean;
    studentId?: Prisma.StringWithAggregatesFilter<"StudentQrToken"> | string;
    issuedAt?: Prisma.DateTimeWithAggregatesFilter<"StudentQrToken"> | Date | string;
    replacedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"StudentQrToken"> | Date | string | null;
};
export type StudentQrTokenCreateInput = {
    id?: string;
    token: string;
    isActive?: boolean;
    issuedAt?: Date | string;
    replacedAt?: Date | string | null;
    student: Prisma.StudentCreateNestedOneWithoutQrTokensInput;
};
export type StudentQrTokenUncheckedCreateInput = {
    id?: string;
    token: string;
    isActive?: boolean;
    studentId: string;
    issuedAt?: Date | string;
    replacedAt?: Date | string | null;
};
export type StudentQrTokenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replacedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    student?: Prisma.StudentUpdateOneRequiredWithoutQrTokensNestedInput;
};
export type StudentQrTokenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replacedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type StudentQrTokenCreateManyInput = {
    id?: string;
    token: string;
    isActive?: boolean;
    studentId: string;
    issuedAt?: Date | string;
    replacedAt?: Date | string | null;
};
export type StudentQrTokenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replacedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type StudentQrTokenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replacedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type StudentQrTokenListRelationFilter = {
    every?: Prisma.StudentQrTokenWhereInput;
    some?: Prisma.StudentQrTokenWhereInput;
    none?: Prisma.StudentQrTokenWhereInput;
};
export type StudentQrTokenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentQrTokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    replacedAt?: Prisma.SortOrder;
};
export type StudentQrTokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    replacedAt?: Prisma.SortOrder;
};
export type StudentQrTokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    replacedAt?: Prisma.SortOrder;
};
export type StudentQrTokenCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentQrTokenCreateWithoutStudentInput, Prisma.StudentQrTokenUncheckedCreateWithoutStudentInput> | Prisma.StudentQrTokenCreateWithoutStudentInput[] | Prisma.StudentQrTokenUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentQrTokenCreateOrConnectWithoutStudentInput | Prisma.StudentQrTokenCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentQrTokenCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentQrTokenWhereUniqueInput | Prisma.StudentQrTokenWhereUniqueInput[];
};
export type StudentQrTokenUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentQrTokenCreateWithoutStudentInput, Prisma.StudentQrTokenUncheckedCreateWithoutStudentInput> | Prisma.StudentQrTokenCreateWithoutStudentInput[] | Prisma.StudentQrTokenUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentQrTokenCreateOrConnectWithoutStudentInput | Prisma.StudentQrTokenCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentQrTokenCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentQrTokenWhereUniqueInput | Prisma.StudentQrTokenWhereUniqueInput[];
};
export type StudentQrTokenUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentQrTokenCreateWithoutStudentInput, Prisma.StudentQrTokenUncheckedCreateWithoutStudentInput> | Prisma.StudentQrTokenCreateWithoutStudentInput[] | Prisma.StudentQrTokenUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentQrTokenCreateOrConnectWithoutStudentInput | Prisma.StudentQrTokenCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentQrTokenUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentQrTokenUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentQrTokenCreateManyStudentInputEnvelope;
    set?: Prisma.StudentQrTokenWhereUniqueInput | Prisma.StudentQrTokenWhereUniqueInput[];
    disconnect?: Prisma.StudentQrTokenWhereUniqueInput | Prisma.StudentQrTokenWhereUniqueInput[];
    delete?: Prisma.StudentQrTokenWhereUniqueInput | Prisma.StudentQrTokenWhereUniqueInput[];
    connect?: Prisma.StudentQrTokenWhereUniqueInput | Prisma.StudentQrTokenWhereUniqueInput[];
    update?: Prisma.StudentQrTokenUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentQrTokenUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentQrTokenUpdateManyWithWhereWithoutStudentInput | Prisma.StudentQrTokenUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentQrTokenScalarWhereInput | Prisma.StudentQrTokenScalarWhereInput[];
};
export type StudentQrTokenUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentQrTokenCreateWithoutStudentInput, Prisma.StudentQrTokenUncheckedCreateWithoutStudentInput> | Prisma.StudentQrTokenCreateWithoutStudentInput[] | Prisma.StudentQrTokenUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentQrTokenCreateOrConnectWithoutStudentInput | Prisma.StudentQrTokenCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentQrTokenUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentQrTokenUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentQrTokenCreateManyStudentInputEnvelope;
    set?: Prisma.StudentQrTokenWhereUniqueInput | Prisma.StudentQrTokenWhereUniqueInput[];
    disconnect?: Prisma.StudentQrTokenWhereUniqueInput | Prisma.StudentQrTokenWhereUniqueInput[];
    delete?: Prisma.StudentQrTokenWhereUniqueInput | Prisma.StudentQrTokenWhereUniqueInput[];
    connect?: Prisma.StudentQrTokenWhereUniqueInput | Prisma.StudentQrTokenWhereUniqueInput[];
    update?: Prisma.StudentQrTokenUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentQrTokenUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentQrTokenUpdateManyWithWhereWithoutStudentInput | Prisma.StudentQrTokenUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentQrTokenScalarWhereInput | Prisma.StudentQrTokenScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type StudentQrTokenCreateWithoutStudentInput = {
    id?: string;
    token: string;
    isActive?: boolean;
    issuedAt?: Date | string;
    replacedAt?: Date | string | null;
};
export type StudentQrTokenUncheckedCreateWithoutStudentInput = {
    id?: string;
    token: string;
    isActive?: boolean;
    issuedAt?: Date | string;
    replacedAt?: Date | string | null;
};
export type StudentQrTokenCreateOrConnectWithoutStudentInput = {
    where: Prisma.StudentQrTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentQrTokenCreateWithoutStudentInput, Prisma.StudentQrTokenUncheckedCreateWithoutStudentInput>;
};
export type StudentQrTokenCreateManyStudentInputEnvelope = {
    data: Prisma.StudentQrTokenCreateManyStudentInput | Prisma.StudentQrTokenCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type StudentQrTokenUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentQrTokenWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentQrTokenUpdateWithoutStudentInput, Prisma.StudentQrTokenUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.StudentQrTokenCreateWithoutStudentInput, Prisma.StudentQrTokenUncheckedCreateWithoutStudentInput>;
};
export type StudentQrTokenUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentQrTokenWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentQrTokenUpdateWithoutStudentInput, Prisma.StudentQrTokenUncheckedUpdateWithoutStudentInput>;
};
export type StudentQrTokenUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.StudentQrTokenScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentQrTokenUpdateManyMutationInput, Prisma.StudentQrTokenUncheckedUpdateManyWithoutStudentInput>;
};
export type StudentQrTokenScalarWhereInput = {
    AND?: Prisma.StudentQrTokenScalarWhereInput | Prisma.StudentQrTokenScalarWhereInput[];
    OR?: Prisma.StudentQrTokenScalarWhereInput[];
    NOT?: Prisma.StudentQrTokenScalarWhereInput | Prisma.StudentQrTokenScalarWhereInput[];
    id?: Prisma.StringFilter<"StudentQrToken"> | string;
    token?: Prisma.StringFilter<"StudentQrToken"> | string;
    isActive?: Prisma.BoolFilter<"StudentQrToken"> | boolean;
    studentId?: Prisma.StringFilter<"StudentQrToken"> | string;
    issuedAt?: Prisma.DateTimeFilter<"StudentQrToken"> | Date | string;
    replacedAt?: Prisma.DateTimeNullableFilter<"StudentQrToken"> | Date | string | null;
};
export type StudentQrTokenCreateManyStudentInput = {
    id?: string;
    token: string;
    isActive?: boolean;
    issuedAt?: Date | string;
    replacedAt?: Date | string | null;
};
export type StudentQrTokenUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replacedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type StudentQrTokenUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replacedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type StudentQrTokenUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    replacedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type StudentQrTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    isActive?: boolean;
    studentId?: boolean;
    issuedAt?: boolean;
    replacedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentQrToken"]>;
export type StudentQrTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    isActive?: boolean;
    studentId?: boolean;
    issuedAt?: boolean;
    replacedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentQrToken"]>;
export type StudentQrTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    isActive?: boolean;
    studentId?: boolean;
    issuedAt?: boolean;
    replacedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentQrToken"]>;
export type StudentQrTokenSelectScalar = {
    id?: boolean;
    token?: boolean;
    isActive?: boolean;
    studentId?: boolean;
    issuedAt?: boolean;
    replacedAt?: boolean;
};
export type StudentQrTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "token" | "isActive" | "studentId" | "issuedAt" | "replacedAt", ExtArgs["result"]["studentQrToken"]>;
export type StudentQrTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type StudentQrTokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type StudentQrTokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type $StudentQrTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StudentQrToken";
    objects: {
        student: Prisma.$StudentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        token: string;
        isActive: boolean;
        studentId: string;
        issuedAt: Date;
        replacedAt: Date | null;
    }, ExtArgs["result"]["studentQrToken"]>;
    composites: {};
};
export type StudentQrTokenGetPayload<S extends boolean | null | undefined | StudentQrTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentQrTokenPayload, S>;
export type StudentQrTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentQrTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentQrTokenCountAggregateInputType | true;
};
export interface StudentQrTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StudentQrToken'];
        meta: {
            name: 'StudentQrToken';
        };
    };
    findUnique<T extends StudentQrTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentQrTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentQrTokenClient<runtime.Types.Result.GetResult<Prisma.$StudentQrTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentQrTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentQrTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentQrTokenClient<runtime.Types.Result.GetResult<Prisma.$StudentQrTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentQrTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentQrTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentQrTokenClient<runtime.Types.Result.GetResult<Prisma.$StudentQrTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentQrTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentQrTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentQrTokenClient<runtime.Types.Result.GetResult<Prisma.$StudentQrTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentQrTokenFindManyArgs>(args?: Prisma.SelectSubset<T, StudentQrTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentQrTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentQrTokenCreateArgs>(args: Prisma.SelectSubset<T, StudentQrTokenCreateArgs<ExtArgs>>): Prisma.Prisma__StudentQrTokenClient<runtime.Types.Result.GetResult<Prisma.$StudentQrTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentQrTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentQrTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentQrTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentQrTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentQrTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentQrTokenDeleteArgs>(args: Prisma.SelectSubset<T, StudentQrTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentQrTokenClient<runtime.Types.Result.GetResult<Prisma.$StudentQrTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentQrTokenUpdateArgs>(args: Prisma.SelectSubset<T, StudentQrTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentQrTokenClient<runtime.Types.Result.GetResult<Prisma.$StudentQrTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentQrTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentQrTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentQrTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentQrTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentQrTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentQrTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentQrTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentQrTokenUpsertArgs>(args: Prisma.SelectSubset<T, StudentQrTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentQrTokenClient<runtime.Types.Result.GetResult<Prisma.$StudentQrTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentQrTokenCountArgs>(args?: Prisma.Subset<T, StudentQrTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentQrTokenCountAggregateOutputType> : number>;
    aggregate<T extends StudentQrTokenAggregateArgs>(args: Prisma.Subset<T, StudentQrTokenAggregateArgs>): Prisma.PrismaPromise<GetStudentQrTokenAggregateType<T>>;
    groupBy<T extends StudentQrTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentQrTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentQrTokenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentQrTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentQrTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentQrTokenFieldRefs;
}
export interface Prisma__StudentQrTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentQrTokenFieldRefs {
    readonly id: Prisma.FieldRef<"StudentQrToken", 'String'>;
    readonly token: Prisma.FieldRef<"StudentQrToken", 'String'>;
    readonly isActive: Prisma.FieldRef<"StudentQrToken", 'Boolean'>;
    readonly studentId: Prisma.FieldRef<"StudentQrToken", 'String'>;
    readonly issuedAt: Prisma.FieldRef<"StudentQrToken", 'DateTime'>;
    readonly replacedAt: Prisma.FieldRef<"StudentQrToken", 'DateTime'>;
}
export type StudentQrTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentQrTokenSelect<ExtArgs> | null;
    omit?: Prisma.StudentQrTokenOmit<ExtArgs> | null;
    include?: Prisma.StudentQrTokenInclude<ExtArgs> | null;
    where: Prisma.StudentQrTokenWhereUniqueInput;
};
export type StudentQrTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentQrTokenSelect<ExtArgs> | null;
    omit?: Prisma.StudentQrTokenOmit<ExtArgs> | null;
    include?: Prisma.StudentQrTokenInclude<ExtArgs> | null;
    where: Prisma.StudentQrTokenWhereUniqueInput;
};
export type StudentQrTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentQrTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentQrTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentQrTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentQrTokenSelect<ExtArgs> | null;
    omit?: Prisma.StudentQrTokenOmit<ExtArgs> | null;
    include?: Prisma.StudentQrTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentQrTokenCreateInput, Prisma.StudentQrTokenUncheckedCreateInput>;
};
export type StudentQrTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentQrTokenCreateManyInput | Prisma.StudentQrTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentQrTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentQrTokenSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentQrTokenOmit<ExtArgs> | null;
    data: Prisma.StudentQrTokenCreateManyInput | Prisma.StudentQrTokenCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StudentQrTokenIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StudentQrTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentQrTokenSelect<ExtArgs> | null;
    omit?: Prisma.StudentQrTokenOmit<ExtArgs> | null;
    include?: Prisma.StudentQrTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentQrTokenUpdateInput, Prisma.StudentQrTokenUncheckedUpdateInput>;
    where: Prisma.StudentQrTokenWhereUniqueInput;
};
export type StudentQrTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentQrTokenUpdateManyMutationInput, Prisma.StudentQrTokenUncheckedUpdateManyInput>;
    where?: Prisma.StudentQrTokenWhereInput;
    limit?: number;
};
export type StudentQrTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentQrTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentQrTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentQrTokenUpdateManyMutationInput, Prisma.StudentQrTokenUncheckedUpdateManyInput>;
    where?: Prisma.StudentQrTokenWhereInput;
    limit?: number;
    include?: Prisma.StudentQrTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StudentQrTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentQrTokenSelect<ExtArgs> | null;
    omit?: Prisma.StudentQrTokenOmit<ExtArgs> | null;
    include?: Prisma.StudentQrTokenInclude<ExtArgs> | null;
    where: Prisma.StudentQrTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentQrTokenCreateInput, Prisma.StudentQrTokenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentQrTokenUpdateInput, Prisma.StudentQrTokenUncheckedUpdateInput>;
};
export type StudentQrTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentQrTokenSelect<ExtArgs> | null;
    omit?: Prisma.StudentQrTokenOmit<ExtArgs> | null;
    include?: Prisma.StudentQrTokenInclude<ExtArgs> | null;
    where: Prisma.StudentQrTokenWhereUniqueInput;
};
export type StudentQrTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentQrTokenWhereInput;
    limit?: number;
};
export type StudentQrTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentQrTokenSelect<ExtArgs> | null;
    omit?: Prisma.StudentQrTokenOmit<ExtArgs> | null;
    include?: Prisma.StudentQrTokenInclude<ExtArgs> | null;
};
export {};
