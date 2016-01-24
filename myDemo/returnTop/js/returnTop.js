/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-23 15:07:26
 * @version $Id$
 */

/*
1.首先隐藏returnTop
2.判断滚动条的位置，当滚动条的位置与顶部的距离大于100像素时，跳转链接出现，否则消失
3.点击跳转链接，则返回到顶部位置
 */

$(document).ready(function(){
	// 1.首先隐藏returnTop
	$('#returnTop').hide();

	// function returnTop(){ //function returnTop(){} 与 var returnTop = function(){} ， 两种写法均可，用returnTop()进行调用
	var returnTop = function(){
		//2.判断滚动条的位置，当滚动条的位置与顶部的距离大于100像素时，跳转链接出现，否则消失
		$(window).scroll(function(){
			if($(window).scrollTop() > 100){
				$('#returnTop').fadeIn(1000);
			}else{
				$('#returnTop').fadeOut(1000);
			}
		});

		// 3.点击跳转链接，则返回到顶部位置
		$('#returnTop').click(function(){
			$('html,body').animate({scrollTop:0},1000); // $("body,html")是为了兼容IE6
			return false; //点击超链接不跳转，还停留在当前页面上
		});

	}
	
	returnTop(); // 调用returnTop()方法
});