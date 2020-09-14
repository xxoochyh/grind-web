var form;
var $ = layui.jquery;

var projectData = [];

$(function () {
    layui.use(['form'], function () {
        form = layui.form;
        console.log(form);
        var layer = layui.layer;
        form.render();

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

        form.on('submit(addFactory)', function (data) {
            var datas = data.field;
            delete datas.gridName;
            layer.confirm('确认要添加该工厂吗?', {icon: 3, title: '提示'},
                function () {
                    $.ajax({
                        type: 'post',
                        dataType: 'json',
                        contentType: "application/json;charset-UTF-8",
                        url: '/grid/addFactory',
                        data: JSON.stringify(datas),
                        traditional: true,
                        success: function (ans) {
                            if (ans.code === 0) {
                                layer.msg(ans.msg, {
                                    icon: 1,
                                    time: 1000
                                }, function () {
                                    window.parent.location.reload();
                                    var index = parent.layer.getFrameIndex(window.name);
                                    parent.layer.close(index);
                                })
                            } else {
                                layer.msg(ans.message, {
                                    icon: 1,
                                    time: 1000
                                })
                            }
                        },
                        error: function (XMLResponse) {
                            layer.msg(XMLResponse, {
                                icon: 1,
                                time: 1000
                            })
                        }
                    });
                });
            return false;
        })
    })
});