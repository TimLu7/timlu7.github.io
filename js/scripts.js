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

