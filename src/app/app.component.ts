import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, startWith } from 'rxjs/operators';
import { Expense } from './expenses/expense';
import { ExpensesService } from './expenses/expenses.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  search = new FormControl();
  search$: Observable<string>;
  expenses: Expense[];

  constructor(private expensesService: ExpensesService) {

  }

  ngOnInit(): void {
    this.expenses = this.expensesService.getExpenses();
    this.search$ = this.search
      .valueChanges
      .pipe(
        startWith(''),
        filter(value => !value || value.length > 1),
        debounceTime(250),
        distinctUntilChanged()
      );
  }

  addExpenseToList(expense) {
    this.expensesService.addExpense(expense);
  }


}

