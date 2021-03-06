package com.stack.api.mapper;

import com.stack.api.entity.DrySpark;
import com.stack.api.entity.DrySparkExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface DrySparkMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dry_spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    long countByExample(DrySparkExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dry_spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByExample(DrySparkExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dry_spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dry_spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insert(DrySpark record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dry_spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insertSelective(DrySpark record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dry_spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    List<DrySpark> selectByExample(DrySparkExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dry_spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    DrySpark selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dry_spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExampleSelective(@Param("record") DrySpark record, @Param("example") DrySparkExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dry_spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExample(@Param("record") DrySpark record, @Param("example") DrySparkExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dry_spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKeySelective(DrySpark record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dry_spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKey(DrySpark record);
}