import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  Decimal,
  PrismaClientKnownRequestError,
} from '@prisma/client/runtime/library';
import { PrismaService } from '../prisma/prisma.service';

type PaymentMethodInput = 'CASH' | 'CARD' | 'BANK_TRANSFER';

@Injectable()
export class ExpensesService {
  constructor(private readonly prisma: PrismaService) {}

  private get prismaAny(): any {
    return this.prisma as any;
  }

  async createCategory(name: string) {
    const trimmed = name.trim();
    if (trimmed.length < 2) {
      throw new BadRequestException('Category name too short');
    }

    try {
      return await this.prismaAny.expenseCategory.create({
        data: { name: trimmed },
        select: {
          id: true,
          name: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new BadRequestException('Category already exists');
      }
      throw error;
    }
  }

  async listCategories() {
    return this.prismaAny.expenseCategory.findMany({
      orderBy: { name: 'asc' },
      select: { id: true, name: true, isActive: true },
    });
  }

  async createExpense(input: {
    categoryId: string;
    amount: string;
    method?: PaymentMethodInput;
    expenseDate?: string;
    notes?: string;
    createdByUserId?: string;
  }) {
    const category = await this.prismaAny.expenseCategory.findUnique({
      where: { id: input.categoryId },
      select: { id: true, isActive: true },
    });

    if (!category || !category.isActive) {
      throw new NotFoundException('Expense category not found or inactive');
    }

    const amount = new Decimal(input.amount);
    if (amount.lessThanOrEqualTo(0)) {
      throw new BadRequestException('amount must be > 0');
    }

    const expenseDate = input.expenseDate ? new Date(input.expenseDate) : new Date();
    if (Number.isNaN(expenseDate.getTime())) {
      throw new BadRequestException('Invalid expenseDate');
    }

    return this.prismaAny.expense.create({
      data: {
        categoryId: input.categoryId,
        amount,
        method: input.method ?? 'CASH',
        notes: input.notes,
        expenseDate,
        createdByUserId: input.createdByUserId ?? null,
      },
      select: {
        id: true,
        expenseDate: true,
        amount: true,
        method: true,
        notes: true,
        createdAt: true,
        category: { select: { id: true, name: true } },
      },
    });
  }

  async listExpenses(params: {
    from?: string;
    to?: string;
    categoryId?: string;
    limit?: number;
  }) {
    const where: any = {};

    if (params.categoryId) {
      where.categoryId = params.categoryId;
    }

    if (params.from || params.to) {
      where.expenseDate = {};
      if (params.from) {
        const from = new Date(params.from);
        if (Number.isNaN(from.getTime())) throw new BadRequestException('Invalid from');
        where.expenseDate.gte = from;
      }
      if (params.to) {
        const to = new Date(params.to);
        if (Number.isNaN(to.getTime())) throw new BadRequestException('Invalid to');
        where.expenseDate.lte = to;
      }
    }

    const take = params.limit ? Math.min(Math.max(params.limit, 1), 200) : 50;

    return this.prismaAny.expense.findMany({
      where,
      take,
      orderBy: { expenseDate: 'desc' },
      select: {
        id: true,
        expenseDate: true,
        amount: true,
        method: true,
        notes: true,
        createdAt: true,
        category: { select: { id: true, name: true } },
      },
    });
  }

  async summary(params: {
    from?: string;
    to?: string;
    categoryId?: string;
  }) {
    const where: any = {};

    if (params.categoryId) {
      where.categoryId = params.categoryId;
    }

    if (params.from || params.to) {
      where.expenseDate = {};
      if (params.from) {
        const from = new Date(params.from);
        if (Number.isNaN(from.getTime())) throw new BadRequestException('Invalid from');
        where.expenseDate.gte = from;
      }
      if (params.to) {
        const to = new Date(params.to);
        if (Number.isNaN(to.getTime())) throw new BadRequestException('Invalid to');
        where.expenseDate.lte = to;
      }
    }

    const [overall, byCategoryRaw, byMethodRaw] = await Promise.all([
      this.prismaAny.expense.aggregate({
        where,
        _count: { _all: true },
        _sum: { amount: true },
      }),
      this.prismaAny.expense.groupBy({
        by: ['categoryId'],
        where,
        _count: { _all: true },
        _sum: { amount: true },
      }),
      this.prismaAny.expense.groupBy({
        by: ['method'],
        where,
        _count: { _all: true },
        _sum: { amount: true },
      }),
    ]);

    const categoryIds = byCategoryRaw.map((r: any) => r.categoryId);
    const categories = categoryIds.length
      ? await this.prismaAny.expenseCategory.findMany({
          where: { id: { in: categoryIds } },
          select: { id: true, name: true },
        })
      : [];
    const categoryNameById = new Map<string, string>(
      categories.map((c: any) => [c.id, c.name]),
    );

    const totalAmount: Decimal = overall._sum.amount ?? new Decimal(0);
    const count: number = overall._count._all ?? 0;

    return {
      filters: {
        from: params.from ?? null,
        to: params.to ?? null,
        categoryId: params.categoryId ?? null,
      },
      totals: {
        count,
        amount: totalAmount.toString(),
      },
      byCategory: byCategoryRaw
        .map((r: any) => {
          const amount: Decimal = r._sum.amount ?? new Decimal(0);
          return {
            categoryId: r.categoryId,
            categoryName: categoryNameById.get(r.categoryId) ?? null,
            count: r._count._all ?? 0,
            amount: amount.toString(),
          };
        })
        .sort((a: any, b: any) => Number(b.amount) - Number(a.amount)),
      byMethod: byMethodRaw
        .map((r: any) => {
          const amount: Decimal = r._sum.amount ?? new Decimal(0);
          return {
            method: r.method,
            count: r._count._all ?? 0,
            amount: amount.toString(),
          };
        })
        .sort((a: any, b: any) => Number(b.amount) - Number(a.amount)),
    };
  }

  async getExpense(id: string) {
    const expense = await this.prismaAny.expense.findUnique({
      where: { id },
      select: {
        id: true,
        expenseDate: true,
        amount: true,
        method: true,
        notes: true,
        createdAt: true,
        updatedAt: true,
        category: { select: { id: true, name: true } },
      },
    });

    if (!expense) {
      throw new NotFoundException('Expense not found');
    }

    return expense;
  }

  async updateExpense(id: string, input: {
    categoryId?: string;
    amount?: string;
    method?: PaymentMethodInput;
    expenseDate?: string;
    notes?: string;
  }) {
    if (input.categoryId) {
      const cat = await this.prismaAny.expenseCategory.findUnique({
        where: { id: input.categoryId },
        select: { id: true, isActive: true },
      });
      if (!cat || !cat.isActive) {
        throw new NotFoundException('Expense category not found or inactive');
      }
    }

    const data: any = {};
    if (input.categoryId) data.categoryId = input.categoryId;
    if (input.method) data.method = input.method;
    if (typeof input.notes !== 'undefined') data.notes = input.notes;
    if (input.amount) {
      const amount = new Decimal(input.amount);
      if (amount.lessThanOrEqualTo(0)) throw new BadRequestException('amount must be > 0');
      data.amount = amount;
    }
    if (input.expenseDate) {
      const expenseDate = new Date(input.expenseDate);
      if (Number.isNaN(expenseDate.getTime())) throw new BadRequestException('Invalid expenseDate');
      data.expenseDate = expenseDate;
    }

    try {
      return await this.prismaAny.expense.update({
        where: { id },
        data,
        select: {
          id: true,
          expenseDate: true,
          amount: true,
          method: true,
          notes: true,
          updatedAt: true,
          category: { select: { id: true, name: true } },
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new NotFoundException('Expense not found');
      }
      throw error;
    }
  }

  async deleteExpense(id: string) {
    try {
      await this.prismaAny.expense.delete({ where: { id } });
      return { ok: true };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new NotFoundException('Expense not found');
      }
      throw error;
    }
  }
}
