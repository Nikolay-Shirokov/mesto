// Инициализация переменных
const buttonProfileEdit = document.querySelector('.profile__edit');
const buttonAddPlace    = document.querySelector('.profile__add-place');

//Поля профиля
const fieldName     = document.querySelector('.profile__name');
const fieldPosition = document.querySelector('.profile__position');

// Модальное окно превью картинки
const figureElement = document.querySelector('.figure');
const figureImage   = figureElement.querySelector('.figure__image');
const figureCaption = figureElement.querySelector('.figure__caption');
const popupPicture  = figureElement.closest('.popup');

//Модальное окно редактирования профиля
const popupEditProfile  = document.querySelector('#popup-edit-profile');
const inputName         = popupEditProfile.querySelector('.form__input[name="name"]');
const inputPosition     = popupEditProfile.querySelector('.form__input[name="position"]');

//Модальное окно добавления карточки места
const popupAddPlace   = document.querySelector('#popup-add-place');
const inputPlaceName  = popupAddPlace.querySelector('.form__input[name="name"]');
const inputPlaceLink  = popupAddPlace.querySelector('.form__input[name="link"]');

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

  inputPlaceName.value = '';
  inputPlaceLink.value = '';

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

  const formEditProfile = popupEditProfile.querySelector('.form');
  formEditProfile.addEventListener('submit', onSubmitFormEditProfile);

  const formAddPlace = popupAddPlace.querySelector('.form');
  formAddPlace.addEventListener('submit', onSubmitFormAddPlace);

}

// Обработчики событий
addEventListenerOnShadowZoneAndCloseButtonClick();
addEventListenerOnOpenPopupButtonClick();
addEventListenerOnSubmitForms();
