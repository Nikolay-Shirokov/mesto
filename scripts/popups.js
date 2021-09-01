import { prependPlace } from "./render-places.js";
import { FormValidator } from "./classes/formValidator.js";

// Инициализация переменных
const buttonProfileEdit = document.querySelector('.profile__edit');
const buttonAddPlace    = document.querySelector('.profile__add-place');

//Поля профиля
const fieldName     = document.querySelector('.profile__name');
const fieldPosition = document.querySelector('.profile__position');

// Модальное окно превью картинки
const popupPicture  = document.querySelector('#popup-picture');
const figureElement = popupPicture.querySelector('.figure');
const figureImage   = figureElement.querySelector('.figure__image');
const figureCaption = figureElement.querySelector('.figure__caption');

//Модальное окно редактирования профиля
const popupEditProfile  = document.querySelector('#popup-edit-profile');
const formEditProfile   = document.forms['form-edit-profile'];
const inputName         = formEditProfile.elements.name;
const inputPosition     = formEditProfile.elements.position;

//Модальное окно добавления карточки места
const popupAddPlace   = document.querySelector('#popup-add-place');
const formAddPlace    = document.forms['form-add-place'];
const inputPlaceName  = formAddPlace.elements.name;
const inputPlaceLink  = formAddPlace.elements.link;

const validationParameters = {
  formSelector: '.form',
  inputSelector: '.form__input',
  errorSelector: '.form__input-error',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
}

let openedPopup;

// Функции

function showPopup(popup) {

  popup.classList.add('popup_opened');
  document.addEventListener('keydown', hidePopupOnEscButton);
  openedPopup = popup;

}

function hidePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', hidePopupOnEscButton);
}

function hidePopupOnEscButton(event) {
  //const popup = document.querySelector('.popup_opened');
  const popup = openedPopup;
  if (event.key === 'Escape') {
    hidePopup(popup);
  }
}

function showPicture(figureObject) {

  figureImage.setAttribute('src', figureObject.link);
  figureImage.setAttribute('alt', figureObject.name);
  figureCaption.textContent = figureObject.name;

  showPopup(popupPicture);

}

function showFormEditProfile() {

  inputName.value = fieldName.textContent;
  inputPosition.value = fieldPosition.textContent;

  const formValidator = new FormValidator(formEditProfile, validationParameters);
  formValidator.checkValidationOnOpenPopup();

  showPopup(popupEditProfile);

}

function showFormAddPlace() {

  formAddPlace.reset();

  const formValidator = new FormValidator(formAddPlace, validationParameters);
  formValidator.checkValidationOnOpenPopup();

  showPopup(popupAddPlace);

}

function onSubmitFormEditProfile(event) {

  event.preventDefault();

  fieldName.textContent = inputName.value;
  fieldPosition.textContent = inputPosition.value;

  hidePopup(popupEditProfile);

}

function onSubmitFormAddPlace(event) {

  event.preventDefault();

  const place = {
    name: inputPlaceName.value,
    link: inputPlaceLink.value
  };

  event.target.reset();

  prependPlace(place);
  hidePopup(popupAddPlace);

}

function addEventListenerOnShadowZoneAndCloseButtonClick() {

  const popups = document.querySelectorAll('.popup');

  popups.forEach(popup => {
    popup.addEventListener('click', (event) => {
      if (!(event.target === event.currentTarget || event.target.classList.contains('popup__close'))) {
        return;
      };
      hidePopup(popup);
    });
  });

}

function addEventListenerOnOpenPopupButtonClick() {

  buttonProfileEdit.addEventListener('click', showFormEditProfile);
  buttonAddPlace.addEventListener('click', showFormAddPlace);

}

function addEventListenerOnSubmitForms() {

  formEditProfile.addEventListener('submit', onSubmitFormEditProfile);
  formAddPlace.addEventListener('submit', onSubmitFormAddPlace);

}

function enableValidationForms() {
  const formList = document.querySelectorAll(validationParameters.formSelector);
  formList.forEach((formElement) => {
    const formValidator = new FormValidator(formElement, validationParameters);
    formValidator.enableValidation();
  })
}

// Обработчики событий
addEventListenerOnShadowZoneAndCloseButtonClick();
addEventListenerOnOpenPopupButtonClick();
addEventListenerOnSubmitForms();

enableValidationForms();

export {showPicture};
