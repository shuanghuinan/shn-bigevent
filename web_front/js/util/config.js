//配置文件
//将用到的所有用到的接口地址都放在这里

var BASEURL = "http://localhost:8000";

var APILIST = {
    //--------------------------------------------------------------------文章类别
    //获取
    category_search: BASEURL + "/category",

    // -------------------------------------------------------------------文章列表
    //获取
    artical_get: BASEURL + "/search",

    //获取热门文章排行
    rank: BASEURL + "/rank",

    //获取最新资讯
    new: BASEURL + "/lastest",

    // ----------------------------------------------------------------------文章详情
    detail: BASEURL + "/article",

    // --------------------------------------------------------------------- 评论
    //添加(即发表)
    comment_post: BASEURL + "/post_comment",

    //获取评论列表
    comment_get: BASEURL + "/get_comments",


    //获取最新评论
    comment_new: BASEURL + "/get_latest_comment",
}