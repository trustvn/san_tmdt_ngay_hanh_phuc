$(document).ready(function(){
    // MENU MEMBER
    $(".menuMember .mc-menu").click(function(){
        if(!$(this).parents(".menuMember").hasClass("active")){
            $(this).parents(".menuMember").addClass("active");
        }
        else{
            $(this).parents(".menuMember").removeClass("active");
        }
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
    // MENU MEMBER
    $(".partDashbroad .item .tools .icon").click(function(){
        if(!$(this).parents(".tools").hasClass("active")){
            $(this).parents(".tools").addClass("active");
        }
        else{
            $(this).parents(".tools").removeClass("active");
        }
    });
     $(window).bind("click",function(e){
        var target=e.target;
        if(!$(target).parents(".partDashbroad .item .tools").hasClass("active")){
            $(".partDashbroad .item .tools").removeClass("active");
        }
    });
    if(typeof $('[data-toggle="tooltip"]').offset() == "object"){
        $('[data-toggle="tooltip"]').tooltip({
            'animation':false,
            'container':'body',
        });
    }
    $("#vnt-popup-pin .c-pin").on("keypress",function(){
        let __ = $(this);
        if(__.val().length > 0){
            return false;
        }
        __.parents(".col").next(".col").find("input").focus();
    });
    $(".openPopup").fancybox({
        type:'iframe',
        baseClass:'designPopup',
        smallBtn:true,
        toolbar:false,
    });
    $(".boxBank ul li").click(function(){
        $(this).siblings("li").removeClass("checked");
        $(this).siblings("li").find("input").prop('checked', false);
        if(!$(this).hasClass("checked")){
            $(this).addClass("checked");
            $(this).find("input").prop('checked', true).focus();
        }
        else{
            $(this).removeClass("checked");
            $(this).find("input").prop('checked', false);
        }
    });
});