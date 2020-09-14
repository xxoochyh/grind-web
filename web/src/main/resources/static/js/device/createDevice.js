//提交表单
var $ = null;
$ = layui.jquery;
window.onload = function () {
    layui.use(['form'], function () {
        const form = layui.form;

        //验证表单
        const verify = {
            serial: function (value) {
                if (value.length < 1) {
                    return '未输入设备编号';
                }
            },
            model: function (value) {
                if (value.length < 1) {
                    return '未输入设备型号';
                }
            },
            address: function (value) {
                if (value.length < 1) {
                    return '未输入所在地址';
                }
            },
            factoryId: function (value) {
                if (value.length < 1) {
                    return '未输入所在工厂';
                }
            }
        };

        createDevice(form, verify, 'submit(createDevice)', [], '/device/create');
    });
};
function createDevice(form, verify, submit, where, url) {
    form.render();
    //验证表单
    form.verify(verify);
    //提交表单
    form.on(submit, function (data) {

        const param = data.field;
        console.log(param);
        where.forEach((item, index, array) => {
            param[item.prop] = item.val;
        });

        //ajax传递提交数据
        $.ajax({
            type: 'post',
            dataType: 'json',//定义数据的返回类型
            url: url,
            data: {param: JSON.stringify(param)},
            traditional: true,
            success: function (result) {
                if (result.success) {
                    layer.msg(result.msg, {
                        icon: 1,
                        time: 1000 //2秒关闭（如果不配置，默认是3秒）*/
                    }, function () {
                        // window.parent.location.reload();
                        const index = parent.layer.getFrameIndex(window.name);
                        parent.layui.table.reload('deviceTable', '/device/getByfId?id=' + data.factoryId);
                        parent.layer.close(index);
                    });
                } else {
                    layer.msg(result.msg, {
                        icon: 1,
                        time: 1000 //2秒关闭（如果不配置，默认是3秒）*/
                    }, function () {
                    });
                }
            },
            error: processErr
        });

        return false;
    });
}