package com.stack.api.enums;

public enum DataTypeCode {
    DryAshFaultCode((byte)1,"dryAshFault"),
    DryAshPressureCode((byte)2,"dryAshPressure"),
    DryDustCode((byte)3,"dryDust"),
    DrySmokeCode((byte)4,"drySmoke"),
    DrySparkCode((byte)5,"drySpark"),
    DryTemperatureCode((byte)6,"dryTemperature"),
    DryWindPressureCode((byte)7,"dryWindPressure"),
    WetDustCode((byte)8,"wetDust"),
    WetHydraulicPressureCode((byte)9,"wetHydraulicPressure"),
    WetHydrogenCode((byte)10,"wetHydrogen"),
    WetInOutPressureCode((byte)11,"wetInOutPressure"),
    WetLiquidCode((byte)12,"wetLiquid");
    private final byte code;
    private String desc;
    //根据枚举类的code值获取枚举类
    public static DataTypeCode getDataTypeCodeByCode(byte code){
        for(DataTypeCode dataTypeCode: DataTypeCode.values()){
            if(dataTypeCode.code == code){
                return dataTypeCode;
            }
        }
        return  null;
    }
    DataTypeCode(byte code, String desc){
        this.code= code;
        this.desc = desc;
    }
    public byte getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }



}
