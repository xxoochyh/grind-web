package com.stack.api.enums;

/**
 * 2019-07-22 15:18
 *
 * @author wanhdd
 */
public enum ResponseCode {
    /**
     * 成功 错误 未登录 非法参数
     */
    SUCCESS(0, "success"),
    ERROR(1, "error"),
    NEED_LOGIN(3, "need_login"),
    ILLEGAL_ARGUMENT(4, "illegal_argument"),
    REPEAT(5, "repeat"),
    DEVICE_EXIST(6,"exist"),
    CHILD_GRID_EXIST(7,"exist");

    /**
     * 错误码
     */
    private final int code;

    /**
     * 错误类型
     */
    private final String desc;

    ResponseCode(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }
}
