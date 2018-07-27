import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense';
import { ExpensesService } from '../expenses.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expense$: Observable<Expense>;
  constructor(private service: ExpensesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.expense$ = this
      .route
      .paramMap
      .pipe(
        map(paramMap => +paramMap.get('id')),
        switchMap(id => this.service.getExpenseById(id))
      );
  }

}
