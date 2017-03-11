/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','cookie','nProgress','common'],function($,undefined,nProgress,undefined){
    nProgress.done();
    $('.create-course-form').on('submit',function(){
        console.log($(this).serialize());
        $.ajax({
           url:'/v6/course/create',
           type:'post',
           data:$(this).serialize(),
            success:function(data){
                (data.code== 200) && (location.href='/html/course/add_step1.html?cs_id='+data.result.cs_id);
            }

        });
        return false;
    });
});