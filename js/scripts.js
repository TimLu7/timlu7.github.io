import bootstrap from "bootstrap"

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        }
        else{
            $(".navbar").removeClass("sticky");    
            $(".goTop").fadeIn();
        }
    });

    $(".goTop").click(function(){scroll(0, 0)});
    
});

var myCarousel = document.querySelector('#carouselExample')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
  wrap: false
})

myCarousel.addEventListener('slide.bs.carousel', function (e) {
    if(e.keyCode == '37')
        direction: left
    else if(e.keyCode == '39')
        direction: right
})