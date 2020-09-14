package com.stack.api.dto;

import lombok.Data;
import lombok.ToString;

/**
 * @Author smy
 * @Date 2020/4/20
 */
@Data
@ToString
public class GridTreeNode {
    private Integer id;
    private Integer pid;
    private String name;
    private Byte level;
    //1: 工厂 2：网格
    private Integer type;
}
