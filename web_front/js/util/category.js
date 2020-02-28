//定义一个文章类别对象
//将用到的所有与文章类别有关的js代码全部都封装到一个对象当中
category = {

    //文章类别  获取及显示
    get: function () {
        return $.get(APILIST.category_search)
    },


}