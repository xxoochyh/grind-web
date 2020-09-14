// 时间段选择器
layui.use(['laydate','table','element'],function(){


    // //总体统计中的下级区域信息显示
    var table = layui.table;
    //第一个实例
    table.render({
        elem: '#nextLevelAreaStaticInfo'
        ,title: '下级区域信息显示'
        ,height: 312
        ,url: 'https://www.layui.com/demo/table/user/?page=1&limit=30' //数据接口
        ,page: true //开启分页
        ,cols: [
            [ //表头
                {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
                ,{field: 'lowerArea', title: '下级区域'}
                ,{field: 'factory', title: '工厂',  sort: true}
                ,{field: 'deviceSerial4', title: '设备编号'}
                ,{field: 'alarmAmount', title: '报警次数' }
                ,{field: 'faultAmount', title: '故障次数',  sort: true}
            ]
        ]

    });

    //危险设备
    table.render({
        elem: '#alarmDangerDevice'
        ,title: '危险设备'
        ,height: 312
        ,url: 'https://www.layui.com/demo/table/user/?page=1&limit=30' //数据接口
        ,page: true //开启分页
        ,cols: [
            [ //表头
                {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
                ,{field: 'deviceSerial', title: '设备编号'}
                ,{field: 'deviceInArea', title: '所属区域',  sort: true}
                ,{field: 'deviceInFactory', title: '所属工厂'}
                ,{field: 'alarmAmount', title: '报警次数',  sort: true}
                ,{field: 'alarmDetail', title: '详细信息'}
            ]
        ]

    });

    //报警排行
    var alarmRankChart = Highcharts.chart('alarmRank', {
        chart: {
            type: 'bar'
        },
        title: {
            text: '报警排行'
        },
        subtitle: {
            text: '数据来源：grind系统'
        },
        xAxis: {
            categories: ['昆明市','开远市','曲靖市','大理市','西双版纳'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '报警总数（次）',
                align: 'high'
            },
            lables: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: '一次'
        },
        plotOption: {
            bar: {
                dataLabel: {
                    enabled: true,
                    allowOverlap: true //允许数据标签重叠
                }
            }
        },
        legend: {
            enabled: true,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        series: [
            {name: '故障总数', data: [20,30,10,7,8]
            },
            {name: '报警总数', data: [100,70,50,30,60]
            },
            {name: '设备总数', data: [100,80,60,40,70]
            }
        ]

    });

    //报警趋势
    var alarmTrendChart = Highcharts.chart('alarmTrend', {
        title: {
            text: '报警趋势统计'
        },
        subtitle: {
            text: '数据来源：grind系统'
        },
        yAxis: {
            title: {
                text: '报警次数'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
        series: [//['昆明市','开远市','曲靖市','大理市','西双版纳']
            {name: '昆明市', data: [34, 3, 77, 58, 31, 93, 137, 75]
            },
            {name: '开远市', data: [49, 24, 97, 51, 390, 30, 21, 40]
            },
            {name: '曲靖市',data: [11, 77, 16, 171, 20, 77, 32, 39]
            },
            {name: '大理市', data: [null, null, 79, 69, 12, 52, 34, 327]
            },
            {name: '西双版纳', data: [8, 59, 81, 11, 9, 81, 74, 11]
            }
        ],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });






});

