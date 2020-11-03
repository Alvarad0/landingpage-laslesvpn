export const carousel = () => {
    $(".companies").owlCarousel({
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed:1500,
        rewind:true,
        margin:10,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            450:{
                items:3
            },
            600:{
                items:4
            }
        }
    })
}

export const carouselComments = () => {
    $('#owlComments').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: true,
        items: 3,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            948:{
                items:3
            }
        }
    })
}