package com.stack.api.dto;

import lombok.Data;
import lombok.ToString;

import javax.validation.constraints.NotEmpty;
import java.util.List;


/**
 * 2020-01-09 11:50
 *
 * @author luckyou
 */

@Data
@ToString
public class AccountParam {

    private List<Integer> roleIds;

    private Integer accountId;

    @NotEmpty(message = "用户名不能为空")
    private String username;

    @NotEmpty(message = "密码不能为空")
    private String password;

    @NotEmpty(message = "重复密码不能为空")
    private String repeatPassword;

    private String phone;

    private String email;

    private Byte status;

    private String note;

}
