package com.stack.web.vo;


import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

@Data
@ToString
public class AlarmDangerDevice implements Serializable{
    private String deviceSerial;
    private String deviceInArea;
    private String deviceInFactory;
    private int  alarmAmount;

    public AlarmDangerDevice(String deviceSerial, String deviceInArea, String deviceInFactory, int alarmAmount) {
        this.deviceSerial = deviceSerial;
        this.deviceInArea = deviceInArea;
        this.deviceInFactory = deviceInFactory;
        this.alarmAmount = alarmAmount;
    }
}
