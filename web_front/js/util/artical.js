//定义一个文章对象
//将用到的所有与文章有关的js代码全部都封装到一个对象当中
artical = {

    // 获取焦点图五篇文章
    getFocusFive: function () {
        return $.get(APILIST.artical_get, { perpage: 5 })
    },

    // 根据类型获取文章
    getByType: function (type, page) {
        //page是指当前第几页
        return $.get(APILIST.artical_get, { type: type, page: page })
    },

    //获取文章排行
    getRank: function (type) {
        return $.get(APILIST.rank, { type: type })
    },

    //获取最新资讯
    getNew: function () {
        return $.get(APILIST.new)
    },
    //获取文章详情
    getDetail: function (id) {
        return $.get(APILIST.detail, { id: id })
    },

}