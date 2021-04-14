// csv檔內的內容

const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`

// table
const dataTable = document.getElementById('dataTable')

// 用換行符號(\n) 取得多行陣列
const rawDataArray = rawData.split('\n')

//將物件中多出來的引號取代成空白Object.replaceAll('"', '')
const headingArray = rawDataArray[0].replaceAll('"', '').split(',')

//使用for迴圈的語法
let headingDisplay = ''

for (let i = 0; i < headingArray.length; i++) {
  headingDisplay += `<th>${headingArray[i]}</th>`
}

dataTable.innerHTML = `<thead><tr>${headingDisplay}</tr></thead>`

//學生的表格

let bodyDisplay = ''

for (let i = 0; i < rawDataArray.length; i++) {
  let row = rawDataArray[i].replaceAll('"', '').split(',')
}
