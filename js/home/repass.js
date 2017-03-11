/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','cookie','nProgress','common'],function($,undefined,nProgress,undefined){
    nProgress.done();
    $('.modify-repass-form').on('submit',function(){
        $.ajax({
            url:'/v6/teacher/repass',
            type:'post',
            data:$(this).serialize(),
            success:function(data){
                /*退出登录，触发退出按钮*/
                if(data.code == 200){
                    $('#logout').trigger('click');
                }
            }
        });
        return false;
    });
});