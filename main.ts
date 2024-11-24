/**
 * Custom math blocks
 */
//% color="#AA278D" weight=100 icon="\uf1ec" block="MathTools"
namespace mathTools {
    
    /**
     * 將數字顯示為小數點後兩位
     * @param num 數字值
     */
    //% block="將 $num 四捨五入至小數點後兩位"
    export function toTwoDecimalPlaces(num: number): number {
        return Math.round(num * 100) / 100;
    }
	
    /**
     * 將數字顯示為小數點後兩位
     * @param value 數字值
	 * @param k 位數
     */	
	//% block="將數值 %value 保留小數點後 %k 位數"
    export function toFixedDecimal(value: number, k: number): number {
        return Math.roundWithPrecision(value, k);
    }

	
}
