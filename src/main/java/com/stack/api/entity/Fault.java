package com.stack.api.entity;

import java.util.Date;

public class Fault {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column fault.fault_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer faultId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column fault.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer deviceId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column fault.factory_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer factoryId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column fault.grid_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Integer gridId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column fault.fault_type
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Byte faultType;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column fault.fault_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Date faultTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column fault.confirm_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Date confirmTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column fault.is_confirmed
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private Byte isConfirmed;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column fault.platform
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private String platform;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column fault.confirm_user
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private String confirmUser;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column fault.note
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    private String note;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column fault.fault_id
     *
     * @return the value of fault.fault_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getFaultId() {
        return faultId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column fault.fault_id
     *
     * @param faultId the value for fault.fault_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setFaultId(Integer faultId) {
        this.faultId = faultId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column fault.device_id
     *
     * @return the value of fault.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getDeviceId() {
        return deviceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column fault.device_id
     *
     * @param deviceId the value for fault.device_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column fault.factory_id
     *
     * @return the value of fault.factory_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getFactoryId() {
        return factoryId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column fault.factory_id
     *
     * @param factoryId the value for fault.factory_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setFactoryId(Integer factoryId) {
        this.factoryId = factoryId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column fault.grid_id
     *
     * @return the value of fault.grid_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Integer getGridId() {
        return gridId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column fault.grid_id
     *
     * @param gridId the value for fault.grid_id
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setGridId(Integer gridId) {
        this.gridId = gridId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column fault.fault_type
     *
     * @return the value of fault.fault_type
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Byte getFaultType() {
        return faultType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column fault.fault_type
     *
     * @param faultType the value for fault.fault_type
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setFaultType(Byte faultType) {
        this.faultType = faultType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column fault.fault_time
     *
     * @return the value of fault.fault_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Date getFaultTime() {
        return faultTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column fault.fault_time
     *
     * @param faultTime the value for fault.fault_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setFaultTime(Date faultTime) {
        this.faultTime = faultTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column fault.confirm_time
     *
     * @return the value of fault.confirm_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Date getConfirmTime() {
        return confirmTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column fault.confirm_time
     *
     * @param confirmTime the value for fault.confirm_time
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setConfirmTime(Date confirmTime) {
        this.confirmTime = confirmTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column fault.is_confirmed
     *
     * @return the value of fault.is_confirmed
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public Byte getIsConfirmed() {
        return isConfirmed;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column fault.is_confirmed
     *
     * @param isConfirmed the value for fault.is_confirmed
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setIsConfirmed(Byte isConfirmed) {
        this.isConfirmed = isConfirmed;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column fault.platform
     *
     * @return the value of fault.platform
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public String getPlatform() {
        return platform;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column fault.platform
     *
     * @param platform the value for fault.platform
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setPlatform(String platform) {
        this.platform = platform == null ? null : platform.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column fault.confirm_user
     *
     * @return the value of fault.confirm_user
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public String getConfirmUser() {
        return confirmUser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column fault.confirm_user
     *
     * @param confirmUser the value for fault.confirm_user
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setConfirmUser(String confirmUser) {
        this.confirmUser = confirmUser == null ? null : confirmUser.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column fault.note
     *
     * @return the value of fault.note
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public String getNote() {
        return note;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column fault.note
     *
     * @param note the value for fault.note
     *
     * @mbg.generated Thu Aug 20 10:58:15 CST 2020
     */
    public void setNote(String note) {
        this.note = note == null ? null : note.trim();
    }
}