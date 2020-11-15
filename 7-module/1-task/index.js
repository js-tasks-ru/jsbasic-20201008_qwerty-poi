import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.id = 
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');

    let ribbonInner = document.createElement('nav');
    ribbonInner.classList.add('ribbon__inner');
    this.elem.insertAdjacentElement('afterbegin', ribbonInner);

    for (let i = 0; i < categories.length; i++) {
      let menuItem = document.createElement('a');
      menuItem.href = '#';
      menuItem.classList.add('ribbon__item');
      if (i == 0) menuItem.classList.add('ribbon__item_active');
      menuItem.dataset.id = categories[i].id;
      menuItem.innerText = categories[i].name;
      
      ribbonInner.insertAdjacentElement('beforeend', menuItem);
    }

    let arrowLeft = document.createElement('div');
    arrowLeft.classList.add('ribbon__arrow', 'ribbon__arrow_left');
    this.elem.insertAdjacentElement('afterbegin', arrowLeft);

    let arrowRight = document.createElement('div');
    arrowRight.classList.add('ribbon__arrow', 'ribbon__arrow_right', 'ribbon__arrow_visible');
    this.elem.insertAdjacentElement('beforeend', arrowRight);

    this.elem.addEventListener('click', (event) => {
      let target = event.target;
      if (target.closest('.ribbon__arrow_left')) {
        ribbonInner.scrollBy(-350, 0);
        arrowRight.classList.add('ribbon__arrow_visible');
      } else if (target.closest('.ribbon__arrow_right')) {
        ribbonInner.scrollBy(350, 0);
        arrowLeft.classList.add('ribbon__arrow_visible');
      }
    });

    ribbonInner.addEventListener('scroll', () => {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft == 0 ) {
        arrowLeft.classList.remove('ribbon__arrow_visible');
      } else if (scrollRight < 1) {
        arrowRight.classList.remove('ribbon__arrow_visible');
      }
    });


    ribbonInner.addEventListener('click', (event) => {
      let target = event.target;
      event.preventDefault();

      let ribbonItems = this.elem.querySelectorAll('.ribbon__item');
      for (let item of ribbonItems) {
        if (item.classList.contains("ribbon__item_active")) {
          item.classList.remove('ribbon__item_active');
        }
      }

      target.classList.toggle("ribbon__item_active");      
    });

    this.elem.addEventListener('click', (event) => {
      let target = event.target;
      if (!target.closest('.ribbon__item')) return;
      let ribbonItem = target.closest('.ribbon__item');
      let categoryId = ribbonItem.dataset.id;

      this.onClickCardButton(categoryId);
    });
  }

  onClickCardButton(categoryId) {
    const customEvent = new CustomEvent('ribbon-select', { // имя события должно быть именно "product-add"
      detail: categoryId, // Уникальный идентификатора товара из объекта товара
      bubbles: true, // это событие всплывает - это понадобится в дальнейшем
    });
    this.elem.dispatchEvent(customEvent);
  }
}
