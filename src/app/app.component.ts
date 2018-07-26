import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Expense } from './expense';
import { filter, debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  expenseForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    amount: new FormControl(),
    date: new FormControl()
  });
  search = new FormControl();
  search$: Observable<string>;
  expenses: Expense[] = [
    { description: 'Laptop', amount: 1550.5, date: new Date(2018, 5, 17) },
    { description: 'Auto', amount: 55235.5, date: new Date(2018, 7, 7) },
    { description: 'Lunch', amount: 15.5, date: new Date(2018, 3, 28) },
  ]

  ngOnInit(): void {
    this.search$ = this.search
      .valueChanges
      .pipe(
        startWith(''),
        filter(value => !value || value.length > 1),
        debounceTime(250),
        distinctUntilChanged()
      );
  }

  addExpense() {
    if (this.expenseForm.valid) {
      this.expenses.push(this.expenseForm.value);
    }
  }

  deleteExpense(expense: Expense) {
    this.expenses = this
      .expenses
      .filter(exp => exp !== expense);
  }
}

