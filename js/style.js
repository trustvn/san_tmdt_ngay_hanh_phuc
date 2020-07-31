$(document).ready(function(){
    vnTRUST.goTopStart();
    // SELECT J
    $(".select-j .title").click(function(){
        if(!$(this).parents(".select-j").hasClass("active")){
            $(this).parents(".select-j").addClass("active");
            $(this).parents(".select-j").find(".content").stop().slideDown();
        }
        else{
            $(this).parents(".select-j").removeClass("active");
            $(this).parents(".select-j").find(".content").stop().slideUp();
        }
    });
    // DATE CLOCK
    // $(".datepicker").datepicker();
    // MEMBER TOP
    $(".memberTop .icon").click(function(){
        if(!$(this).parents(".memberTop").hasClass("active")){
            $(this).parents(".memberTop").addClass("active");
        }
        else{
            $(this).parents(".memberTop").removeClass("active");
        }
    });
    // MEMBER MOBILE
    $(".memberMobile .icon").click(function(){
        if(!$(this).parents(".memberMobile").hasClass("active")){
            $(this).parents(".memberMobile").addClass("active");
        }
        else{
            $(this).parents(".memberMobile").removeClass("active");
        }
    });
    // CART TOP
    $(".cartTop .icon").click(function(){
        if(!$(this).parents(".cartTop").hasClass("active")){
            $(this).parents(".cartTop").addClass("active");
        }
        else{
            $(this).parents(".cartTop").removeClass("active");
        }
    });
    // SEARCH TOP
    $(".searchTop input").focus(function(){
        $(this).parents(".searchTop").addClass("active");
    });
    $(".searchTop input").blur(function(){
        $(this).parents(".searchTop").removeClass("active");
    });
    // LANGUAGE TOP
    $(".languageTop .icon").click(function(){
        if(!$(this).parents(".languageTop").hasClass("active")){
            $(this).parents(".languageTop").addClass("active");
        }
        else{
            $(this).parents(".languageTop").removeClass("active");
        }
    });
    // NOFITICAITON
    $(".nofiticationTop .icon").click(function(){
        if(!$(this).parents(".nofiticationTop").hasClass("active")){
            $(this).parents(".nofiticationTop").addClass("active");
            $(this).parents(".nofiticationTop").removeClass("read");
        }
        else{
            $(this).parents(".nofiticationTop").removeClass("active");
        }
    });
    // MENU TOGGLE
    $(".menuToggle .icon").click(function(){
        if(!$(this).parents(".menuToggle").hasClass("active")){
            $(this).parents(".menuToggle").addClass("active");
        }
        else{
            $(this).parents(".menuToggle").removeClass("active");
        }
    });
    // MENU LINK
    $(".menuLink .icon").click(function(){
        if(!$(this).parents(".menuLink").hasClass("active")){
            $(this).parents(".menuLink").addClass("active");
        }
        else{
            $(this).parents(".menuLink").removeClass("active");
        }
    });
    // BIND
    $(window).bind("click",function(e){
        var target=e.target;
        if(!$(target).parents(".memberTop").hasClass("active")){
            $(".memberTop").removeClass("active");
        }
        if(!$(target).parents(".cartTop").hasClass("active")){
            $(".cartTop").removeClass("active");
        }
        if(!$(target).parents(".languageTop").hasClass("active")){
            $(".languageTop").removeClass("active");
        }
        if(!$(target).parents(".memberMobile").hasClass("active")){
            $(".memberMobile").removeClass("active");
        }
        if(!$(target).parents(".nofiticationTop").hasClass("active")){
            $(".nofiticationTop").removeClass("active");
        }
        if(!$(target).parents(".menuToggle").hasClass("active")){
            $(".menuToggle").removeClass("active");
        }
        if(!$(target).parents(".menuLink").hasClass("active")){
            $(".menuLink").removeClass("active");
        }
    });
    // FIXED HEAD
    $(".mainHead:not(.notfix)").mnfixed({
        break:991,
    });
    // BOX BOT
    $(".boxBot .title").click(function(){
        if(!$(this).parents(".boxBot").hasClass("active")){
            $(this).parents(".boxBot").addClass("active");
        }
        else{
            $(this).parents(".boxBot").removeClass("active");
        }
    });
    // POPUP PLACE
    $(".placeTop a").fancybox({
        baseClass:'desingPopupPlace',
        smallBtn:true,
        toolsbar:false,
        type:'iframe',
    });
    // BOX BOT
    $(".boxDrop .title").click(function(){
        if(!$(this).parents(".boxDrop").hasClass("active")){
            $(this).parents(".boxDrop").addClass("active");
        }
        else{
            $(this).parents(".boxDrop").removeClass("active");
        }
    });
});
