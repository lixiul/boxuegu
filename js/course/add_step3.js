/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','cookie','nProgress','common','artTemplate','util'],function($,undefined,nProgress,undefined,artTemplate,util){
    nProgress.done();

    var csID = util.getQueryString('cs_id');
    $.get('/v6/course/lesson',{cs_id:csID},function(data){
        if(data.code == 200){
            $('.steps').html(artTemplate('base-msg-3',data.result));
        }
    });
    var ct_id;//用于区别添加或者编辑的id
    /*点击添加，通过委托*/
    $(document).on('click','#course-add',function(){
        $('#chapterModal').modal();
        $('#chapterModal').html(artTemplate('mobal-box',{}));
    });

    /*点击编辑，通过委托*/

    $(document).on('click','#course-edif',function(){
        $('#chapterModal').modal();
        $.ajax({
            url:'/v6/course/chapter/edit',
            type:'get',
            data:{cs_id:csID},
            success:function(data){
                if(data.code == 200){
                    $('#chapterModal').html(artTemplate('mobal-box',{}));
                }
            }
        });
    });

    //点击提交编辑或者是添加的数据
    $('#chapterModal').on('click','.add-course',function(){
        $.ajax({
            url:'',
            type:'post',
            data:$('#send-course-form').serialize(),
            success:function(data){
                if(data.code == 200){
                    console.log(data);
                }
            }
        })

    });

});