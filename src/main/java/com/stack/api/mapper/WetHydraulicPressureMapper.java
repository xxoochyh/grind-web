package com.stack.api.mapper;

import com.stack.api.entity.WetHydraulicPressure;
import com.stack.api.entity.WetHydraulicPressureExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface WetHydraulicPressureMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    long countByExample(WetHydraulicPressureExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByExample(WetHydraulicPressureExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insert(WetHydraulicPressure record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insertSelective(WetHydraulicPressure record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    List<WetHydraulicPressure> selectByExample(WetHydraulicPressureExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    WetHydraulicPressure selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExampleSelective(@Param("record") WetHydraulicPressure record, @Param("example") WetHydraulicPressureExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExample(@Param("record") WetHydraulicPressure record, @Param("example") WetHydraulicPressureExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKeySelective(WetHydraulicPressure record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKey(WetHydraulicPressure record);
}