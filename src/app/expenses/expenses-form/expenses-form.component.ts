import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Expense } from '../expense';

@Component({
  selector: 'app-expenses-form',
  templateUrl: './expenses-form.component.html',
  styleUrls: ['./expenses-form.component.css'],
  exportAs: 'expenseFormComponent'
})
export class ExpensesFormComponent implements OnInit {
  @Output() newExpense = new EventEmitter<Expense>();
  expenseForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    amount: new FormControl(),
    date: new FormControl()
  });
  constructor() { }

  ngOnInit() {
  }

  addExpense() {
    if (this.expenseForm.valid) {
      this.newExpense.emit(this.expenseForm.value);
      this.expenseForm.reset();
    }
  }
}
