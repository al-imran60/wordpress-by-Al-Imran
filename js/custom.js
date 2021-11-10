(function($){

// CODE START

/* ===========
Venobox JS
============= */


    $('.venobox').venobox(); 





/* ===========
Isotope JS
============= */
   

    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    var $grid = $('.grid').isotope({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.grid-item'
      }
    })





/* ==============
Owl Carousel JS
================= */

  $('.logo-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })





/* ==============
Top Btn js
================= */ 

$(window).scroll(function(){

  var scroll = $(window).scrollTop();

  if( scroll > 1200) {
    $('.top-btn-icon').fadeIn();
  }
  else{
    $('.top-btn-icon').fadeOut();
  }

  });




/* ==============
Mobile Menu
================= */ 

$('.mobile-menu-icon i.fa-align-right').on('click', function(){
  $('.mobile-menu').animate({ top : 100});
  $(this).hide();
  $('.mobile-menu-icon i.fa-times-circle').show();
});

$('.mobile-menu-icon i.fa-times-circle').on('click', function(){
  $('.mobile-menu').animate({ top : -800});
  $(this).hide();
  $('.mobile-menu-icon i.fa-align-right').show();
});




/* ==============
Wow js
================= */ 

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();








// code END

}) (jQuery)

