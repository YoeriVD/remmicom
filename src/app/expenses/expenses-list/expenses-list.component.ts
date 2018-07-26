import { Component, Input } from '@angular/core';
import { Expense } from '../expense';

@Component({
    selector: 'app-expenses-list',
    templateUrl: './expenses-list.component.html',
    styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent {
    @Input() expenses: Expense[];


    deleteExpense(expense: Expense) {
        this.expenses = this
            .expenses
            .filter(exp => exp !== expense);
    }
}
