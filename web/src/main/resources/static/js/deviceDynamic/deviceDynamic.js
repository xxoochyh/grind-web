/**
 * 数据统计页面
 * @type {*[]}
 */
let date = new Date();
//定义表格数据
const tables = [
    {field: 'deviceId', hide: true}
    , {field: 'status', title: '设备状态', width: 140}
    , {field: 'alarmUnconfirmedCount', title: '未确认报警数', width: 140}
    , {field: 'lastAlarmTime', title: '最近一次报警时间', width: 200}
    , {field: 'faultUnconfirmedCount', title: '未确认故障数', width: 140}
    , {field: 'lastFaultTime', title: '最近一次故障时间', width: 200}
    , {fixed: 'right', title: '操作', toolbar: '#deviceBar', minWidth: 120}
];

var factoryId;
$ = layui.jquery;

$(function () {

    init();
    bindClick();

});

function init() {
    $.ajax({
        type: 'get',
        dataType: 'json',//定义数据的返回类型
        url: '/grid/getGridByAccountId',
        traditional: true,
        success: function (result) {
            //console.log(result.data);
            let data = result;
            let node = [];
            /*for (i = 0; i < data.length; ++i) {
                // 构造树节点
                node.push({
                    title: data[i].factoryName,
                    id: data[i].factoryId
                });


            }*/
            constructNodes(data);
            //     let nodes = [
            //
            //
            //     {
            //         title: '"防爆监测管理系统"',
            //         spread: true,
            //         href: '',
            //         id:1,
            //         level:0,
            //         children: [{
            //             title: '陕西省',
            //             spread: true,
            //             href: '',
            //             id:2,
            //             level:1,
            //         children: [{
            //             title: '西安市',
            //             spread: true,
            //             href: '',
            //             level:2,
            //             id:3,
            //             children: [{
            //                 title: '蓝田县',
            //                 spread: false,
            //                 href: '',
            //                 level:3,
            //                 id:5,
            //                 children: [
            //                     {
            //                         title: 'FACTORY1002',
            //                         spread: true,
            //                         href: '',
            //                         id:10002,
            //                         level:4,
            //                         children: []
            //                     },
            //                     {
            //                         title: 'FACTORY1020',
            //                         spread: true,
            //                         href: '',
            //                         id:10020,
            //                         level:4,
            //                         children: []
            //                     },
            //                     {
            //                         title: 'FACTORY1021',
            //                         spread: true,
            //                         level:4,
            //                         id:10021,
            //                         href: '',
            //                         children: []
            //                     }
            //             ]
            //
            //         }]
            //     }]
            //     }]
            // }
            // ]
            //initTree('#factoryTree', node, 'factoryTree');
            let nodes = constructNodes(data);
            initTreeNew('#factoryTree',nodes);
            let k = 0;
            while(true) {
                if(data[k].level == 4){

                    factoryId = data[k].id;
                    initTable('#dynamicTable', '/deviceDynamic/get/' + factoryId, [tables]);
                    break;
                }
                k++;
            }

        }
    });

    //绑定数据表格
    // initTable('#dynamicTable', tableUrl, [tables]);
}

