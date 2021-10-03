import Popup from "./Popup.js";

export default class PopupWithAccept extends Popup {

  constructor(selector, { onSubmitForm }) {
    super(selector);
    this._onSubmitForm  = onSubmitForm;
    this._formElement   = this._element.querySelector('.form');
  }

  open(id, onSubmitFormAdditional) {
    this.id = id;
    this.onSubmitFormAdditional = onSubmitFormAdditional;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', event => {
      event.preventDefault();
      if (this._onSubmitForm) {
        this._onSubmitForm();
      }
    })
  }

}
