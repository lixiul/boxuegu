/**
 * Created by Administrator on 2017/3/1.
 */
define([],{
    // ��װһ����ȡָ����ѯ�ַ�������ֵ�ķ���
    // ��������Σ��������в�ѯ�ַ������ɵĶ���
    // �����1������������ָ���Ĳ���ֵ��
    getQueryString:function(key) {
        // ȥ���ַ�������ĸ?��
        var search = location.search.slice(1);
       //name=xx&age1=8&age=18

        // ʹ��&���ŵõ�ÿһ��key=val
        var searchArr = search.split('&');
      // ['name=xx','age1=8']
        var tempArr = null;
        var searchObj = {};

        // ���������е�ÿһ��key=val�ַ�����ʹ��=��������
        // Ȼ����keyΪ����valΪֵ��ӵ�searchObj�����С�
        for( var i =0, len = searchArr.length; i < len; i++) {
            tempArr = searchArr[i].split('=');
    //					['name','xx']
            searchObj[ tempArr[0] ] = tempArr[1];
        }

        // �в�������ָ��ֵ��û�в�������ȫ��ֵ
        return arguments.length? searchObj[key]: searchObj;
        //return searchObj;
    },
    extend:function(){

    },
    /*����localStorage&����ʱ��*/
    setStorage:function(key,value){
        var curTime = new Date().getTime();
        localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
    },
    /*��ȡlocalStorage&����ʱ��*/
    getStorage:function(key,exp){
        var data = localStorage.getItem(key);
        var dataObj = JSON.parse(data);
        var dataObjDatatoJson = dataObj.data;
        if (dataObjDatatoJson && new Date().getTime() - dataObj.time>exp) {
            return false;
        }else{
            return dataObjDatatoJson;
        }
    }
});