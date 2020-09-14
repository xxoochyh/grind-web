package com.stack.web.vo;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

@Data
@ToString
public class FactoryStaticInfo implements  Serializable{
    private int factoryId;
    private String factorySerial;
    private String factoryName;
    private double factoryLat;
    private double factoryLng;
    private int factoryFaultAmount;
    private int factoryAlarmAmount;
    private int factoryDeviceAmount;

    public FactoryStaticInfo(int factoryId, String factorySerial, String factoryName, double factoryLat, double factoryLng, int factoryFaultAmount, int factoryAlarmAmount, int factoryDeviceAmount) {
        this.factoryId = factoryId;
        this.factorySerial = factorySerial;
        this.factoryName = factoryName;
        this.factoryLat = factoryLat;
        this.factoryLng = factoryLng;
        this.factoryFaultAmount = factoryFaultAmount;
        this.factoryAlarmAmount = factoryAlarmAmount;
        this.factoryDeviceAmount = factoryDeviceAmount;
    }
}
