import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localeNL from '@angular/common/locales/nl-BE';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutesModule } from './app-routes.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpErrorResponseToastInterceptor } from './http-error.interceptor';


registerLocaleData(localeNL);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule,
    HttpClientModule, AppRoutesModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-BE' },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorResponseToastInterceptor, multi: true }
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
