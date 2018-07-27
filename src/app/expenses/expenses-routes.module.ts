import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { ExpensesPageComponent } from "./expenses-page/expenses-page.component";
import { ExpenseComponent } from "./expense/expense.component";


const routes: Route[] = [
    { path: ':id', component: ExpenseComponent },
    { path: '', component: ExpensesPageComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpensesRoutesModule {

}