import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { inject } from '@angular/core/testing';
import { ExpensesService } from './expenses/expenses.service';
import { ExpensesModule } from './expenses/expenses.module';
import { CardComponent } from './card/card.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent, CardComponent
            ],
            imports: [ExpensesModule]
        }).compileComponents();
    }));

    it('should create the app', inject([ExpensesService], (service: ExpensesService) => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
