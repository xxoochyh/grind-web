package com.stack.api.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.ToString;

import java.util.Date;

/**
 * 2020-04-14 20:14
 *
 * @author luckyou
 */
@Data
@ToString
public class SimpleDeviceDynamic {

    private Integer deviceId;

    private String serial;

    private Byte status;

    private Integer alarmUnconfirmedCount;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date lastAlarmTime;

    private Integer faultUnconfirmedCount;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date lastFaultTime;
}
