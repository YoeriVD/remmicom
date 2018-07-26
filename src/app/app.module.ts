import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl-BE';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeNL);

@NgModule({
  declarations: [
    AppComponent, SearchPipe
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule
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