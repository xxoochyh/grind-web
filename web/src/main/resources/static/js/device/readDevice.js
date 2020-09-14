/**
 * 设备管理页面
 * @type {*[]}
 */

//定义表格数据
const tables = [
    {field: 'serial', title: '设备编号', width: 100}
    , {field: 'model', title: '设备型号', minWidth: 110}
    , {field: 'typeName', title: '设备类型', minWidth: 110}
    , {field: 'address', title: '所在地址', minWidth: 140}
    , {field: 'plantName', title: '工厂名称',minWidth: 120}
    , {field: 'createTime', title: '注册时间', templet: '#dateString'}
    , {fixed: 'right', title: '操作', toolbar: '#barDemo', minWidth: 80}
];

const tableUrl = '/device/list';

var searchUrl = '/device/search?keyword=';
$ = layui.jquery;

var selectedId = -1;
$(function () {
    //绑定数据表格
    initTable('#deviceTable', tableUrl, [tables]);

    //绑定点击事件
    bindClick();

    initFactory();

});

//绑定点击事件
const bindClick = function () {

    layui.use('table', function () {
        const table = layui.table;
        $('#searchDevice').click(function () {
            var q = document.getElementById("keyword").value;
            initTable('#deviceTable', searchUrl + q, [tables])
        });

        //监听行工具事件
        table.on('tool(deviceTable)', function (obj) {
            const data = obj.data;
            console.log(data);
            if (obj.event === 'detail') {
                //查看设备详情
                //createLayer('设备信息详情页', 2, '/device/readDetail/' + data.deviceId, '点击此处返回设备列表', false, table, 'deviceTable', tableUrl, reloadTable);
                layui.use('layer', function () {
                        var layer = layui.layer;
                        layer.open({
                            type: 2,
                            title: '设备信息详情页',
                            maxmin: true,
                            area: ['600px', '700px'],
                            content: '/device/readDetail/'+data.deviceId,
                            success: function (layero, index) {
                                setTimeout(function () {
                                    layui.layer.tips( '点击此处返回设备列表', '.layui-layer-setwin .layui-layer-close', {
                                        tips: 3
                                    });
                                }, 200)
                            },
                            end: function () {
                            },
                        });
                    }
                );
            }
        });
    });
};
const initFactory = function () {
    var factoryUrl = getUrlByRole();
    console.log(factoryUrl);
    layui.use(['layer'], function () {
        const layer = layui.layer;

        $.ajax({
            type: 'get',
            dataType: 'json',
            url: factoryUrl,
            traditional: true,
            success: function (result) {
                if (!result.success) {
                    layer.msg(result.msg, {
                        icon: 1,
                        time: 1000 //2秒关闭（如果不配置，默认是3秒）*/
                    }, function () {
                    });
                    return false;
                }

                console.log(result.data);
                data = result.data;
                let node = [];
                for (let i = 0; i < data.length; ++i) {
                    node.push({
                        title: data[i].factoryName,
                        id: data[i].factoryId
                    });
                }
                let parent = [{
                    title: '防爆监测管理系统',
                    id: 0,
                    children: node,
                    spread: true
                }];
                layui.use(['tree', 'util'], function () {
                    const tree = layui.tree;
                    tree.render({
                        elem: '#factory'  //绑定元素
                        , data: parent
                        , onlyIconControl: true  //是否仅允许节点左侧图标控制展开收缩
                        , click: function (obj) {
                            selectedId = obj.data.id;
                            var beforeTreeId = $('#factory').val();
                            if (beforeTreeId == '-1' || beforeTreeId == selectedId) {
                                $('div [data-id="' + selectedId + '"] div').eq(1).last().css('background-color', '#EAC815');
                            } else {
                                if (beforeTreeId != selectedId) {
                                    $('div [data-id="' + 0 + '"] div').eq(1).last().css('background-color', '');
                                    $('div [data-id="' + selectedId + '"] div').eq(1).last().css('background-color', '#EAC815');
                                    $('div [data-id="' + beforeTreeId + '"] div').eq(1).last().css('background-color', '');
                                } else {
                                    $('div [data-id="' + selectedId + '"] div').eq(1).last().css('background-color', '#EAC815');
                                }
                                $("#factory").val(selectedId);
                            }
                            console.log(obj.data.id);
                            initTable('#deviceTable', '/device/getByfId?id=' + obj.data.id, [tables])
                        }
                    });
                });
            },
            error: function (XMLResponse) {
                console.log(XMLResponse);
            }
        });
    });

};
