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


AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$', 'misc/MarkerList', 'overlay/SimpleMarker', 'overlay/SimpleInfoWindow'],
    function(DistrictExplorer, $, MarkerList, SimpleMarker, SimpleInfoWindow) {

    //即用jQuery/Zepto
    var $ = MarkerList.utils.$;

    var  defaultIconStyle = 'green', // 默认的图标样式
        alarmIconStyle = ["#ff0000","#fe6347","#FA8072","#DB7093",
            "#FF4500","#CD5C5C","#9c3912"], //报警图标样式
        faultIconStyle = 'yellow', //故障图标样式
        hoverIconStyle = 'purple' //鼠标hover时的样式
    ;

    var markerList = new MarkerList({
        


    });


    //创建一个实例
    var districtExplorer = window.districtExplorer = new DistrictExplorer({
        eventSupport: true, //打开事件支持
        map: map
    });

    //当前聚焦的区域
    var currentAreaNode = null;

    //鼠标hover提示内容
    var $tipMarkerContent = $('<div class="tipMarker top"></div>');

    var tipMarker = new AMap.Marker({
        content: $tipMarkerContent.get(0),
        offset: new AMap.Pixel(0, 0),
        bubble: true
    });

    //双击地图事件
    function showInfoDbClick(e){
        var text = '您在 [ '+e.lnglat.getLng()+','+e.lnglat.getLat()+' ] 的位置双击了地图！'
        document.querySelector("#areaInfo").innerText = text;
        console.log(e.lnglat.getLng());
        console.log(e.lnglat.getLat());
    }
    map.on('dblclick',showInfoDbClick);

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