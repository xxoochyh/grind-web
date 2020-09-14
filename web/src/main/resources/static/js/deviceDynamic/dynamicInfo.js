$ = layui.jquery;
var deviceId;
let alramResult = {};
let faultResult = {};
//传感器数据
let sensorResult = {}
var date = new Date();
const label = [];
label[1] = {
    text:"卸灰器故障动态数据表",
    name:"卸灰器"
};
label[2] = {
    text:"清灰气压动态数据表",
    name:"清灰气压"
};
label[3] = {
    text:"干式粉尘排放浓度动态数据表",
    name:"粉尘排放浓度"
};
label[4] = {
    text:"烟感探测动态数据表",
    name:"烟感探测"
};
label[5] = {
    text:"火花探测动态数据表",
    name:"火花探测"
};
label[6] = {
    text:"温度动态数据表",
    name:"温度"
};
label[7] = {
    text:"风压差动态数据表",
    name:"风压差"
};
label[8] = {
    text:"湿式粉尘排放浓度动态数据表",
    name:"粉尘排放浓度"
};
label[9] = {
    text:"水压压差动态数据表",
    name:"水压压差"
};
label[10] = {
    text:"氢气浓度动态数据表",
    name:"氢气浓度"
};
label[11] = {
    text:"进出口压差动态数据表",
    name:"进出口压差"
};
label[12] = {
    text:"液位动态数据表",
    name:"液位"
};
const alarmType = [];
alarmType[1] = '卸灰器';
alarmType[2] = '清灰气压';
alarmType[3] = '干式粉尘排放浓度';
alarmType[4] = '烟感探测';
alarmType[5] = '火花探测';
alarmType[6] = '温度';
alarmType[7] = '风压差';
alarmType[8] = '湿式粉尘排放浓度';
alarmType[9] = '水压压差';
alarmType[10] = '氢气浓度';
alarmType[11] = '进出口压差';
alarmType[12] = '液位';



$(function () {
    deviceId = $('#deviceId').val();
    console.log(date.getSeconds());
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: '/deviceDynamic/get/simpleAlarm',
        data: {
            deviceId: deviceId,
            start: parseInt(date.getTime() / 1000 - 1000000),
            end: parseInt(date.getTime() / 1000),
        },
        success: function (result) {
            const data = result.data;
            let index = processAlarmData(data);
            console.log(data);
            chartForAlarm(index);
            $("li.layui-this").click();
        }
    });

});


function processAlarmData(data){
    let index = [];
    if(data){
        for(i = 0; i < data.length; ++i) {
            let temp;

            if(data[i].isConfirmed){
                temp = {x:data[i].alarmTime*1000,
                    y:data[i].alarmType,
                    marker:{
                        fillColor: 'blue',
                        lineWidth:2,
                        lineColor: null
                    }};
            }else{
                temp={x:data[i].alarmTime*1000,
                    y:data[i].alarmType,
                    marker:{
                        fillColor: 'red',
                        lineWidth:2,
                        lineColor: null
                    }};
            }
            index.push(temp);
            alramResult[temp.x] = data[i].alarmId;
        }
    }
    return index;
}


function processFaultData(data){
    let index = [];
    if(data){
        for(i = 0; i < data.length; ++i) {
            let temp;

            if(data[i].isConfirmed){
                temp = {x:data[i].faultTime*1000,
                    y:data[i].faultType,
                    marker:{
                        fillColor: 'blue',
                        lineWidth:2,
                        lineColor: null
                    }};
            }else{
                temp={x:data[i].faultTime*1000,
                    y:data[i].faultType,
                    marker:{
                        fillColor: 'red',
                        lineWidth:2,
                        lineColor: null
                    }};
            }
            index.push(temp);
            faultResult[temp.x] = data[i].faultId;
        }
    }
    return index;
}


