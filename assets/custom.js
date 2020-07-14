// Sticky Header

(function( $ ) {
   
    $(window).scroll(function(){
      var sticky = $("#header-content"),
          scroll = $(window).scrollTop();
  
      if (scroll >= 46) sticky.addClass('fixed-header');
      else sticky.removeClass('fixed-header');
    });
  
  })( jQuery );