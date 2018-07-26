import { Injectable } from "@angular/core";
import { Expense } from "./expense";

@Injectable()
export class ExpensesService {
    private expenses: Expense[] = [
        { description: 'Laptop', amount: 1550.5, date: new Date(2018, 5, 17) },
        { description: 'Auto', amount: 55235.5, date: new Date(2018, 7, 7) },
        { description: 'Lunch', amount: 15.5, date: new Date(2018, 3, 28) },
    ];
    getExpenses() {
        return this.expenses;
    }

    addExpense(expense : Expense) {
        this.expenses.push(expense);
    }

    deleteExpense(expense : Expense) {
        const index = this.expenses.indexOf(expense);
        this.expenses.slice(index, 1);
        return this.expenses;
    }
}

@Injectable()
export class ExpensesServiceMock {
    private expenses: Expense[] = [
        { description: 'Laptop', amount: 1550.5, date: new Date(2018, 5, 17) }
    ];
    getExpenses() {
        return this.expenses;
    }

    addExpense(expense : Expense) {
        this.expenses.push(expense);
    }

    deleteExpense(expense : Expense) {
        const index = this.expenses.indexOf(expense);
        this.expenses.slice(index, 1);
        return this.expenses;
    }
}