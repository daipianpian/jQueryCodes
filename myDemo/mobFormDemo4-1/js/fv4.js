/**
 * Created by fairy on 2016/1/20.
 */
$(document).ready(function() {
    //每屏宽高等于屏幕宽高，使其充满整个屏幕
    var clientWidth = $(window).width();
    var clientHeight = $(window).height();
    $('.wrap').css({'width': '100%', 'height': clientHeight + 'px'});
    $('.screen').css({'width': '100%', 'height': clientHeight + 'px', 'line-height': clientHeight + 'px'});

    //点击切换到下一屏，当处于最后一屏时再点击，回到第一屏
    var lay = function(){
        var page = 1;
        var page_count = $('.screen').length;
        $('.screen1').show();
        $('.tishi').click(function(){
            if(!$(this).is(':animated')){
                if(page == page_count){
                    $(this).parent().hide();
                    $('.screen1').show();
                    page=1;
                }else{
                    $(this).parent().hide();
                    $(this).parent().next().show();
                    page++;
                }
            }
        });
     }
    //调用lay()方法
    lay();

    // div.result先设置为隐藏
    $('.result').hide();

    //让指定的div始终显示在屏幕正中间
    function letDivCenter(divName){
        var top = ($(window).height() - $(divName).height())/2;
        var left = ($(window).width() - $(divName).width())/2;
        var scrollTop = $(document).scrollTop();
        var scrollLeft = $(document).scrollLeft();
        $(divName).css( { position : 'absolute', 'top' : top + scrollTop, left : left + scrollLeft } ).show();
    }

    $('#send').click(function(){
        //每次执行div#send（提交）点击事件时先将div.result设置为空
        $('.result').text('');

        //验证用户名，用户名不能为空
        if($('#username').val()==''){
            var errorMsg = '用户名不能为空！';
            $('.result').append('<span class="onError">'+errorMsg+'</span>');
            letDivCenter('.result');
            // 验证用户名时，返回false
            return false;
        }else{
            //验证手机号
            var reg = /^[1][3-8]\d{9})$/;
            var tel = $('#tel').val()
            if(!reg.test(tel)){
                var errorMsg = '手机号不正确 ！';
                $('.result').append('<span class="onError">'+errorMsg+'</span>');
                letDivCenter('.result');
                // 验证手机号不对时，返回false
                return false;
            }else{
                var okMsg = '提交成功！';
                $('.result').append('<span class="onSuccess">'+okMsg+'</span>');
                letDivCenter('.result');
                // 验证用户名、手机号均对时，返回true
                return true;
            }
        }
    });

    // 点击div##reset（重置）时，用户名和手机号的输入框里的值置为空
    $('#reset').click(function(){
        $('input.required').val('');
    });

    // 点击屏幕，div.result隐藏
    $('.screen').click(function(){
        $('.result').hide();
    });

});