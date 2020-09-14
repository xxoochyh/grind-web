package com.example.demo.mapper;

import com.example.demo.entities.Department;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.*;

@Mapper
public interface DepartmentMapper {
    @Select("select * from table_name where id=#{id}")
    public Department getDepartmentById(Integer id);

    @Delete("delete from department_table where department_id=#{id}")
    public int deleteDepartmentById(Integer id);

    @Options(useGeneratedKeys = true, keyProperty = "id")
    @Insert("insert into department_table (department_name values (#{departmentName})")
    public Department addDepartment(Department department);

    @Update("update department_table set department_name=#{departmentName} where department_id=#{id}")
    public int updateDepartment(Department department);
}
