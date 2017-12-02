$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        420:{
            items: 2
        },
        640:{
            items: 3
        },
        800:{
            items: 4
        },
        960:{
            items: 5
        }
    }
})
});