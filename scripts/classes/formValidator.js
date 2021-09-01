export class FormValidator {
  constructor(formElement, validationParameters) {
    this.formElement          = formElement;
    this.validationParameters = validationParameters;
  }

  _showInputError(inputElement, errorMessage) {

    const errorElementSelector  = `${this.validationParameters.errorSelector}[data-input-name='${inputElement.name}']`;
    const errorElement          = this.formElement.querySelector(errorElementSelector);

    inputElement.classList.add(this.validationParameters.inputErrorClass);
    errorElement.classList.add(this.validationParameters.errorClass);
    errorElement.textContent = errorMessage;

  }

  _hideInputError(inputElement) {

    const errorElementSelector = `${this.validationParameters.errorSelector}[data-input-name='${inputElement.name}']`;
    const errorElement =          this.formElement.querySelector(errorElementSelector);

    inputElement.classList.remove(this.validationParameters.inputErrorClass);
    errorElement.classList.remove(this.validationParameters.errorClass);
    errorElement.textContent = '';

  }

  _checkInputValidity(inputElement) {

    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }

  }

  _hasInvalidInput(inputList) {
    return inputList.some(input => !input.validity.valid);
  }

  _toggleButtonState(buttonElement, inputList) {

    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this.validationParameters.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this.validationParameters.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }

  }

  checkValidationOnOpenPopup() {

    const inputList     = Array.from(this.formElement.querySelectorAll(this.validationParameters.inputSelector));
    const buttonElement = this.formElement.querySelector(this.validationParameters.submitButtonSelector);

    inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
    });

    this._toggleButtonState(buttonElement, inputList);

  }

  _setValidationOnInput() {

    const inputList     = Array.from(this.formElement.querySelectorAll(this.validationParameters.inputSelector));
    const buttonElement = this.formElement.querySelector(this.validationParameters.submitButtonSelector);

    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(buttonElement, inputList);
      });
    });

  }

  enableValidation() {
    this._setValidationOnInput();
  }

}
