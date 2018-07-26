import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, startWith } from 'rxjs/operators';
import { Expense } from './expenses/expense';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  search = new FormControl();
  search$: Observable<string>;
  expenses: Expense[] = [
    { description: 'Laptop', amount: 1550.5, date: new Date(2018, 5, 17) },
    { description: 'Auto', amount: 55235.5, date: new Date(2018, 7, 7) },
    { description: 'Lunch', amount: 15.5, date: new Date(2018, 3, 28) },
  ];

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

  addExpenseToList(expense) {
    this.expenses.push(expense);
  }


}

