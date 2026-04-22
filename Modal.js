export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.closeButton = this.modal.querySelector('.modal__close');

    this._initCloseButton();
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('modal-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('modal-showed');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  _initCloseButton() {
    this.closeButton.addEventListener('click', () => this.close());
  }
}
