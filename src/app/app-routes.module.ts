import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
    { path: 'home', component: HomeComponent, canActivate: [] },
    { path: 'expenses', loadChildren: './expenses/expenses.module#ExpensesModule' },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule {

}
