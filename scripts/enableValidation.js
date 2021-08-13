const currentValidationParameters = {
  formSelector: '.form',
  inputSelector: '.form__input',
  errorSelector: '.form__input-error',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
}

enableValidation(currentValidationParameters);
