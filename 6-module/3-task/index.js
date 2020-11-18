import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');

    this.elem.innerHTML = `
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    `;

    let carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel__inner');
    this.elem.insertAdjacentElement('beforeend', carouselInner);
    
    for (let i = 0; i < this.slides.length; i++) {
      let slide = document.createElement('div');
      slide.classList.add('carousel__slide');
      slide.setAttribute('data-id', `${this.slides[i].id}`);
      slide.innerHTML = `
        <img src="/assets/images/carousel/${this.slides[i].image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${this.slides[i].price.toFixed(2)}</span>
          <div class="carousel__title">${this.slides[i].name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      `;
      carouselInner.insertAdjacentElement('beforeend', slide);   
    }

    let arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    let arrowRight = this.elem.querySelector('.carousel__arrow_right');
    let step = 0;
    let offset = 0;
  
    arrowLeft.style.display = 'none';
  
    this.elem.addEventListener('click', function(event) {
      let arrow = event.target;
      let carouselInnerWidth = carouselInner.offsetWidth;
  
      if (arrow.closest('.carousel__arrow_right')) { 
        step++;  
        offset = -carouselInnerWidth * step;
        carouselInner.style.transform = `translateX(${offset}px)`;
      } else if (arrow.closest('.carousel__arrow_left')) {
        step--;
        offset = -carouselInnerWidth * step;
        carouselInner.style.transform = `translateX(${offset}px)`;
      } else {
        return;
      }
  
      switch (step) {
        case 0:
          arrowLeft.style.display = 'none';
          break;
        case (carouselInner.children.length - 1):
          arrowRight.style.display = 'none';
          break;
        default:
          arrowLeft.style.display = ''
          arrowRight.style.display = ''
      }
    });

    carouselInner.addEventListener('click', (event) => {
      let target = event.target;
      if (!target.closest('.carousel__slide')) return;
      let carouselSlide = target.closest('.carousel__slide');
      let slideId = carouselSlide.dataset.id;
      this.onClickCarouselButton(slideId); 
    }); 
  }

  onClickCarouselButton(slideId) {
    const customEvent = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: slideId, // Уникальный идентификатора товара из объекта товара
      bubbles: true, // это событие всплывает - это понадобится в дальнейшем
    });
    this.elem.dispatchEvent(customEvent);
  }
}
