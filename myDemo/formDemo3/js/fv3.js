/**
 * Created by fairy on 2016/1/20.
 */
$(function(){
    //如果是必填的，则加红星标识.
    $('form :input.required').each(function(){
        var $required = "<strong class='high'>*</strong>";//创建元素
        $(this).parent().append($required);//然后将它追加到文档中
    });
    //文本框失去焦点后
    $('form :input').blur(function(){
        var $parent = $(this).parent();
        $parent.find(".formtips").remove();
        //验证用户名
        if($(this).is('#username')){
            if(this.value=='' || this.value.length < 6){
                var errorMsg = '请输入6位用户名';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg = '输入正确';
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }

        //验证密码
        if($(this).is('#pw1')){
            if(this.value==''||this.value.length<6){
                $('#pw2').attr('disabled',true);
                var errorMsg = '请输入不小于六位的密码';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var infoMsg = '请确认密码';
                $('#pw2').parent().append('<span class="formtips onInfo">'+infoMsg+'</span>');

                $('.formtip').remove();
                $('#pw2').attr('disabled',false);
                var okMsg = '输入正确';
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }

        //确认密码
        if($(this).is('#pw2')){
            if($(this).val() == '' || $(this).val() != $('#pw1').val()){
                var errorMsg = '输入密码不一致，请重新输入';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                $('.formtips span').remove();
                var okMsg = '输入正确';
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }

        //验证手机号
        if($(this).is('#tel')){
            var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if(!myreg.test($(this).val())){
                var errorMsg = '请输入正确的手机号';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                return false;
            }else{
                var okMsg = '输入正确';
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                return true;
            }
        }

        //验证邮箱
        if($(this).is('#email')){
            if(this.value=='' || (this.value != '' && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))){
                var errorMsg = '请输入正确的email地址';
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg = '输入正确';
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
    }).keyup(function(){
        $(this).triggerHandler("blur");
    }).focus(function(){
        $(this).triggerHandler("blur");
    });//end blur

    //提交，最终验证。
    $('#result').hide();
    $('#send').click(function(){
        $("form :input.required").trigger('blur');

        var numError = $('form .onError').length;
        if(numError){
            return false;
        }

        alert("注册成功,密码已发到你的邮箱,请查收.");

       

        //ajax start

        var name = $("input#name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();
        var data = 'username=' +username;

        $.ajax({
            type:'POST',
            url:'bin/process.php',
            data:data,
            success:function() {
                $('.result').show();
                $('.result').text(html);
            }
        });
        
        return false;
        //ajax end
        
    });

    $('#reset').click(function(){
        $('.formtips').remove();
    });
})