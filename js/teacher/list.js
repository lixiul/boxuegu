/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','cookie','nProgress','common','artTemplate'],function($,undefined,nProgress,undefined,artTemplate){
    /*加载教师列表*/
    $.get('/v6/teacher',function(data){
        if(data.code == 200){
            var html = artTemplate('teacher-list-tpl',{list:data.result});
            $('#teacher-list-tbody').html(html);
        }
    });

    /*查看单个教师详情*/
    /*这里借用事件委托，因为不能直接给那些查看按钮注册事件，他们是动态添加的，是异步执行的，有可能会数据还没加载完就执行了点击查看事件*/
    $('#teacher-list-tbody').on('click','.teacher-view',function(){
        $.get('/v6/teacher/view',{
            tc_id:$(this).parent().attr('data-id')
        },function(data){
            $('#teacherModal').html('');
            var html = artTemplate('teacher-view-tpl',data.result);
            $('#teacherModal').html(html);
        })
    });
    nProgress.done();
});