/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','cookie','nProgress','common','region','datePicker','datePickerLanguage','region','ckEdit','uploadify','artTemplate'],
    function($,undefined,nProgress,undefined,region,datePicker,undefined,region,ckEdit,undefined,artTemplate){
    nProgress.done();

    function PersonSetting(){
        this.formDI = 'setting-form-tpl';// 模板id
        this.addForm = '.settings';//填入模板的坑
        this.form = '#setting-form'; //表单的id
        this.avatarPic='#upfile'; // 图片表单id
        this.avatarPreview='.preview'; //图片预览的选择器
        this.datePicker = '.datepicker'; //日期选择器
        this.homeTown = '.homeTown';//市级联动
        this.init();

    };
    PersonSetting.prototype = {
        /*初始化*/
        init:function(){
            var self = this;
            this.getRenderData(function(data){
                /*渲染数据*/
                self.render(data);
                /*上传图片*/
                self.upLoadHeader();
                /*选择日期*/
                //self.setDate();
                /*市级联动*/
                self.getCity();
                /*富文本编辑器*/
                self.ckEdit();
                /*修改后提交数据*/
                self.sendData();

            });
        },
        /*获取数据*/
        getRenderData:function(cbk){
            $.get('/v6/teacher/profile',function(data){
                if(data.code == 200){
                    cbk(data.result);
                    console.log(data.result);
                }
            })
        },
        /*渲染模板*/
        render:function(data){
            $(this.addForm).html(artTemplate(this.formDI,data));
        },
        /*获取发送数据*/
        getSendData:function(){
            var hometown = $(this.homeTown+' select').map(function() {
                return $(this).find('option:selected').text();
            }).toArray().join('|');
            return $(this.form).serialize()+'&tc_hometown='+hometown;
        },

        /*上传头像*/
        upLoadHeader:function(){
          $(this.avatarPic).uploadify({
              swf:'/lib/uploadify/uploadify.swf',
              height:$(this.avatarPreview).height(),
              uploader:'/v6/uploader/avatar',
              fileObjName:'avatar',
              fileTypeExts: '*.gif; *.jpg; *.png',
              //buttonText: '',
              onUploadSuccess:function(file,data){
                  console.log(data);
              }
          });
        },
        /*日期插件*/
        setDate:function(){
            $(this.datePicker).datePicker({
                language: 'zh-CN',
                format: 'yyyy-mm-dd',
                endDate: new Date()
            });
        },
        /*市级联动*/
        getCity:function(){
            $(this.homeTown).region({
                url: '/lib/region/region.json'
            });
        },
        /*富文本编辑器*/
        ckEdit:function(){
            var ck = ckEdit.replace('ckeditor');
            /*更新，才能获取到文本域的值*/
            ck.updateElement();
        },
        /*修改发送数据*/
        sendData:function(){
            var self = this;
            $(this.form).on('submit',function(){
                console.log(self.getSendData());
                $.ajax({
                    url:'/v6/teacher/modify',
                    type:'post',
                    data:self.getSendData(),
                    success:function(data){
                        if(data.code == 200){
                            console.log(data);
                        }
                    }
                });
               return false;
            });

        }




    };

    new PersonSetting();


});