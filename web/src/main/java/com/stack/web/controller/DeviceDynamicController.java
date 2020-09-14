package com.stack.web.controller;

import com.stack.web.vo.FactoryStaticInfo;
import com.stack.web.vo.LowerAreaInfo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping
public class DeviceDynamicController {

    @GetMapping("/test")
    public String createMap(Model model){
        LowerAreaInfo lowerAreaInfo1 = new LowerAreaInfo(110000,"北京市",100,10,10,10);
        LowerAreaInfo lowerAreaInfo2 = new LowerAreaInfo(610000,"陕西省",100,10,10,10);
        List<LowerAreaInfo> lowerAreaInfos = new ArrayList<>();
        lowerAreaInfos.add(lowerAreaInfo1);
        lowerAreaInfos.add(lowerAreaInfo2);
        model.addAttribute("lowerAreaInfo",lowerAreaInfos);

        FactoryStaticInfo factoryStaticInfo1 = new FactoryStaticInfo(1,"FAC000","工厂名称1", 108,33,10,10,10);
        FactoryStaticInfo factoryStaticInfo2 = new FactoryStaticInfo(2,"FAC001","工厂名称2",120,40,10,10,10);
        List<FactoryStaticInfo> factoryStaticInfo = new ArrayList<>();
        factoryStaticInfo.add(factoryStaticInfo1);
        factoryStaticInfo.add(factoryStaticInfo2);
        model.addAttribute("factoryStaticInfo",factoryStaticInfo);

        return "component/map";
    }

    @GetMapping("/AreaStaticInfo")
    public String getLowerAreaAlarmTrend(){
        return "component/AreaStaticInfo";
    }

//    @GetMapping("/factory")
//    public String createFactory(Model model){
//        FactoryStaticInfo factoryStaticInfo1 = new FactoryStaticInfo(1,"FAC000","工厂名称1",108,33,10,10,10);
//        FactoryStaticInfo factoryStaticInfo2 = new FactoryStaticInfo(2,"FAC001","工厂名称2",120,40,10,10,10);
//        List<FactoryStaticInfo> factoryStaticInfo = new ArrayList<>();
//        factoryStaticInfo.add(factoryStaticInfo1);
//        factoryStaticInfo.add(factoryStaticInfo2);
//        model.addAttribute("factoryStaticInfo",factoryStaticInfo);
//        return "component/test";
//    }



}
