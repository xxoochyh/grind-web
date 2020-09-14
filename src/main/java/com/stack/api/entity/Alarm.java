package com.stack.api.entity;

import java.util.Date;

public class Alarm {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm.alarm_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer alarmId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer deviceId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm.factory_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer factoryId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm.grid_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer gridId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm.data_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer dataId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm.alarm_type
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Byte alarmType;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm.alarm_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Date alarmTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm.confirm_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Date confirmTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm.is_confirmed
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Byte isConfirmed;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm.platform
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private String platform;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm.confirm_user
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private String confirmUser;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm.note
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private String note;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm.alarm_id
     *
     * @return the value of alarm.alarm_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getAlarmId() {
        return alarmId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm.alarm_id
     *
     * @param alarmId the value for alarm.alarm_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setAlarmId(Integer alarmId) {
        this.alarmId = alarmId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm.device_id
     *
     * @return the value of alarm.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getDeviceId() {
        return deviceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm.device_id
     *
     * @param deviceId the value for alarm.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm.factory_id
     *
     * @return the value of alarm.factory_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getFactoryId() {
        return factoryId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm.factory_id
     *
     * @param factoryId the value for alarm.factory_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setFactoryId(Integer factoryId) {
        this.factoryId = factoryId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm.grid_id
     *
     * @return the value of alarm.grid_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getGridId() {
        return gridId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm.grid_id
     *
     * @param gridId the value for alarm.grid_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setGridId(Integer gridId) {
        this.gridId = gridId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm.data_id
     *
     * @return the value of alarm.data_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getDataId() {
        return dataId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm.data_id
     *
     * @param dataId the value for alarm.data_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setDataId(Integer dataId) {
        this.dataId = dataId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm.alarm_type
     *
     * @return the value of alarm.alarm_type
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Byte getAlarmType() {
        return alarmType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm.alarm_type
     *
     * @param alarmType the value for alarm.alarm_type
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setAlarmType(Byte alarmType) {
        this.alarmType = alarmType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm.alarm_time
     *
     * @return the value of alarm.alarm_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Date getAlarmTime() {
        return alarmTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm.alarm_time
     *
     * @param alarmTime the value for alarm.alarm_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setAlarmTime(Date alarmTime) {
        this.alarmTime = alarmTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm.confirm_time
     *
     * @return the value of alarm.confirm_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Date getConfirmTime() {
        return confirmTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm.confirm_time
     *
     * @param confirmTime the value for alarm.confirm_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setConfirmTime(Date confirmTime) {
        this.confirmTime = confirmTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm.is_confirmed
     *
     * @return the value of alarm.is_confirmed
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Byte getIsConfirmed() {
        return isConfirmed;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm.is_confirmed
     *
     * @param isConfirmed the value for alarm.is_confirmed
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setIsConfirmed(Byte isConfirmed) {
        this.isConfirmed = isConfirmed;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm.platform
     *
     * @return the value of alarm.platform
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public String getPlatform() {
        return platform;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm.platform
     *
     * @param platform the value for alarm.platform
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setPlatform(String platform) {
        this.platform = platform == null ? null : platform.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm.confirm_user
     *
     * @return the value of alarm.confirm_user
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public String getConfirmUser() {
        return confirmUser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm.confirm_user
     *
     * @param confirmUser the value for alarm.confirm_user
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setConfirmUser(String confirmUser) {
        this.confirmUser = confirmUser == null ? null : confirmUser.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm.note
     *
     * @return the value of alarm.note
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public String getNote() {
        return note;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm.note
     *
     * @param note the value for alarm.note
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setNote(String note) {
        this.note = note == null ? null : note.trim();
    }
}