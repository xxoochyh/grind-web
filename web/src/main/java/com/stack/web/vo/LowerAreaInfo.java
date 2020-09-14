package com.stack.web.vo;


import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

@Data
@ToString
public class LowerAreaInfo implements Serializable {
    private int adcode;
    private String areaName;
    private int deviceAmount;
    private int factoryAmount;
    private int alarmAmount;
    private int faultAmount;
    public LowerAreaInfo(int adcode, String areaName, int deviceAmount, int factoryAmount, int alarmAmount, int faultAmount){
        this.adcode = adcode;
        this.areaName = areaName;
        this.deviceAmount = deviceAmount;
        this.factoryAmount = factoryAmount;
        this.alarmAmount = alarmAmount;
        this.faultAmount = faultAmount;
    }
}
