

import { Component, Injectable } from '@angular/core';
import { HttpHandler, 
    HttpRequest, HttpEvent,   HttpParams } from '@angular/common/http' 
import { Observable } from 'rxjs';
import { error } from 'util';
export class CustomInterceptor{
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        const Ite= req.url.split('/');
        const myParams = new HttpParams();
        myParams.set("sds","sakds")
            if (Ite[Ite.length- 1]!='Loging'){
            req = req.clone({ headers: req.headers.set('Authorization', 
            'CustomToken ' + localStorage.getItem("Tk") +"`"+ localStorage.getItem("Us"))
        }
        );}
    return next.handle(req)
    
 
}
}
