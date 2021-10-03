import { validationParameters } from "../utils/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithAccept from "../components/PopupWithAccept.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";

import "./index.css";

function handleError(err) {
  console.error(err);
}

// Инициализация АПИ
const server = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-28',
  headers: {
    authorization: '720b9ff8-fdb3-4425-b748-9e049f638fb6',
    'Content-Type': 'application/json'
  }
});

// Инициализация профиля пользователя
const userInfo = new UserInfo({
  selectorUserName: '.profile__name',
  selectorUserPosition: '.profile__position',
  selectorAvatar: '.profile__avatar'
});

// Инициализация модального окна открытия картинки
const popupPicture = new PopupWithImage('#popup-picture');
popupPicture.setEventListeners();

// Функция открытия модального окна с увеличенной картинкой карточки
function openPicture(...args) {
  popupPicture.open(...args);
}

// Инициализация модального окна подтверждения удаления
const popupAcceptDelete = new PopupWithAccept('#popup-accept', {
  //Обработчик подтверждения удаления карточки
  onSubmitForm: () => {
    server.deleteCard(popupAcceptDelete.id)
      .then(res => {
        popupAcceptDelete.onSubmitFormAdditional();
        popupAcceptDelete.close();
      })
      .catch(handleError);
  },
});
popupAcceptDelete.setEventListeners();

function deleteCard(...args) {
  popupAcceptDelete.open(...args);
}

function setStateLike(id, isLiked, callBack) {
  server.setStateLike(id, isLiked)
    .then(res => {
      callBack(res)
    })
    .catch(handleError);
}

// Функция получения разметки новой карточки
function renderPlace(place) {
  const card = new Card(place, '#place', userInfo.id, {
    handleCardClick: openPicture,
    handleDeleteCard: deleteCard,
    setStateLike: setStateLike
  });
  return card.createPlaceElement(place);
}

// Инициализация коллекции карточек
const places = new Section({ renderer: renderPlace }, '.places');

// Загрузка данных профиля с сервера
const promiseGetUserInfo = server.getUserInfo();
// Загрузка коллекции карточек с сервера
const promiseGetInitialCards = server.getInitialCards();
Promise.all([promiseGetUserInfo, promiseGetInitialCards])
  .then(([resultGetUserInfo, resultGetInitialCards]) => {
    userInfo.setUserInfo(resultGetUserInfo);
    places.renderItems(resultGetInitialCards); // Отрисовка начальной коллекции карточек
  })
  .catch(handleError);

// Обработчик отправки данных формы редактирования профиля
function onSubmitFormEditProfile(callBack) {
  const data = popupEditProfile.getInputValues();
  server.patchUserInfo(data)
    .then(res => {
      userInfo.setUserInfo(res);
      callBack();
    })
    .catch(handleError);
}

function initialValidationPopupForm(popup) {

  const formElement = popup.getForm();
  const formValidator = new FormValidator(formElement, validationParameters);
  formValidator.enableValidation();

  popup.setFormValidator(formValidator);

}

// Инициализация модального окна редактирования профиля
const popupEditProfile = new PopupWithForm('#popup-edit-profile', {
  onSubmitForm: onSubmitFormEditProfile,
});
popupEditProfile.setEventListeners();
initialValidationPopupForm(popupEditProfile);

// Обработчик отправки данных формы редактирования профиля
function onSubmitFormEditAvatar(callBack) {
  const data = popupEditAvatar.getInputValues();
  server.patchAvatar(data.link)
    .then(res => {
      userInfo.setUserInfo(res);
      callBack();
    })
    .catch(handleError);
}

// Инициализация модального окна редактирования аватара пользователя
const popupEditAvatar = new PopupWithForm('#popup-edit-avatar', {
  onSubmitForm: onSubmitFormEditAvatar,
});
popupEditAvatar.setEventListeners();
initialValidationPopupForm(popupEditAvatar);

// Обработчик отправки данных формы добавления карточки
function onSubmitFormAddPlace(callBack) {

  const place = popupAddPlace.getInputValues();
  server.postCard(place)
    .then(newCard => {
      places.addItem(newCard);
      callBack();
    })
    .catch(handleError);

}

// Инициализация модального окна добавления карточки
const popupAddPlace = new PopupWithForm('#popup-add-place', {
  // Обработчик отправки данных формы добавления карточки
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
const buttonAddPlace = document.querySelector('.profile__add-place');
buttonAddPlace.addEventListener('click', () => {

  popupAddPlace.open();

})

// Редактирование аватара
document.querySelector('.profile__avatar-container').addEventListener('click', () => {

  popupEditAvatar.open();

})
