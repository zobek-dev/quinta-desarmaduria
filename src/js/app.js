import Alpine from 'alpinejs';
import Swiper, {Navigation, Pagination} from 'swiper';

window.Alpine = Alpine;
Alpine.start();

// Swipers HTMLNative components

class IconsCarousel extends HTMLElement{
  constructor(){
    super();
    this.carousel = this.querySelector('.garantia-carousel');
    this.pagination = this.querySelector('.swiper-pagination');

    this.swiper = new Swiper(this.carousel, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 8,
      breakpoints: {
        550: {
          slidesPerView: 2
        },
        750: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4
        }
      },
      pagination: {
        el: this.pagination,
        clickable: true
      }
      
    })
  }
}

customElements.define('icons-carousel', IconsCarousel)


// Auxiliar events

window.addEventListener('DOMContentLoaded',() => {
  window.addEventListener('click', (event) => {
    //Drawer Menu
    // console.log(event.target)
    // if(event.target.matches('.drawer-menu')) event.target.classList.toggle('active');
  })
})