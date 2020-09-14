package com.stack.api.dto;


import com.stack.api.enums.ResponseCode;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.map.annotate.JsonSerialize;

import java.io.Serializable;

/**
 * 服务器端响应对象
 * 当返回字段为NULL时，忽略它
 * service -> controller
 *
 * @author luckyou
 * @date 2020/1/6
 */

@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class ServerResponse<T> implements Serializable {

    private int code;

    private String msg;

    private int count;

    private T data;

    private ServerResponse() {

    }

    private ServerResponse(int code) {
        this.code = code;
    }

    private ServerResponse(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    private ServerResponse(int code, String msg, T data, int count) {
        this.code = code;
        this.msg = msg;
        this.data = data;
        this.count = count;
    }

    /**
     * 注意泛型问题
     * @param code
     * @param data
     */
    private ServerResponse(int code, T data) {
        this.code = code;
        this.data = data;
    }

    /**
     * 序列化时忽略它
     * @return
     */
    @JsonIgnore
    public boolean isSuccess() {
        return this.code == ResponseCode.SUCCESS.getCode();
    }

    public int getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

    public T getData() {
        return data;
    }

    public int getCount() {
        return count;
    }

    /**
     * 创建一个只含成功状态码的Json返回给前端
     * @return
     */
    public static <T> ServerResponse<T> createBySuccess() {
        return new ServerResponse<>(ResponseCode.SUCCESS.getCode());
    }

    /**
     * 包含成功状态码和消息的Json
     * @param msg
     * @return
     */
    public static <T> ServerResponse<T> createBySuccessMsg(String msg) {
        return new ServerResponse<>(ResponseCode.SUCCESS.getCode(), msg);
    }

    /**
     * 包含成功状态码和数据的Json
     * @param data
     * @return
     */
    public static <T> ServerResponse<T> createBySuccess(T data) {
        return new ServerResponse<>(ResponseCode.SUCCESS.getCode(), data);
    }

    /**
     * 包含成功状态码、消息和数据的Json
     * @param msg
     * @param data
     * @return
     */
    public static <T> ServerResponse<T> createBySuccess(String msg, T data, int count) {
        return new ServerResponse<>(ResponseCode.SUCCESS.getCode(), msg, data, count);
    }

    /**
     * 返回一个包含只错误状态码的Json
     * @param <T>
     * @return
     */
    public static <T> ServerResponse<T> createByError() {
        return new ServerResponse<>(ResponseCode.ERROR.getCode(), ResponseCode.ERROR.getDesc());
    }

    /**
     * 返回错误数据
     * @param data
     * @param <T>
     * @return
     */
    public static <T> ServerResponse<T> createByError(T data) {
        return new ServerResponse<T>(ResponseCode.ERROR.getCode(), data);
    }


    /**
     * 返回包含错误状态码和消息的Json
     * @param msg
     * @param <T>
     * @return
     */
    public static <T> ServerResponse<T> createByErrorMsg(String msg) {
        return new ServerResponse<>(ResponseCode.ERROR.getCode(), msg);
    }

    /**
     * 出现用户未登录、非法参数等错误时，通过传递code参数直接返回给前端
     * @param code
     * @param msg
     * @param <T>
     * @return
     */
    public static <T> ServerResponse<T> createByError(int code, String msg) {
        return new ServerResponse<>(code, msg);
    }


}
