const aObj = { a: 1, b: 'b', c: { p: [1, 2] } }

// 簡單的深拷貝
//深拷貝會把物件內的陣列(c:{p:[1,2]})一起拷貝過去
const aCopyObj = JSON.parse(JSON.stringify(aObj))

// 淺拷貝
const bCopyObj = Object.assign({}, aObj)
// 淺拷貝
const cCopyObj = { ...aObj }

//拷貝出來的物件為新的物件,更改原物件不會受影響
