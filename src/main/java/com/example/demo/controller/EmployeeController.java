package com.example.demo.controller;

import com.example.demo.dao.DepartmentDao;
import com.example.demo.dao.EmployeeDao;
import com.example.demo.entities.Department;
import com.example.demo.entities.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.EscapedErrors;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@Controller
public class EmployeeController {
    @Autowired
    EmployeeDao employeeDao;

    @Autowired
    DepartmentDao departmentDao;

    //查询所有员工返回列表页面
    @GetMapping("/emps")
    public String list(Model model) {
        Collection<Employee> employees = employeeDao.getAll();

        //放在请求域中
        model.addAttribute("emps", employees);
        // thymeleaf默认就会拼串
        // classpath:/templates/xxxx.html
        return "emp/list";
    }

    //来到员工添加页面
    @GetMapping("/emp")
    public String toAddPage(Model model) {
        //查出部门列表并发送到页面显示
        Collection<Department> departments = departmentDao.getDepartments();
        model.addAttribute("depts", departments);
        return "emp/add";
    }

    //员工添加功能
    @PostMapping("/emp")
    public String addEmp(Employee employee) {
        //来到员工列表页面
        //保存员工
        employeeDao.save(employee);
        //redirect:表示重定向到一个地址，/代表当前项目路径
        //forward：表示转发到一个地址
        return "redirect:/emps";
    }

    //来到修改页面，查出当前员工，在页面显示
    @GetMapping("/emp/{id}")
    public String toEditPage(@PathVariable("id") Integer id, Model model) {
        Employee employee = employeeDao.get(id);
        model.addAttribute("emp", employee);

        //页面显示所有的部门列表
        Collection<Department> departments = departmentDao.getDepartments();
        model.addAttribute("depts", departments);

        //回到修改页面（add是一个修改添加二合一的页面）
        return "emp/add";
    }

    //员工修改,需要提交员工ID
    @PutMapping("/emp")
    public String updateEmployee(Employee employee) {
        System.out.println("修改的员工数据：" + employee);
        employeeDao.save(employee);
        return "redirect:/emps";
    }

    //员工删除
    @DeleteMapping("/emp/{id}")
    public String deleteEmployee(@PathVariable("id") Integer id) {
        employeeDao.delete(id);
        return "redirect:/emps";
    }

}
