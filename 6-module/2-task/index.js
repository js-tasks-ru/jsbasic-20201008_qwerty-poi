import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;
    
    this.elem = document.createElement('div');
    this.elem.classList.add('card');

    this.elem.innerHTML = `
    <div class="card__top">
        <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
        <span class="card__price">€${this.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    `;

    let button = this.elem.querySelector('.card__button');
    button.addEventListener('click', () => this.onClickCardButton());
  }

  onClickCardButton() {
    const customEvent = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: this.id, // Уникальный идентификатора товара из объекта товара
      bubbles: true, // это событие всплывает - это понадобится в дальнейшем
    });
    this.elem.dispatchEvent(customEvent);
  }
}

