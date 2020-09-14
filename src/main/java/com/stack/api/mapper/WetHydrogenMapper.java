package com.stack.api.mapper;

import com.stack.api.entity.WetHydrogen;
import com.stack.api.entity.WetHydrogenExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface WetHydrogenMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydrogen
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    long countByExample(WetHydrogenExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydrogen
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByExample(WetHydrogenExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydrogen
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydrogen
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insert(WetHydrogen record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydrogen
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insertSelective(WetHydrogen record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydrogen
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    List<WetHydrogen> selectByExample(WetHydrogenExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydrogen
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    WetHydrogen selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydrogen
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExampleSelective(@Param("record") WetHydrogen record, @Param("example") WetHydrogenExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydrogen
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExample(@Param("record") WetHydrogen record, @Param("example") WetHydrogenExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydrogen
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKeySelective(WetHydrogen record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_hydrogen
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKey(WetHydrogen record);
}