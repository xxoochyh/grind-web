package com.stack.api.vo;

import lombok.Data;

@Data
public class SimpleFault {
    private Integer faultId;
    private Integer faultType;
    private Long faultTime;
    private Integer isConfirmed;

}
