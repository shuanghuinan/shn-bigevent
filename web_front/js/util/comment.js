//定义一个评论对象
//将用到的所有与评论有关的js代码全部都封装到一个对象当中

comment = {

    //添加评论
    add: function (name, content, id) {
        return $.post(APILIST.comment_post, { name: name, content: content, article_id: id })
    },

    // 获取评论列表
    get: function (id) {
        return $.get(APILIST.comment_get, { article_id: id })
    },


    // 获取最新评论
    get_new: function (type) {
        return $.get(APILIST.comment_new, { type: type })
    }
}