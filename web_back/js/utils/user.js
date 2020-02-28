//定义一个管理员对象
//将用到的所有与管理员有关的js代码全部都封装到一个对象当中
var user = {

    //管理员登录
    login: function (username, password) {
        return $.post(APILIST.user_login, {
            'user_name': username,
            'password': password,
        })
    },


    //管理员退出登录
    loginout: function () {
        return $.post(APILIST.user_logout)
    },

    //获取管理员信息并显示
    getuser: function () {
        return $.get(APILIST.get_user)
    },


}

