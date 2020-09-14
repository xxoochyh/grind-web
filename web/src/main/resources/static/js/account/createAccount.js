//提交表单
var $ = null;
$ = layui.jquery;
window.onload = function () {
    layui.use(['form'], function () {
        const form = layui.form;

        //验证表单
        const verify = {
            username: function (value) {
                if (value.length < 1) {
                    return '未输入用户名称';
                }
            },
            password: function (value) {
                if (value.length < 1) {
                    return '未输入用户密码密码';
                }
            },
            confirm: function (value) {
                const passwordValue = $("#password").val();
                if (value !== passwordValue) {
                    return '两次密码不匹配';
                }
            }
        };

        const roleIds = [];
        form.on('checkbox(role)', function (data) {
            if(data.elem.checked === true) {
                roleIds.push(data.value);
            }else {
                roleIds.splice($.inArray(data.value, roleIds), 1);
            }
            console.log(roleIds);
        });
        const where = [{
            prop: 'roleIds',
            val: roleIds
        }];

        submitForm(form, verify, 'submit(createAccount)', where, '/account/create');
    });
};