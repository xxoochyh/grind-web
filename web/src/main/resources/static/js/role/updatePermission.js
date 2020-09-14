//提交表单
const $ = layui.jquery;

window.onload = function () {
    layui.use(['form'], function () {
        var form = layui.form;
        form.render();

        //验证表单
        const verify = {
            permissionName: function (value) {
                if (value.length < 1) {
                    return '未输入角色名称';
                }
            }
        };

        //执行修改操作
        //提交表单
        submitForm(form, verify, 'submit(updatePermission)', [], '/permission/update');
    });
};