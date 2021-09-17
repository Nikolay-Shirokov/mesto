export default class Popup {

  constructor(selector) {
    this._element = document.querySelector(selector);
  }

  open() {
    this._element.classList.add('popup_opened');
    document.addEventListener('keydown', this._hidePopupOnEscButton);
  }

  close() {
    this._element.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._hidePopupOnEscButton);
  }

  _hidePopupOnEscButton(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._element.addEventListener('click', (event) => {
      if (!(event.target === this._element || event.target.classList.contains('popup__close'))) {
        return;
      };
      this.close();
    });
  }

}
