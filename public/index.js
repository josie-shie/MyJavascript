const count = document.getElementById('count')
//getElementById呼叫html裡面的id名稱
const add = document.getElementById('add')
const sub = document.getElementById('sub')

count.addEventListener('click', function () {
  /* addEventListener('觸發事件', 處理事件的函式名稱() {
        函示的內容     
}*/
  count.innerText = Number(count.innerText) + 1 //Number將函式從字串的資料類型轉為數字的資料類型 (html 瀏覽器 抓下來的資料類型都是字串)
})

add.addEventListener('click', function () {
  count.innerText = Number(count.innerText) + 1
})

sub.addEventListener('click', function () {
  count.innerText = +count.innerText - 1
})
