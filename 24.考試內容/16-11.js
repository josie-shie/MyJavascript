//取得table
const dataTable = document.getElementById('dataTable')

const data = [
  { name: '張小花', tel: '02-29879998' },
  { name: '吳阿寶', tel: '02-29871172' },
  { name: '陳天才', tel: '02-29879991' },
]

const numbrtData = data.map((item) => Object.values(item)[1])
console.log(numbrtData)
const nametData = data.map((item) => Object.values(item)[0])
console.log()

// const data1 = data.splice(0, 1)
// console.log(data1)
// const data2 = data.splice(0, 1)
// console.log(data2)
// const data3 = data.splice(0, 1)
// console.log(data3)

console.log(numbrtData[0])
console.log(nametData[0])

let nameDisplay = ''
for (let i = 0; i < nametData.length; i++) {
  nameDisplay += `<th>${nametData[i]}</th>`
  console.log(nameDisplay)
}

dataTable.innerHTML = `<thead><tr>${nameDisplay}</tr></thead>`

let numberDisplay = ''
for (let j = 0; j < numbrtData.length; j++) {
  numberDisplay += `<th>${numbrtData[j]}</th>`
  console.log(numberDisplay)
}

dataTable.innerHTML = `<thead><tr><th>姓名(Name)</th>${nameDisplay}</tr></thead><tbody><tr><td>電話(Number)</td>${numberDisplay}</tr></tbody>`
