
import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest,   HttpHeaders, HttpEvent, HttpErrorResponse, HttpResponse} from '@angular/common/http'
 import { catchError, last, map, tap, retryWhen } from 'rxjs/operators';
 import 'rxjs/add/operator/takeWhile';
import { LoaderService } from './LoaderService';
import { Observable } from 'rxjs';
 @Injectable()
export class HttpServices
{
    constructor ( 
       private _http: HttpClient, public messageService: LoaderService ){}
 private   getEvent( event: HttpEvent<any>) {
        switch (event.type) {
          case HttpEventType.Sent:
               this.messageService.add('Request send Please wait..',true);               
            return 'Request send Please wait..';
          case HttpEventType.UploadProgress:
          const percentDone = Math.round(100 * event.loaded / event.total);
         this.messageService.add(`Request Progress  is ${percentDone} % done..`, true);
          return `Request Progress  is ${percentDone} % done..`;
          case HttpEventType.Response:
          this.messageService.add('Progress  Complited..', false);
          if (event instanceof HttpResponse) {
              return event.body;
          } else          {
              return 'No Data';
          }
            case HttpEventType.ResponseHeader :
             if (event instanceof HttpErrorResponse){
                if (event.statusText.toUpperCase() =='Invalid token'.toUpperCase()) {
                this.messageService.add(' Invalid Progress..', false);
                }
             }
              return HttpEventType.ResponseHeader;
          default:
          this.messageService.add(' close Progress..',false);
            return ``;
        }
       }
   public  Post ( ApiName :string , Item:any):Observable <any>{
        const req = new HttpRequest('POST', "http://localhost:40/Api/"+ApiName, Item ,{ });
        return this._http.request( req).pipe(
         map(event => this.getEvent(event)
       ),
         last()
       );
    }
 public Get ( ApiName :string ):Observable<any >{
    const req = new HttpRequest('GET', 'http://localhost:40/Api/' + ApiName);
        return  this._http.request(req).pipe(map (data=> this.getEvent(data)),last()  )
      }
   public Delete (ApiName : string, ID: string ) : Observable <any>{
    const req = new HttpRequest('DELETE', 'http://localhost:40/Api/' +ApiName);
    return this._http.request(req).pipe( map(l => this.getEvent(l) ), last())
   }
   public ValidToken1 (ApiName : string) :Observable<any >{
    return this._http.get('http://localhost:40/Api/'+ ApiName)
   }
   async ValidToken(ApiName: string): Promise<any> {
    const response = await this._http.get('http://localhost:40/Api/' + ApiName).toPromise().then(this.extractData);
    return response;
  }
  private extractData(res: Response) {
    return res[0].validate;
}
}

