import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Router} from "@angular/router";
import {catchError} from "rxjs/internal/operators";
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private route: Router){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error, caught) => {
        
        this.handleAuthError(error);
        return of(error);
      }) as any);
  }
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401) {     
    //  console.log('handled error ' + err.status);
    this.route.navigate(['/Log'],  { queryParams: { AotLog: this.route.url }});
         return of(err.message);
    }
    else if (err.statusText.toUpperCase()=="Invalid token".toUpperCase())
    {
        this.route.navigate(['/Log'],  { queryParams: { AotLog: this.route.url }});
        return of(err.message);
    }
  }
}
