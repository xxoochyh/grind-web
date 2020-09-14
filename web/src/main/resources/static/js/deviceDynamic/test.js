//创建地图
var map = new AMap.Map('container', {
    zoom: 9
});
var rawData = [];
    rawData = getFactoryStaticInfo();
    console.log(rawData);


AMapUI.loadUI(['misc/MarkerList', 'overlay/SimpleMarker', 'overlay/SimpleInfoWindow'],
    function(MarkerList, SimpleMarker, SimpleInfoWindow) {

        //即jQuery/Zepto
        // var $ = MarkerList.utils.$;

        var  defaultIconStyle = 'green', // 默认的图标样式
            alarmIconStyle = ["#ff0000","#fe6347","#FA8072","#DB7093",
                "#FF4500","#CD5C5C","#9c3912"], //报警图标样式
            faultIconStyle = 'yellow', //故障图标样式
            hoverIconStyle = 'purple', //鼠标hover时的样式
            selectedIconStyle = 'blue'
        ;

        var markerList = new MarkerList({
            map: map,
            //ListElement对应的父节点或者ID
            listContainer: "myList", //document.getElementById("myList"),
            //选中后显示

            //从数据中读取位置, 返回lngLat
            getPosition: function (data) {
                console.log('lat,lng:::'+data.factoryLat+',,'+data.factoryLng);
                return [data.factoryLat, data.factoryLng];
            },
            //数据ID，如果不提供，默认使用数组索引，即index
            getDataId: function (data, index) {

                return data.id;
            },
            getInfoWindow: function (data, context, recycledInfoWindow) {

                var content = 'InfoWin: '+ (context.index+1) + '。'+'lat,lng:::'+data.factoryLat+',,'+data.factoryLng;
                if (recycledInfoWindow) {

                    recycledInfoWindow.setInfoTitle(data.factoryName);
                    recycledInfoWindow.setInfoBody(content);

                    return recycledInfoWindow;
                }

                return new SimpleInfoWindow({
                    infoTitle: data.factorySerial,
                    infoBody: data.factoryName,
                    offset: new AMap.Pixel(0, -37)
                });
            },
            //构造marker用的options对象, content和title支持模板，也可以是函数，返回marker实例，或者返回options对象
            getMarker: function (data, context, recycledMarker) {

                var label = String.fromCharCode('A'.charCodeAt(0) + context.index);

                if (recycledMarker) {
                    recycledMarker.setIconLabel(label);
                    console.log('lat,lng:::'+data.factoryLat+',,'+data.factoryLng);
                    return recycledMarker;
                }

                return new SimpleMarker({
                    iconStyle: defaultIconStyle,
                    label: label
                });
            },
            getListElement: function (data, context, recycledListElement) {

                var label = String.fromCharCode('A'.charCodeAt(0) + context.index);

                //使用模板创建
                var innerHTML = MarkerList.utils.template(
                    '<div >' +
                    '    <h3 >' +
                    '        <%- label %>. <%- data.factorySerial %>' +
                    '    </h3><br>' +
                    '</div>'
                    , {
                    data: data,
                    label: label
                });

                if (recycledListElement) {
                    recycledListElement.innerHTML = innerHTML;
                    return recycledListElement;
                }

                return '<li class="poibox">' +
                    innerHTML +
                    '</li>';
            },
            //列表节点上监听的事件
            listElementEvents: ['click', 'mouseenter', 'mouseleave'],
            //marker上监听的事件
            markerEvents: ['click', 'mouseover', 'mouseout'],
            //makeSelectedEvents:false,
            selectedClassNames: 'selected',

            autoSetFitView: true



        });
        window.markerList = markerList;

        markerList.on('selectedChanged', function(event, info) {

            checkBtnStats();

            if (info.selected) {

                console.log(info);

                if (info.selected.marker) {
                    //更新为选中样式
                    info.selected.marker.setIconStyle(selectedIconStyle);
                }

                //选中并非由列表节点上的事件触发，将关联的列表节点移动到视野内
                if (!info.sourceEventInfo.isListElementEvent) {

                    if (info.selected.listElement) {
                        scrollListElementIntoView($(info.selected.listElement));
                    }
                }
            }

            if (info.unSelected && info.unSelected.marker) {
                //更新为默认样式
                info.unSelected.marker.setIconStyle(defaultIconStyle);
            }
        });

        markerList.on('listElementMouseenter markerMouseover', function(event, record) {

            if (record && record.marker) {

                forcusMarker(record.marker);

                //this.openInfoWindowOnRecord(record);

                //非选中的id
                if (!this.isSelectedDataId(record.id)) {
                    //设置为hover样式
                    record.marker.setIconStyle(hoverIconStyle);
                    //this.closeInfoWindow();
                }
            }
        });

        markerList.on('listElementMouseleave markerMouseout', function(event, record) {

            if (record && record.marker) {

                if (!this.isSelectedDataId(record.id)) {
                    //恢复默认样式
                    record.marker.setIconStyle(defaultIconStyle);
                }
            }
        });

        //数据输出完成
        markerList.on('renderComplete', function(event, records) {

            checkBtnStats();
        });

        // markerList.on('*', function(type, event, res) {
        //     console.log(type, event, res);
        // });

        //加载数据
        function loadData() {

            // $.getJSON(src, function(data) {
               var data = rawData;
                // markerList._dataSrc = src;

                //渲染数据
                markerList.render(data);
                console.log('data===='+data);
                // if (callback) {
                //     callback(null, data);
                // }
            // });
        }

        var $btns = MarkerList.utils.$('#btnList input[data-path]');

        /**
         * 检测各个button的状态
         */
        function checkBtnStats() {
            MarkerList.utils.$('#btnList input[data-enable]').each(function() {

                var $input = MarkerList.utils.$(this),
                    codeEval = $input.attr('data-enable');

                $input.prop({
                    disabled: !eval(codeEval)
                });
            });
        }

        MarkerList.utils.$('#btnList').on('click', 'input', function() {

            var $input = MarkerList.utils.$(this),
                dataPath = $input.attr('data-path'),
                codeEval = $input.attr('data-eval');

            if (dataPath) {
                loadData();
            } else if (codeEval) {
                eval(codeEval);
            }

            checkBtnStats();
        });

        loadData($btns.attr('data-path'));
        console.log('$btns::::'+$btns.attr('data-path'));

        function forcusMarker(marker) {
            marker.setTop(true);

            //不在地图视野内
            if (!(map.getBounds().contains(marker.getPosition()))) {

                //移动到中心
                map.setCenter(marker.getPosition());
            }
        }

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();

            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
            );
        }

        function scrollListElementIntoView($listEle) {

            if (!isElementInViewport($listEle.get(0))) {
                MarkerList.utils.$('#point-list').scrollTop($listEle.offset().top - $listEle.parent().offset().top);
            }

            //闪动一下
            $listEle
                .one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                    function(e) {
                        MarkerList.utils.$(this).removeClass('flash animated');
                    }).addClass('flash animated');
        }


    });