layui.use('element',function () {
    var element = layui.element;
    element.on('tab(dynamicInfo)',function(data){
        console.log(this);
        console.log(data);
        var type = $(this).attr("data-type");
        console.log(type);
        if(type!= 100 && type!= 200){
            $("#alarmDetailTable").html("");
            $("#faultDetailTable").html("");
            sensorResult = {}
            $.ajax({
                type: 'get',
                dataType: 'json',
                url: '/deviceDynamic/get/dynamicData',
                data: {
                    deviceId: deviceId,
                    start: parseInt(date.getTime() / 1000 - 1000000),
                    end: parseInt(date.getTime() / 1000),
                    type: type
                },
                success: function (result) {
                    console.log(result.data);
                    const data = result.data;
                    let index = [];
                    if(data){
                        for(i = 0; i < data.length; ++i) {
                            let temp = [];
                            //js中毫秒 从后端数据库取出的为秒 时区转换8小时
                            temp.push(data[i].createTime*1000);
                            temp.push(data[i].data);
                            sensorResult[data[i].createTime*1000] = {
                                createTime:data[i].createTime*1000,
                                alarmFlag:data[i].alarm,
                                data : data[i].data
                            };
                            index.push(temp);
                        }
                    }
                    console.log(index);
                    chart(index,type);
                    let v = sensorResult[Object.keys(sensorResult)[0]];
                    req("",'/deviceDynamic/get/sensorDetail?time='+v.createTime+'&flag='+(v.alarmFlag==1?"报警":"正常")+'&typeValue='+v.data);
                }
            });
        }else{
            if(type == 100){
                $("#alarmDetailTable").html("");
                $("#faultDetailTable").html("");
                $.ajax({
                    type: 'get',
                    dataType: 'json',
                    url: '/deviceDynamic/get/simpleAlarm',
                    data: {
                        deviceId: deviceId,
                        start: parseInt(date.getTime() / 1000 - 1000000),
                        end: parseInt(date.getTime() / 1000),
                    },
                    success: function (result) {
                        console.log(result.data);
                        const data = result.data;
                        let index = processAlarmData(data);
                        console.log(index);
                        console.log(alramResult);
                        chartForAlarm(index);
                        //默认显示第一个点的具体数据
                        let v = alramResult[Object.keys(alramResult)[0]];
                        req(v,'/deviceDynamic/get/alarmDetail?alarmId=');


                    }
                });
            }else if(type == 200){
                $("#alarmDetailTable").html("");
                $("#faultDetailTable").html("");
                $.ajax({
                    type: 'get',
                    dataType: 'json',
                    url: '/deviceDynamic/get/simpleFault',
                    data: {
                        deviceId: deviceId,
                        start: parseInt(date.getTime() / 1000 - 1000000),
                        end: parseInt(date.getTime() / 1000),
                    },
                    success: function (result) {
                        console.log(result.data);
                        const data = result.data;
                        let index = processFaultData(data);
                        chartForFault(index);
                        let v = faultResult[Object.keys(faultResult)[0]];
                        req(v,'/deviceDynamic/get/faultDetail/');
                    }
                });
            }
        }
    })
})


function chart(data,type) {
    Highcharts.setOptions({
        lang: {
            noData: '暂无数据'
        },
        global: { useUTC: false }
    });
    var chart = Highcharts.chart('container', {
        credits: {
            enabled: false
        },
        title: {
            text: label[type].text
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: '日期'

            },
            labels:{
                rotation:30
            },
            dateTimeLabelFormats: {
                second: '%y-%m-%d %H:%m:%S'
            }
        },
        yAxis: {
            type: 'linear',
            title: {
                text: '传感器值'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: false//关闭数据点标记 鼠标滑过才显示数据点
                }
            }
        },
        series: [{
            //数据列的名字
            name: label[type].name,
            data: data,

        }],
        noData: {
            style: {
                fontWeight: 'bold',
                fontSize: '15px',
                color: '#303030'
            }
        },
        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function (e) {
                            console.log(sensorResult);

                            let x = this.x;
                            let y = this.y;
                            let alarmFlag = sensorResult[x].alarmFlag == 0?"正常":"报警";
                            let typeValue = this.y;
                            let url = "/deviceDynamic/get/sensorDetail?time="+x+"&flag="+alarmFlag+"&typeValue="+typeValue;
                            req("",url);
                            // console.log(alarmFlag);
                            // console.log($("table#sensorDetailTable"));
                            // let html = '<table class="layui-table"> <colgroup>\n' +
                            //     '        <col width="150">\n' +
                            //     '        <col width="200">\n' +
                            //     '        <col>\n' +
                            //     '    </colgroup><thead><tr><th style="color: #ff0000">'+'数据列'+ '</th><th>'+'相关数据'+'</th></tr></thead>'+
                            //     '<tbody><tr><td style="text-align: center"><b>'+'发生时间'+'</b></td><td style="text-align: center">'+x+'</td></tr><tr><td style="text-align: center">'+'类型'+'</td>' +
                            //     '<td style="text-align: center"><b>'+typeValue+'</b></td></tr>'+'<tr><td style="text-align: center"><b>'+'报警'+'</b></td><td style="text-align: center">'+alarmFlag+'</td></tr></tbody></table>'
                            // $("table#sensorDetailTable").html(html);
                        }
                    }
                }
            }//series
        },//plotOptions
        responsive: {
            //指定响应式规则
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
}



