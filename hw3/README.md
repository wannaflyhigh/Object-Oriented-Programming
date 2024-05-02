# 作業三

## Question 1

### main.ts
```typescript

```
### Video.ts
```typescript

```

### Store.ts
```typescript

```

### Rental.ts
```typescript
```

### Customer.ts
```typescript
```

### helpers.ts
```typescript

```

## Question 2

### 1.UML class diagram
![Class Diagram](./classDiagram.png)

### 2.程式編譯與運行方法
```bash
cd hw3
ts-node .\src\main.ts
```

### 3.程式說明
本程式將模擬的過程所需的元素以4個物件來串接構成，分別是店面(Store)、顧客(Customer)、影片(Video)以及租借訂單(Rental)。透過4類物件的依賴關係建構整個過程，並使用顧客的兩個行為(租借和歸還)來主導租借訂單的建立以及影片的流向。

程式開始時，會隨機生成屬性不一樣的20個影片和10個顧客，作為店面運行的依據，然後便會開始進行為期35天的模擬。

每一天開始時，會從符合條件(即該顧客type所需最少租借數>=店內所剩影片數)的顧客中抽取，被抽中的顧客會到訪並實行租借行為，租借數量和時間則會依據顧客的type來亂數決定，進而成立Rental。然後重複這個過程，直到抽中當天不再有顧客到訪的情況。

當某個Rental租期到時，顧客會實行歸還行為，將持有的影片組交還店家。

模擬完畢後，會輸出模擬結果，可以看見所有租借訂單的詳細資訊。
