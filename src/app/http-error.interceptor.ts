import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorResponseToastInterceptor implements HttpInterceptor {

    constructor() {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next
            .handle(req)
            .pipe(
                catchError(response => this.toastError(response))
            );
    }

    toastError(response: any) {
        if (response instanceof HttpErrorResponse) {
            const error = response as HttpErrorResponse;
            alert(error.message);
        }
        return of(response);
    }
}
