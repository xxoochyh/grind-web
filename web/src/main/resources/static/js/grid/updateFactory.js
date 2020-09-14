//提交表单
var $ = null;
$ = layui.jquery;


window.onload = function () {
    layui.use(['element', 'layer', 'form'], function () {
        var element = layui.element;
        var layer = layui.layer;
        var form = layui.form;
        form.render();

        //验证表单
        form.verify({
            factoryName: function (value) {
                if (value.length < 1) {
                    return '未输入工厂名称';
                }
            },
            principalName: function (value) {
                if (value.length < 1) {
                    return '未输入负责人姓名';
                }
            },
            principalPhone: function (value) {
                if (value.length < 1) {
                    return '未输入负责人电话';
                }
            },
            address: function (value) {
                if (value.length < 1) {
                    return '未输入详细地址';
                }
            }
        });

        //执行修改操作
        //提交表单
        form.on('submit(updateFactory)', function (data) {
            layer.confirm('确认要修改工厂信息吗?', {icon: 3, title: '提示'},
                function (index) {
                    var datas = data.field;
                    console.log(datas.factoryId);
                    //ajax传递提交数据
                    $.ajax({
                        type: 'post',
                        dataType: 'text',//定义数据的返回类型
                        url: '/grid/updateFactory', //修改备注的URL
                        data: {param: JSON.stringify(datas)},
                        traditional: true,
                        success: function (result) {
                            if (result === "success") {
                                layer.msg("工厂信息修改成功", {
                                    icon: 1,
                                    time: 1000 //2秒关闭（如果不配置，默认是3秒）*/
                                }, function () {
                                    var index = parent.layer.getFrameIndex(window.name);
                                    parent.layui.table.reload('datatable', '/device/getByfId?id=' + datas.factoryId);
                                    parent.layer.close(index);
                                });
                            } else {
                                layer.msg('修改失败，请重新输入:' + result, {
                                    icon: 1,
                                    time: 1000 //2秒关闭（如果不配置，默认是3秒）
                                }, function () {
                                });
                            }
                        },
                        error: function (XMLResponse) {
                            layer.msg('修改权限失败:' + result, {
                                icon: 1,
                                time: 1000 //2秒关闭（如果不配置，默认是3秒）
                            }, function () {
                            });
                        }
                    });
                });
            return false;

        });

    });
}