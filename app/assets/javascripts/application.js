// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.header-text').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  });
});




 $(document).scroll(function() {
          var positionScroll = $(this).scrollTop();
          if(positionScroll > 430) {
            $( ".navbar" ).animate({
            backgroundColor: "#2B2D42",
          }, 200 );
        } else {
          $( ".navbar" ).animate({
            backgroundColor: "transparent",
          }, 200 );
        }
      })
    ;
