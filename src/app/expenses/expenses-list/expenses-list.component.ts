import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Expense } from '../expense';

@Component({
    selector: 'app-expenses-list',
    templateUrl: './expenses-list.component.html',
    styleUrls: ['./expenses-list.component.css'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpensesListComponent {

    @Input() expenses: Expense[];
    @Input() config: any;
    // constructor(private changeRef: ChangeDetectorRef) { }

    deleteExpense(expense: Expense) {
        this.expenses = this
            .expenses
            .filter(exp => exp !== expense);
    }
    _previousConfig: any = {};
    // ngDoCheck(): void {
    //     console.log(this._previousConfig, this.config);
    //     if (this._previousConfig.description !== this.config.description) {
    //         this.changeRef.markForCheck();
    //     }
    //     Object.assign(this._previousConfig, this.config);
    // }
}
