
import { HttpErrorInterceptor} from "./Services/HttpErrorInterceptor"
import { CustomInterceptor} from "./Services/HttpInterceptor"
import { HTTP_INTERCEPTORS } from "@angular/common/http";

export const ImportProvider =[
      { provide : HTTP_INTERCEPTORS, useClass : CustomInterceptor, multi: true }
      , { provide: HTTP_INTERCEPTORS,useClass: HttpErrorInterceptor, multi: true}
      
    ]
  