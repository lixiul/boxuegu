/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','cookie','nProgress','common'],function($,undefined,nProgress,undefined){
    /*获取类型*/
    var finalData = '';
    var tc_type = null;
    $('#teacher_type').on('change',function(){
        tc_type = $(this).children('option:selected').html();
        tc_type = tc_type == '管理员' ? 0:1;
    });

    $('#addTeacher').on('click',function(){
        finalData = $('#addTeacherForm').serialize()+'&tc_type'+tc_type;
        console.log(finalData);
        $.ajax({
            type:'post',
            url:'/v6/teacher/add',
            data:finalData,
            success:function(data){
                if(data.code === 200){
                    console.log('添加成功');
                }
            },
            error:function(){
                console.log('添加失败');
            }
        });
    });
    nProgress.done();
});