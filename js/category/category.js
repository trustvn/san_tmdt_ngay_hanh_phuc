$(document).ready(function(){
   	$(".category .more").click(function(){
        if(!$(this).parents(".category").hasClass("show-more")){
            $(this).parents(".category").addClass("show-more");
            $(this).remove();
        }
        else{
            $(this).parents(".category").removeClass("show-more");
        }
    });
    $(".category .title").click(function(){
        if(!$(this).parents(".category").hasClass("active")){
            $(this).parents(".category").addClass("active");
        }
        else{
            $(this).parents(".category").removeClass("active");
        }
    });
    $(".item-place .phone").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
        }
    });
});