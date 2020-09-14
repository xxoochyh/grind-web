package com.stack.api.vo;

import lombok.Data;

@Data
public class DetailAlarm {
    private DynamicData dynamicData;
    private Long confirmTime;
    private String confirmUser;
    private String note;
    private Integer threshold;

}
