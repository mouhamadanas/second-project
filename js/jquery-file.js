$(function () {


    $("header .container1 .cont-links1 .cont-links2 ul li span").mouseenter(function () {
        $("header .container1 .cont-links1 .cont-links2 ul >li:nth-child(3)").css("text-decoration", "underline");
        $("header .container1 .cont-links1 .cont-links2 ul li:nth-child(3) div").slideDown();
        $("header .container1 .cont-links1 .cont-links2 ul li:nth-child(3)  img").css({
            "transform": "rotateZ(180deg)"
        });
    });
    $("header .container1 .cont-links1 .cont-links2 ul li:nth-child(3) div").mouseleave(function () {
        $("header .container1 .cont-links1 .cont-links2 ul li:nth-child(3)").css("text-decoration", "none");
        $("header .container1 .cont-links1 .cont-links2 ul li:nth-child(3) div").slideUp();
        $("header .container1 .cont-links1 .cont-links2 ul li:nth-child(3) img").css({
            "transform": "rotateZ(360deg)"
        });
    });

    $(window).on("resize",function(){
        if($(window).width()<=500)
        {
            $("header .container1 .cont-links1 .cont-links2 ul ").css("display","none");
            $("header .container1 .cont-btn").css("display","none");
            $("header .container1 .cont-links1").append("<img src='images/icon-hamburger.svg' alt=''>");
        }
    });

    

});