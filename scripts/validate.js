function showInputError(formElement, inputElement, validationParameters, errorMessage) {

  const errorElementSelector = `${validationParameters.errorSelector}[data-input-name='${inputElement.name}']`;
  const errorElement = formElement.querySelector(errorElementSelector);

  inputElement.classList.add(validationParameters.inputErrorClass);
  errorElement.classList.add(validationParameters.errorClass);
  errorElement.textContent = errorMessage;

}

function hideInputError(formElement, inputElement, validationParameters) {

  const errorElementSelector = `${validationParameters.errorSelector}[data-input-name='${inputElement.name}']`;
  const errorElement = formElement.querySelector(errorElementSelector);

  inputElement.classList.remove(validationParameters.inputErrorClass);
  errorElement.classList.remove(validationParameters.errorClass);
  errorElement.textContent = '';

}

function checkInputValidity(formElement, inputElement, validationParameters) {

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, validationParameters, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement, validationParameters);
  }

}

function hasInvalidInput(inputList) {
  return inputList.some(input => !input.validity.valid);
}

function toggleButtonState(buttonElement, inputList, validationParameters) {

  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationParameters.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(validationParameters.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }

}

function checkValidationOnOpenPopup(formElement, validationParameters) {

  const inputList     = Array.from(formElement.querySelectorAll(validationParameters.inputSelector));
  const buttonElement = formElement.querySelector(validationParameters.submitButtonSelector);

  inputList.forEach(inputElement => {
    hideInputError(formElement, inputElement, validationParameters);
  });

  toggleButtonState(buttonElement, inputList, validationParameters);

}

function setValidationOnInput(formElement, validationParameters) {

  const inputList     = Array.from(formElement.querySelectorAll(validationParameters.inputSelector));
  const buttonElement = formElement.querySelector(validationParameters.submitButtonSelector);

  //toggleButtonState(buttonElement, inputList, validationParameters);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validationParameters);
      toggleButtonState(buttonElement, inputList, validationParameters);
    });
  });

}

function enableValidation(validationParameters) {

  const formList = document.querySelectorAll(validationParameters.formSelector);
  formList.forEach((formElement) => {
    setValidationOnInput(formElement, validationParameters);
  })

}