function chartForAlarm(data){
    console.log(data)
    Highcharts.setOptions({
        lang: {
            noData: '暂无数据'
        },
        global: { useUTC: false }
    });
    Highcharts.chart('container', {
        credits: {
            enabled: false
        },
        title: {
            text: '设备警报数据'
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: '日期'

            },
            tickInterval:  60 * 1000,
            //格式化时间，day,week....
            dateTimeLabelFormats: {
                second: '%Y-%m-%d %H:%m:%s'
            },
            labels:{
                rotation:30
            }
            // dateTimeLabelFormats: {
            //     second: '%y-%m-%d %H:%m:%S'
            // }
        },
        yAxis: {
            allowDecimals: false,
            type: 'linear',
            title: {
                text: '警报类型'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        series: [{
            name:'警报',
            data:data
        }],
        noData: {
            style: {
                fontWeight: 'bold',
                fontSize: '15px',
                color: '#303030'
            }
        },
        tooltip: {
            formatter:function () {
                //console.log(this.point);
                /**
                 * 时间对象的格式化;
                 */
                Date.prototype.format = function(format) {
                    /*
                     * eg:format="YYYY-MM-dd hh:mm:ss";
                     */
                    var o = {
                        "M+" :this.getMonth() + 1, // month
                        "d+" :this.getDate(), // day
                        "h+" :this.getHours(), // hour
                        "m+" :this.getMinutes(), // minute
                        "s+" :this.getSeconds(), // second
                        "q+" :Math.floor((this.getMonth() + 3) / 3), // quarter
                        "S" :this.getMilliseconds()
                        // millisecond
                    }
                    if (/(y+)/.test(format)) {
                        format = format.replace(RegExp.$1, (this.getFullYear() + "")
                            .substr(4 - RegExp.$1.length));
                    }

                    for ( var k in o) {
                        if (new RegExp("(" + k + ")").test(format)) {
                            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
                                : ("00" + o[k]).substr(("" + o[k]).length));
                        }
                    }
                    return format;
                }
                var temX = new Date(this.key).format("yyyy-MM-dd hh:mm:ss");
                // console.log("日期是正确的吗："+temX);
                var temY = alarmType[this.y];
                var name = this.series.name;
                var str = "是否确认";
                let that = this;
                var value = function () {
                    for(let entry of data){
                        // console.log(entry);
                        // console.log(that.key);
                        if(entry.x == that.key){
                            if(entry.marker.fillColor == "red"){
                                return "否"
                            }else{
                                return "是"
                            }
                        }
                    }
                    return "";
                }();
                return  '<small>'+temX+'</small>'+'<br><table><tr><td style="color: {series.color}">'+name+'类型: </td>' +
                    '<td style="text-align: right"><b>'+temY+'</b></td></tr>'+'<br><tr><td style="color: {series.color}">'+str+': </td>' +
                    '<td style="text-align: right"><b>'+value+'</b></td></tr></table>'
            }
        },
        plotOptions: {
            series: {
                marker: {
                    radius:8,
                    lineWidth: 2,
                    lineColor: null, // inherit from series
                    enabled:true
                },
                lineWidth: 0,
                cursor: 'pointer',
                point: {
                    events: {
                        click: function (e) {
                            let temX = e.point.category;
                            var alarmId =alramResult[temX] ;
                            req(alarmId,'/deviceDynamic/get/alarmDetail?alarmId=');
                        }
                    }
                }
            }//series
        },//plotOptions

        responsive: {
            //指定响应式规则
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


}



function chartForFault(data){
    Highcharts.setOptions({
        lang: {
            noData: '暂无数据'
        },
        global: { useUTC: false }
    });
    Highcharts.chart('container', {
        credits: {
            enabled: false
        },
        title: {
            text: '设备故障数据'
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: '日期'

            },
            tickInterval:60*1000,
            labels:{
                rotation:30
            },
            dateTimeLabelFormats: {
                second: '%Y-%m-%d %H:%m:%s'
            }
        },
        yAxis: {
            type: 'linear',
            title: {
                text: '故障类型'
            }
        },
        legend: {

            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        series: [{
            name:'故障',
            data:data
        }],
        noData: {
            style: {
                fontWeight: 'bold',
                fontSize: '15px',
                color: '#303030'
            }
        },
        plotOptions: {
            series: {
                marker: {
                    radius:8,
                    lineWidth: 2,
                    lineColor: null, // inherit from series
                    enabled:true
                },
                lineWidth: 0,
                cursor: 'pointer',
                point: {
                    events: {
                        click: function (e) {
                            let temX = e.point.category;
                            let faultId =faultResult[temX] ;
                            req(faultId,'/deviceDynamic/get/faultDetail/');
                        }
                    }
                }
            }
        },
        tooltip: {
            formatter:function () {
                //console.log(this.point);
                /**
                 * 时间对象的格式化;
                 */
                Date.prototype.format = function(format) {
                    /*
                     * eg:format="YYYY-MM-dd hh:mm:ss";
                     */
                    var o = {
                        "M+" :this.getMonth() + 1, // month
                        "d+" :this.getDate(), // day
                        "h+" :this.getHours(), // hour
                        "m+" :this.getMinutes(), // minute
                        "s+" :this.getSeconds(), // second
                        "q+" :Math.floor((this.getMonth() + 3) / 3), // quarter
                        "S" :this.getMilliseconds()
                        // millisecond
                    }
                    if (/(y+)/.test(format)) {
                        format = format.replace(RegExp.$1, (this.getFullYear() + "")
                            .substr(4 - RegExp.$1.length));
                    }

                    for ( var k in o) {
                        if (new RegExp("(" + k + ")").test(format)) {
                            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
                                : ("00" + o[k]).substr(("" + o[k]).length));
                        }
                    }
                    return format;
                }
                var temX = new Date(this.key).format("yyyy-MM-dd hh:mm:ss");
                // console.log("日期是正确的吗："+temX);
                //需要修改為faultType
                var temY = alarmType[this.y];
                var name = this.series.name;
                var str = "是否确认";
                let that = this;
                var value = function () {
                    for(let entry of data){
                        // console.log(entry);
                        // console.log(that.key);
                        if(entry.x == that.key){
                            if(entry.marker.fillColor == "red"){
                                return "否"
                            }else{
                                return "是"
                            }
                        }
                    }
                    return "";
                }();
                return  '<small>'+temX+'</small>'+'<br><table><tr><td style="color: {series.color}">'+name+'类型: </td>' +
                    '<td style="text-align: right"><b>'+temY+'</b></td></tr>'+'<br><tr><td style="color: {series.color}">'+str+': </td>' +
                    '<td style="text-align: right"><b>'+value+'</b></td></tr></table>'
            }
        },
        responsive: {
            //指定响应式规则
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
}

function req(v,url){
    let temUrl = url+v;
    layui.use('layer',function(){
        let layer = layui.layer;
        $.ajax({
            type: "get",
            url: temUrl,
            async : true,
            dataType:"html",//返回整合HTML
            // dataType: "json",//返回json格式设置
            contentType:'application/json; charset=utf-8',
            success: function (result) {
                console.log(typeof(result));
                let tem = $.parseHTML(result);
                $('#alarmDetailTable').html($(tem));
                layer.msg('右边详细数据已更新！')

            }
        })
    })
}