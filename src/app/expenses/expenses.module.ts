import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { SearchPipe } from './search.pipe';
import { ExpensesFormComponent } from './expenses-form/expenses-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpensesService, ExpensesServiceMock } from './expenses.service';
import { ZoomDirective, ZoomTableDirective, TableRow } from './zoom.directive';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [
    ExpensesListComponent,
    SearchPipe,
    ExpensesFormComponent,
    ZoomDirective,
    ZoomTableDirective,
    TableRow
  ],
  exports: [
    ExpensesListComponent,
    SearchPipe,
    ExpensesFormComponent,
    ReactiveFormsModule
  ],
  providers: [
    { provide: ExpensesService, useClass: ExpensesService }
  ]
})
export class ExpensesModule { }
