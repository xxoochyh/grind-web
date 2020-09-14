package com.stack.api.dto;

import lombok.Data;
import lombok.ToString;

/**
 * @Author smy
 * @Date 2020/4/20
 */

@ToString
@Data
public class GridParam {
    String name;
    String parentName;
    Integer level;
    String note;
}
