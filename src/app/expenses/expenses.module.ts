import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ExpenseComponent } from './expense/expense.component';
import { ExpensesFormComponent } from './expenses-form/expenses-form.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpensesPageComponent } from './expenses-page/expenses-page.component';
import { ExpensesRoutesModule } from './expenses-routes.module';
import { ExpensesService } from './expenses.service';
import { SearchPipe } from './search.pipe';
import { TableRow, ZoomDirective, ZoomTableDirective } from './zoom.directive';

export * from './expenses-form/expenses-form.component';
export * from './expenses-list/expenses-list.component';
export * from './expenses-page/expenses-page.component';
export * from './expenses.service';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, ExpensesRoutesModule
  ],
  declarations: [
    ExpensesListComponent,
    SearchPipe,
    ExpensesFormComponent,
    ZoomDirective,
    ZoomTableDirective,
    TableRow,
    ExpenseComponent,
    ExpensesPageComponent,
    CardComponent
  ],
  exports: [
    ExpensesListComponent,
    ExpensesPageComponent,
    SearchPipe,
    ExpensesFormComponent,
    ReactiveFormsModule,
    CardComponent
  ],
  providers: [
    { provide: ExpensesService, useClass: ExpensesService }
  ]
})
export class ExpensesModule { }
