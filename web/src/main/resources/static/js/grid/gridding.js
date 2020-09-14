var userId;
var datas;

//定义网格表格数据
var gridTables = [
    {field: 'gridId', title: '网格id', width: 100, unresize: true}
    , {field: 'name', title: '网格名称', width: 140, unresize: true}
    , {field: 'parentId', title: '父网格id', minWidth: 100, unresize: true}
    , {field: 'level', title: '网格等级', minWidth: 100, unresize: true}
    , {field: 'note', title: '网格备注', minWidth: 200, unresize: true}
    , {fixed: 'right', title: '操作', toolbar: '#barDemo', minWidth: 120}
];

//定义工厂表格数据
var factoryTables = [
    {field: 'factoryId', title: '工厂id', width: 100, unresize: true}
    , {field: 'factoryName', title: '工厂名称', width: 140, unresize: true, sort: false}
    , {field: 'principalName', title: '联系人姓名', minWidth: 100, unresize: true, sort: false}
    , {field: 'principalPhone', title: '联系人电话', minWidth: 100, unresize: true, sort: false}
    , {field: 'address', title: '地址', minWidth: 120, unresize: true, sort: false}
    , {field: 'note', title: '备注', minWidth: 200, unresize: true, sort: false}
    , {fixed: 'right', title: '操作', toolbar: '#barDemo', minWidth: 120}
];
//定义关联数据
var relativeTables = [
    {field: 'username', title: '用户姓名', minWidth: 100, unresize: true, sort: false}
    , {field: 'phone', title: '用户电话', minWidth: 100, unresize: true, sort: false}
];


window.onload = function () {
    userId = getuserId();
    //初始化树
    initTree();
    //添加
    add();
    //绑定点击事件
    bindClick();
}


var zTree;
var setting = {
    data: {
        simpleData: {
            enable: true, //设置简单数据格式
            idKey: "id", //唯一标识
            pIdKey: "pid",//父节点标识
            rootPId: "0" //根节点标识
            , type: "type", //1为工厂，2为网格
            level: "level"
        }
    },
    callback: {
        onClick: zTreeOnClick
    }
};


//添加工厂数据
var factoryData = {};
var clickData = {};

//点击节点弹出信息
function zTreeOnClick(event, treeId, treeNode) {
    //判断为网格
    if (treeNode.type === 2) {
        bindGridData(treeNode.id, treeNode.level, treeNode.name);
    }
    //判断为工厂
    else {
        bindFactoryData(treeNode.id, treeNode.type);
    }
}

//根据网格ID获取网格的数据并初始化表格
var bindGridData = function (id, level, name) {
    layui.use('table', function () {
        var table = layui.table;
        factoryData.gridId = id;
        factoryData.level = level;
        factoryData.name = name;

        clickData.id = id;
        clickData.level = level;
        //渲染
        table.render({
            elem: '#datatable'  //绑定table表格
            //,height:500
            , url: '/grid/getGridById' //后台接收路径
            , page: false    //true表示分页
            , loading: true
            , where: {id: id} //传参数
            , cols: [gridTables]
        });
        table.render({
            elem: '#userRelative'  //绑定table表格
            //,height:500
            , url: '/grid/getAccountById' //后台接收路径
            , page: false    //true表示分页
            , loading: true
            , where: {id: id} //传参数
            , cols: [relativeTables]
        });
    });
}

//根据工厂ID获取工厂的信息并初始化表格
var bindFactoryData = function (id, type) {
    layui.use('table', function () {
        var table = layui.table;
        factoryData = {};
        clickData.id = id;
        clickData.level = 4;
        //渲染
        table.render({
            elem: '#datatable'  //绑定table表格
            //,height:500
            , url: '/grid/getFactoryById' //后台接收路径
            , page: false    //true表示分页
            , loading: true
            , where: {id: id} //传参数
            , cols: [factoryTables]
        });
        table.render({
            elem: '#userRelative'  //绑定table表格
            //,height:500
            , url: '/grid/getNormalAccountById' //后台接收路径
            , page: false    //true表示分页
            , loading: true
            , where: {id: id} //传参数
            , cols: [relativeTables]
        });
    });
}

//初始化树
var initTree = function () {
    $.ajax({
        type: 'get',
        dataType: 'text',
        url: '/grid/getAllGrid',
        // data:{id:userId},//传送用户ID
        traditional: true,
        success: function (result) {
            datas = JSON.parse(result);
            zTree = $.fn.zTree.init($("#classTree"), setting, datas);
            var treeObj = $.fn.zTree.getZTreeObj("classTree");
            var nodes = treeObj.transformToArray(treeObj.getNodes());
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].isParent === true) {
                    treeObj.expandNode(nodes[i], true);
                }
            }
            layui.use('table', function () {
                var table = layui.table;
                //渲染
                table.render({
                    elem: '#datatable'  //绑定table表格
                    //,height:500
                    , url: '/grid/getGridById' //后台接收路径
                    , page: false    //true表示分页
                    , loading: true
                    , where: {id: 1} //传参数
                    , cols: [gridTables]
                });
            });
        },
        error: function (XMLResponse) {
            console.log(XMLResponse);
        }
    });

}

