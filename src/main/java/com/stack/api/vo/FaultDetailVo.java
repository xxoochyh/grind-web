package com.stack.api.vo;

import lombok.Data;
import lombok.ToString;

import java.text.SimpleDateFormat;
import java.util.Date;

@Data
@ToString
public class FaultDetailVo {

    private Integer faultId;


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


    private Byte faultType;

    //故障详情
    private String faultTypeDesc;


    private String faultTime;


    private String confirmTime;


    private Byte isConfirmed;


    private String platform;


    private String confirmUser;


    private String note;

    public static String convertTime(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(date);
    }

}
