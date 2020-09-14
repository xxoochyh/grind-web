package com.stack.api.enums;

public enum FaultTypeCode {
    DischargingDeviceFault((byte) 0, "卸灰器故障"),
    SparkDetectorFault((byte) 1, "火花探测器故障"),
    SmokeDetectorFault((byte) 2, "烟感探测器故障"),
    DustConcentrationDetectorFault((byte) 3, "粉尘浓度探测器故障"),
    WaterPressureDetectorFault((byte) 4, "水压探测器故障"),
    WindPressureDetectorFault((byte) 5, "风压探测器故障");

    private Byte code;
    private String desc;


    FaultTypeCode(byte code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public Byte getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static FaultTypeCode getDescByFaultCode(byte code) {
        for (FaultTypeCode faultTypeCode : FaultTypeCode.values()) {
            if (faultTypeCode.code == code) {
                return faultTypeCode;
            }
        }
        return null;
    }
}

