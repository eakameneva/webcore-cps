
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

const showButton = document.querySelector('.show-button');
const extraItems = document.querySelector('.extra-items')
const hideButton = document.querySelector('.hide-button')

function toggle() {
  extraItems.classList.toggle('hidden')
  hideButton.classList.toggle('hidden')
  showButton.classList.toggle('hidden')
  }

showButton.onclick = toggle
  
hideButton.onclick = toggle


