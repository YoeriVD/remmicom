import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { SearchPipe } from './search.pipe';
import { ExpensesFormComponent } from './expenses-form/expenses-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [ExpensesListComponent, SearchPipe, ExpensesFormComponent],
  exports: [ExpensesListComponent, SearchPipe, ExpensesFormComponent]
})
export class ExpensesModule { }
