const aArray = [1, 2, 3, 4]
const newArray = aArray 
  .map((v) => v + 100)
  .map((v) => v * 2)
  .map((v) => v - 50)
   //之所以不會產生3個陣列式因為等號左邊全部運算完才會跑回等號右邊

//map會回傳一個新陣列 原陣列不會被修改
console.log(aArray) // [1, 2, 3, 4]
console.log(newArray) // 
