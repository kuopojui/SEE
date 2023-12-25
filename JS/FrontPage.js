document.querySelector('#ToMembers').addEventListener('click',function(){
    window.scrollTo({
      top: 3250,
      behavior: 'smooth'
    });
})
document.querySelector('#ToTop').addEventListener('click',function(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
})
document.querySelector('#ToMap').addEventListener('click',function(){
    window.scrollTo({
      top: 1750,
      behavior: 'smooth'
    });
})
const content = document.getElementById('#txt1');
const loader = document.getElementById('loader');
window.addEventListener('scroll', function() {
  // ...
});
const scrollPosition = window.scrollY;
const windowHeight = window.innerHeight;
const contentPosition = content.offsetTop;
const contentHeight = content.clientHeight;
const contentInView = contentPosition - windowHeight + contentHeight;
if (scrollPosition > contentInView) {
  loader.classList.remove('txt1');
  // 在這裡可以加入顯示載入動畫的相關程式碼
} 