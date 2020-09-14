package com.stack.api.vo;

import lombok.Data;
import lombok.ToString;

/**
 * 2020-05-06 09:11
 *
 * @author luckyou
 */
@Data
@ToString
public class SimplePermission {

    private Integer permissionId;

    private String permissionName;

    private String note;

    private String operator;

}
