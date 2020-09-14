var $ = layui.jquery;
window.onload = function () {

    layui.use(['transfer', 'layer'], function () {
        const layer = layui.layer;
        const transfer = layui.transfer;
        const id = $('#id').val();
        var title = [];
        var url;
        if (id < 10000) {
            title = ['未关联安检员', '已关联安检员'];
            url = '/account/list/grid';
        } else {
            title = ['未关联普通用户', '已关联普通用户'];
            url = '/account/list/factory';
        }
        $.ajax({
            type: 'get',
            dataType: 'json',//定义数据的返回类型
            contentType: "application/json;charset=utf-8",
            url: url,
            data: {id: id},
            traditional: true,
            success: function (result) {
                console.log(result.data);
                const data = result.data;
                //渲染
                const left = [];
                const right = [];
                for (let i = 0; i < data.length; ++i) {
                    left.push({
                        value: data[i].accountId,
                        title: data[i].username + " " + data[i].phone
                    });
                    if (data[i].has === true) {
                        right.push(data[i].accountId);
                    }
                }
                transfer.render({
                    elem: '#accountTransfer',  //绑定元素
                    title: title,
                    data: left,
                    value: right,
                    id: 'accountTransfer', //定义索引
                    onchange: function (data, index) {
                        var url;
                        //let url = index === 0 ? '/grid/add' : '/grid/del';
                        if (id < 10000) {
                            url = index === 0 ? '/grid/add' : '/grid/del';
                        } else {
                            url = index === 0 ? '/factory/add/g' : '/factory/del/g';
                        }
                        const accountIds = [];
                        for (let i = 0; i < data.length; ++i) {
                            accountIds.push(data[i].value);
                        }
                        console.log(accountIds);

                        $.ajax({
                            type: 'post',
                            dataType: 'json',
                            url: url,
                            data: {
                                id: id,
                                accountIds: accountIds
                            },
                            traditional: true,
                            success: function (result) {
                                console.log(result);
                                layer.msg(result.msg, {
                                    icon: 1,
                                    time: 2000 //2秒关闭（如果不配置，默认是3秒）*/
                                }, function () {
                                    const index = parent.layer.getFrameIndex(window.name);
                                    let tempUrl;
                                    if (id < 10000) {
                                        tempUrl = '/grid/getAccountById?id=' + id;
                                    } else {
                                        tempUrl = '/grid//grid/getNormalAccountById?id=' + id;
                                    }
                                    parent.layui.table.reload('userRelative', tempUrl);
                                    parent.layer.close(index);
                                });
                                // layer.msg(result.msg, {
                                //     icon: 1,
                                //     time: 2000 //2秒关闭（如果不配置，默认是3秒）*/
                                // }, function () {
                                //     if (!result.success) {
                                //         //可以重载所有基础参数
                                //         console.log("test");
                                //         const index = parent.layer.getFrameIndex(window.name);
                                //         parent.layer.close(index);
                                //     }
                                // });
                            },
                            error: function (XMLResponse) {
                                layer.alert(XMLResponse.responseText);
                            }
                        });
                    }
                });
                $('.layui-transfer-header').css("padding-top", "10px");
            }
        });

    });
};