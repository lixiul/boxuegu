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

    }
});