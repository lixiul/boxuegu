/**
 * Created by Administrator on 2017/2/25.
 */
requirejs.config({
   baseUrl:'/',
    paths:{
        jquery:'/lib/jquery/jquery.min',
        bootstrap:'/lib/bootstrap/js/bootstrap.min',

        /*�Լ�д��js*/
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

        /*cookie���*/
        cookie:'/lib/jquery-cookie/jquery.cookie',
        /*ҳ����ؽ�����*/
        nProgress:'/lib/nprogress/nprogress',
        /*ģ��*/
        artTemplate:'lib/artTemplate/template',
        /*С����*/
        util:'js/common/util',

        /*���ڲ��*/
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

/*����ÿ��ҳ���pathname�����ض�Ӧ��js�ļ�*/
(function(window){
    var pathName = window.location.pathname;
    require(['jquery','cookie'],function($,undefined){
        var sessID = $.cookie('PHPSESSID');
        /*���жϵ�½״̬������SESSID���ж�
        * 1.������ڵ�½ҳ�棬��SESSID����������ҳ�����û�У��Ͳ���
        * 2.��������ڵ�½ҳ�棬û��SESSID������ת����½ҳ�棬����оͲ���*/
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