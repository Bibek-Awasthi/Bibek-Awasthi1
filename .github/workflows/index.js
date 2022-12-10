$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
       }
       else{
        $('.scroll-up-btn').removeClass("show");
       }

    });
    $('.scroll-up-btn').click(function(){
     $('html').animate({scrollTop: 0});
    });

    //typing 
    var typed = new Typed(".typing", {
        strings: ["Student","Freelancer","Webdeveloper","Youtuber","Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
         });       
});