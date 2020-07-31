$(document).ready(function(){
    app_gallery = {
        slideFor:"",
        slideNav:"",
        tmpPrev : "<button class='slide-prev slide-arrow'>prev</button>",
        tmpNext : "<button class='slide-next slide-arrow'>next</button>",
        init:function(){
            // GET SLIDE
            this.slideFor=$("#galleryFor").find(".item");
            this.slideNav=$("#galleryNav").find(".item");
            // WRAP ITEM SLIDE FOR
            this.slideFor.parent().append("<div class='slide-wrap'></div>");
            this.slideFor.map((i,e)=>{
                $(e).appendTo(".slide-wrap");
            });
            // INDEX ITEM
            this.slideFor.map((i,e)=>{
                $(e).attr("data-index",i);
            });
            this.slideNav.map((i,e)=>{
                $(e).attr("data-index",i);
            });
            // ACTIVE FIRST ITEM
            this.setActiveSlide(this.slideFor,0);
            this.setActiveSlide(this.slideNav,0);
            // CREATE BUTTON IN SLIDE FOR
            this.slideFor.parents("#galleryFor").append(this.tmpPrev);
            this.buttonPrev=this.slideFor.parent().parent().find(".slide-prev");
            this.slideFor.parents("#galleryFor").append(this.tmpNext);
            this.buttonNext=this.slideFor.parent().parent().find(".slide-next");
            // EVENT HANDEL
            this.eventHandel();
        },
        eventHandel:function(){
            var __ = this;
            // CLICK
            __.buttonPrev.click(function(){
                __.prev();
            });
            __.buttonNext.click(function(){
                __.next();
            });
            // NAV
            __.slideNav.click(function(){
                index = $(this).attr("data-index");
                __.setActiveSlide(__.slideFor,index);
                __.setActiveSlide(__.slideNav,index);
            });
        },
        getIndexDirection:function(slide,direction){
            indexActive = parseInt(slide.parent().find(".active").attr("data-index"));
            if(direction=="prev"){
                if(indexActive==0){
                    indexReturn=slide.length-1;
                }
                else{
                    indexReturn=indexActive-1;
                }
            }
            if(direction=="next"){
                if(indexActive==slide.length-1){
                    indexReturn=0;
                }
                else{
                    indexReturn=indexActive+1;
                }
            }
            return indexReturn;
        },
        setActiveSlide:function(slide,index){
            slide.map((i,e)=>{
                if($(e).attr("data-index")==index){
                    $(e).addClass("active");
                }
                else{
                    $(e).removeClass("active");
                }
            });
        },
        prev:function(){
            index = this.getIndexDirection(this.slideFor,"prev");
            this.setActiveSlide(this.slideFor,index);
            index = this.getIndexDirection(this.slideNav,"prev");
            this.setActiveSlide(this.slideNav,index);
        },
        next:function(){
            index = this.getIndexDirection(this.slideFor,"next");
            this.setActiveSlide(this.slideFor,index);
            index = this.getIndexDirection(this.slideNav,"next");
            this.setActiveSlide(this.slideNav,index);
        },
    }
    $(window).on("load",function(){
        app_gallery.init();
    });
    if(typeof $("#galleryNav").offset() =='object'){
        $("#galleryNav").mCustomScrollbar({
            axis:"x",
            alwaysShowScrollbar:false,
        });
    }
});