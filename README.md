# MathTools 擴充套件

此擴充提供 `將數值四捨五入至小數點後 k 位` 的積木，方便在 micro:bit 中使用簡單的四捨五入功能。

## 積木

### 將數值四捨五入至小數點後兩位
此積木將輸入的數值四捨五入到小數點後兩位。

## 使用方法
1. 引入 `MathTools` 擴充套件。
2. 使用「將數值四捨五入至小數點後兩位」積木進行數值處理。

### 程式範例
```typescript
let roundedValue = mathTools.toTwoDecimalPlaces(3.14159);
basic.showNumber(roundedValue);


mathTools.toFixedDecimal(value: number, k: number): number

將數值保留小數點後 K 位數
語法：

```typescript
程式碼
mathTools.toFixedDecimal(value: number, k: number): number
說明： 將輸入數值 value 四捨五入至小數點後指定的 k 位數。

參數：

value：輸入數值（類型：number）
k：保留的小數位數（類型：number）
