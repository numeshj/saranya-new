import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GradeModel = runtime.Types.Result.DefaultSelection<Prisma.$GradePayload>;
export type AggregateGrade = {
    _count: GradeCountAggregateOutputType | null;
    _min: GradeMinAggregateOutputType | null;
    _max: GradeMaxAggregateOutputType | null;
};
export type GradeMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GradeMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GradeCountAggregateOutputType = {
    id: number;
    name: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GradeMinAggregateInputType = {
    id?: true;
    name?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GradeMaxAggregateInputType = {
    id?: true;
    name?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GradeCountAggregateInputType = {
    id?: true;
    name?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GradeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeWhereInput;
    orderBy?: Prisma.GradeOrderByWithRelationInput | Prisma.GradeOrderByWithRelationInput[];
    cursor?: Prisma.GradeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GradeCountAggregateInputType;
    _min?: GradeMinAggregateInputType;
    _max?: GradeMaxAggregateInputType;
};
export type GetGradeAggregateType<T extends GradeAggregateArgs> = {
    [P in keyof T & keyof AggregateGrade]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGrade[P]> : Prisma.GetScalarType<T[P], AggregateGrade[P]>;
};
export type GradeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeWhereInput;
    orderBy?: Prisma.GradeOrderByWithAggregationInput | Prisma.GradeOrderByWithAggregationInput[];
    by: Prisma.GradeScalarFieldEnum[] | Prisma.GradeScalarFieldEnum;
    having?: Prisma.GradeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GradeCountAggregateInputType | true;
    _min?: GradeMinAggregateInputType;
    _max?: GradeMaxAggregateInputType;
};
export type GradeGroupByOutputType = {
    id: string;
    name: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: GradeCountAggregateOutputType | null;
    _min: GradeMinAggregateOutputType | null;
    _max: GradeMaxAggregateOutputType | null;
};
type GetGradeGroupByPayload<T extends GradeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GradeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GradeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GradeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GradeGroupByOutputType[P]>;
}>>;
export type GradeWhereInput = {
    AND?: Prisma.GradeWhereInput | Prisma.GradeWhereInput[];
    OR?: Prisma.GradeWhereInput[];
    NOT?: Prisma.GradeWhereInput | Prisma.GradeWhereInput[];
    id?: Prisma.StringFilter<"Grade"> | string;
    name?: Prisma.StringFilter<"Grade"> | string;
    isActive?: Prisma.BoolFilter<"Grade"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Grade"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Grade"> | Date | string;
    classGroups?: Prisma.ClassGroupListRelationFilter;
};
export type GradeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    classGroups?: Prisma.ClassGroupOrderByRelationAggregateInput;
};
export type GradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.GradeWhereInput | Prisma.GradeWhereInput[];
    OR?: Prisma.GradeWhereInput[];
    NOT?: Prisma.GradeWhereInput | Prisma.GradeWhereInput[];
    isActive?: Prisma.BoolFilter<"Grade"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Grade"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Grade"> | Date | string;
    classGroups?: Prisma.ClassGroupListRelationFilter;
}, "id" | "name">;
export type GradeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GradeCountOrderByAggregateInput;
    _max?: Prisma.GradeMaxOrderByAggregateInput;
    _min?: Prisma.GradeMinOrderByAggregateInput;
};
export type GradeScalarWhereWithAggregatesInput = {
    AND?: Prisma.GradeScalarWhereWithAggregatesInput | Prisma.GradeScalarWhereWithAggregatesInput[];
    OR?: Prisma.GradeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GradeScalarWhereWithAggregatesInput | Prisma.GradeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Grade"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Grade"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Grade"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Grade"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Grade"> | Date | string;
};
export type GradeCreateInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classGroups?: Prisma.ClassGroupCreateNestedManyWithoutGradeInput;
};
export type GradeUncheckedCreateInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classGroups?: Prisma.ClassGroupUncheckedCreateNestedManyWithoutGradeInput;
};
export type GradeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classGroups?: Prisma.ClassGroupUpdateManyWithoutGradeNestedInput;
};
export type GradeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classGroups?: Prisma.ClassGroupUncheckedUpdateManyWithoutGradeNestedInput;
};
export type GradeCreateManyInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GradeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GradeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GradeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GradeScalarRelationFilter = {
    is?: Prisma.GradeWhereInput;
    isNot?: Prisma.GradeWhereInput;
};
export type GradeCreateNestedOneWithoutClassGroupsInput = {
    create?: Prisma.XOR<Prisma.GradeCreateWithoutClassGroupsInput, Prisma.GradeUncheckedCreateWithoutClassGroupsInput>;
    connectOrCreate?: Prisma.GradeCreateOrConnectWithoutClassGroupsInput;
    connect?: Prisma.GradeWhereUniqueInput;
};
export type GradeUpdateOneRequiredWithoutClassGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.GradeCreateWithoutClassGroupsInput, Prisma.GradeUncheckedCreateWithoutClassGroupsInput>;
    connectOrCreate?: Prisma.GradeCreateOrConnectWithoutClassGroupsInput;
    upsert?: Prisma.GradeUpsertWithoutClassGroupsInput;
    connect?: Prisma.GradeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GradeUpdateToOneWithWhereWithoutClassGroupsInput, Prisma.GradeUpdateWithoutClassGroupsInput>, Prisma.GradeUncheckedUpdateWithoutClassGroupsInput>;
};
export type GradeCreateWithoutClassGroupsInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GradeUncheckedCreateWithoutClassGroupsInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GradeCreateOrConnectWithoutClassGroupsInput = {
    where: Prisma.GradeWhereUniqueInput;
    create: Prisma.XOR<Prisma.GradeCreateWithoutClassGroupsInput, Prisma.GradeUncheckedCreateWithoutClassGroupsInput>;
};
export type GradeUpsertWithoutClassGroupsInput = {
    update: Prisma.XOR<Prisma.GradeUpdateWithoutClassGroupsInput, Prisma.GradeUncheckedUpdateWithoutClassGroupsInput>;
    create: Prisma.XOR<Prisma.GradeCreateWithoutClassGroupsInput, Prisma.GradeUncheckedCreateWithoutClassGroupsInput>;
    where?: Prisma.GradeWhereInput;
};
export type GradeUpdateToOneWithWhereWithoutClassGroupsInput = {
    where?: Prisma.GradeWhereInput;
    data: Prisma.XOR<Prisma.GradeUpdateWithoutClassGroupsInput, Prisma.GradeUncheckedUpdateWithoutClassGroupsInput>;
};
export type GradeUpdateWithoutClassGroupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeUncheckedUpdateWithoutClassGroupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GradeCountOutputType = {
    classGroups: number;
};
export type GradeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classGroups?: boolean | GradeCountOutputTypeCountClassGroupsArgs;
};
export type GradeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeCountOutputTypeSelect<ExtArgs> | null;
};
export type GradeCountOutputTypeCountClassGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassGroupWhereInput;
};
export type GradeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    classGroups?: boolean | Prisma.Grade$classGroupsArgs<ExtArgs>;
    _count?: boolean | Prisma.GradeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["grade"]>;
