/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','cookie','nProgress','common','artTemplate'],function($,undefined,nProgress,undefined,artTemplate){
    $.get('/v6/course',function(data){
        data.code == 200 && $('.courses').append(artTemplate('course-list',{list:data.result}));
    });
    nProgress.done();
});