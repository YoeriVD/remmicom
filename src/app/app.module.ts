import { registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl-BE';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ExpensesModule } from './expenses/expenses.module';


registerLocaleData(localeNL);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule,
    ExpensesModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-BE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }










// import { registerLocaleData } from '@angular/common';
// import localeNL from '@angular/common/locales/nl';

// registerLocaleData(localeNL);

// {
//   provide: LOCALE_ID,
//   useValue: 'nl-NL'
// },
