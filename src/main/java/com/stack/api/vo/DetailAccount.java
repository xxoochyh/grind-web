package com.stack.api.vo;

import com.stack.api.entity.Account;
import lombok.Data;
import lombok.ToString;

import java.util.List;

/**
 * 2020-01-13 09:47
 *
 * @author luckyou
 */
@Data
@ToString
public class DetailAccount {

    private Account account;

    private List<HasRole> hasRoles;

}
