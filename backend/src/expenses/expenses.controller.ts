import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtUser } from '../auth/jwt.strategy';
import { CreateExpenseCategoryDto } from './dto/create-expense-category.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ExpensesController {
  constructor(private readonly expenses: ExpensesService) {}

  // Categories
  @Post('categories')
  @Roles('ADMIN', 'STAFF')
  async createCategory(@Body() dto: CreateExpenseCategoryDto) {
    return this.expenses.createCategory(dto.name);
  }

  @Get('categories')
  @Roles('ADMIN', 'STAFF')
  async listCategories() {
    return this.expenses.listCategories();
  }

  // Expenses
  @Post()
  @Roles('ADMIN', 'STAFF')
  async createExpense(
    @Body() dto: CreateExpenseDto,
    @Req() req: Request & { user?: JwtUser },
  ) {
    return this.expenses.createExpense({
      categoryId: dto.categoryId,
      amount: dto.amount,
      method: dto.method,
      expenseDate: dto.expenseDate,
      notes: dto.notes,
      createdByUserId: req.user?.sub,
    });
  }

  @Get()
  @Roles('ADMIN', 'STAFF')
  async listExpenses(
    @Query('from') from?: string,
    @Query('to') to?: string,
    @Query('categoryId') categoryId?: string,
    @Query('limit', new ParseIntPipe({ optional: true })) limit?: number,
  ) {
    return this.expenses.listExpenses({ from, to, categoryId, limit });
  }

  @Get(':id')
  @Roles('ADMIN', 'STAFF')
  async getExpense(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.expenses.getExpense(id);
  }

  @Patch(':id')
  @Roles('ADMIN', 'STAFF')
  async updateExpense(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateExpenseDto,
  ) {
    return this.expenses.updateExpense(id, dto);
  }

  @Delete(':id')
  @Roles('ADMIN', 'STAFF')
  async deleteExpense(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.expenses.deleteExpense(id);
  }
}
