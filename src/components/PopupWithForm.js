import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor(selector, { onSubmitForm, onOpen, onClose }) {
    super(selector);
    this._onSubmitForm  = onSubmitForm;
    this._onOpen        = onOpen;
    this._onClose       = onClose;
    this._formElement   = this._element.querySelector('.form');
    this._inputList     = this._formElement.querySelectorAll('.form__input');
    this._submitButton  = this._formElement.querySelector('.form__submit');
  }

  open() {

    if (this._onOpen) {
      this._onOpen();
    }

    if (this._formValidator) {
      this._formValidator.checkValidationOnOpenPopup();
    }

    super.open();
  }

  close() {

    if (this.onClose) {
      this.onClose();
    }

    this._formElement.reset();

    super.close();
  }

  getForm() {
    return this._formElement;
  }

  setFormValidator(formValidator) {
    this._formValidator = formValidator;
  }

  getInputValues() {

    const result = {};

    this._inputList.forEach(input => {
      result[input.name] = input.value;
    })

    return result;

  }

  setInputValues(values) {

    this._inputList.forEach(input => {
      if (input.name in values) {
        input.value = values[input.name];
      }
    })
/*     Object.keys(values).forEach(key => {
      const input = this._formElement.querySelector(`.form__input[name=${key}]`);
      input.value = values[key];
    }) */
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', event => {
      event.preventDefault();
      const buttonText = this._submitButton.textContent;
      this._submitButton.textContent = this._submitButton.dataset.waitingText;
      if (this._onSubmitForm) {
        this._onSubmitForm({
          callBackResolve: () => {
            this.close();
          },
          callBackFinally: () => {
            this._submitButton.textContent = buttonText;
          }
        });
      }
    })
  }

}