//弹出添加网格选项
var add = function () {
    $(".gridAdd_btn").click(
        function () {
            layui.use('layer', function () {
                    var layer = layui.layer;
                    layer.open({
                        type: 2,
                        title: '添加网格',
                        maxmin: true,
                        area: ['600px', '350px'],
                        content: '/grid/add',
                        success: function (layero, index) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                            body.find('#gridding').val(JSON.stringify(datas));
                        },
                        end: function () {

                        },
                    });
                }
            );
        }
    );
    $(".factoryAdd_btn").click(function () {
        if (factoryData.level == null) {
            layer.msg("请选择工厂所在的区县网格");
            return false;
        }
        if (factoryData.level !== 3) {
            layer.msg("选择区县一级网格");
            return false;
        }
        layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 2,
                    title: '添加工厂',
                    maxmin: true,
                    area: ['700px', '450px'],
                    content: '/grid/addFactory',
                    success: function (layero, index) {
                        setTimeout(function () {
                            layui.layer.tips('点击此处返网格列表', '.layui-layer-setwin .layui-layer-close', {
                                tips: 3
                            });
                        }, 200);
                        var body = layer.getChildFrame('body', index);
                        body.find('#id').val(factoryData.gridId);
                        body.find('#gridName').val(factoryData.name);
                    },
                    end: function () {
                    },
                });
            }
        );
    });

    $(".relativeAccount_btn").click(function () {
        if (clickData.level == null) {
            layer.msg("请选择要关联的网格或工厂");
            return false;
        }
        var title;
        if (clickData.level === 4) {
            title = "工厂关联用户";
        } else {
            title = "网格关联用户";
        }
        layui.use(['layer'], function () {
            const layer = layui.layer;
            layer.open({
                title: title,
                type: 2,
                area: ['600px', '600px'],
                content: '/account/' + clickData.id,
                success: function (layero, index) {
                    setTimeout(function () {
                        layui.layer.tips("点击此处返回网格列表", '.layui-layer-setwin .layui-layer-close', {
                            tips: 3
                        });
                    }, 200)
                },
                cancel: function (index) {
                    layer.close(index);
                },
                end: function () {
                }

            });
        });
    });


    $(".search_btn").click(
        function () {
            var keyword = $("#keyword").val();
            if (keyword.length < 1) {
                return "未输入关键字";
            }
            layui.use('layer', function () {
                    var table = layui.table;
                    table.render({
                        elem: '#datatable'  //绑定table表格
                        //,height:500
                        , url: '/grid/searchFactory'  //后台springmvc接收路径
                        , page: false    //true表示分页
                        , loading: true
                        , where: {keyword: keyword} //传参数
                        , cols: [factoryTables]
                    });
                }
            );
        }
    );
};

//绑定点击事件
var bindClick = function () {
    layui.use(['table', 'layer'], function () {
        var table = layui.table;
        var layer = layui.layer;

        //监听行工具事件
        table.on('tool(datatable)', function (obj) {
            var data = obj.data;
            if (obj.event === 'del') {
                if (data.factoryId !== undefined) {
                    delFactory(data.factoryId);
                } else {
                    delGrid(data.gridId)
                }
            } else {
                if (data.factoryId === undefined) {
                    //修改网格备注
                    updateGrid(data.gridId, data.note);
                } else {
                    //修改工厂的备注
                    updateFactory(data.factoryId, data.note);
                }
            }
        });
    });
};

//修改网格的备注
var updateGrid = function (id, note) {
    layui.use('layer', function () {
        //进入修改网格页面
        layer.open({
            type: 2,
            title: '修改网格备注',
            maxmin: true,
            area: ['700px', '450px'],
            content: '/grid/updateGrid',
            success: function (layero, index) {
                var body = layer.getChildFrame('body', index);
                var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                body.find('#id').val(id);
                body.find('#note').val(note);
            },
            end: function () {

            },
        });
    })
}

//修改工厂的备注
var updateFactory = function (id, note) {
    layui.use('layer', function () {
        var layer = layui.layer;
        //进入修改工厂页面
        layer.open({
            type: 2,
            title: '修改工厂信息',
            maxmin: true,
            area: ['800px', '450px'],
            content: '/grid/updateFactory/' + id,
            success: function (layero, index) {
                var body = layer.getChildFrame('body', index);
                var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                body.find('#id').val(id);
                body.find('#code').val(note);
            },
            end: function () {

            },
        });
    })
};
var delFactory = function (id) {
    layer.confirm('确认要删除该工厂吗?', {icon: 3, title: '提示'},
        function () {
            //ajax传递删除数据
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: '/grid/delFactory',
                data: {factoryId: id},
                traditional: true,
                success: function (ans) {
                    if (ans.code === 0) {
                        layer.msg("删除成功", {
                            icon: 1,
                            time: 1000 //2秒关闭（如果不配置，默认是3秒）*/
                        }, function () {
                            initTree();
                        });
                    } else if (ans.code === 6) {
                        layer.alert("该工厂下还有设备,不可删除");
                    } else {
                        layer.alert("删除失败");
                    }
                },
                error: function (XMLResponse) {
                    layer.alert(XMLResponse.responseText);
                }
            });
        });
};
var delGrid = function (id) {
    layer.confirm('确认要删除该网格吗?', {icon: 3, title: '提示'},
        function () {
            //ajax传递删除数据
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: '/grid/delGrid',
                data: {gridId: id},
                traditional: true,
                success: function (ans) {
                    if (ans.code === 0) {
                        layer.msg("删除成功", {
                            icon: 1,
                            time: 1000 //2秒关闭（如果不配置，默认是3秒）*/
                        }, function () {
                            initTree();
                        });
                    } else if (ans.code === 7) {
                        layer.alert("该网格下还有子网格，不可删除");
                    } else {
                        layer.alert("删除失败");
                    }
                },
                error: function (XMLResponse) {
                    layer.alert(XMLResponse.responseText);
                }
            });
        });
};


