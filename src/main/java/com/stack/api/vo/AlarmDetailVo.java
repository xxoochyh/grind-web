package com.stack.api.vo;


import lombok.Data;
import lombok.ToString;

import java.text.SimpleDateFormat;
import java.util.Date;

@Data
@ToString
public class AlarmDetailVo {

    private Integer alarmId;


    private Integer deviceId;

    //警报所属设备序列号
    private String serial;

    //设备类型
    private Byte type;

    //设备类型
    private String typeName;

    //设备型号
    private String model;


    private Integer factoryId;


    private Integer gridId;

//所属设备发生警报的数据id
    private Integer dataId;

//所属设备发生警报时的传感器数据
    private Integer data;


    private Byte alarmType;


    //警报详情
    private String alarmTypeDesc;


    private String alarmTime;


    private String  confirmTime;


    private Byte isConfirmed;


    private String platform;


    private String confirmUser;


    private String note;


    public static String convertTime(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(date);
    }

}
