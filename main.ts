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
}
