import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError, finalize } from 'rxjs/operators';
import { AppService } from './app.service';

@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        AppService.Loading.emit(true);
        
        return next.handle(req)
            .pipe(
                tap((evt: any) => {
                    if (evt instanceof HttpResponse) {
                        
                    }
                }),
                catchError((err: HttpErrorResponse) => {
                    if(err instanceof HttpErrorResponse) {
                        alert('Por favor tente novamente.');
                    }
                    return of(err);
                }),
                finalize(() => {
                    setTimeout(() => {
                        AppService.Loading.emit(false);
                    }, 500);
                })
            )
    }

}
