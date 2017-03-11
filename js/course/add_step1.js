/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','cookie','nProgress','common','util','artTemplate','ckEdit'],
    function($,undefined,nProgress,undefined,util,artTemplate,ckEdit){

        /*1先根据传过来的cs_id获取课程的基本信息并且渲染
        *
        * 2.根据顶级id单独获取子级分类
        * 3.添加富文本
        * 4.点击修改成功到修改第二步add_step2.html课程图片*/


        /*1.获取基本信息并且渲染*/
        var csID = util.getQueryString('cs_id');
        $.get('/v6/course/basic',{cs_id:csID},function(data){
            if(data.code == 200){
                $('.steps').html(artTemplate('basic-msg',data.result));
            }

            /*3.添加富文本*/
            var ckt = ckEdit.replace('ckEditor');

            /*2.顶级分类改变时，获取对应的子级分类*/
            $('.top-sort').on('change',function(){
                console.log($(this).val());
                $.get('/v6/category/child',{cg_id:$(this).val()},function(data){
                    console.log(data);
                    var source = '{{each list as value i}}'
                        +        '<option value="{{value.cg_id}}">{{value.cg_name}}</option>'
                        +    '{{/each}}';
                    var render = artTemplate.compile(source);
                    var html = render({list:data.result});
                    $('.child-sort').html(html);
                });
            });


            /*4.提交修改的数据，成功后跳转到add_step2.html*/
            $('#setp-2-form').on('submit',function(){
                console.log($(this).serialize() + '&cs_id=' + csID);
                /*要先update之后才能获取到富文本的内容*/
                ckt.updateElement();
                $.ajax({
                    url:'/v6/course/update/basic',
                    type:'post',
                    data:$(this).serialize()+'&cs_id='+csID,
                    success:function(data){
                        (data.code == 200) && (location.href='/html/course/add_step2.html?cs_id='+csID);
                    }
                });
                return false;
            });


        });








    nProgress.done();
});