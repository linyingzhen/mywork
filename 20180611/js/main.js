$(function(){

    //设置默认地址变色
    $("input[name=adr]").each(function(){
        $(this).on('click',function(){
            $("label").removeClass("red");
            $('input:radio[name="adr"]:checked').next("label").addClass("red");
        });
    });

    //选菜切换
    $(".section1 li,.section2 li,.section3 li").on('click',function(){
        $(this).addClass("on").siblings().removeClass("on");
        console.log($(this).index());
    });

    //规格弹窗打开，关闭
    $(".spec_window,.zhizhao").hide();
    $(".food .spec").on('click',function () {
        $(".spec_window,.zhizhao").show();
        return false;
    });
    $(".spec_window .close").on('click',function () {
        $(".spec_window,.zhizhao").hide();
    });

    //左侧分类切换
    var menuItem = $(".menu-item");
    menuItem.eq(0).addClass("menu-item-selected").siblings().removeClass("menu-item-selected");
    menuItem.on('click',function(){
        $(this).addClass("menu-item-selected").siblings().removeClass("menu-item-selected");
    });

    //阻止事件冒泡函数,阻止默认浏览器动作
    $(".plus,.minus,.num").on('click',function(e){
        if (e && e.stopPropagation)
            e.stopPropagation();
        else
            window.event.cancelBubble = true;

        if (e && e.preventDefault) {
            e.preventDefault();
        } else {
            window.event.returnValue = false;
        }
        return false;
    });


});


