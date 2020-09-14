var $ = null;
$ = layui.jquery;
window.onload = function () {

    layui.use(['transfer', 'layer'], function () {
        const layer = layui.layer;
        const transfer = layui.transfer;
        const accountId = $('#accountId').val();

        $.ajax({
            type: 'get',
            dataType: 'json',//定义数据的返回类型
            contentType: "application/json;charset=utf-8",
            url: '/factory/list/' + accountId,
            traditional: true,
            success: function (result) {
                console.log(result.data);
                const data = result.data;
                //渲染
                const left = [];
                const right = [];
                for (let i = 0; i < data.length; ++i) {
                    left.push({
                        value: data[i].factoryId,
                        title: data[i].factoryName
                    });
                    if (data[i].has === true) {
                        right.push(data[i].factoryId);
                    }
                }
                transfer.render({
                    elem: '#factoryTransfer',  //绑定元素
                    title: ['未关联工厂', '已关联工厂'],
                    data: left,
                    value: right,
                    id: 'factoryTransfer', //定义索引
                    onchange: function (data, index) {
                        console.log(data); //得到当前被穿梭的数据
                        console.log(index); //如果数据来自左边，index 为 0，否则为 1

                        let url = index === 0 ? '/factory/add/' : '/factory/del/';
                        const factoryIds = [];
                        for(let i = 0; i < data.length; ++i) {
                            factoryIds.push(data[i].value);
                        }
                        console.log(factoryIds);

                        $.ajax({
                            type: 'post',
                            dataType: 'json',
                            url: url,
                            data: {
                                accountId: accountId,
                                factoryIds: factoryIds
                            },
                            traditional: true,
                            success: function (result) {
                                console.log(result);
                                layer.msg(result.msg, {
                                    icon: 1,
                                    time: 1000 //2秒关闭（如果不配置，默认是3秒）*/
                                }, function () {
                                });
                                if (!result.success) {
                                    //可以重载所有基础参数
                                    transfer.reload('factoryTransfer', {
                                        title: ['未关联工厂', '已关联工厂']
                                    });
                                }
                            }
                        });
                    }
                });
                $('.layui-transfer-header').css("padding-top", "10px");
            }
        });

    });
};