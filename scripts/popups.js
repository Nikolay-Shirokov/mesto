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

// Функции

function showPopup(popup) {
  popup.classList.add('popup_opened');
}

function hidePopup(event) {
  const popup = event.target.closest('.popup');
  popup.classList.remove('popup_opened');
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

  hidePopup(event);

}

function onSubmitFormAddPlace(event) {

  event.preventDefault();

  const place = {
    name: inputPlaceName.value,
    link: inputPlaceLink.value
  };

  renderPlace(place);
  hidePopup(event);

}

function addEventListenerOnClosePopupButtonClick() {

  const closeButtons = document.querySelectorAll('.popup__close');
  closeButtons.forEach(closeButton => {closeButton.addEventListener('click', hidePopup)});

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
addEventListenerOnClosePopupButtonClick();
addEventListenerOnOpenPopupButtonClick();
addEventListenerOnSubmitForms();
