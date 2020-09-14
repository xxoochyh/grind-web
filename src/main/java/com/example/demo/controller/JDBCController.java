package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.sql.DataSource;
import java.sql.DriverManager;
import java.sql.SQLException;

@Controller
//@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
public class JDBCController {
    @Autowired
    DataSource dataSource;

    @GetMapping("/jdbc")
    @ResponseBody
    public String jdbc() throws SQLException {
        System.out.println(dataSource.getClass());
        System.out.println(dataSource.getConnection());
        return "success";
    }

    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping("/jdbc1")
    @ResponseBody
    public String jdbc1() throws SQLException {
        jdbcTemplate.update("insert into user (username, password) values (?,?)", "zs", "zs123");
        return "success";
    }
}
