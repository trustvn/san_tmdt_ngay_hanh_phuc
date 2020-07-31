$(document).ready(function(){
    // REVIEW
    $(".vnt-review .reviewDashbroad .dashbroadToggle a").click(function(){
        if(!$(this).parents(".vnt-review").hasClass("open-form")){
            $(this).parents(".vnt-review").addClass("open-form");
            $(this).parents(".vnt-review").find(".reviewToggle").stop().slideDown(300);
        }
        else{
            $(this).parents(".vnt-review").removeClass("open-form");
            $(this).parents(".vnt-review").find(".reviewToggle").stop().slideUp(300);
        }
        return false;
    });
    $(".vnt-review .rev-field ul li a").hover(function(){
        $(this).parents(".vnt-review").find(".rev-field ul li a").attr("class","")
        classRat=$(this).parents("li").attr("rat");
        list_item = $(this).parents("li").prevAll("li").find("a");
        list_item.push($(this).parents("li").find("a"));
        list_item.each(function(){
            $(this).addClass("active");
        });
        nameRat=$(this).parents("li").attr("name");
        $(this).parents(".vnt-review").find(".rev-txt").text(nameRat);
    },function(){
        $(this).parents(".vnt-review").find(".rev-field ul li a").attr("class","");
        $(this).parents(".vnt-review").find(".rev-txt").text("Click to rate!");
        return_star($(this));
    });
    $(".vnt-review .rev-field ul li a").click(function(){
        $(this).parents("li").siblings().removeClass("active");
        if(!$(this).parents("li").hasClass("active")){
            $(this).parents("li").addClass("active");
        }
    });
    function return_star(__this){
        classRat=__this.parents(".vnt-review").find(".rev-field ul li.active").attr("rat");
        list_item = __this.parents(".vnt-review").find(".rev-field ul li.active").prevAll("li").find("a");
        list_item.push(__this.parents(".vnt-review").find(".rev-field ul li.active").find("a"));
        list_item.each(function(){
            $(this).addClass("active");
        });
        nameRat=__this.parents(".vnt-review").find(".rev-field ul li.active").attr("name");
        __this.parents(".vnt-review").find(".rev-txt").text(nameRat);
    }
    $(".vnt-review .reviewComment .nodeComment .comtTools .tool a.like").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
        }
        else{
            $(this).removeClass("active");
        }
        return false;
    });
});