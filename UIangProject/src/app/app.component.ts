import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Data :String="";
  Item :any
  constructor(){
   this.Data="welcome 1"
  }
  ClickData():void{
    alert (this.Item)
  }
}
