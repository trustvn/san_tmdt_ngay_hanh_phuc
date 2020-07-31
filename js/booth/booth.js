$(document).ready(function(){
    $(".boxInfo .like a").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
        }
        else{
            $(this).removeClass("active");
        }
        return false;
    });
    $(".banerBooth").slick({
    	fade:true,
    	arrows:false,
    });
    // CATE
    $(".toolsFilterBooth .cate .icon").click(function(){
        if(!$(this).parents(".cate").hasClass("active")){
            $(this).parents(".cate").addClass("active");
        }
        else{
            $(this).parents(".cate").removeClass("active");
        }
    });
    // MEMBER TOP
    $(".boxAttr .title").click(function(){
        if(!$(this).parents(".boxAttr").hasClass("active")){
            $(this).parents(".boxAttr").addClass("active");
        }
        else{
            $(this).parents(".boxAttr").removeClass("active");
        }
    });
    // BIND
    $(window).bind("click",function(e){
        var target=e.target;
        if(!$(target).parents(".toolsFilterBooth .cate").hasClass("active")){
            $(".toolsFilterBooth .cate").removeClass("active");
        }
    });
    $(".toolsFilterBooth .linkFilter a").fancybox({
        baseClass:'designPopupFilter',
        smallBtn:true,
        toolbar:false,
        touch:false,
    });
    // TAB LIST
    $(".tab-list .mc-menu").click(function(){
        if(!$(this).parents(".tab-list").hasClass("active")){
            $(this).parents(".tab-list").addClass("active");
        }
        else{
            $(this).parents(".tab-list").removeClass("active");
        }
    });
});