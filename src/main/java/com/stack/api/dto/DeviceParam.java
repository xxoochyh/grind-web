package com.stack.api.dto;

import lombok.Data;
import lombok.ToString;

/**
 * @Author smy
 * @Date 2020/4/4
 */
@Data
@ToString
public class DeviceParam {

    private Integer deviceId;

    private String serial;

    private Byte type;

    private String model;

    private String address;

    private Integer factoryId;
}
