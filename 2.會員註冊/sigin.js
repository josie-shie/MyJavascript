// 獲取元件介面物件
//message
const message = document.getElementById('message')

//input
const fullname = document.getElementById('fullname')
const address = document.getElementById('address')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//button
const register = document.getElementById('register')

register.addEventListener('click', function () {
  let error = ''

  // 檢查欄位是否有填寫
  // trim()為去除頭尾空白
  // if (fullname.value.trim() === '')
  if (!fullname.value.trim()) {
    error += ' 姓名沒填 '
  }

  if (!address.value.trim()) {
    error += ' 住址沒填 '
  }

  if (!username.value.trim()) {
    error += ' 帳號沒填 '
  }

  if (!password.value.trim()) {
    error += ' 密碼沒填 '
  }

  if (!password2.value.trim()) {
    error += ' 密碼確認沒填 '
  }

  if (password.value.length < 6) {
    error += ' 密碼至少要6位數 '
  }

  if (password.value !== password2.value) {
    error += ' 兩次輸入的密碼不同 '
  }

  // 呈現錯誤欄位訊息在message
  message.innerHTML = error ? error : '表單驗証通過'

  // if (error) {
  //   message.innerHTML = error
  // } else {
  //   message.innerHTML = '表單驗証通過'
  // }

  /*<form> //required要用form打包才可以顯示
      會員姓名: <input type="text" id="fullname" required /><small
        id="error-fullname"
        style="display: none"
        >姓名沒填</small
      >
    </form>*/
})
