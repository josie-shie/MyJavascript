// const money = new Vue({
//   el: '#money',
// })

//input
const money = document.getElementById('money')

//button
const tw = document.getElementById('tw')
const us = document.getElementById('us')

//h1
const moneyEX = document.getElementById('moneyEX')

tw.addEventListener('click', function () {
  //先運算好
  const finalResult = (Number(money.value) * 28.53).toFixed(0)

  /* 
  money.value 代表抓取輸入在money裡輸入的值
  NumberObject.toFixed(小數點後幾位數) 
  */

  //在顯示在網頁上
  moneyEX.innerText = '美金轉新台幣為: ' + finalResult
})

us.addEventListener('click', function () {
  //先運算好
  const finalResult = (Number(money.value) / 28.53).toFixed(0)

  //在顯示在網頁上
  moneyEX.innerText = '台幣轉美金為: ' + finalResult
})
