import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Observable, ReplaySubject, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, startWith, map, switchMap, takeUntil } from 'rxjs/operators';
import { Expense } from './expenses/expense';
import { ExpensesService } from './expenses/expenses.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  search = new FormControl();
  search$: Observable<Expense[]>;
  newExpenses$ = new ReplaySubject<Expense[]>(1);
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

