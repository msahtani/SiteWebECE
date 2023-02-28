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
              margin:100,
      },
      480 : {
              items:2,
              margin:20,
                autoplay:true,
            },
      768 : {
              items:3,
              margin:5,
              autoplay:true,
      },
      900: {
      		items: 3,
      		margin: 40,
      		autoplay: true
      },
      1200: {
      	items: 4,
      	margin: 10,
      	autoplay: true
      }
    },
});
    
});
