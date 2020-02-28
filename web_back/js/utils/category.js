//定义一个文章类别对象
//将用到的所有与文章类别有关的js代码全部都封装到一个对象当中
category = {

    //文章类别  获取及显示
    get: function () {
        return $.get(APILIST.category_search)
    },

    //文章类别 添加
    add: function (name, slug) {
        return $.post(APILIST.category_add, { "name": name, "slug": slug })
    },

    //文章类别 删除
    del: function (id) {
        return $.post(APILIST.category_del, { "id": id })
    },

    //文章类别 删除
    edit: function (id, name, slug) {
        return $.post(APILIST.category_edit, { "id": id, "name": name, "slug": slug })
    }

}