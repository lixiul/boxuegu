/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','cookie'],function($,undefined){
    /*登陆功能*/
    $('#form-login').on('submit', function () {
        $.ajax({
            type:'post',
            url:'/v6/login',
            //data:$(this).serialize(),
            data:{
                tc_name:$('#tc_name').val(),
                tc_pass:$('#tc_pass').val(),
            },
            success:function(data){
                if(data.code === 200){
                    /*登录成功把返回的数据存储在cookie中*/
                    $.cookie('userInfo',JSON.stringify(data.result),{
                        path:'/'
                    });
                    location.href = '/';
                }
            },
            error:function(){
                alert('用户名或密码错误');
            }
        });
       return false;
    });
});