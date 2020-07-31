$(document).ready(function(){
    $("#bannerProduct").slick({
        fade:true,
        autoplay:true,
        dots:true,
    });
    $("#slidePlace").slick({
        slidesToShow : 6,
        autoplay:true,
        responsive: [
            {
                breakpoint:1025,
                settings: {
                    slidesToShow : 5,
                }
            },
            {
                breakpoint:768,
                settings: {
                    slidesToShow : 4,
                }
            },
            {
                breakpoint:640,
                settings: {
                    slidesToShow : 3,
                }
            },
            {
                breakpoint:520,
                settings: {
                    slidesToShow : 2,
                }
            }
        ]
    });
    $(".myCheckbox").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(this).find("input").prop('checked', true);
        }
        else{
            $(this).removeClass("active");
            $(this).find("input").prop('checked', false);
        }
    });
    $(".partFilter.mores .more").click(function(){
        if(!$(this).parents(".partFilter.mores").hasClass("show-more")){
            $(this).parents(".partFilter.mores").addClass("show-more");
        }
        else{
            $(this).parents(".partFilter.mores").removeClass("show-more");
        }
    });
    $(".menuDfMobile ul li a").fancybox({
        baseClass:'designPopupFilter',
        smallBtn:true,
        toolbar:false,
        touch:false,
    });
    // TOOLS
    $(".boxInfo .tools ul li a.like").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
        }
        else{
            $(this).removeClass("active");
        }
        return false;
    });
    $(".share_popup").fancybox({
        baseClass:'designPopupShare',
        smallBtn:true,
        toolsbar:false,
    });
    $(".tab-list").mnfixed({
        limit:'#flagEnd',
        break:991,
        top:60,
        zindex:1
    });
    $(".boxFixed").mnfixed({
        limit:'#flagEnd',
        break:991,
        top:70,
        zindex:1
    });
    // MENU TAB
    $(window).scroll(function(){
        var $winOffset=$(window).scrollTop();
        $(".partPlace").each(function(){
            var $ih = $(this).innerHeight();
            var $io = $(this).offset().top;
            var $ihref = $(this).attr("id");
            var $iho = $ih + $io;
            var $ahref = ".tab-list ul li a[href='#"+ $ihref +"']";
            if(($io - 120) < $winOffset  && ($iho - 100) > $winOffset){
                $(".tab-list ul li").removeClass("active");
                $($ahref).parents("li").addClass("active");
            }
        });
    });
    $(".tab-list ul li a").click(function(){
        var op=$(this).attr("href");
        var opOffset=$(op).offset().top - 110;
        $('html,body').animate({scrollTop: opOffset},1000);
        return false;
    });
    // PART
    $(".partPlace .part-title").click(function(){
        if(!$(this).parents(".partPlace").hasClass("active")){
            $(this).parents(".partPlace").addClass("active");
        }
        else{
            $(this).parents(".partPlace").removeClass("active");
        }
    });
});