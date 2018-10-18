import { saveAs,saveLogFile } from 'file-saver';
import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
//import * as soap from 'file-system';
@Component({
  selector: 'app-login',
  templateUrl: './index.html',
  styleUrls: [
]
})
export class _Loging{

  ngAfterViewInit() {
    this.sayHello();
    this.saveLogFile("2222")
  }
  saveLogFile(log): void {
    //saveAs("/assets/",new Blob([log], { type: "text" }),"data.text");
    var data = "New File Contents";
   // saveLogFile(new Blob([log],{ type: "text" }),'/assets/data.text')
  // soap.writeFile("assets/data.text",data,(err, data)=>{

  // })

}

   Log():void {
alert("Weclocm")
   }

  sayHello() {
      /*==================================================================
      [ Focus input ]*/
      $('.input100').each(function(){
          $(this).on('blur', function(){
              if($(this).val().trim() != "") {
                  $(this).addClass('has-val');
              }
              else {
                  $(this).removeClass('has-val');
              }
          })    
      })
      /*==================================================================
      [ Validate ]*/
      var input = $('.validate-input .input100');
      $('.validate-form').on('submit',function(){
          var check = true;
          for(var i=0; i<input.length; i++) {
              if(validate(input[i]) == false){
                  showValidate(input[i]);
                  check=false;
              }
          }
          return check;
      });
      $('.validate-form .input100').each(function(){
          $(this).focus(function(){
             hideValidate(this);
          });
      });
  
      function validate (input) {
          if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
              if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                  return false;
              }
          }
          else {
              if($(input).val().trim() == ''){
                  return false;
              }
          }
      }
  
      function showValidate(input) {
          var thisAlert = $(input).parent();
  
          $(thisAlert).addClass('alert-validate');
      }
  
      function hideValidate(input) {
          var thisAlert = $(input).parent();
  
          $(thisAlert).removeClass('alert-validate');
      }
      
      /*==================================================================
      [ Show pass ]*/
      var showPass = 0;
      var showPass1 = 0;
      $('.login100-form-btn').on('click', function(){
          if(showPass == 0) {
              $(this).next('input').attr('type','text');
              $(this).find('i').removeClass('zmdi-eye');
              $(this).find('i').addClass('zmdi-eye-off');
              showPass = 1;
          }
          else {
              $(this).next('input').attr('type','password');
              $(this).find('i').addClass('zmdi-eye');
              $(this).find('i').removeClass('zmdi-eye-off');
              showPass = 0;
          }
      });
  
      $('.zmdi-eye').on('click', function(){

        if(showPass1 == 0) {
          $("i").removeClass("zmdi-eye");
          $("i").addClass("zmdi-eye-off");
         // $(this).prop('type', 'text');
          $("[name=pass1]").attr("type", "text");
          showPass1=1
        }else {
          showPass1=0
          $("i").removeClass("zmdi-eye-off");
          $("i").addClass("zmdi-eye");
           
           $("[name=pass1]").attr("type", "password");
        }
     
    });
  
  
   
  }

}