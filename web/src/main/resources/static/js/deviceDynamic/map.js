//创建地图
var map = new AMap.Map('container', {
    zoom: 4,
    resizeEnable: true
});
//just some colors
var colors = [
    "#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00",
    "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707",
    "#651067", "#329262", "#5574a6", "#3b3eac"
];
var lowerAreaInfo = []
    lowerAreaInfo = getLowerAreaInfo();
    console.log(lowerAreaInfo);

var rawData = [];
    rawData = getFactoryStaticInfo();
    console.log(rawData);








AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$', 'ui/misc/MarkerList', 'ui/overlay/SimpleMarker', 'ui/overlay/SimpleInfoWindow'],
    function(DistrictExplorer, $, MarkerList, SimpleMarker, SimpleInfoWindow) {

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




    //创建一个实例
    var districtExplorer = window.districtExplorer = new DistrictExplorer({
        eventSupport: true, //打开事件支持
        map: map
    });

    //当前聚焦的区域
    var currentAreaNode = null;
    window.currentAreaNode = currentAreaNode;
    //鼠标hover提示内容
    var $tipMarkerContent = $('<div class="tipMarker top"></div>');

    var tipMarker = new AMap.Marker({
        content: $tipMarkerContent.get(0),
        offset: new AMap.Pixel(0, 0),
        bubble: true
    });

    //双击地图事件
    // function showInfoDbClick(e){
    //     var text = '您在 [ '+e.lnglat.getLng()+','+e.lnglat.getLat()+' ] 的位置双击了地图！'
    //     document.querySelector("#areaInfo").innerText = text;
    //     console.log(e.lnglat.getLng());
    //     console.log(e.lnglat.getLat());
    // }
    // map.on('dblclick',showInfoDbClick);

    //根据Hover状态设置相关样式
    function toggleHoverFeature(feature, isHover, position) {

        tipMarker.setMap(isHover ? map : null);

        if (!feature) {
            return;
        }

        var props = feature.properties;

        if (isHover) {

            //更新提示内容
            $tipMarkerContent.html(props.adcode + ': ' + props.name);
            //更新位置
            tipMarker.setPosition(position || props.center);
        }

        $('#area-tree').find('h2[data-adcode="' + props.adcode + '"]').toggleClass('hover', isHover);

        //更新相关多边形的样式
        var polys = districtExplorer.findFeaturePolygonsByAdcode(props.adcode);
        for (var i = 0, len = polys.length; i < len; i++) {

            polys[i].setOptions({
                fillOpacity: isHover ? 0.5 : 0.2
            });
        }
    }

    //监听feature的hover事件
    districtExplorer.on('featureMouseout featureMouseover', function(e, feature) {
        toggleHoverFeature(feature, e.type === 'featureMouseover',
            e.originalEvent ? e.originalEvent.lnglat : null);
    });

    //监听鼠标在feature上滑动
    districtExplorer.on('featureMousemove', function(e, feature) {
        //更新提示位置
        tipMarker.setPosition(e.originalEvent.lnglat);
    });

    //feature被点击
    districtExplorer.on('featureClick', function(e, feature) {


        var props = feature.properties;
        //如果存在子节点
        // if (props.childrenNum > 0) {
        //切换聚焦区域
        switch2AreaNode(props.adcode);
        // }
    });

    //外部区域被点击
    districtExplorer.on('outsideClick', function(e) {

        districtExplorer.locatePosition(e.originalEvent.lnglat, function(error, routeFeatures) {

            if (routeFeatures && routeFeatures.length > 1) {
                //切换到省级区域
                switch2AreaNode(routeFeatures[1].properties.adcode);
            } else {
                //切换到全国
                switch2AreaNode(100000);
            }

        }, {
            levelLimit: 2
        });
    });
    //根据报警次数划分报警等级，得到报警等级对应的填充颜色
    function getColor(alarmSum){
        if (alarmSum >= 50) {
            return colors[1];
        }
        if (alarmSum < 50 && alarmSum >= 10) {
            return colors[1];
        }
        if (alarmSum < 10){
            return colors[3];
        }
    }


    //绘制区域面板的节点
    function renderAreaPanelNode(ele, props, color) {

        var $box = $('<li/>').addClass('lv_' + props.level);

        var $h2 = $('<h2/>').addClass('lv_' + props.level).attr({
            'data-adcode': props.adcode,
            'data-level': props.level,
            'data-children-num': props.childrenNum || void(0),
            'data-center': props.center.join(',')
        }).html(props.name).appendTo($box);

        if (color) {
            $h2.css('borderColor', color);
        }

        //如果存在子节点
        if (props.childrenNum > 0) {

            //显示隐藏
            $('<div class="showHideBtn"></div>').appendTo($box);

            //子区域列表
            $('<ul/>').addClass('sublist lv_' + props.level).appendTo($box);

            $('<div class="clear"></div>').appendTo($box);

            if (props.level !== 'country') {
                $box.addClass('hide-sub');
            }
        }

        $box.appendTo(ele);
    }


    //填充某个节点的子区域列表
    function renderAreaPanel(areaNode) {

        var props = areaNode.getProps();

        var $subBox = $('#area-tree').find('h2[data-adcode="' + props.adcode + '"]').siblings('ul.sublist');

        if (!$subBox.length) {
            //父节点不存在，先创建
            renderAreaPanelNode($('#area-tree'), props);
            $subBox = $('#area-tree').find('ul.sublist');
        }
        if ($subBox.attr('data-loaded') === 'rendered') {
            return;
        }

        $subBox.attr('data-loaded', 'rendered');

        var subFeatures = areaNode.getSubFeatures();

        //填充子区域
        for (var i = 0, len = subFeatures.length; i < len; i++) {
            renderAreaPanelNode($subBox, areaNode.getPropsOfFeature(subFeatures[i]), colors[i % colors.length]);
        }
    }

    //绘制某个区域的边界
    function renderAreaPolygons(areaNode) {
        //更新地图视野
        map.setBounds(areaNode.getBounds(), null, null, true);

        //清除已有的绘制内容
        districtExplorer.clearFeaturePolygons();

        //绘制子区域
        districtExplorer.renderSubFeatures(areaNode, function(feature, i) {
            var fillColor = colors[7];
            for ( var j = 0, len = lowerAreaInfo.length; j < len; j++) {
                if  (lowerAreaInfo[j].adcode == feature.properties.adcode) {
                    fillColor = getColor(lowerAreaInfo[j].alarmAmount);
                    break;
                }
            }
            var strokeColor = colors[colors.length - 1 - i % colors.length];

            return {
                cursor: 'default',
                bubble: true,
                strokeColor: strokeColor, //线颜色
                strokeOpacity: 1, //线透明度
                strokeWeight: 1, //线宽
                fillColor: fillColor, //填充色
                fillOpacity: 0.35, //填充透明度
            };
        });

        //绘制父区域
        districtExplorer.renderParentFeature(areaNode, {
            cursor: 'default',
            bubble: true,
            strokeColor: 'black', //线颜色
            strokeOpacity: 1, //线透明度
            strokeWeight: 1, //线宽
            fillColor: areaNode.getSubFeatures().length ? null : colors[0], //填充色
            fillOpacity: 0.35, //填充透明度
        });
    }

    //切换区域后刷新显示内容
    function refreshAreaNode(areaNode) {

        districtExplorer.setHoverFeature(null);

        renderAreaPolygons(areaNode);

        //更新选中节点的class
        var $nodeEles = $('#area-tree').find('h2');

        $nodeEles.removeClass('selected');

        var $selectedNode = $nodeEles.filter('h2[data-adcode=' + areaNode.getAdcode() + ']').addClass('selected');

        //展开下层节点
        $selectedNode.closest('li').removeClass('hide-sub');

        //折叠下层的子节点
        $selectedNode.siblings('ul.sublist').children().addClass('hide-sub');
    }

    //切换区域
    function switch2AreaNode(adcode, callback) {

        if (currentAreaNode && ('' + currentAreaNode.getAdcode() === '' + adcode)) {
            return;
        }

        loadAreaNode(adcode, function(error, areaNode) {

            if (error) {

                if (callback) {
                    callback(error);
                }

                return;
            }

            currentAreaNode = window.currentAreaNode = areaNode;

            //设置当前使用的定位用节点
            districtExplorer.setAreaNodesForLocating([currentAreaNode]);

            refreshAreaNode(areaNode);

            if (callback) {
                callback(null, areaNode);
            }
        });
    }

    //加载区域
    function loadAreaNode(adcode, callback) {

        districtExplorer.loadAreaNode(adcode, function(error, areaNode) {

            if (error) {

                if (callback) {
                    callback(error);
                }

                console.error(error);

                return;
            }

            renderAreaPanel(areaNode);

            if (callback) {
                callback(null, areaNode);
            }
        });
    }

    $('#area-tree').on('mouseenter mouseleave', 'h2[data-adcode]', function(e) {

        if (e.type === 'mouseleave') {
            districtExplorer.setHoverFeature(null);
            return;
        }

        var adcode = $(this).attr('data-adcode');

        districtExplorer.setHoverFeature(currentAreaNode.getSubFeatureByAdcode(adcode));
    });


    $('#area-tree').on('click', 'h2', function() {
        var adcode = $(this).attr('data-adcode');
        switch2AreaNode(adcode);
    });

    $('#area-tree').on('click', '.showHideBtn', function() {

        var $li = $(this).closest('li');

        $li.toggleClass('hide-sub');

        if (!$li.hasClass('hide-sub')) {

            //子节点列表被展开
            var $subList = $li.children('ul.sublist');

            //尚未加载
            if (!$subList.attr('data-loaded')) {

                $subList.attr('data-loaded', 'loading');

                $li.addClass('loading');

                //加载
                loadAreaNode($li.children('h2').attr('data-adcode'), function() {

                    $li.removeClass('loading');
                });
            }
        }
    });

    //全国
    switch2AreaNode(100000);
});
