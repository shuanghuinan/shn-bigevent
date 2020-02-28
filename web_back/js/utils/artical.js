//定义一个文章对象
//将用到的所有与文章有关的js代码全部都封装到一个对象当中
artical = {

    //文章  获取及显示
    get: function (page, type, status) {
        // page 就是当前要取出来第几页的数据
        // type 就是当前文章的编号
        // status 就是当前文章的状态
        return $.get(APILIST.artical_get, { page: page, type: type, state: status })
        // 冒号后面的为形参
    },

    //根据文章id获取文章信息
    getById: function (id) {
        return $.get(APILIST.artical_get, { id: id })
    },


    //文章  删除
    del: function (id) {
        return $.get(APILIST.artical_del, { id: id })
    },

    //文章  添加(即发布)
    add: function (fd) {
        return $.ajax({
            url: APILIST.artical_add,
            type: "post",
            data: fd,
            processData: false, // 不允许处理数据
            contentType: false, // 不要设置请求头
        })
    },
    //文章 修改
    edit: function (fd) {
        return $.ajax({
            url: APILIST.artical_edit,
            type: "post",
            data: fd,
            processData: false,
            contentType: false
        })
    }
}