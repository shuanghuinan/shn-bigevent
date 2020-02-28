//配置文件
//将用到的所有用到的接口地址都放在这里

var BASEURL = "http://localhost:8000";

var APILIST = {
    //--------------------------------------------------------------------管理员
    //登录
    user_login: BASEURL + "/admin/login",
    //退出
    user_logout: BASEURL + "/admin/logout",
    //获取信息
    get_user: BASEURL + "/admin/getuser",

    //--------------------------------------------------------------------文章类别
    //获取
    category_search: BASEURL + "/admin/category_search",
    //增加
    category_add: BASEURL + "/admin/category_add",
    //删除
    category_del: BASEURL + "/admin/category_delete",
    //编辑
    category_edit: BASEURL + "/admin/category_edit",

    // -------------------------------------------------------------------文章列表
    //获取
    artical_get: BASEURL + "/admin/search",
    //删除
    artical_del: BASEURL + "/admin/article_delete",
    //添加(即发布)
    artical_add: BASEURL + "/admin/article_publish",
    //编辑
    artical_edit: BASEURL + "/admin/article_edit",
    //编辑

}