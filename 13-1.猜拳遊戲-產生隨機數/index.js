// 獲取元件介面物件
// icon
const scissors = document.getElementById('scissors')
const paper = document.getElementById('paper')
const rock = document.getElementById('rock')

// h3
const user = document.getElementById('user')
const computer = document.getElementById('computer')
const result = document.getElementById('result')

//假設 剪刀=1 石頭=2 布=3
//宣告一個陣列 判定出拳的值
const title = ['剪刀', '石頭', '布']

scissors.addEventListener('click', function () {
  //1.決定兩方出什麼拳(數字)
  //電腦隨機出拳(1-3的數字)
  const computerNumber = Math.floor(Math.random() * 3) + 1
  //產生隨機數的語法 Math.floor(Math.random() * (max - min + 1)) + min

  //目前使用者的拳剪刀(1)
  const userNumber = 1

  //呈現出什麼拳
  user.innerHTML = '你出了' + title[userNumber - 1]
  computerNumber.innerHTML = '電腦出了' + title[computerNumber - 1]
})
