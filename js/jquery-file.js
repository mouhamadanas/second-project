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
    $(".img-2").click(function () {
        $("header .container1 .cont-links1 .cont-links2>ul").css({
            "display": "inline",
            "flex-direction": "column",
            "position": "absolute",
            "color": "black",
            "background-color": "white",
            "margin": "133px 30px auto 30px",
            "width": "74%",
            "text-align": "center",
            "height": "550px"
        });
        $("header .container1 .cont-links1 .cont-links2").css({
            "flex-direction": "column",
        });
        $("header .container1 .cont-links1 .cont-links2 ul>li").css({
            "padding": "20px",
            "font-size": "22px",
            "font-weight": "600"
        });
        $("header .container1 .cont-links1 .cont-links2 ul li img").attr("src", "images/icon-arrow-dark.svg");
        $(".img-2").css("display", "none");
        $(".img-3").css("display", "inline");
        $(".cont-btn2").css({
            "display": "flex",





        });
    });
    $(".img-3").on("click", function () {
        $("header .container1 .cont-links1 .cont-links2 ul").css({
            "display": "none"
        });
        $(".img-3").css("display", "none");
        $(".img-2").css("display", "inline");


    });



});