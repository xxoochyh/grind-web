package com.stack.api.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.ToString;

import java.util.Date;

/**
 * 2020-05-05 09:09
 *
 * @author luckyou
 */
@Data
@ToString
public class ExtraAccount {

    private Integer accountId;

    private String username;

    private String password;

    private String phone;

    private String email;

    private Byte status;

    private String note;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date createTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date updateTime;

    private String roleInfo;
}
