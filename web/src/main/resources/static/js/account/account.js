/**
 * 账户管理页面
 * @type {*[]}
 */

//定义表格数据
const tables = [
      {field: 'accountId', hide: true}
    , {type: 'checkbox'}
    , {field: 'username', title: '用户名', width: 100, align: 'center'}
    , {field: 'phone', title: '电话', width: 120, align: 'center'}
    , {field: 'email', title: '电子邮件', width: 150, align: 'center'}
    , {field: 'status', title: '账户状态', width: 100, templet: '#accountSwitch', align: 'center'}
    , {field: 'createTime', title: '注册时间', width: 180, align: 'center'}
    , {field: 'updateTime', title: '最近一次修改', width: 180, align: 'center'}
    , {field: 'note', title: '备注', align: 'center'}
    , {field: 'roleInfo', title: '角色信息', align: 'center'}
    , {fixed: 'right', title: '操作', toolbar: '#barDemo', minWidth: 120}
];

const tableUrl = '/account/list';
const searchUrl = '/account/search/'
$ = layui.jquery;

$(function () {
    //绑定数据表格
    initTable('#accountTable', tableUrl, [tables]);

    //绑定点击事件
    bindClick();

});

//绑定点击事件
const bindClick = function () {



    layui.use(['table', 'form'], function () {
        const table = layui.table;
        const form = layui.form;

        // 绑定添加账户点击事件
        $('#createAccount').click(function () {
            createLayer('添加账户', 2, '/account/create/page', '点击此处返回账户列表', false, table, 'accountTable', tableUrl, reloadTable);
        });

        $('#getAccount').click(function () {
            initTable('#accountTable', searchUrl + $('#username').val(), [tables]);
        });

        //监听行工具事件
        table.on('tool(accountTable)', function (obj) {
            const data = obj.data;
            console.log(data);
            if (obj.event === 'del') {
                //删除该账户
                confirmLayer('确认删除该账户吗?（账户关联数据均会被删除，且删除后无法恢复）', '/account/delete', {accountId: data.accountId}, table, 'accountTable', tableUrl, reloadTable);
            } else if (obj.event === 'edit') {
                //修改该账户
                createLayer('账户信息详情页', 2, '/account/detail/' + data.accountId, '点击此处返回账户列表', false, table, 'accountTable', tableUrl, reloadTable);
            } else if (obj.event === 'factory') {
                createLayer('账户关联工厂', 2, '/factory/' + data.accountId, '点击此处返回账户列表', false);
            }
        });

        form.on('switch(accountStatus)', function(data){
            console.log(data.elem); //得到checkbox原始DOM对象
            console.log(data.elem.checked); //开关是否开启，true或者false
            console.log(data.value); //开关value值，也可以通过data.elem.value得到
            console.log(data.othis); //得到美化后的DOM对象
            const accountId = data.othis.parents('tr').children().first().text();
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: '/account/update/status/' + accountId,
                success: function (result) {
                    reloadTable(table, 'accountTable', tableUrl);
                    processSuccess(result);
                },
                error: processErr
            })
        });

    });
};
