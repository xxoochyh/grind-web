package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Arrays;
import java.util.Map;

@Controller
public class HelloController {

    @ResponseBody
    @RequestMapping("/hello")
    public String hello() {
        return "hello world";
    }


    @RequestMapping("/success")
    public String seccuss(Map<String, Object> map) {
        //classpath:/templates/success.html
        map.put("hello", "<h1>你好</h1>");
        map.put("users", Arrays.asList("张三", "李四", "王五"));
        return "success";
    }
}
