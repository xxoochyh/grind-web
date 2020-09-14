package com.stack.api.dto;

import lombok.Data;
import lombok.ToString;

/**
 * 2020-01-09 18:18
 *
 * @author luckyou
 */
@Data
@ToString
public class RoleParam {

    private Integer roleId;

    private String roleName;

    private Byte status;

    private String operator;

    private String note;

}
