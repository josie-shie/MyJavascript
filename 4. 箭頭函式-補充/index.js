cost addOutter1 = function(a, b)

function addOutter(a, b) {
  return function () {
    return a + b
  }
}

//用一個常數接住這個函式
const addOutter1 = function (a, b) {
  return function () {
    return a + b
  }
}
//=>(肥箭頭)代表回傳的值
const addOutter2 = (a, b) => () => a + b

funA () = x+1
funB () = {x+1}

/*
沒有{}的情況下會自動加return
*/ 
funA (1) //2
funA (2) //undefine
