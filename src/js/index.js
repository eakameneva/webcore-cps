
// swiper

function initSwipers() {
  const swiperElements = document.querySelectorAll('.swiper'); // Get all swiper containers

  swiperElements.forEach((element) => {
    let init = false;
    let swiper;

    function swiperCard() {
      if (window.innerWidth < 768) {
        if (!init) {
          init = true;
          swiper = new Swiper(element, {
            direction: 'horizontal',
            loop: true,
            spaceBetween: 16,
            slidesPerView: 'auto',
            observer: true,
            pagination: {
              el: `.swiper-pagination`, // Use index to differentiate pagination elements
              clickable: true,
            },
          });
        }
      } else if (init) {
        swiper.destroy(false);
        init = false;
      }
    }

    swiperCard();
    window.addEventListener('resize', swiperCard);
  });
}

initSwipers();




// js expand and close buttons

// sidebar

const brandsButtonExpand = document.querySelector('.brands .button-expand');
const servicesButtonExpand = document.querySelector('.services .button-expand');
const brandsList = document.querySelector('.brands-list');
const servicesList = document.querySelector('.services-list');
const burgerButton = document.querySelector('.burger-button');
const sidebar = document.querySelector('.aside');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-button');

// modal

const modalFeedback = document.querySelector('.modal-feedback');
const chatButton = document.querySelector('.chat-button');
const feedbackFormCloseButton = document.querySelector('.feedback-form-close-button')
const callFormCloseButton = document.querySelector('.call-form-close-button')
const modalCall = document.querySelector('.modal-call');
const callButton = document.querySelector('.call-button');
const callButtonTablet = document.querySelector('.call-button-tablet');
const chatButtonTablet = document.querySelector('.chat-button-tablet');


// readmore
const readMoreText = document.querySelector('.main-content__description--tablet');
const readMoreTextFull = document.querySelector('.main-content__description--desktop');
const readMoreTextExtra = document.querySelector('.main-content__description--extra');
const readMoreButton = document.querySelector('.main-content__read-more');



function readMore() {
if(readMoreButton.classList.contains('show-button')) {
  readMoreText.classList.add('open-text')
  readMoreTextFull.classList.add('open-text')
  readMoreTextExtra.classList.add('open-text')
  readMoreButton.classList.remove('show-button')
  readMoreButton.classList.add('hide-button')
  readMoreButton.textContent ='Скрыть'


}
else { 
  readMoreText.classList.remove('open-text')
  readMoreTextFull.classList.remove('open-text')
  readMoreTextExtra.classList.remove('open-text')
 readMoreButton.classList.add('show-button') 
 readMoreButton.classList.remove('hide-button')
  readMoreButton.textContent = 'Читать далее'

 }
}




function brandsToggle() {
  if (brandsButtonExpand.classList.contains('show-button')) {
   brandsButtonExpand.classList.remove('show-button') 
   brandsButtonExpand.textContent = 'Скрыть'
   brandsList.classList.remove('hide-items')
   brandsButtonExpand.classList.add('hide-button')
 
  }
  else { 
   brandsButtonExpand.classList.add('show-button') 
   brandsButtonExpand.textContent = 'Показать все'
   brandsList.classList.add('hide-items')
   brandsButtonExpand.classList.remove('hide-button')
  }
   }
 
   function servicesToggle() {
     if (servicesButtonExpand.classList.contains('show-button')) {
       servicesButtonExpand.classList.remove('show-button') 
       servicesButtonExpand.textContent = 'Скрыть'
      servicesList.classList.remove('hide-items')
      servicesButtonExpand.classList.add('hide-button')
    
     }
     else { 
       servicesButtonExpand.classList.add('show-button') 
       servicesButtonExpand.textContent = 'Показать все'
      servicesList.classList.add('hide-items')
      servicesButtonExpand.classList.remove('hide-button')
     }
      }
 
 brandsButtonExpand.onclick = brandsToggle
 servicesButtonExpand.onclick = servicesToggle
 readMoreButton.onclick = readMore
 


burgerButton.addEventListener('click', function() {
sidebar.classList.toggle('open');
overlay.classList.toggle('open');
})

closeButton.addEventListener('click', function() {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
  })

  overlay.addEventListener('click', function() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    modalCall.classList.remove('open');
    modalFeedback.classList.remove('open');
    })


// modal

chatButton.addEventListener('click', function() {
  modalFeedback.classList.toggle('open');
  overlay.classList.add('open');
  })
  callButton.addEventListener('click', function() {
    modalCall.classList.toggle('open');
    overlay.classList.add('open');
    })

// tablet

    chatButtonTablet.addEventListener('click', function() {
      modalFeedback.classList.toggle('open');
      overlay.classList.toggle('open');
      })
      callButtonTablet.addEventListener('click', function() {
        modalCall.classList.toggle('open');
        overlay.classList.toggle('open');
        }) 


        // close

callFormCloseButton.addEventListener('click', function() {
  modalCall.classList.remove('open');
  overlay.classList.remove('open');
  sidebar.classList.remove('open');


    })
  feedbackFormCloseButton.addEventListener('click', function() {
  modalFeedback.classList.remove('open');
  overlay.classList.remove('open');
  sidebar.classList.remove('open');
    })


