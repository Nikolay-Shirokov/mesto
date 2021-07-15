// Инициализация переменных

const popup       = document.querySelector('.popup');
const formElement = document.querySelector('.popup__container');

const buttonProfileEdit = document.querySelector('.profile__edit');
const buttonPopupClose  = document.querySelector('.popup__close');
const buttonPopupSubmit = document.querySelector('.popup__submit');

const nameField     = document.querySelector('.profile__name');
const positionField = document.querySelector('.profile__position');

const nameInput     = document.querySelector('.popup__name');
const positionInput = document.querySelector('.popup__position');

// Функции

function showPopup() {

  nameInput.value     = nameField.textContent;
  positionInput.value = positionField.textContent;

  popup.classList.add('popup_opened');

}

function hidePopup() {
  popup.classList.remove('popup_opened');
}

function onPopupSubmit(evt) {

  evt.preventDefault();

  nameField.textContent     = nameInput.value;
  positionField.textContent = positionInput.value;

  hidePopup();

}

// Обработчики событий

buttonProfileEdit.addEventListener('click', showPopup);
buttonPopupClose.addEventListener('click', hidePopup);

formElement.addEventListener('submit', onPopupSubmit);