export type GradeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["grade"]>;
export type GradeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["grade"]>;
export type GradeSelectScalar = {
    id?: boolean;
    name?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GradeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["grade"]>;
export type GradeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classGroups?: boolean | Prisma.Grade$classGroupsArgs<ExtArgs>;
    _count?: boolean | Prisma.GradeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GradeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type GradeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $GradePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Grade";
    objects: {
        classGroups: Prisma.$ClassGroupPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["grade"]>;
    composites: {};
};
export type GradeGetPayload<S extends boolean | null | undefined | GradeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GradePayload, S>;
export type GradeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GradeCountAggregateInputType | true;
};
export interface GradeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Grade'];
        meta: {
            name: 'Grade';
        };
    };
    findUnique<T extends GradeFindUniqueArgs>(args: Prisma.SelectSubset<T, GradeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GradeClient<runtime.Types.Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GradeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GradeClient<runtime.Types.Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GradeFindFirstArgs>(args?: Prisma.SelectSubset<T, GradeFindFirstArgs<ExtArgs>>): Prisma.Prisma__GradeClient<runtime.Types.Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GradeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GradeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GradeClient<runtime.Types.Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GradeFindManyArgs>(args?: Prisma.SelectSubset<T, GradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GradeCreateArgs>(args: Prisma.SelectSubset<T, GradeCreateArgs<ExtArgs>>): Prisma.Prisma__GradeClient<runtime.Types.Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GradeCreateManyArgs>(args?: Prisma.SelectSubset<T, GradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GradeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GradeDeleteArgs>(args: Prisma.SelectSubset<T, GradeDeleteArgs<ExtArgs>>): Prisma.Prisma__GradeClient<runtime.Types.Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GradeUpdateArgs>(args: Prisma.SelectSubset<T, GradeUpdateArgs<ExtArgs>>): Prisma.Prisma__GradeClient<runtime.Types.Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GradeDeleteManyArgs>(args?: Prisma.SelectSubset<T, GradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GradeUpdateManyArgs>(args: Prisma.SelectSubset<T, GradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GradeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GradeUpsertArgs>(args: Prisma.SelectSubset<T, GradeUpsertArgs<ExtArgs>>): Prisma.Prisma__GradeClient<runtime.Types.Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GradeCountArgs>(args?: Prisma.Subset<T, GradeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GradeCountAggregateOutputType> : number>;
    aggregate<T extends GradeAggregateArgs>(args: Prisma.Subset<T, GradeAggregateArgs>): Prisma.PrismaPromise<GetGradeAggregateType<T>>;
    groupBy<T extends GradeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GradeGroupByArgs['orderBy'];
    } : {
        orderBy?: GradeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GradeFieldRefs;
}
export interface Prisma__GradeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    classGroups<T extends Prisma.Grade$classGroupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Grade$classGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GradeFieldRefs {
    readonly id: Prisma.FieldRef<"Grade", 'String'>;
    readonly name: Prisma.FieldRef<"Grade", 'String'>;
    readonly isActive: Prisma.FieldRef<"Grade", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Grade", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Grade", 'DateTime'>;
}
export type GradeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeSelect<ExtArgs> | null;
    omit?: Prisma.GradeOmit<ExtArgs> | null;
    include?: Prisma.GradeInclude<ExtArgs> | null;
    where: Prisma.GradeWhereUniqueInput;
};
export type GradeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeSelect<ExtArgs> | null;
    omit?: Prisma.GradeOmit<ExtArgs> | null;
    include?: Prisma.GradeInclude<ExtArgs> | null;
    where: Prisma.GradeWhereUniqueInput;
};
export type GradeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeSelect<ExtArgs> | null;
    omit?: Prisma.GradeOmit<ExtArgs> | null;
    include?: Prisma.GradeInclude<ExtArgs> | null;
    where?: Prisma.GradeWhereInput;
    orderBy?: Prisma.GradeOrderByWithRelationInput | Prisma.GradeOrderByWithRelationInput[];
    cursor?: Prisma.GradeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeScalarFieldEnum | Prisma.GradeScalarFieldEnum[];
};
export type GradeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeSelect<ExtArgs> | null;
    omit?: Prisma.GradeOmit<ExtArgs> | null;
    include?: Prisma.GradeInclude<ExtArgs> | null;
    where?: Prisma.GradeWhereInput;
    orderBy?: Prisma.GradeOrderByWithRelationInput | Prisma.GradeOrderByWithRelationInput[];
    cursor?: Prisma.GradeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeScalarFieldEnum | Prisma.GradeScalarFieldEnum[];
};
export type GradeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeSelect<ExtArgs> | null;
    omit?: Prisma.GradeOmit<ExtArgs> | null;
    include?: Prisma.GradeInclude<ExtArgs> | null;
    where?: Prisma.GradeWhereInput;
    orderBy?: Prisma.GradeOrderByWithRelationInput | Prisma.GradeOrderByWithRelationInput[];
    cursor?: Prisma.GradeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GradeScalarFieldEnum | Prisma.GradeScalarFieldEnum[];
};
export type GradeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeSelect<ExtArgs> | null;
    omit?: Prisma.GradeOmit<ExtArgs> | null;
    include?: Prisma.GradeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradeCreateInput, Prisma.GradeUncheckedCreateInput>;
};
export type GradeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GradeCreateManyInput | Prisma.GradeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GradeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GradeOmit<ExtArgs> | null;
    data: Prisma.GradeCreateManyInput | Prisma.GradeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GradeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeSelect<ExtArgs> | null;
    omit?: Prisma.GradeOmit<ExtArgs> | null;
    include?: Prisma.GradeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradeUpdateInput, Prisma.GradeUncheckedUpdateInput>;
    where: Prisma.GradeWhereUniqueInput;
};
export type GradeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GradeUpdateManyMutationInput, Prisma.GradeUncheckedUpdateManyInput>;
    where?: Prisma.GradeWhereInput;
    limit?: number;
};
export type GradeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GradeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GradeUpdateManyMutationInput, Prisma.GradeUncheckedUpdateManyInput>;
    where?: Prisma.GradeWhereInput;
    limit?: number;
};
export type GradeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeSelect<ExtArgs> | null;
    omit?: Prisma.GradeOmit<ExtArgs> | null;
    include?: Prisma.GradeInclude<ExtArgs> | null;
    where: Prisma.GradeWhereUniqueInput;
    create: Prisma.XOR<Prisma.GradeCreateInput, Prisma.GradeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GradeUpdateInput, Prisma.GradeUncheckedUpdateInput>;
};
export type GradeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeSelect<ExtArgs> | null;
    omit?: Prisma.GradeOmit<ExtArgs> | null;
    include?: Prisma.GradeInclude<ExtArgs> | null;
    where: Prisma.GradeWhereUniqueInput;
};
export type GradeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GradeWhereInput;
    limit?: number;
};
export type Grade$classGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GradeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GradeSelect<ExtArgs> | null;
    omit?: Prisma.GradeOmit<ExtArgs> | null;
    include?: Prisma.GradeInclude<ExtArgs> | null;
};
export {};
