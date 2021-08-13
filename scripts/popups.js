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
const inputPlaceName  = formEditProfile.elements.name;
const inputPlaceLink  = formEditProfile.elements.link;

let openedPopup;

// Функции

function showPopup(popup) {

  popup.classList.add('popup_opened');
  document.addEventListener('keydown', hidePopupOnEscButton);
  openedPopup = popup;

  const formElement = popup.querySelector(currentValidationParameters.formSelector);
  if (formElement) {
    checkValidationOnOpenPopup(formElement, currentValidationParameters);
  }

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

  showPopup(popupEditProfile);

}

function showFormAddPlace() {
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

// Обработчики событий
addEventListenerOnShadowZoneAndCloseButtonClick();
addEventListenerOnOpenPopupButtonClick();
addEventListenerOnSubmitForms();
