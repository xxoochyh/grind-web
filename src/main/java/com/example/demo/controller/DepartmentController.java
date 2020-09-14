package com.example.demo.controller;

import com.example.demo.entities.Department;
import com.example.demo.mapper.DepartmentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class DepartmentController {
    @Autowired
    private DepartmentMapper departmentMapper;


    @GetMapping("/depart/{id}")
    public Department getDepartmentById(@PathVariable("id") int id) {
        System.out.println(departmentMapper.getDepartmentById(id));
        return departmentMapper.getDepartmentById(id);
    }

    @GetMapping("/add/depart/{id}")
    public Department addDepartment(Department department) {
        departmentMapper.addDepartment(department);
        return department;
    }

    @GetMapping("/del/depart/{id}")
    public int deleteDepartment(@PathVariable int id) {
        return departmentMapper.deleteDepartmentById(id);
    }

    @GetMapping("/update/depart")
    public Department updateDepartment(Department department) {
        departmentMapper.updateDepartment(department);
        return department;
    }


}
