package com.stack.api.entity;

public class AccountRole {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_account_role.role_account_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer roleAccountId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_account_role.role_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer roleId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_account_role.account_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer accountId;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_account_role.role_account_id
     *
     * @return the value of sys_account_role.role_account_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getRoleAccountId() {
        return roleAccountId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_account_role.role_account_id
     *
     * @param roleAccountId the value for sys_account_role.role_account_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setRoleAccountId(Integer roleAccountId) {
        this.roleAccountId = roleAccountId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_account_role.role_id
     *
     * @return the value of sys_account_role.role_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getRoleId() {
        return roleId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_account_role.role_id
     *
     * @param roleId the value for sys_account_role.role_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_account_role.account_id
     *
     * @return the value of sys_account_role.account_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getAccountId() {
        return accountId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_account_role.account_id
     *
     * @param accountId the value for sys_account_role.account_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }
}