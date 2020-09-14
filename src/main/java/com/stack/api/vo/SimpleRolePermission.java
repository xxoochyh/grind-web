package com.stack.api.vo;

import lombok.Data;
import lombok.ToString;

import java.util.List;

/**
 * 2020-01-08 17:05
 *
 * @author luckyou
 */
@Data
@ToString
public class SimpleRolePermission {

    private String roleName;

    private List<String> permissions;

    public SimpleRolePermission() {
    }

    public SimpleRolePermission(String roleName, List<String> permissions) {
        this.roleName = roleName;
        this.permissions = permissions;
    }
}
