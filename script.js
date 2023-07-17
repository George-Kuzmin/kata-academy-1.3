// let swiper = new Swiper(".swiper", {
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     slidesPerView: 1.3,
// });

// let mql = window.matchMedia('(min-width: 767px)');
// // let sql = window.matchMedia('(max-width: 767px)');

// window.addEventListener('resize', () => {
//   if (mql.matches) {
//     swiper.destroy();
//     document.querySelector('.swiper-pagination').style.display = 'none';
//   } else {
//     let newSwiper = new Swiper(".swiper", {
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//         slidesPerView: 1.3,
//     })
//     newSwiper.init();
//     document.querySelector('.swiper-pagination').style.display = 'block';
//   }
// })


let swiper = null;

function initSwiper() {
  swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1.3,
  });
}

function destroySwiper() {
    swiper.destroy();
    swiper = null;
    document.querySelector('.swiper-pagination').style.display = 'none';
}

function handleSwiperChange() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    if (!swiper) {
      initSwiper();
      document.querySelector('.swiper-pagination').style.display = 'block';
    }
  } else {
    destroySwiper();
  }
}

// Инициализируем или уничтожаем Swiper при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  handleSwiperChange();
});

// Инициализируем или уничтожаем Swiper при изменении размера окна
window.addEventListener('resize', () => {
  handleSwiperChange();
});


const showMoreBtn = document.getElementById('showMore');
const items = document.querySelectorAll('.brands-list__item-style');

showMoreBtn.addEventListener('click', () => {
  items.forEach(item => {
    if (!item.classList.contains('visible')) {
        item.classList.toggle('hidden');
    }
    
  });

  if (showMoreBtn.innerText === 'Показать всё') {
    showMoreBtn.innerHTML = `
      <div id="showMore" style="margin-left: 0;" class="more-btn">
        <div class="more-btn__tics">
          <div class="tic"></div>
          <div class="tic"></div>
        </div>
        <span class="more-btn__text">Скрыть</span>
      </div>
    `;
  } else {
    showMoreBtn.innerHTML = `
      <div id="showMore" style="margin-left: 0;" class="more-btn">
        <div class="more-btn__tics">
          <div class="tic"></div>
          <div class="tic"></div>
        </div>
        <span class="more-btn__text">Показать всё</span>
      </div>
    `;
  }
  
});
