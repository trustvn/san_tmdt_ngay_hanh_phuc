$(document).ready(function(){
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
    // FIXED
    $(".boxTotal").mnfixed({
    	top:55,
    	limit:'#flagEnd',
    	zindex:10,
    	break:991,
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
    $(".myRadio").click(function(){
        $(this).siblings().removeClass("active");
        $(this).siblings().find("input").prop('checked', false);
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(this).find("input").prop('checked', true);
        }
    });
    $("#dc_option").click(function(){
        if($(this).hasClass("active")){
            $("#dc_option_toggle").stop().slideDown(200);
        }
        else{
            $("#dc_option_toggle").stop().slideUp(200);
        }
    });
    $(".slideCart").slick({
        slidesToShow:5,
        autoplay:true,
        responsive: [
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
});