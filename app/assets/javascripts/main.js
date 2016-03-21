if ( $(window).width() > 769) {
  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.header-text').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });
  });
}
else {

}


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 460) {
        $(".navbar").addClass("scrolling");
    } else {
        $(".navbar").removeClass("scrolling");
    }
});
