/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','cookie','nProgress','common','util','artTemplate','datePicker','datePickerLanguage'],

    function($,undefined,nProgress,undefined,util,artTemplate,datePicker,undefined){
    /*编辑讲师
    * 1.先通过tc_id获取讲师信息，渲染模板
    * 2.修改讲师信息，*/

    var tdID = util.getQueryString('tc_id');
    if(tdID){/*编辑*/
        $.get('/v6/teacher/edit',{
            tc_id:tdID
        },function(data){
            var html = artTemplate('teacher-add-tpl',data.result);
            $('.teacher-add').html(html);
            $('#date-select').datepicker({
                format:'yyyy-mm-dd',
                endDate:new Date(),
                language:'zh-CN'
            });
        });

    }else{/*添加*/
        var html = artTemplate('teacher-add-tpl',{});
        $('.teacher-add').html(html);
        $('#date-select').datepicker({
            format:'yyyy-mm-dd',
            endDate:new Date(),
            language:'zh-CN'
        });
    }

    /*添加或编辑讲师信息*/
    $('.teacher-add').on('submit','#addTeacherForm',function(){
        $.ajax({
            type:'post',
            url:'/v6/teacher/'+(tdID?'update':'add'),
            data:$(this).serialize()+(tdID?'&tc_id='+tdID:''),
            success:function(data){
                if(data.code == 200){
                    console.log(data);
                    location.href='/html/teacher/list.html';
                }
            }
        });
        return false;
    });
    nProgress.done();
});