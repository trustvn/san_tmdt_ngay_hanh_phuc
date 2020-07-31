$(document).ready(function(){
    $("#slideBrands").slick({
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
    $("#bannerProduct").slick({
        fade:true,
        autoplay:true,
        dots:true,
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
    $(".ratting").click(function(){
        $(this).siblings().removeClass("active");
        $(this).siblings().find("input").prop('checked', false);
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
    $(".slideReview").slick({
        slidesToShow:6,
        autoplay:true,
        responsive: [
            {
                breakpoint:1025,
                settings: {
                    slidesToShow : 5,
                }
            },
            {
                breakpoint:991,
                settings: {
                    slidesToShow : 4,
                }
            },
            {
                breakpoint:768,
                settings: {
                    slidesToShow : 3,
                }
            },
            {
                breakpoint:767,
                settings: {
                    slidesToShow : 2,
                }
            },
            {
                breakpoint:360,
                settings: {
                    slidesToShow : 1,
                }
            }
        ]
    });
    $(".menuDfMobile ul li a").fancybox({
        baseClass:'designPopupFilter',
        smallBtn:true,
        toolbar:false,
        touch:false,
    });
    $("#slideImgFor").slick({
        slidesToShow:1,
        slidesToScroll:1,
        asNavFor:"#slideImgNav",
    });
    $("#slideImgNav").slick({
        slidesToShow:6,
        slidesToScroll:1,
        asNavFor:"#slideImgFor",
        focusOnSelect: true,
        arrows:false,
    });
    $(".the-filter ul li a").click(function(){
        $(this).parents("li").siblings().removeClass("active");
        if(!$(this).parents("li").hasClass("active")){
            $(this).parents("li").addClass("active");
            let txt = $(this).text();
             $(this).parents(".the-filter").find(".title span").text(txt);
        }
        else{
            $(this).parents("li").removeClass("active");
        }
        return false;
    });
    $(".the-cart .tools ul li a.like").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
        }
        else{
            $(this).removeClass("active");
        }
        return false;
    });
    $(".buttonBrand .like").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
        }
        else{
            $(this).removeClass("active");
        }
        return false;
    });
    // SHARE POPUP
    $(".share_popup").fancybox({
        baseClass:'designPopupShare',
        smallBtn:true,
        toolsbar:false,
    });
    // QUANTITY
    $(".btn-down").click(function() {
        var $value = parseInt($(this).parents(".quantity").find("input").val());
        if (parseInt($value) > 1) {
            $value = parseInt($value) - 1;
            $(this).parents(".quantity").find("input").val($value);
        }
    });
    $(".btn-up").click(function() {
        var $value = parseInt($(this).parents(".quantity").find("input").val());
        $value = parseInt($value) + 1;
        $(this).parents(".quantity").find("input").val($value);
    });
    // MORE CONTENT
    $(".moreToggle button").click(function(){
        if(!$(this).parents(".moreToggle").hasClass("active")){
            $(this).parents(".moreToggle").addClass("active");
            $(".the-content.more").addClass("active");
        }
        else{
            $(this).parents(".moreToggle").removeClass("active");
            $(".the-content.more").removeClass("active");
        }
    });
    // POPUP GALLERY
    $("#slideImgNav .item .more a").fancybox({
        type:'iframe',
        baseClass:'popupGallery',
        toolsbar:false,
        smallBtn:true,
        iframe : {
            preload : false
        }
    });
});