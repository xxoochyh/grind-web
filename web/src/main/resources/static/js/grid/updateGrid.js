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
            note: function (value) {
                if (value.length < 1) {
                    return '未输入备注';
                }
            }
        });

        //执行修改操作
        //提交表单
        form.on('submit(updateGrid)', function (data) {
            layer.confirm('确认要修改该网格备注吗?', {icon: 3, title: '提示'},
                function (index) {
                    var id = $("#id").val();
                    var note = $("#note").val();
                    console.log("id" + id);
                    //ajax传递提交数据
                    $.ajax({
                        type: 'post',
                        dataType: 'text',//定义数据的返回类型
                        url: '/grid/updateGrid', //修改备注的URL
                        data: {id: id, note: note},
                        traditional: true,
                        success: function (result) {
                            if (result== "success") {
                                layer.msg('修改网格备注成功', {
                                    icon: 1,
                                    time: 1000 //2秒关闭（如果不配置，默认是3秒）*!/
                                }, function () {
                                    var index = parent.layer.getFrameIndex(window.name);
                                    parent.layui.table.reload('datatable', '/grid/getGridById?id=' +id);
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