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

    if(this.carousel){
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
}

customElements.define('icons-carousel', IconsCarousel)

class DesarmeCarousel extends HTMLElement{
  constructor(){
    super();
    this.carousel = this.querySelector('.desarme-carousel');
    this.pagination = this.querySelector('.swiper-pagination');
    this.next = this.querySelector('.swiper-button-next');
    this.prev = this.querySelector('.swiper-button-prev');

    if(this.carousel){
      this.swiper = new Swiper(this.carousel, {
        modules: [Pagination, Navigation],
        slidesPerView: 1.3,
        spaceBetween: 8,
        breakpoints: {
          550: {
            slidesPerView: 2.3
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 32,
          }
        },
        navigation: {
          nextEl: this.next,
          prevEl: this.prev
        },
      })
    }  
  }
}
customElements.define('desarme-carousel', DesarmeCarousel)

class CategoryCarousel extends HTMLElement{
  constructor(){
    super();
    this.carousel = this.querySelector('.categorias-carrousel');

    if(this.carousel){
      this.swiper = new Swiper(this.carousel, {
        slidesPerView: 1.3,
        spaceBetween: 8,
        breakpoints: {
          550: {
            slidesPerView: 2.3,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 2.3,
            spaceBetween: 16,
          }
        }
      })
    }
  }
}

customElements.define('categorias-carousel', CategoryCarousel)

class ReviewsCarousel extends HTMLElement{
  constructor(){
    super();

    this.carousel = this.querySelector('.reviews-carousel');
    this.next = this.querySelector('.btn-next');
    this.prev = this.querySelector('.btn-prev');
    this.pagination = this.querySelector('.swiper-pagination')

    if(this.carousel){
      this.swiper = new Swiper(this.carousel, {
        modules:[Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
          550: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3
          }
        },
        navigation: {
          nextEl: this.next,
          prevEl: this.prev
        },
        pagination: {
          el: this.pagination,
          clickable: true
        }
      })
    }
  }
}

customElements.define('reviews-carousel',ReviewsCarousel);


class FeaturedProductsCarousel extends HTMLElement{
  constructor(){
    super();
    this.carousel = this.querySelector('.featured-carousel');

    if(this.carousel){
      this.swiper = new Swiper(this.carousel, {
        slidesPerView:1.3,
        spaceBetween: 8,
        breakpoints: {
          500: {
            slidesPerView:2.2,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView:4,
            spaceBetween: 16,
          }
        }
      })
    }
  }
}

customElements.define('featured-carousel', FeaturedProductsCarousel);

// Auxiliar events

window.addEventListener('DOMContentLoaded',() => {
  window.addEventListener('click', (event) => {
    //Drawer Menu
    // console.log(event.target)
    // if(event.target.matches('.drawer-menu')) event.target.classList.toggle('active');
  })
})