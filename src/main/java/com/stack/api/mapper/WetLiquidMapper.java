package com.stack.api.mapper;

import com.stack.api.entity.WetLiquid;
import com.stack.api.entity.WetLiquidExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface WetLiquidMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_liquid
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    long countByExample(WetLiquidExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_liquid
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByExample(WetLiquidExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_liquid
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_liquid
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insert(WetLiquid record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_liquid
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insertSelective(WetLiquid record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_liquid
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    List<WetLiquid> selectByExample(WetLiquidExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_liquid
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    WetLiquid selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_liquid
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExampleSelective(@Param("record") WetLiquid record, @Param("example") WetLiquidExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_liquid
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExample(@Param("record") WetLiquid record, @Param("example") WetLiquidExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_liquid
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKeySelective(WetLiquid record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_liquid
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKey(WetLiquid record);
}