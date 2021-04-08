//input

const bodyheight = document.getElementById('bodyheight')
const bodyweight = document.getElementById('bodyweight')

//button
const calc = document.getElementById('calc')

//h1
const result = document.getElementById('result')

calc.addEventListener('click', function () {
  //先抓到數值
  
  const h = +bodyheight.value
  const w = +bodyweight.value

  //先運算
  const finalResult = w / Math.pow(h / 100, 2)

  //在顯示
  result.innerHTML = finalResult.toFixed(1)
})
