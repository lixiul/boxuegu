/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','cookie','nProgress','common','artTemplate'],function($,undefined,nProgress,undefined,artTemplate){
    /*如果用缓存，那么就先加载缓存，没有再请求数据*/
    var teacherListCache;
    try{
        teacherListCache = JSON.parse(localStorage.getItem('teacherListCache'));
    }catch(e){}
    if(teacherListCache){
        var html = artTemplate('teacher-list-tpl',{list:teacherListCache});
        $('#teacher-list-tbody').html(html);
    }else{
        $.get('/v6/teacher',function(data){
            if(data.code == 200){
                teacherListCache = localStorage.setItem('teacherListCache',JSON.stringify(data.result));
                var html = artTemplate('teacher-list-tpl',{list:data.result});
                $('#teacher-list-tbody').html(html);
            }
        });
    }


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


    /*修改讲师状态  通过事件委托*/
    $('#teacher-list-tbody').on('click','.teacher-handle',function(){
        var $this = $(this);
        $.get('/v6/teacher/handle',{
            tc_id:$(this).parent().attr('data-id'),
            tc_status:$(this).parent().attr('data-status')
        },function(data){
            if(data.code == 200){
                $this.html(data.result.tc_status==0?'开启':'注销');
                $this.parent().attr('data-status',data.result.tc_status);
                /*切换按钮样式*/
                if(data.result.tc_status==0){
                    $this.addClass('btn-success');
                    $this.removeClass('btn-warning');
                }else{
                    $this.addClass('btn-warning');
                    $this.removeClass('btn-success');
                }
            }
        });
    });


    nProgress.done();
});