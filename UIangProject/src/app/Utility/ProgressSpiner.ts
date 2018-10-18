import { Component, Injectable } from '@angular/core';
import {  LoaderService } from '../Services/LoaderService';
@Component({
    selector: 'apploader',
    template: `
    <ngx-loading  [show]="messageService.loading" [config]="{ backdropBorderRadius: '14'}">
    </ngx-loading>
    `//
  })
  @Injectable()
  export   class  ProgressSpiner {constructor ( public messageService: LoaderService){
    }  }
