$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    responsiveBaseElement: 'body',
       loop:true,
    align :'center',
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    stagePadding:30,
    smartSpeed:450,
    responsiveClass:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive : {
      0 : {
              items:1,
              margin:0,
      },
      480 : {
              items:2,
              margin:2,
                autoplay:true,
            },
      768 : {
              items:4,
              margin:5,
                autoplay:true,
      }
    },
});
    
});