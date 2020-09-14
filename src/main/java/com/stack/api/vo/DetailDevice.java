package com.stack.api.vo;

import lombok.Data;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @Author smy
 * @Date 2020/4/25
 */
@Data
public class DetailDevice {
    private Integer deviceId;


    private String serial;


    private Byte type;

    private String model;


    private String province;


    private String city;


    private String district;

    private String address;


    private Integer gridId;


    private Integer factoryId;


    private String plantName;


    private String createTime;

    private String updateTime;

    public static String convertTime(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(date);
    }

}
