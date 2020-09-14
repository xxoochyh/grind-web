// 初始化表格
// elem为前端绑定表格元素，cols为表格结构，where为ajax参数
function initTable(elem, url, cols, param, data) {
    layui.use('table', function () {
        const table = layui.table;

        table.render({
            elem: elem  //绑定table表格,
            , url: url //后台springMVC接收路径
            , page: true    //true表示分页
            , limit: 10
            , loading: true
            , toolbar: true
            , cols: cols
            , data: data
            , where: param
            , done: function (res) {
                console.log(res);
            }
        });
    })
}

// 创建弹出层
function createLayer(title, type, url, tip, refresh, table, id, tableUrl, reloadTable) {
    layui.use(['layer'], function () {
        const layer = layui.layer;
        layer.open({
            title: title,
            type: type,
            area: ['600px', '600px'],
            content: url,
            success: function (layero, index) {
                setTimeout(function () {
                    layui.layer.tips(tip, '.layui-layer-setwin .layui-layer-close', {
                        tips: 3
                    });
                }, 200)
            },
            cancel: function (index, layero) {
                layer.close(index);
            },
            end: function () {
                if (reloadTable != null) {
                    reloadTable(table, id, tableUrl);
                } else if (refresh) {
                    window.parent.location.reload();
                }
            }

        });
        //layui.layer.full(index);
    });

}

// 统一处理返回结果
function processSuccess(result) {
    console.log(result);
    // 操作成功则刷新并退出页面
    if (result.success) {
        layer.msg(result.msg, {
            icon: 1,
            time: 1000 //2秒关闭（如果不配置，默认是3秒）*/
        }, function () {
            // window.parent.location.reload();
            const index = parent.layer.getFrameIndex(window.name);
            parent.layer.close(index);
        });
    } else {
        layer.msg(result.msg, {
            icon: 1,
            time: 1000 //2秒关闭（如果不配置，默认是3秒）*/
        }, function () {
        });
    }
}

// ajax请求错误统一处理
function processErr(jqXHR, textStatus, errorThrown) {
    layer.msg('请求异常', {
        icon: 1,
        time: 1000
    });

    /*弹出jqXHR对象的信息*/
    console.log(jqXHR.responseText);
    console.log(jqXHR.status);
    console.log(jqXHR.readyState);
    console.log(jqXHR.statusText);
    /*弹出其他两个参数的信息*/
    console.log(textStatus);
    console.log(errorThrown);
}

// 弹出操作确认框
function confirmLayer(title, url, data, table, id, tableUrl, reloadTable) {
    layer.confirm(title, {icon: 3, title: '提示'},
        function () {
            //ajax传递删除数据
            $.ajax({
                type: 'post',
                url: url,
                data: data,
                traditional: true,
                success: function (result) {
                    processSuccess(result);
                    reloadTable(table, id, tableUrl);
                },
                error: processErr
            });
        });
}

// 重载表格
function reloadTable(table, id, url) {
    if (table != null) {
        table.reload(id, {
            url: url
        });
    }
}

function submitForm(form, verify, submit, where, url) {
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
                processSuccess(result);
            },
            error: processErr
        });

        return false;
    });
}

function getUrlByRole() {
    var url = '/factory/list';
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: '/role/factoryUrl',
        traditional: true,
        async: false,
        success: function (result) {
            if (result.success) {
                url = result.data;
                console.log(url);
            }
        },
        error: processErr
    });
    return url;
}