for (let i = 0; i < 100; i++) {
  // 跳出迴圈
  if (i + 1 === 50) break //離開迴圈
  // 跳過某數的以下執行
  if (i + 1 === 6) continue 
  //continue跳過下方的陳述式直接進行下一次迴圈
  // 奇偶數判斷
  if ((i + 1) % 2 === 0) console.log(i + 1)
}
