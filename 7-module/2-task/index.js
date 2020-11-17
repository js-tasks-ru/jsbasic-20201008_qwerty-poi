import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.body = document.querySelector('body');

    this.modal = document.createElement('div');
    this.modal.classList.add('modal');
    this.modal.innerHTML = `
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>
    `;

    this.modalInner = document.createElement('div');
    this.modalInner.classList.add('modal__inner');
    this.modal.insertAdjacentElement('beforeend', this.modalInner);

    this.modalHeader = document.createElement('div');
    this.modalHeader.classList.add('modal__header');
    this.modalInner.insertAdjacentElement('beforeend', this.modalHeader);
    this.modalHeader.innerHTML = `
    <!--Кнопка закрытия модального окна-->
    <button type="button" class="modal__close">
      <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
    </button>
    `;

    this.modalTitle = document.createElement('h3');
    this.modalTitle.classList.add('modal__title');
    this.modalHeader.insertAdjacentElement('beforeend', this.modalTitle);

    this.modalBody = document.createElement('div');
    this.modalBody.classList.add('modal__body');
    this.modalInner.insertAdjacentElement('beforeend', this.modalBody);
    
    let buttonClose = this.modalHeader.querySelector('.modal__close');
    buttonClose.addEventListener('click', () => this.close());

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        this.close();
      }   
    });
  }

  open() {
    this.body.classList.add('is-modal-open');
    this.body.insertAdjacentElement('beforeend', this.modal);
  }

  setTitle(title) {
    this.modalTitle.innerHTML = title;
  }

  setBody(node) {
    this.modalBody.append(node);
  }

  close() {
    this.modal.remove();
    this.body.classList.remove('is-modal-open');
  }
}
