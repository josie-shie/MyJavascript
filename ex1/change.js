const money = new Vue({
    el: '#money'
  });

const tw = document.getElementById('tw');
const us = document.getElementById('us');

tw.addEventListener('click',function(){
    money = +money / 28;
});

us.addEventListener('click',function(){
    money = +money * 28;
});