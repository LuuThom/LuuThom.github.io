$('.pro-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    // autoplayTimeout:500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('#cus-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    // autoplayTimeout:500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})