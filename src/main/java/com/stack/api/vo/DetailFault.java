package com.stack.api.vo;

import lombok.Data;

@Data
public class DetailFault {
    private Long confirmTime;
    private String confirmUser;
    private String platform;
    private String note;
}
