package com.stack.api.dto;

import lombok.Data;
import lombok.ToString;

import java.util.List;

/**
 * @Author smy
 * @Date 2020/4/23
 */

@Data
@ToString
public class FactoryParam {
    private String title;
    private Integer id;
    private List<FactoryParam> children;
}
