/**
 * Created by Administrator on 2017/2/25.
 */
requirejs.config({
   baseUrl:'/',
    paths:{
        jquery:'/lib/jquery/jquery.min',
        bootstrap:'/lib/bootstrap/js/bootstrap.min',

        /*自己写的js*/
        index:'/js/index',
        //user
        userList:'/js/user/list',
        userProfile:'/js/user/profile',
        //teacher
        teacherAdd:'/js/teacher/add',
        teacherLsit:'/js/teacher/list',
        //home
        homeLogin:'/js/home/login',
        homeRepass:'/js/home/repass',
        homeSettings:'/js/home/settings',
        //course
        courseAdd:'/js/course/add',
        courseAddStep1:'/js/course/add_step1',
        courseAddStep2:'/js/course/add_step2',
        courseAddStep3:'/js/course/add_step3',
        courseCategory:'/js/course/category',
        courseCategoryAdd:'/js/course/category_add',
        courseList:'/js/course/list',
        courseTopic:'/js/course/topic',
        common:'/js/common/common',

        /*cookie插件*/
        cookie:'/lib/jquery-cookie/jquery.cookie',
        /*页面加载进度条*/
        nProgress:'/lib/nprogress/nprogress',
        /*模板*/
        artTemplate:'lib/artTemplate/template',
        /*小工具*/
        util:'js/common/util',

        /*日期插件*/
        datePicker:'lib/bootstrap-datepicker/js/bootstrap-datepicker.min',
        datePickerLanguage:'lib/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        datePickerLanguage:{
            deps:['jquery','datePicker']
        }
    }
});
require(['nProgress'],function(nProgress){
    nProgress.start();
});
require(['jquery','bootstrap']);

/*根据每个页面的pathname来加载对应的js文件*/
(function(window){
    var pathName = window.location.pathname;
    require(['jquery','cookie'],function($,undefined){
        var sessID = $.cookie('PHPSESSID');
        /*先判断登陆状态，根据SESSID来判断
        * 1.如果是在登陆页面，有SESSID，就跳到首页，如果没有，就不管
        * 2.如果不是在登陆页面，没有SESSID，就跳转到登陆页面，如果有就不管*/
        if(pathName === '/html/home/login.html' && sessID){
            location.href = '/';
        }else if(pathName !== '/html/home/login.html' && !sessID){
            location.href = '/html/home/login.html';
        }
        switch (pathName){
            case '/':
                require(['index']);
                break;
            case '/html/user/list.html':
                require(['userList']);
                break;
            case '/html/user/profile.html':
                require(['userProfile']);
                break;
            case '/html/teacher/add.html':
                require(['teacherAdd']);
                break;
            case '/html/teacher/list.html':
                require(['teacherLsit']);
                break;
            case '/html/home/login.html':
                require(['homeLogin']);
                break;
            case '/html/home/repass.html':
                require(['homeRepass']);
                break;
            case '/html/home/settings.html':
                require(['homeSettings']);
                break;
            case '/html/course/add.html':
                require(['courseAdd']);
                break;
            case '/html/course/add_step1.html':
                require(['courseAddStep1']);
                break;
            case '/html/course/add_step2.html':
                require(['courseAddStep3']);
                break;
            case '/html/course/add_step3.html':
                require(['courseAddStep3']);
                break;
            case '/html/course/category.html':
                require(['courseCategory']);
                break;
            case '/html/course/category_add.html':
                require(['courseCategoryAdd']);
                break;
            case '/html/course/list.html':
                require(['courseList']);
                break;
            case '/html/course/topic.html':
                require(['courseTopic']);
                break;
            default :
                break;
        }
    });
})(window);