const menuItems = document.getElementsByClassName('menu-item')

for (let i = 0; i < menuItems.length; i++) {  //menuItems.length的長度是為了寫程式的彈性 萬一業主臨時要加長陣列的<不需要修改太多行程式碼
  menuItems[i].addEventListener('mouseenter', function (event) {
    console.log(event.target.innerText)
    console.log(this.innerText)
  })
}
