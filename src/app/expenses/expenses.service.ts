import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ExpensesService {
    private _baseUrl = 'http://localhost:9999/expenses';

    constructor(private http: HttpClient) {

    }
    getExpenseById(id: number) {
        return this.http.get<Expense>(`${this._baseUrl}/${id}`);
    }
    getExpenses(searchValue?: string) {
        if (searchValue) {
            const params = new HttpParams({
                fromObject: {
                    q: searchValue
                }
            });
            return this.http.get<Expense[]>(this._baseUrl, {
                params: params
            });
        } else { return this.http.get<Expense[]>(this._baseUrl); }
    }

    addExpense(expense: Expense) {
        return this.http.post<Expense>(this._baseUrl, expense);
    }

    deleteExpense(expense: Expense) {
        // const index = this.expenses.indexOf(expense);
        // this.expenses.slice(index, 1);
        // return this.expenses;
    }
}

// @Injectable()
// export class ExpensesServiceMock {
//     private expenses: Expense[] = [
//         { description: 'Laptop', amount: 1550.5, date: new Date(2018, 5, 17) }
//     ];
//     getExpenses() {
//         return this.expenses;
//     }

//     addExpense(expense: Expense) {
//         this.expenses.push(expense);
//     }

//     deleteExpense(expense: Expense) {
//         const index = this.expenses.indexOf(expense);
//         this.expenses.slice(index, 1);
//         return this.expenses;
//     }
// }
