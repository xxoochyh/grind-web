//提交表单
var $ = null;
$ = layui.jquery;
window.onload = function () {
    layui.use(['element', 'form'], function () {
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
                    return '未输入用户密码';
                }
            },
            repeatPassword: function (value) {
                const password = $("#password").val();
                if (value !== password) {
                    return '两次密码不匹配';
                }
            }
        };

        const roleIds = [];

        $("input[name='roleIds']:checked").each(function (index, item) {
            roleIds.push($(this).val());
        });
        console.log(roleIds);
        form.on('checkbox(role)', function (data) {
            if (data.elem.checked === true) {
                roleIds.push(data.value);
            } else {
                roleIds.splice($.inArray(data.value, roleIds), 1);
            }
            console.log(roleIds);
        });
        const where = [{
            prop: 'roleIds',
            val: roleIds
        }];

        submitForm(form, verify, 'submit(updateAccount)', where, '/account/update');

        /*
        //提交表单
        form.on('submit(updateAccount)', function (data) {

            var param = data.field;
            console.log(param);
            param["roleIds"] = roleIds;

            //ajax传递提交数据
            $.ajax({
                type: 'post',
                dataType: 'json',//定义数据的返回类型
                url: '/account/update',
                data: {accountParam: JSON.stringify(param)},
                traditional: true,
                success: function (result) {
                    processSuccess(result);
                },
                error: processErr
            });

            return false;
        });
        */
    });
};