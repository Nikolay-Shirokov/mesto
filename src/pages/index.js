import { initialCards, validationParameters } from "../utils/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";

import "./index.css";

// Инициализация модального окна открытия картинки
const popupPicture = new PopupWithImage('#popup-picture');
popupPicture.setEventListeners();

// Функция открытия модального окна с увеличенной картинкой карточки
function openPicture(...args) {
   popupPicture.open(...args);
}

// Функция получения разметки новой карточки
function renderPlace(place) {
  const card = new Card(place, '#place', openPicture);
  return card.createPlaceElement(place);
}

// Инициализация коллекции карточек
const places = new Section({ items: initialCards, renderer: renderPlace }, '.places');
places.renderItems(); // Отрисовка начальной коллекции карточек

// Инициализация профиля пользователя
const userInfo = new UserInfo({
  selectorUserName: '.profile__name',
  selectorUserPosition: '.profile__position'
});

// Обработчик отправки данных формы редактирования профиля
function onSubmitFormEditProfile(event) {
  userInfo.setUserInfo(this._getInputValues());
}

function initialValidationPopupForm(popup) {

  const formElement = popup.getForm();
  const formValidator = new FormValidator(formElement, validationParameters);
  formValidator.enableValidation();

  popup.setFormValidator(formValidator);

}

// Инициализация модального окна редактирования профиля
const popupEditProfile  = new PopupWithForm('#popup-edit-profile', {
  onSubmitForm: onSubmitFormEditProfile,
});
popupEditProfile.setEventListeners();
initialValidationPopupForm(popupEditProfile);

// Обработчик отправки данных формы добавления карточки
function onSubmitFormAddPlace(event) {

  const place        = this._getInputValues();
  places.addItem(place);

}

// Инициализация модального окна добавления карточки
const popupAddPlace  = new PopupWithForm('#popup-add-place', {
  onSubmitForm: onSubmitFormAddPlace,
});
popupAddPlace.setEventListeners();
initialValidationPopupForm(popupAddPlace);

// Кнопка открытия модального окна редактирования профиля
const buttonProfileEdit = document.querySelector('.profile__edit');
buttonProfileEdit.addEventListener('click', () => {

  popupEditProfile.setInputValues(userInfo.getUserInfo());
  popupEditProfile.open();

})

// Кнопка открытия модального окна добавления карточки
const buttonAddPlace    = document.querySelector('.profile__add-place');
buttonAddPlace.addEventListener('click', () => {

  popupAddPlace.open();

})