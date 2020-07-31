$(document).ready(function(){
    $("#vnt-slide-home").on("init",function(slick, currentSlide){
        let current = $(this).find(".slick-slide.slick-current");
        let color = current.find(".item").data("background");
        current.parents(".mainHome").css({"background-color":color});
    });
	$("#vnt-slide-home").slick({
		fade:true,
		autoplay:true,
		dots:true,
	});
    $("#vnt-slide-home").on("afterChange",function(slick, currentSlide){
        let current = $(this).find(".slick-slide.slick-current");
        let color = current.find(".item").data("background");
        current.parents(".mainHome").css({"background-color":color});
    });
	$(".slideProduct").slick({
		slidesToShow:4,
		autoplay:true,
		responsive: [
            {
                breakpoint:767,
                settings: {
                    slidesToShow : 3,
                }
            },
            {
                breakpoint:520,
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
    $(".slideNews").slick({
        slidesToShow : 4,
        autoplay:true,
        responsive: [
            {
                breakpoint:767,
                settings: {
                    slidesToShow : 3,
                }
            },
            {
                breakpoint:520,
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