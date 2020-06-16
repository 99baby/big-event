$(function () {
    //控制表单的提交
    $('.layui-form').submit(function(e) {
        e = window.event || e;
        //阻止表单默认提交行为
        e.preventDefault()
        // 获取表单输入与的用户名和密码
        var formData = $(this).serialize()
        //调用后台接口验证是否正确
        $.ajax({
            type:'post',
            url:'',
            data: {
                formData
            },
            success: function(res) {
                //登陆成功后，跳转到主页面
                if(res.status === 0) {
                    location.href = "index1.html"
                }
            }
        })
        
    })
})