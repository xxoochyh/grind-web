package com.stack.api.entity;

import java.util.Date;

public class DrySpark {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_spark.id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_spark.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer deviceId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_spark.spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Short spark;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_spark.alarm
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Byte alarm;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dry_spark.create_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Date createTime;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_spark.id
     *
     * @return the value of dry_spark.id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_spark.id
     *
     * @param id the value for dry_spark.id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_spark.device_id
     *
     * @return the value of dry_spark.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getDeviceId() {
        return deviceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_spark.device_id
     *
     * @param deviceId the value for dry_spark.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_spark.spark
     *
     * @return the value of dry_spark.spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Short getSpark() {
        return spark;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_spark.spark
     *
     * @param spark the value for dry_spark.spark
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setSpark(Short spark) {
        this.spark = spark;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_spark.alarm
     *
     * @return the value of dry_spark.alarm
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Byte getAlarm() {
        return alarm;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_spark.alarm
     *
     * @param alarm the value for dry_spark.alarm
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setAlarm(Byte alarm) {
        this.alarm = alarm;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dry_spark.create_time
     *
     * @return the value of dry_spark.create_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dry_spark.create_time
     *
     * @param createTime the value for dry_spark.create_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}