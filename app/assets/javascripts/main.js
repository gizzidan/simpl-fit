
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.header-text').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  });
});

/*$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
        $(".header").addClass("scrolling");
    } else {
        $(".header").removeClass("scrolling");
    }
}); */

$(document).scroll(function() {
          var positionScroll = $(this).scrollTop();
          if(positionScroll > 420) {
            $( ".navbar" ).animate({
            backgroundColor: "#212121",
          }, 150 );
        } else {
          $( ".navbar" ).animate({
            backgroundColor: "transparent",
          }, 150 );
        }
      })
    ;
