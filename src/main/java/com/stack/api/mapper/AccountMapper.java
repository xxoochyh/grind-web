package com.stack.api.mapper;

import com.stack.api.entity.Account;
import com.stack.api.entity.AccountExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface AccountMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table account
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    long countByExample(AccountExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table account
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByExample(AccountExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table account
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int deleteByPrimaryKey(Integer accountId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table account
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insert(Account record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table account
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int insertSelective(Account record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table account
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    List<Account> selectByExample(AccountExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table account
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    Account selectByPrimaryKey(Integer accountId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table account
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExampleSelective(@Param("record") Account record, @Param("example") AccountExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table account
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByExample(@Param("record") Account record, @Param("example") AccountExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table account
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKeySelective(Account record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table account
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    int updateByPrimaryKey(Account record);
}