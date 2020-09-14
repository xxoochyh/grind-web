package com.stack.api.enums;

public enum AlarmTypeCode {

    DryAshFaultCode((byte)1,"卸灰器警报"),
    DryAshPressureCode((byte)2,"清灰气压探测器警报"),
    DryDustCode((byte)3,"干式除尘设备粉尘排放浓度探测器警报"),
    DrySmokeCode((byte)4,"烟感探测器警报"),
    DrySparkCode((byte)5,"火花探测器警报"),
    DryTemperatureCode((byte)6,"温度探测器警报"),
    DryWindPressureCode((byte)7,"风压差探测器警报"),
    WetDustCode((byte)8,"湿式除尘设备粉尘排放浓度探测器警报"),
    WetHydraulicPressureCode((byte)9,"水压压差探测器警报"),
    WetHydrogenCode((byte)10,"氢气浓度探测器警报"),
    WetInOutPressureCode((byte)11,"进出口压差探测器警报"),
    WetLiquidCode((byte)12,"进出口压差探测器警报");

    private Byte code;
    private String desc;

    AlarmTypeCode(byte code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public Byte getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static AlarmTypeCode getDescByCode(byte code) {
        for (AlarmTypeCode alarmTypeCode : AlarmTypeCode.values()) {
            if (alarmTypeCode.code == code) {
                return alarmTypeCode;
            }
        }
        return null;
    }
}
