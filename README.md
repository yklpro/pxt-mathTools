# MathTools 擴充套件

此擴充提供 `將數值四捨五入至小數點後兩位` 的積木，方便在 micro:bit 中使用簡單的四捨五入功能。

## 積木

### 將數值四捨五入至小數點後兩位
此積木將輸入的數值四捨五入到小數點後兩位。

## 使用方法
1. 引入 `MathTools` 擴充套件。
2. 使用「將數值四捨五入至小數點後兩位」積木進行數值處理。

### 代碼範例
```typescript
let roundedValue = mathTools.toTwoDecimalPlaces(3.14159);
basic.showNumber(roundedValue);
