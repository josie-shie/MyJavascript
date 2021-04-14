const menuItems = document.getElementsByClassName('menu-item')

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('mouseenter', function (event) {
    event.target.childNodes[1].classList.add('enter')

    console.log('mouseenter', event.target.innerText)
  })

  menuItems[i].addEventListener('mouseleave', function (event) {
    event.target.childNodes[1].classList.remove('enter')
    //childNnodes[1]抓取他子層的第1個
    //classList.remove('classname')移除css效果
    console.log('mouseleave', event.target.innerText)
  })
}
