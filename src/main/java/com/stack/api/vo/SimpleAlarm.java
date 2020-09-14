package com.stack.api.vo;

import lombok.Data;

@Data
public class SimpleAlarm {
    private Integer alarmId;
    private Integer alarmType;
    private Long alarmTime;
    private Integer isConfirmed;
}
