/**
 * 故障管理界面
 * @type {*[]}
 */

//定义表格数据
const unconfirmedTables = [
    {field: 'faultId',hide: true, title: '故障id' },
    {field: 'deviceId',hide: true, title: '设备编号'},
    {field: 'faultTime', title: '故障时间'},
    {field: 'faultTypeDesc', title: '故障类型'},
    {field: 'serial',title: '设备序列号',},
    {field: 'model',title: '设备型号'},
    {field: 'typeName',title: '设备类型'},
    {fixed: 'right', title:'操作', toolbar: '#AlarmsBar'},
];
const confirmedTables = [
    {field: 'faultId',hide: true,title: '故障id'},
    {field: 'deviceId',hide: true, title: '设备编号'},
    {field: 'faultTime', title: '故障时间'},
    {field: 'faultTypeDesc', title: '故障类型'},
    {field: 'confirmTime', title: '确认时间'},
    {field: 'platform', title: '确认平台'},
    {field: 'confirmUser', title: '确认人'},
    {field: 'serial',hide: true,title: '设备序列号'},
    {field: 'model',hide: true,title: '设备型号'},
    {field: 'typeName',hide: true,title: '设备类型'},
    {fixed: 'right', title:'操作', toolbar: '#AlarmsBar'},
];

var factoryId;
var roleId ;
$ = layui.jquery;
const  getAllFactoryUrl = '/factory/list';
const getNormalFactoryUrl = 'factory/normal/list';
var getFactoryUrl ;
var searchUrl = '/alarm/search?keyword=';


$(function () {
    roleId = getRoleId();

    console.log(roleId);
    checkUrl(roleId);
    init(getFactoryUrl);
    bindClick(getFactoryUrl);

});


//根据角色信息判断获取工厂的url
function checkUrl(roleId){
    console.log(roleId);
    //判断为管理员
    if (roleId == 1) {
        getFactoryUrl = getAllFactoryUrl;
    }
    //判断为普通用户
    else {
        getFactoryUrl = getNormalFactoryUrl;
    }
}

function init(url) {
    console.log(url);
    $.ajax({
        type: 'get',
        dataType: 'json',//定义数据的返回类型
        url: url,
        traditional: true,
        success: function (result) {
            console.log(result.data);
            if (result.data == null) {
                layui.use('layer', function () {
                    var layer = layui.layer;

                    layer.msg('工厂不存在请确认工厂名后重新输入!');
                });
            } else {
                let data = result.data;
                let node = [];
                for (i = 0; i < data.length; ++i) {
                    // 构造树节点
                    node.push({
                        title: data[i].factoryName,
                        id: data[i].factoryId
                    });
                }
                initTree('#factoryTree', node, 'factoryTree');
                if (data.length > 0) {
                    factoryId = data[0].factoryId;
                    initTable('#unconfirmedTable', '/fault/getUnconfirmedFault/' + data[0].factoryId, [unconfirmedTables]);

                    initTable('#confirmedTable', '/fault/getConfirmedFault/' + data[0].factoryId, [confirmedTables]);

                }
            }
        }
    });

}

//绑定点击事件
var bindClick = function (url) {
    layui.use(['table', 'layer'], function () {
        var table = layui.table;
        var layer = layui.layer;

        //绑定查找监听事件
        $('#searchFault').click(function () {
            var q = document.getElementById("keyword").value;
            init(searchUrl+q)
        });

        $('#factoryList').click(function () {
            init(url);
        });

        //监听行工具事件
        table.on('tool(unconfirmedTable)', function (obj) {
            var data = obj.data;
            console.log(data);
            if (obj.event === 'edit') {
                createLayer('故障详细信息', 2, '/fault/faultDetail/' + data.faultId, '点击此处返回故障管理页面', false);
            }
        });

        table.on('tool(confirmedTable)', function (obj) {
            var data = obj.data;
            console.log(data);
            if (obj.event === 'edit') {
                createLayer('故障详细信息', 2, '/fault/faultDetail/' + data.faultId, '点击此处返回故障管理页面', false);
            }
        });
    });
};

function initTree(elem, data, id) {
    layui.use(['tree', 'table'], function () {
        let tree = layui.tree;
        let table = layui.table;

        tree.render({
            elem: elem,
            data: data,
            id: id,
            click: function (obj) {
                console.log(obj.data); //得到当前点击的节点数据
                console.log(obj.state); //得到当前节点的展开状态：open、close、normal
                console.log(obj.elem); //得到当前节点元素
                factoryId = obj.data.id;
                initTable('#unconfirmedTable',  '/fault/getUnconfirmedFault/' + obj.data.id, [unconfirmedTables]);
                initTable('#confirmedTable', '/fault/getConfirmedFault/' + obj.data.id, [confirmedTables]);
            }
        });
    });
}
