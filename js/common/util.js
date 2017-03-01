/**
 * Created by Administrator on 2017/3/1.
 */
define([],{
    // 封装一个获取指定查询字符串参数值的方法
    // 如果不传参，返回所有查询字符串构成的对象；
    // 如果传1个参数，返回指定的参数值。
    getQueryString:function(key) {
        // 去掉字符串首字母?号
        var search = location.search.slice(1);
       //name=xx&age1=8&age=18

        // 使用&符号得到每一个key=val
        var searchArr = search.split('&');
      // ['name=xx','age1=8']
        var tempArr = null;
        var searchObj = {};

        // 遍历数组中的每一个key=val字符串，使用=号劈开，
        // 然后以key为名，val为值添加到searchObj对象中。
        for( var i =0, len = searchArr.length; i < len; i++) {
            tempArr = searchArr[i].split('=');
    //					['name','xx']
            searchObj[ tempArr[0] ] = tempArr[1];
        }

        // 有参数返回指定值，没有参数返回全部值
        return arguments.length? searchObj[key]: searchObj;
        //return searchObj;
    },
    extend:function(){

    }
});