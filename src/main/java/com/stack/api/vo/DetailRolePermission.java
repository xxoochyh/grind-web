package com.stack.api.vo;

import com.stack.api.entity.Permission;
import com.stack.api.entity.Role;
import lombok.Data;
import lombok.ToString;

import java.util.List;

/**
 * 2020-01-09 17:55
 *
 * @author luckyou
 */
@Data
@ToString
public class DetailRolePermission {

    /**
     * 角色信息
     */
    private Role role;

    /**
     * 当前角色的所有权限信息
     */
    private List<Permission> permissionList;

}
