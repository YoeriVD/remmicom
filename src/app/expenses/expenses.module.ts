import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { SearchPipe } from './search.pipe';
import { ExpensesFormComponent } from './expenses-form/expenses-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpensesService, ExpensesServiceMock } from './expenses.service';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [ExpensesListComponent, SearchPipe, ExpensesFormComponent],
  exports: [ExpensesListComponent, SearchPipe, ExpensesFormComponent],
  providers: [
    { provide: ExpensesService, useClass: ExpensesServiceMock }
  ]
})
export class ExpensesModule { }
