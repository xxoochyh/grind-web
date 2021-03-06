package com.stack.api.entity;

import java.util.Date;

public class WetHydraulicPressure {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column wet_hydraulic_pressure.id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column wet_hydraulic_pressure.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer deviceId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column wet_hydraulic_pressure.hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Short hydraulicPressure;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column wet_hydraulic_pressure.alarm
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Byte alarm;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column wet_hydraulic_pressure.create_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Date createTime;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column wet_hydraulic_pressure.id
     *
     * @return the value of wet_hydraulic_pressure.id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column wet_hydraulic_pressure.id
     *
     * @param id the value for wet_hydraulic_pressure.id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column wet_hydraulic_pressure.device_id
     *
     * @return the value of wet_hydraulic_pressure.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getDeviceId() {
        return deviceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column wet_hydraulic_pressure.device_id
     *
     * @param deviceId the value for wet_hydraulic_pressure.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column wet_hydraulic_pressure.hydraulic_pressure
     *
     * @return the value of wet_hydraulic_pressure.hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Short getHydraulicPressure() {
        return hydraulicPressure;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column wet_hydraulic_pressure.hydraulic_pressure
     *
     * @param hydraulicPressure the value for wet_hydraulic_pressure.hydraulic_pressure
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setHydraulicPressure(Short hydraulicPressure) {
        this.hydraulicPressure = hydraulicPressure;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column wet_hydraulic_pressure.alarm
     *
     * @return the value of wet_hydraulic_pressure.alarm
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Byte getAlarm() {
        return alarm;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column wet_hydraulic_pressure.alarm
     *
     * @param alarm the value for wet_hydraulic_pressure.alarm
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setAlarm(Byte alarm) {
        this.alarm = alarm;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column wet_hydraulic_pressure.create_time
     *
     * @return the value of wet_hydraulic_pressure.create_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column wet_hydraulic_pressure.create_time
     *
     * @param createTime the value for wet_hydraulic_pressure.create_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}