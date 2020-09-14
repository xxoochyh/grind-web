package com.stack.api.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.ToString;

import java.util.Date;


@Data
@ToString
public class FaultVo {

    private Integer faultId;


    private Integer deviceId;

    //警报所属设备序列号
    private String serial;

    //设备类型
    private String typeName;

    //设备型号
    private String model;


    private Byte faultType;


    //故障详情
    private String faultTypeDesc;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date faultTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date confirmTime;


    private Byte isConfirmed;


    private String platform;


    private String confirmUser;


}
