import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class LoaderService {
    messages: string;
    loading  =false; 
    add(message: string, loading :boolean ) {
        this.messages=message;
        this.loading=loading;
    }
}