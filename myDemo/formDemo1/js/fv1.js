/**
 * Created by fairy on 2016/1/19.
 */

/*
$(function(){
    $('#form :input').focus(function(){
        $(this).addClass('focus');
        var txt_value = $(this).val();
        if(txt_value == this.defaultValue){
            $(this).val('');
        }

    })
    $('#form :input').blur(function(){
        $(this).removeClass('focus');
        var txt_value = $(this).val();
        if(txt_value == ''){
            $(this).val(this.defaultValue);
        }
    })
})
*/

/*
$(function(){
    $('#form :input').focus(function(){
        $(this).addClass('focus');
        var txt_value = $(this).val();
        if(txt_value == this.defaultValue){
            $(this).val('');
        }

    }).blur(function(){
        $(this).removeClass('focus');
        var txt_value = $(this).val();
        if(txt_value == ''){
            $(this).val(this.defaultValue);
        }
    })
})
*/


$(function(){
    $('#username,#password,#msg').focus(function(){
        $(this).addClass('focus');
        var txt_value = $(this).val();
        if(txt_value == this.defaultValue){
            $(this).val('');
        }

    })
    $('#username,#password,#msg').blur(function(){
        $(this).removeClass('focus');
        var txt_value = $(this).val();
        if(txt_value == ''){
            $(this).val(this.defaultValue);
        }
    })
})
