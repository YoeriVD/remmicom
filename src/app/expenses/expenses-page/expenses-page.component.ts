import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { Expense } from '../expense';
import { ExpensesService } from '../expenses.service';


@Component({
  selector: 'app-expenses-page',
  templateUrl: './expenses-page.component.html',
  styleUrls: ['./expenses-page.component.css']
})
export class ExpensesPageComponent implements OnInit {
  config: any = {
    description : 'MyCustomDesc'
  };

  search = new FormControl();
  search$: Observable<Expense[]>;
  newExpenses$ = new Subject<Expense[]>();
  expenses$: Observable<Expense[]>;

  constructor(private expensesService: ExpensesService) {
  }
  ngOnInit(): void {

    this.search$ = this.search
      .valueChanges
      .pipe(
        filter(value => !value || value.length > 1),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(searchValue => this.expensesService.getExpenses(searchValue))
      );

    this.expenses$ = merge(
      this.expensesService.getExpenses(),
      this.search$,
      this.newExpenses$
    );
  }

  addExpenseToList(expense) {
    combineLatest(
      this.expenses$,
      this.expensesService.addExpense(expense)
    )
      .pipe(
        map(([expenses, newExpense]) => {
          expenses.push(newExpense);
          return expenses;
        }),
        takeUntil(this.newExpenses$)
      ).subscribe(expenses => this.newExpenses$.next(expenses));
  }


}
