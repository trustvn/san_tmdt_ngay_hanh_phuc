$(document).ready(function(e){
	if(typeof $('[data-toggle="tooltip"]').offset() == "object"){
        $('[data-toggle="tooltip"]').tooltip({
            'animation':false,
            'container':'body',
        });
    }
    // MENU TAB
    $(".menuTab .mc-menu").click(function(){
        if(!$(this).parents(".menuTab").hasClass("active")){
            $(this).parents(".menuTab").addClass("active");
        }
        else{
            $(this).parents(".menuTab").removeClass("active");
        }
    });
    var totalItem = $(".select:not(.not)").size();
    var countItem=0;
    var arrSelect = new Array();
    // SELECT
    $(".select").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(this).find("input").prop('checked', true);
            countItem++;
            checkAllSelect();
        }
        else{
            $(this).removeClass("active");
            $(this).find("input").prop('checked', false);
            countItem--;
            checkAllSelect();
        }
    });
    $(".selectAll").click(function(){
        if(!$(this).hasClass("active")){
            $(".selectAll").addClass("active").removeClass("active-small");
            $(".select").addClass("active");
            $(".select").find("input").prop('checked', true);
            countItem=totalItem;
        }
        else{
            $(".selectAll").removeClass("active active-small");
            $(".select").removeClass("active");
            $(".select").find("input").prop('checked', false);
            countItem=0;
        }
        checkAllSelect();
        arrSelectCheck();
    });
    function checkAllSelect(){
        if(countItem>=totalItem){
            $(".selectAll").removeClass("active-small");
            $(".selectAll").addClass("active");
            $(".partTools").addClass("active");
        }
        else if(countItem>0 && countItem < totalItem){
            $(".selectAll").removeClass("active").addClass("active-small");
            $(".partTools").addClass("active");
        }
        else{
            $(".selectAll").removeClass("active active-small");
            $(".partTools").removeClass("active");
        }
    }
    function arrSelectCheck(){
        arrSelect = [];
        $(".partItem").find(".select.active").each(function(){
            arrSelect.push($(this).parents(".partItem"));
        });
        $(".itemCheck").find(".select.active").each(function(){
            arrSelect.push($(this).parents(".itemCheck"));
        });
    }
    $(".partTools .hideItem").click(function(){
        arrSelect.map((e) => {
            e.addClass("man-hide");
            e.find(".select").removeClass("active");
            e.find(".select").find("input").prop('checked', false);
        });
        arrSelect = [];
        $(".selectAll").removeClass("active active-small");
        $(".partTools").removeClass("active");
    });
    $(".partTools .showItem").click(function(){
        arrSelect.map((e) => {
            e.removeClass("man-hide");
            e.find(".select").removeClass("active");
            e.find(".select").find("input").prop('checked', false);
        });
        arrSelect = [];
        $(".selectAll").removeClass("active active-small");
        $(".partTools").removeClass("active");
    });
    $(".partItem .tools button.hideItem").click(function(){
        if(!$(this).parents(".partItem").hasClass("man-hide")){
            $(this).parents(".partItem").addClass("man-hide");
        }
        else{
            $(this).parents(".partItem").removeClass("man-hide");
        }
    });
    // =====================================================================
    // =====================================================================
    // =====================================================================
    $(".boxSelectCate .cate ul li a").click(function(){
        $(this).parents("li").siblings().removeClass("active");
        if(!$(this).parents("li").hasClass("active")){
            $(this).parents("li").addClass("active");
            let data = $(this).parents("li").attr("data-id");
            $(this).parents(".col").find("input").val(data);
        }
        get_text_2_bread();
        return false;
    });
    function get_text_2_bread(){
        let arr = [];
        $(".boxSelectCate .grid .col").each(function(){
            if($(this).find(".active").size()>0){
                let txt = $(this).find(".active").find("a").text();
                arr.push(txt);
            }
        });
        $(".boxSelectCate").find(".bread ul").html("");
        arr.map((e)=>{
            $(".boxSelectCate").find(".bread ul").append("<li>"+e+"</li>");
        });
    }
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
    $(".menuFixed:not(.notfix)").mnfixed({
        break:991,
        limit:"#flagEnd",
        top:55,
        zindex:1,
    });
    $(".menuFixed .mc-menu").click(function(){
        if(!$(this).parents(".menuFixed").hasClass("active")){
            $(this).parents(".menuFixed").addClass("active");
        }
        else{
            $(this).parents(".menuFixed").removeClass("active");
        }
    });
    // MENU TAB
    $(window).scroll(function(){
        var $winOffset=$(window).scrollTop();
        $(".boxFlag").each(function(){
            var $ih = $(this).innerHeight();
            var $io = $(this).offset().top;
            var $ihref = $(this).attr("id");
            var $iho = $ih + $io;
            var $ahref = ".menuFixed ul li a[href='#"+ $ihref +"']";
            if(($io - 55) < $winOffset  && ($iho - 40) > $winOffset){
                $(".menuFixed ul li").removeClass("current");
                $($ahref).parents("li").addClass("current");
            }
        });
    });
    $(".menuFixed ul li a").click(function(){
        if($(this).parents(".menuFixed").hasClass("active")){
            $(this).parents(".menuFixed").removeClass("active");
        }
        var op=$(this).attr("href");
        var opOffset=$(op).offset().top - 54;
        $('html,body').animate({scrollTop: opOffset},1000);
        return false;
    });
    // =====================================================================
    // =====================================================================
    // =====================================================================
    $("#dc_single").click(function(){
        $("#dc_toggle_single, #dc_toggle_multi").hide();
        $("#dc_toggle_single").show();
    });
    $("#dc_multi").click(function(){
        $("#dc_toggle_single, #dc_toggle_multi").hide();
        $("#dc_toggle_multi").show();
    });
    $(".addTypeGroup").click(function(){
        $("#typeGroup").show();
        $(this).remove();
        app_built_table.flag_type=true;
    });
    $(".addType").click(function(){
        let tmp = '<div class="formFa" data-text="0/20"><input type="text" placeholder="Nhập phân loại hàng. Ví dụ: Trắng, Đỏ, v.v"></div>';
        $(this).parents(".groupType").find(".type").append($(tmp));
    });
    // ===================================
    // ==================================
    // ================================
    var app_built_table = {
        flag_type : false,
        table:"",
        data : [
            {
                name : "",
                options : [],
            },
            {
                name : "",
                options : [],
            }
        ],
        run:function(){
            this.get_data();
            this.built();
        },
        get_data:function(){
            let __ = this;
            this.data[0].name=$(".name_type_1").val();
            __.data[0].options = [];
            $(".option_type_1 input").each(function(){
                if(!$(this).val() == ""){
                    __.data[0].options.push($(this).val());
                }
            });
            if(__.flag_type==true){
                this.data[1].name=$(".name_type_2").val();
                __.data[1].options = [];
                $(".option_type_2 input").each(function(){
                    if(!$(this).val() == ""){
                        __.data[1].options.push($(this).val());
                    };
                });
            }
        },
        built:function(){
            let __ = this;
            __.table="";
            ////////////////// THEAD /////////////////////
            if(__.flag_type==false){
                __.table+="<table>";
                __.table+="<tr>";
                __.table+="     <th>"+__.data[0].name+"</th>";
                __.table+="     <th>Giá bán</th>";
                __.table+="     <th>Kho hàng</th>";
                __.table+="     <th>SKU phân loại</th>";
                __.table+="</tr>";
            }
            else{
                __.table+="<table>";
                __.table+="<tr>";
                __.table+="     <th>"+__.data[0].name+"</th>";
                __.table+="     <th>"+__.data[1].name+"</th>";
                __.table+="     <th>Giá bán</th>";
                __.table+="     <th>Kho hàng</th>";
                __.table+="     <th>SKU phân loại</th>";
                __.table+="</tr>";
            }
            ////////////////// TBODY /////////////////////
            if(__.flag_type==false){
                __.data[0].options.map((e)=>{
                    __.table+="<tr>";
                    __.table+="     <td><input type='text' value='"+e+"' readonly /></td>";
                    __.table+="     <td><input type='text' class='price'/></td>";
                    __.table+="     <td><input type='text' class='store'/></td>";
                    __.table+="     <td><input type='text' class='sku'/></td>";
                    __.table+="</tr>";
                });
            }
            else{
                let rowspan = __.data[1].options.length;
                __.data[0].options.map((e,index_e)=>{
                    __.data[1].options.map((i,index_i)=>{
                        if(index_i==0){
                            __.table+="<tr>";
                            __.table+="     <td rowspan='"+rowspan+"'><input type='text' value='"+e+"' readonly /></td>";
                            __.table+="     <td><input type='text' value='"+i+"' readonly /></td>";
                            __.table+="     <td><input type='text' class='price'/></td>";
                            __.table+="     <td><input type='text' class='store'/></td>";
                            __.table+="     <td><input type='text' class='sku'/></td>";
                            __.table+="</tr>";
                        }
                        else{
                            __.table+="<tr>";
                            __.table+="     <td><input type='text' value='"+i+"' readonly /></td>";
                            __.table+="     <td><input type='text' class='price'/></td>";
                            __.table+="     <td><input type='text' class='store'/></td>";
                            __.table+="     <td><input type='text' class='sku'/></td>";
                            __.table+="</tr>";
                        }
                    });
                });
            }

            __.table+="</table>";
            $(".tableDesignType").empty().append($(__.table));
        },
        set_value(price,store,sku){
            $(".tableDesignType").find(".price").val(price);
            $(".tableDesignType").find(".store").val(store);
            $(".tableDesignType").find(".sku").val(sku);
        }
    }
    $(".btnBuiltTable").click(function(){
        console.clear();
        app_built_table.run();
        // console.log(app_built_table.data);
    });
    $(".btnSetValue").click(function(){
        let price = $(".groupOption").find(".price").val();
        let store = $(".groupOption").find(".store").val();
        let sku = $(".groupOption").find(".sku").val();
        app_built_table.set_value(price,store,sku);
    });
    // ==================================================================
    // ==================================================================
    // ==================================================================
    $(".toggle").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
        }
        else{
            $(this).removeClass("active");
        }
    });
    $(".slideFlashBanner").slick({
        fade:true,
        arrows:false,
    });
    // ==================================================================
    // ==================================================================
    // ==================================================================
    $(".btnSelectAllQuy").click(function(){
        arrSelect.map((e) => {
            e.addClass("active");
            e.find(".select").removeClass("active");
        });
        arrSelect = [];
        $(".selectAll").removeClass("active active-small");
        $(".partTools").removeClass("active");
    });
    $(".revenueTable a").fancybox({
        type:'iframe',
        smallBtn:true,
        toolbar:false,
        baseClass:'designPopup',
    });
    $(".btnWallet").fancybox({
        type:'iframe',
        smallBtn:true,
        toolbar:false,
        baseClass:'designPopup v2',
    });
    // MENU MEMBER
    $(".menuMember .mc-menu").click(function(){
        if(!$(this).parents(".menuMember").hasClass("active")){
            $(this).parents(".menuMember").addClass("active");
        }
        else{
            $(this).parents(".menuMember").removeClass("active");
        }
    });
    $(".openPopup").fancybox({
        type:'iframe',
        baseClass:'designPopup',
        smallBtn:true,
        toolbar:false,
    });
});