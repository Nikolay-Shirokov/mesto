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
  popup.classList.add('popup_opened');
}

function hidePopup() {
  popup.classList.remove('popup_opened');
}

// Обработчики событий

buttonProfileEdit.addEventListener('click', function () {

  nameInput.value     = nameField.textContent;
  positionInput.value = positionField.textContent;

  showPopup();

});

buttonPopupClose.addEventListener('click', function () {
  hidePopup();
});

formElement.addEventListener('submit', function (evt) {

  evt.preventDefault();

  nameField.textContent     = nameInput.value;
  positionField.textContent = positionInput.value;

  hidePopup();

});
