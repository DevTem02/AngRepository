import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {DataCall } from './Call';
@NgModule({
  declarations: [
    AppComponent, DataCall
  ],
  imports: [
    BrowserModule, FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
