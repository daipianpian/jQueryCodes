/**
 * Created by fairy on 2016/1/26.
 */

/*
* 1、为li绑定点击事件
* 2、将当前单击的li元素高亮显示，然后去掉其他同辈li元素的高亮
* 3、从当前选项卡的结构可以知道，每个li元素都分别对应一个div区域。因此可以根据当前单击的li元素在li元素的索引值来显示对应的区域
* 4、添加鼠标滑入滑出的效果
* */

/*
var $div_li = $('div.tab_menu ul li'); 与 var div_li = $('div.tab_menu ul li') 

没有区别，只是习惯。一般在给jquery对象取名的时候在前面加$。 一看就知道是jquery对象。

变量命名规则中起始字符可以是 字母,下划线(_),美元符($),只是很多的js库喜欢使用$作为全局变量标志,jQuery也不例外.加上$,作为jQuery变量标志更容易进行区分

这个$div_li和div_li性质是一样的，都是变量，没什么区别
 */

$(function(){
    var $div_li = $('div.tab_menu ul li'); // 
    $div_li.click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        var index = $div_li.index(this);
        $('div.tab_box > div').eq(index).show().siblings().hide();
    }).hover(function(){
        $(this).addClass('hover');
    },function(){
        $(this).removeClass('hover');
    });
});