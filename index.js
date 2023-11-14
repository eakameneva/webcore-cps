
// swiper

let init = false;
let swiper;
function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: "auto",
    observer: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);



// js expand buttons

const buttonExpand = document.querySelector('.button-expand');
const servicesList = document.querySelector('.services-list');

function toggle() {
 if (buttonExpand.classList.contains('show-button')) {
  buttonExpand.classList.remove('show-button') 
  buttonExpand.textContent = 'Скрыть'
  servicesList.classList.remove('hide-items')
  buttonExpand.classList.add('hide-button')

 }
 else { 
  buttonExpand.classList.add('show-button') 
  buttonExpand.textContent = 'Показать все'
  servicesList.classList.add('hide-items')
  buttonExpand.classList.remove('hide-button')
 }
  }

buttonExpand.onclick = toggle

