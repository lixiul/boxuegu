/**
 * Created by Administrator on 2017/2/26.
 */
define(['jquery'],function($){
    $('.navs a').on('click',function(){
       $(this).next().slideToggle();
    });

    $.ajax({
        type:'post',
        url:'/v6/login',
        data:{
            tc_name:123456,
            tc_pass:123456
        },
        success:function(data){
            console.log('ok');
        },
        error:function(){
            console.log('error');
        }
    })


});