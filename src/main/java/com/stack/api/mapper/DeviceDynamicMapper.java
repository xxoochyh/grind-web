package com.stack.api.mapper;

import com.stack.api.entity.DeviceDynamic;
import com.stack.api.entity.DeviceDynamicExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface DeviceDynamicMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table device_dynamic
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    long countByExample(DeviceDynamicExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table device_dynamic
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByExample(DeviceDynamicExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table device_dynamic
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByPrimaryKey(Integer deviceId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table device_dynamic
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insert(DeviceDynamic record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table device_dynamic
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insertSelective(DeviceDynamic record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table device_dynamic
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    List<DeviceDynamic> selectByExample(DeviceDynamicExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table device_dynamic
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    DeviceDynamic selectByPrimaryKey(Integer deviceId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table device_dynamic
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExampleSelective(@Param("record") DeviceDynamic record, @Param("example") DeviceDynamicExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table device_dynamic
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExample(@Param("record") DeviceDynamic record, @Param("example") DeviceDynamicExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table device_dynamic
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKeySelective(DeviceDynamic record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table device_dynamic
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKey(DeviceDynamic record);
}