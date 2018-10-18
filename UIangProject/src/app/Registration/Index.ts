import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from './RegistrationProp';
import { OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
    selector: 'app-Registrer',
    templateUrl: './Index.html',
    styleUrls: ['./index.css'],
    providers :[Registration]
  })
export class _Index  implements OnInit {
constructor(private router: Router, private Regs:Registration ){}
private recaptchaSiteKey = '6LcMOHIUAAAAAMDmWH6BS1ufhRqxXEgFRrGaY3aE';
private delayToRender: number = 1000; // A one second delay before rendering this element
private thisRecaptchaId: string = 'this-is-my-unique-id'; // ID to uniquely identify this reCAPTCHA

Submitdata():void{
alert(this.Regs.FirstName)
}
  Calcel():void{
    this.router.navigate(["/Log"])
  }
  ngOnInit(){
    
    if (window.screen.width <= 860)
    {
    $("[name=Buttonsize]").removeClass("col-sm-4 form-group");
    $("[name=Buttonsize]").addClass("col-sm-6 form-group");
    $("[name=NoNeed]").hide()
    $("[name=NoNeed1]").hide()
    }else{
      
      $("[name=Buttonsize]").removeClass("col-sm-6 form-group");
      $("[name=Buttonsize]").addClass("col-sm-4 form-group");
      $("[name=NoNeed]").show()
    $("[name=NoNeed1]").show()
    }
  }

  private onCaptchaComplete(response: any) {
    console.log('reCAPTCHA response recieved:');
    console.log(response.success);
    console.log(response.token);
    }
    private recaptchaStyle = {
      theme: 'dark',     // Uses the Dark theme for this reCAPTCHA
      type: 'audio',     // Use the audio version for user verification
      size: 'compact',   // Use the compact style 
      tabindex: 0,       // Tab Index for this element
}

}