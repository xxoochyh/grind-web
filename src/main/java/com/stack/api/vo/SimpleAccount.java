package com.stack.api.vo;

import lombok.Data;
import lombok.ToString;

/**
 * @Author smy
 * @Date 2020/4/28
 */

@Data
@ToString
public class SimpleAccount {

    private Integer accountId;

    private String username;

    private String phone;

    private Boolean has;
}
