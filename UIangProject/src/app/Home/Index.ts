import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeProp } from './HomeProp';
import { OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
    selector: 'app-Home',
    templateUrl: './Index.html',
    styleUrls: ['./index.css'],
    providers :[HomeProp]
  })
export class _Index  implements OnInit {
constructor(private router: Router, private Regs:HomeProp ){}
// private recaptchaSiteKey = '6LcMOHIUAAAAAMDmWH6BS1ufhRqxXEgFRrGaY3aE';
// private delayToRender: number = 1000; // A one second delay before rendering this element
// private thisRecaptchaId: string = 'this-is-my-unique-id'; // ID to uniquely identify this reCAPTCHA

Submitdata():void{
alert(this.Regs.FirstName)
}
  Calcel():void{
    this.router.navigate(["/Log"])
  }
  ngOnInit(){}
ngAfterViewInit() {
  
  this.init_sidebar();
  }
init_sidebar(){
  var CURRENT_URL = window.location.href.split('#')[0].split('?')[0],
  $BODY = $('body'),
  $MENU_TOGGLE = $('#menu_toggle'),
  $SIDEBAR_MENU = $('#sidebar-menu'),
  $SIDEBAR_FOOTER = $('.sidebar-footer'),
  $LEFT_COL = $('.left_col'),
  $RIGHT_COL = $('.right_col'),
  $NAV_MENU = $('.nav_menu'),
  $FOOTER = $('footer');
  var setContentHeight = function () {
      // reset height

    


     $RIGHT_COL.css('min-height', $(window).height());
  
      var bodyHeight =   $('body').outerHeight(),
          footerHeight =  $('body').hasClass('footer_fixed') ? -10 :  $('footer').height(),
          leftColHeight =  $('.left_col').eq(1).height() +   $('.sidebar-footer').height(),
          contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;
  
      // normalize content
      contentHeight -=  $('.nav_menu').height() + footerHeight;
  
       $RIGHT_COL.css('min-height', contentHeight);
  };
   $('a').on('click', function(ev) {
      //console.log('clicked - sidebar_menu');
        var $li = $(this).parent();

        if ($li.is('.active')) {
            $li.removeClass('active active-sm');
            $('ul:first', $li).slideUp(function() {
                setContentHeight();
            });
        } else {
            // prevent closing menu if we are on child menu
            if (!$li.parent().is('.child_menu')) {
              $('li').removeClass('active active-sm');
              $('li ul').slideUp();
            }else
            {
              
                if ($('body').is( ".nav-sm" )  )
                {
                    $li.parent().$( "li" ).removeClass( "active active-sm" );
                    $li.parent().$( "li ul" ).slideUp();
                }
            }
            $li.addClass('active');

            $('ul:first', $li).slideDown(function() {
                setContentHeight();
            });
        }
    });

     $MENU_TOGGLE.on('click', function() {
      console.log('clicked - menu toggle');
      
      if ($('body').hasClass('nav-md')) {
           $SIDEBAR_MENU.find('li.active ul').hide();
         $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
      } else {
       $SIDEBAR_MENU.find('li.active-sm ul').show();
          $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
      }

      $('body').toggleClass('nav-md nav-sm');

 // setContentHeight();

  $('.dataTable').each ( function () { $(this).dataTable().fnDraw(); });
});

// check active menu
//$SIDEBAR_MENU.find('a[href="' +this. CURRENT_URL + '"]').parent('li').addClass('current-page');

$('a').filter(function () {

return this.href ==this. CURRENT_URL;
}).parent('li').addClass('current-page').parents('ul').slideDown(function() {
setContentHeight();
}).parent().addClass('active');

// recompute content when resizing
$(window).smartresize(function(){  
setContentHeight();
});
setContentHeight();//AA
if ($.fn.mCustomScrollbar) {
$('.menu_fixed').mCustomScrollbar({
  autoHideScrollbar: true,
  theme: 'minimal',
  mouseWheel:{ preventDefault: true }
});
}

$(document).ready(function() {
$('.collapse-link').on('click', function() {
  var $BOX_PANEL = $(this).closest('.x_panel'),
      $ICON = $(this).find('i'),
      $BOX_CONTENT = $BOX_PANEL.find('.x_content');
  
  // fix for some div with hardcoded fix class
  if ($BOX_PANEL.attr('style')) {
      $BOX_CONTENT.slideToggle(200, function(){
          $BOX_PANEL.removeAttr('style');
      });
  } else {
      $BOX_CONTENT.slideToggle(200); 
      $BOX_PANEL.css('height', 'auto');  
  }

  $ICON.toggleClass('fa-chevron-up fa-chevron-down');
});

$('.close-link').click(function () {
  var $BOX_PANEL = $(this).closest('.x_panel');

  $BOX_PANEL.remove();
});
});
$(document).ready(function() {
$('[data-toggle="tooltip"]').tooltip({
  container: 'body'
});
});
// Progressbar
if ($(".progress .progress-bar")[0]) {
$('.progress .progress-bar').progressbar();
}
// /Progressbar

// Switchery
$(document).ready(function() {
if ($(".js-switch")[0]) {
  var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
  elems.forEach(function (html) {
      // var switchery = new Switchery(html, {
      //     color: '#26B99A'
      // });
  });
}
});
$(document).ready(function() {
if ($("input.flat")[0]) {
  $(document).ready(function () {
      $('input.flat').iCheck({
          checkboxClass: 'icheckbox_flat-green',
          radioClass: 'iradio_flat-green'
      });
  });
}
});


}


}