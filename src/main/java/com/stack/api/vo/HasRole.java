package com.stack.api.vo;

import lombok.Data;
import lombok.ToString;

/**
 * 2020-02-13 12:42
 *
 * @author luckyou
 */
@ToString
@Data
public class HasRole {

    private Integer roleId;

    private String roleName;

    private Boolean has;

}
