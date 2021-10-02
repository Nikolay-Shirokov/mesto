import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor(selector, { onSubmitForm, onOpen, onClose }) {
    super(selector);
    this._onSubmitForm  = onSubmitForm;
    this._onOpen        = onOpen;
    this._onClose       = onClose;
    this._formElement   = this._element.querySelector('.form');
    // Мне показалось что сохранять список инпутов избыточно, элементов в форме не так много
    // и поиск не должен выполняться за большое количество операций
    // что это будет дешевле чем выделять память под хранение
    this._inputList     = this._formElement.querySelectorAll('.form__input');
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

  _getInputValues() {

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
      if (this._onSubmitForm) {
        this._onSubmitForm();
      }
      /* this.close(); */
    })
  }

}
