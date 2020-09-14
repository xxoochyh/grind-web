var $ = null;
$ = layui.jquery;
var curPage = 0;
var pageSize = 10;
var roleId;

//定义表格数据
var roleTable = [
    {field: 'roleId', hide: true}
    ,  {field: 'roleName', title: '角色名称', width: 150, align: 'center'}
    ,  {field: 'status', title: '状态', width: 100, align: 'center', templet: '#roleSwitch'}
    ,  {field: 'updateTime', title: '最近一次修改时间', width: 250, align: 'center'}
    ,  {field: 'operator', title: '修改用户', width: 150, align: 'center'}
    ,  {field: 'note', title: '备注', width: 400, align: 'center'}
    ,  {fixed: 'right', title: '操作', toolbar: '#roleBar', minWidth: 120}
];

var permissionTable = [
    {field: 'permissionId', hide: true}
    , {field: 'permissionName', title: '权限名称', width: 150, align: 'center'}
    , {field: 'status', title: '状态', width: 100, align: 'center', templet: '#permissionSwitch'}
    , {field: 'updateTime', title: '最近一次修改时间', width: 250, align: 'center'}
    , {field: 'operator', title: '修改用户', width: 150, align: 'center'}
    , {field: 'note', title: '备注', width: 400, align: 'center'}
    , {fixed: 'right', title: '操作', toolbar: '#permissionBar', minWidth: 120}
];


window.onload = function () {
    init();
    bindClick();
};

function init() {
    $.ajax({
        type: 'get',
        dataType: 'json',//定义数据的返回类型
        url: '/role/list',
        traditional: true,
        success: function (result) {
            console.log(result.data);
            let data = result.data;
            let node = [];
            for (let i = 0; i < data.length; ++i) {
                node.push({
                    title: data[i].roleName,
                    id: data[i].roleId
                });
            }
            let parent = [{
                title: '所有角色',
                id: 0,
                children: node,
                spread: true
            }];
            initTree('#roleTree', parent, 'roleId');
            if (data.length > 0) {
                roleId = data[0].roleId;
                initTable('#roleTable', '/role/' + data[0].roleId, [roleTable]);
                initTable('#permissionTable', '/role/permissionList/' + data[0].roleId, [permissionTable]);
            }
        }
    });
    // initTree('/role/list', null, setting);
}

function initTree(elem, data, id) {
    layui.use(['tree', 'table'], function () {
        let tree = layui.tree;
        let table = layui.table;

        tree.render({
            elem: elem,
            data: data,
            id: id,
            showLine: false,
            click: function (obj) {
                console.log(obj.data); //得到当前点击的节点数据
                console.log(obj.state); //得到当前节点的展开状态：open、close、normal
                console.log(obj.elem); //得到当前节点元素
                if(obj.data.id != 0) {
                    roleId = obj.data.id;
                    initTable('#roleTable', '/role/' + obj.data.id, [roleTable]);
                    initTable('#permissionTable', '/role/permissionList/' + obj.data.id, [permissionTable]);
                }
            }
        });
    });
}

//绑定点击事件
var bindClick = function () {
    layui.use(['table', 'layer', 'form'], function () {
        var table = layui.table;
        var layer = layui.layer;
        var form = layui.form;

        $('#createRole_btn').click(function () {
            createLayer('创建角色信息', 2, '/role/create/page', '点击此处返回角色列表', true);
        });

        //监听行工具事件
        table.on('tool(permissionTable)', function (obj) {
            let data = obj.data;
            console.log(data);
            if (obj.event === 'editNote') {
                createLayer('修改权限备注', 2, '/permission/update/page/' + data.permissionId, '点击此处返回角色列表', false, table, 'permissionTable', '/role/permissionList/' + roleId, reloadTable);
            }
        });
        table.on('tool(roleTable)', function (obj) {
            var data = obj.data;
            console.log(data);
            if (obj.event === 'delRole') {
                //删除该角色
                layer.confirm('确认删除该角色吗（删除后无法恢复）', {icon: 3, title: '提示'},
                    function () {
                        //ajax传递删除数据
                        $.ajax({
                            type: 'post',
                            url: '/role/delete/' + data.roleId,
                            traditional: true,
                            success: function (result) {
                                console.log(result);
                                // 操作成功则刷新并退出页面
                                if (result.success) {
                                    layer.msg(result.msg, {
                                        icon: 1,
                                        time: 1000 //2秒关闭（如果不配置，默认是3秒）*/
                                    }, function () {
                                        window.parent.location.reload();
                                        // const index = parent.layer.getFrameIndex(window.name);
                                        // parent.layer.close(index);
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
                    });

            } else if (obj.event === 'editRole') {
                //修改该用户
                createLayer('修改角色信息', 2, '/role/update/page/' + data.roleId, '点击此处返回角色列表', false, table, 'roleTable', '/role/' + data.roleId, reloadTable);
            }
        });

        form.on('switch(roleStatus)', function (data) {
            console.log(data.elem.checked); //开关是否开启，true或者false
            console.log(data.value); //开关value值，也可以通过data.elem.value得到
            let tip = data.elem.checked ? '确认要启用该角色吗？(启用后该角色所有权限不可用)' : '确认要禁用该角色吗？(禁用后该角色所有权限不可用)';
            confirmLayer(tip, '/role/status/' + roleId, null, table, 'permissionTable', '/role/permissionList/' + roleId, reloadTable);
        });

        form.on('switch(permissionStatus)', function(data){
            console.log(data.elem); //得到checkbox原始DOM对象
            console.log(data.elem.checked); //开关是否开启，true或者false
            console.log(data.value); //开关value值，也可以通过data.elem.value得到
            console.log(data.othis); //得到美化后的DOM对象
            const permissionId = data.othis.parents('tr').children().first().text();
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: '/role/update/' + roleId + '/' + permissionId,
                success: function (result) {
                    reloadTable(table, 'permissionTable', '/role/permissionList/' + roleId);
                    processSuccess(result);
                },
                error: processErr
            })
        });

    });
};



