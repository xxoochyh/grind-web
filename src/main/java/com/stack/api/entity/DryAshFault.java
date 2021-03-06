package com.stack.api.entity;

import java.util.Date;

public class DryAshFault {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_ash_fault.id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_ash_fault.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer deviceId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_ash_fault.ash_fault
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Byte ashFault;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_ash_fault.alarm
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Byte alarm;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_ash_fault.create_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Date createTime;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_ash_fault.id
     *
     * @return the value of dry_ash_fault.id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_ash_fault.id
     *
     * @param id the value for dry_ash_fault.id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_ash_fault.device_id
     *
     * @return the value of dry_ash_fault.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getDeviceId() {
        return deviceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_ash_fault.device_id
     *
     * @param deviceId the value for dry_ash_fault.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_ash_fault.ash_fault
     *
     * @return the value of dry_ash_fault.ash_fault
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Byte getAshFault() {
        return ashFault;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_ash_fault.ash_fault
     *
     * @param ashFault the value for dry_ash_fault.ash_fault
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setAshFault(Byte ashFault) {
        this.ashFault = ashFault;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_ash_fault.alarm
     *
     * @return the value of dry_ash_fault.alarm
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Byte getAlarm() {
        return alarm;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_ash_fault.alarm
     *
     * @param alarm the value for dry_ash_fault.alarm
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setAlarm(Byte alarm) {
        this.alarm = alarm;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_ash_fault.create_time
     *
     * @return the value of dry_ash_fault.create_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_ash_fault.create_time
     *
     * @param createTime the value for dry_ash_fault.create_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}