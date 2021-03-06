package com.stack.api.mapper;

import com.stack.api.entity.WetDust;
import com.stack.api.entity.WetDustExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface WetDustMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    long countByExample(WetDustExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByExample(WetDustExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insert(WetDust record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insertSelective(WetDust record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    List<WetDust> selectByExample(WetDustExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    WetDust selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExampleSelective(@Param("record") WetDust record, @Param("example") WetDustExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExample(@Param("record") WetDust record, @Param("example") WetDustExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKeySelective(WetDust record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table wet_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKey(WetDust record);
}