export default class FormValidator {
  constructor(formElement, validationParameters) {
    this._formElement          = formElement;
    this._validationParameters = validationParameters;
    this._inputList            = Array.from(formElement.querySelectorAll(validationParameters.inputSelector));
    this._buttonElement        = formElement.querySelector(validationParameters.submitButtonSelector)
  }

  _showInputError(inputElement, errorMessage) {

    const errorElementSelector  = `${this._validationParameters.errorSelector}[data-input-name='${inputElement.name}']`;
    const errorElement          = this._formElement.querySelector(errorElementSelector);

    inputElement.classList.add(this._validationParameters.inputErrorClass);
    errorElement.classList.add(this._validationParameters.errorClass);
    errorElement.textContent = errorMessage;

  }

  _hideInputError(inputElement) {

    const errorElementSelector  = `${this._validationParameters.errorSelector}[data-input-name='${inputElement.name}']`;
    const errorElement          = this._formElement.querySelector(errorElementSelector);

    inputElement.classList.remove(this._validationParameters.inputErrorClass);
    errorElement.classList.remove(this._validationParameters.errorClass);
    errorElement.textContent = '';

  }

  _checkInputValidity(inputElement) {

    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }

  }

  _hasInvalidInput() {
    return this._inputList.some(input => !input.validity.valid);
  }

  _toggleButtonState() {

    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._validationParameters.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._validationParameters.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }

  }

  checkValidationOnOpenPopup() {

    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
    });

    this._toggleButtonState();

  }

  _setValidationOnInput() {

    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

  }

  enableValidation() {
    this._setValidationOnInput();
  }

}