//绑定点击事件
var bindClick = function () {
    layui.use(['table', 'layer'], function () {
        var table = layui.table;
        var layer = layui.layer;

        //监听行工具事件
        table.on('tool(dynamicTable)', function (obj) {
            console.log(obj);
            var data = obj.data;
            console.log(data);
            if (obj.event === 'info') {
                //createLayer('设备统计信息', 2, '/deviceDynamic/page/' + data.deviceId, '点击此处返回统计信息管理页面', false);
                layui.use('layer',function () {
                    const layer = layui.layer;
                    const index = layer.open({
                        title:'设备统计信息',
                        type:2,
                        content:'/deviceDynamic/page/' + data.deviceId,
                        success: function (layero, index) {
                            setTimeout(function () {
                                layui.layer.tips('点击此处返回统计信息管理页面', '.layui-layer-setwin .layui-layer-close', {
                                    tips: 3
                                });
                            }, 200)
                        },
                        cancel: function (index, layero) {
                            layer.close(index);
                        }

                    })
                    layer.full(index);
                });

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
                // console.log(obj.data); //得到当前点击的节点数据
                // console.log(obj.state); //得到当前节点的展开状态：open、close、normal
                // console.log(obj.elem); //得到当前节点元素
                factoryId = obj.data.id;
                initTable('#dynamicTable', '/deviceDynamic/get/' + obj.data.id, [tables]);
            }
        });
    });
}
function initTreeNew(element,nodes){
    layui.use(['tree','layer'],function(){
        let tree = layui.tree;
        let layer = layui.layer;
        tree.render({
            elem:element,
            data:nodes,
            click:function (obj) {
                console.log(obj.data);
                let data = obj.data;
                if(data.level == 4){
                    initTable('#dynamicTable', '/deviceDynamic/get/' + obj.data.id, [tables]);
                }else{
                    ajaxCaps(data);
                }

            }
        });
    })
}
function constructNodes(data){
    //0: {id: 5, pid: 3, name: "蓝田县", level: 3, type: 2}
    // 1: {id: 10002, pid: 5, name: "FACTORY10002", level: 4, type: 1}
    // 2: {id: 10020, pid: 5, name: "FACTORY10020", level: 4, type: 1}
    // 3: {id: 10021, pid: 5, name: "FACTORY10021", level: 4, type: 1}
    // 4: {id: 3, pid: 2, name: "西安市", level: 2, type: 2}
    // 5: {id: 2, pid: 1, name: "陕西省", level: 1, type: 2}
    // 6: {id: 1, pid: 0, name: "防爆监测管理系统", level: 0, type: 2}

    //title: '"防爆监测管理系统"',
    //                 spread: true,
    //                 href: '',
    //                 id:1,
    //                 level:0,
    //                 children: [{
    let nodes = [];
    for(let i = 0;i < data.length; i++){
        let tem = data[i];
        let node = {};

        switch (tem.level) {
            case 0:
                node.title = tem.name;
                node.pid = 0;
                node.spread = true;
                node.href = '';
                node.id = tem.id;
                node.level = 0;
                node.children = [];
                break;
            case 1:
                node.title = tem.name;
                node.pid = tem.pid;
                node.spread = true;
                node.href = '';
                node.id = tem.id;
                node.level = 1;
                node.children = [];
                break;
            case 2:
                node.title = tem.name;
                node.pid = tem.pid;
                node.spread = true;
                node.href = '';
                node.id = tem.id;
                node.level = 2;
                node.children = [];
                break;
            case 3:
                node.title = tem.name;
                node.pid = tem.pid;
                node.spread = true;
                node.href = '';
                node.id = tem.id;
                node.level = 3;
                node.children = [];
                break;
            case 4:
                node.title = tem.name;
                node.pid = tem.pid;
                node.spread = true;
                node.href = '';
                node.id = tem.id;
                node.level = 4;
                node.children = [];
                break;

        }
        nodes.push(node);
    }
    const handle = (property) => {
        return function(a,b){
            const val1 = a[property];
            const val2 = b[property];
            return val1 - val2;
        }
    }
    nodes.sort(handle('level'));

    let res = [[],[],[],[],[]];
    for (let i = 0; i < nodes.length ; i++) {
        let tem = nodes[i];
        switch (tem.level) {
            case 0:
                res[0].push(tem);
                break;
            case 1:
                res[1].push(tem);
                break;
            case 2:
                res[2].push(tem);
                break;
            case 3:
                res[3].push(tem);
                break;
            case 4:
                res[4].push(tem);
                break;

        }
    }
    //自底向上构建树
    for (let i = 4;i >= 0;i--){
        for(let o of res[i]){
            let k = o.pid;
            if(i != 0){
                for(let m of res[i-1]){
                    if(m.id == k){
                        m.children.push(o);
                        break;
                    }
                }
            }
        }
    }
    return res[0];
}
function ajaxCaps(data){
    $.ajax({
        type: 'get',
        dataType: 'json',
        //主要是该节点下有多少工厂，然后求得故障和报警数据
        url:'/deviceDynamic/get/alarmAndFaultCount',
        data: {
            gridId: data.id,
            start: parseInt(date.getTime() / 1000 - 10000000),
            end: parseInt(date.getTime() / 1000),
        },
        success:function(result){
            console.log(result);
            let confirmAlarmCount = result[0].data[0];
            let unConfirmAlarmCount = result[0].data[1];
            let confirmFaultCount = result[1].data[0];
            let unConfirmFaultCount = result[1].data[1];
            layer.open({
                type: 1
                ,title: false//不显示标题栏
                ,closeBtn: false
                ,area: '300px;'
                ,shade: 0.8
                ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
                ,btn: ['点击关闭']
                ,btnAlign: 'c'
                ,moveType: 1 //拖拽模式，0或者1
                ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">您在'+data.title+'<br><br>确认警报个数:  <span style="color:#ffb800;font-size: xx-large">'+confirmAlarmCount+'</span>'+'<br>未确认警报个数:  <span style="color:#f00;font-size: xx-large">'+unConfirmAlarmCount+'</span><br><br><br>确认故障个数:  <span style="color:#ffb800;font-size: xx-large">'+confirmFaultCount+'</span><br>未确认故障个数:  <span style="color:#f00;font-size: xx-large">' +unConfirmFaultCount+'</span></div>'
                ,success: function(layero){
                    // let btn = layero.find('.layui-layer-btn');
                    // btn.find('.layui-layer-btn0').attr({
                    //     href: 'http://www.layui.com/'
                    //     ,target: '_blank'
                    // });
                }
            });
        }

    })
}
