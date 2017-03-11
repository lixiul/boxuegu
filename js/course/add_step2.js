/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','cookie','nProgress','common','util','artTemplate','uploadify'],
    function($,undefined,nProgress,undefined,util,artTemplate,uploadify){

    nProgress.done();
    /*获取数据渲染
    * 获取图片提交*/
    var csID = util.getQueryString('cs_id');
    $.get('/v6/course/picture',{cs_id:csID},function(data){
        if(data.code == 200){
            $('.steps').html(artTemplate('base-msg-2',data.result));
        }
        //获取图片提交
        $('#uploadify').uploadify({
            swf:'/lib/uploadify/uploadify.swf',
            height:$(this.avatarPreview).height(),
            uploader:'/v6/uploader/cover',
            fileObjName:'cs_cover_original',
            fileTypeExts: '*.gif; *.jpg; *.png',
            buttonText: '上传封面',
            height:'100%',
            width:'100%',
            buttonClass:'btn btn-success btn-sm',
            formData:{cs_id:csID},
            onUploadSuccess:function(file,data){
                data = JSON.parse(data);
                $('.preview img').attr('src',data.result.path);

            }
        });


    })
});