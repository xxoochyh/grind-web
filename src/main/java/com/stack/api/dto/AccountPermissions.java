package com.stack.api.dto;

import com.stack.api.entity.Account;
import com.stack.api.entity.Role;
import lombok.Data;
import lombok.ToString;

/**
 * 2019-06-17 16:03
 *
 * @author wanhdd
 */

@Data
@ToString
public class AccountPermissions {

    private Account account;

    private Role role;

    private String permissionName;
}
