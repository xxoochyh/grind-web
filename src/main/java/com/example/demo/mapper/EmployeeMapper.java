package com.example.demo.mapper;

import com.example.demo.entities.Employee;

public interface EmployeeMapper {
    public Employee getEmployeeById(Integer id);

    public int addEmployee(Employee employee);

}
