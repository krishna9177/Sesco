$(function () {
    //animate on scroll
    new WOW().init();
})

/* work
 http://dimsemenov.com/plugins/magnific-popup/documentation.html */

$(function () {
    $('#work').magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled: true
        }
    });
   
    //$(".owl-carousel").owlCarousel();
});

/* team 
https://owlcarousel2.github.io/OwlCarousel2/docs/started-installation.html
*/
$(function(){
    $("#team-members").owlCarousel({
        items:4,
        autoplay:true,
        nav:true,
        smartSpeed:500,
        loop:true,
        autoplayHoverPause:true
    });
   
  });

  /* testmonials */

$(function(){
    $("#custmer-testmonials").owlCarousel({
        items:1,
        autoplay:true,
        nav:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true
    });
   
  });

/* stats */

$(function(){
    $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
   
  });

// Client

$(function(){
    $("#clients-list").owlCarousel({
        items:4,
        autoplay:true,
        nav:true,
        smartSpeed:500,
        loop:true
        
    });
   
  });



