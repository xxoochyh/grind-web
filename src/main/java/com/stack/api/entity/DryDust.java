package com.stack.api.entity;

import java.util.Date;

public class DryDust {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_dust.id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_dust.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer deviceId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_dust.dry_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Short dryDust;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_dust.alarm
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Byte alarm;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_dust.create_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Date createTime;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_dust.id
     *
     * @return the value of dry_dust.id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_dust.id
     *
     * @param id the value for dry_dust.id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_dust.device_id
     *
     * @return the value of dry_dust.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getDeviceId() {
        return deviceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_dust.device_id
     *
     * @param deviceId the value for dry_dust.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_dust.dry_dust
     *
     * @return the value of dry_dust.dry_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Short getDryDust() {
        return dryDust;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_dust.dry_dust
     *
     * @param dryDust the value for dry_dust.dry_dust
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setDryDust(Short dryDust) {
        this.dryDust = dryDust;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_dust.alarm
     *
     * @return the value of dry_dust.alarm
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Byte getAlarm() {
        return alarm;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_dust.alarm
     *
     * @param alarm the value for dry_dust.alarm
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setAlarm(Byte alarm) {
        this.alarm = alarm;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_dust.create_time
     *
     * @return the value of dry_dust.create_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_dust.create_time
     *
     * @param createTime the value for dry_dust.create_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}