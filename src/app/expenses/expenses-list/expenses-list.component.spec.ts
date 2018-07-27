import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ExpensesListComponent } from './expenses-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('ExpenseListComponent', () => {
    let fixture: ComponentFixture<ExpensesListComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExpensesListComponent],
            imports: [],
            providers: [],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        fixture = TestBed.createComponent(ExpensesListComponent);
    });
    it('should render 2 rows', () => {
        const component = fixture.componentInstance;
        component.expenses = [
            { description: '', amount: 15, date: new Date(2018, 5, 5) },
            { description: '', amount: 15, date: new Date(2018, 5, 5) }
        ];
        fixture.detectChanges();
        expect(
            fixture.nativeElement.querySelectorAll('tbody tr').length
        ).toBe(2);
    });
});



























// describe('ExpensesList component', () => {
//     let fixture: ComponentFixture<ExpensesListComponent>;
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             declarations: [ExpensesListComponent]
//         }).compileComponents();
//         fixture = TestBed.createComponent(ExpensesListComponent);
//     })

//     it('should render 2 rows', () => {
//         const rows: Expense[] = [
//             { amount: 15.5, date: new Date(2017, 5, 5), description: '' },
//             { amount: 15.5, date: new Date(2017, 5, 5), description: '' }
//         ]
//         fixture.componentInstance.expenses = rows;
//         fixture.detectChanges();
//         expect(
//             fixture.nativeElement.querySelectorAll('tbody tr').length
//         )
//         .toBe(2);
//     });
// });
