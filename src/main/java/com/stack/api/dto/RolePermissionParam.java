package com.stack.api.dto;

import lombok.Data;
import lombok.ToString;

/**
 * 2020-04-12 10:36
 *
 * @author luckyou
 */
@Data
@ToString
public class RolePermissionParam {

    private Integer roleId;

    private Integer permissionId;

    private String operator;

}
