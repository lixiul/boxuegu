/**
 * Created by Administrator on 2017/2/26.
 */
define(['jquery','cookie'],function($,undefined){
    /*ajax loading*/
    $(document).ajaxStart(function(){
        $('.overlay').show();
    });
    $(document).ajaxStop(function(){
        $('.overlay').hide();
    });

    /*导航二级菜单显示隐藏切换效果*/
    $('.navs a').on('click',function(){
        $(this).next().slideToggle();
    });
    //左侧导航切换的选中状态
    /*通话当前页面的pathname来做*/

    /*先做个映射*/
    var pathMap={
        '/html/course/add_step1.html':'/html/course/add.html',
        '/html/course/add_step2.html':'/html/course/add.html',
        '/html/course/add_step3.html':'/html/course/add.html',
        '/html/course/category_add.html':'html/course/category.html',
    };
    var pathname = window.location.pathname;
    for(var key in pathMap){
        pathname == key?pathname=pathMap[key]:pathname;
    }



    $('.navs a').removeClass('active')
        .filter('[href="'+pathname+'"]')
        .addClass('active')
        .parents('ul').show();

    /*退出功能*/
    $('#logout').on('click',function(){
        $.post('/v6/logout',function(data){
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