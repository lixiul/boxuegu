/**
 * Created by Administrator on 2017/2/26.
 */
define(['jquery','cookie'],function($,undefined){
    $('.navs a').on('click',function(){
       $(this).next().slideToggle();
    });

    /*退出功能*/
    $('#logout').on('click',function(){
        $.post('v6/logout',function(data){
            if(data.code == 200){
                console.log(1);
                location.href = '/html/home/login.html';
            }
        });
    });

    /*获取登陆的用户，填写用户的基本信息*/

    var userInfo = null;
    try{
        /*如果$.cookie('userInfo')返回的是undefined，那么JSON.parse(undefined)会报错*/
        userInfo =JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo = {};
    }
    $('.aside .profile h4').html(userInfo.tc_name?userInfo.tc_name:'你没名字');
    $('.aside .profile img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/images/default.png');


});