// Инициализация переменных

const popup           = document.querySelector('.popup');
const popupContainer  = document.querySelector('.popup__container');

const buttonProfileEdit = document.querySelector('.profile__edit');
const buttonAddPlace    = document.querySelector('.profile__add-place');
const buttonPopupClose  = document.querySelector('.popup__close');

const nameField     = document.querySelector('.profile__name');
const positionField = document.querySelector('.profile__position');

const figureTemplate = document.querySelector('#figure').content;
const figureElementReference = figureTemplate.querySelector('.figure');

const formTemplate = document.querySelector('#form').content;
const formElementReference = formTemplate.querySelector('.form');

// Функции

function showPopup() {
  popup.classList.add('popup_opened');
}

function hidePopup() {
  popup.classList.remove('popup_opened');
}

function clearPopupContainer() {

  Array.from(popupContainer.children).forEach(element => {
    if (!(element.tagName === 'BUTTON')) {
      element.remove();
    }
  });

}

function showFigure(figureObject) {

  const figureElement = figureElementReference.cloneNode(true);

  clearPopupContainer();

  const figureImage = figureElement.querySelector('.figure__image');
  figureImage.setAttribute('src', figureObject.link);
  figureImage.setAttribute('alt', figureObject.name);

  const figureCaption = figureElement.querySelector('.figure__caption');
  figureCaption.textContent = figureObject.name;

  popupContainer.append(figureElement);

  showPopup();

}

function showForm(formObject) {

  const formElement = formElementReference.cloneNode(true);

  clearPopupContainer();

  formElement.setAttribute('name', formObject.name);

  const titleElement = formElement.querySelector('.form__title');
  titleElement.textContent = formObject.title;

  const fieldset = formElement.querySelector('.form__fields');
  const inputReference = fieldset.querySelector('.form__input');

  fieldset.innerHTML = '';

  formObject.fields.forEach(field => {

    const input = inputReference.cloneNode(true);
    input.setAttribute('name', field.name);
    input.setAttribute('value', field.value);
    input.setAttribute('placeholder', field.placeholder);

    fieldset.append(input);

  });

  const submitButton = formElement.querySelector('.form__submit');
  submitButton.textContent = formObject.submitLabel;

  formElement.addEventListener('submit', event => {

    event.preventDefault();

    formObject.onSubmit(formElement);

    hidePopup();

  });

  popupContainer.append(formElement);

  showPopup();

}

function showFormEditProfile() {

  formObject = {
    name: 'form-edit-profile',
    title: 'Редактировать профиль',
    fields: [
      {
        name: 'name',
        value: nameField.textContent,
        placeholder: 'Имя героя'
      },
      {
        name: 'position',
        value: positionField.textContent,
        placeholder: 'Позиция героя в мире'
      }
    ],
    submitLabel: 'Сохранить',
    onSubmit: formElement => {

      formData = new FormData(formElement);

      nameField.textContent     = formData.get('name');
      positionField.textContent = formData.get('position');

    }
  }

  showForm(formObject);

}

function showFormAddPlace() {

  formObject = {
    name: 'form-add-place',
    title: 'Новое место',
    fields: [
      {
        name: 'name',
        value: '',
        placeholder: 'Название'
      },
      {
        name: 'link',
        value: '',
        placeholder: 'Ссылка на картинку'
      }
    ],
    submitLabel: 'Создать',
    onSubmit: formElement => {

      formData = new FormData(formElement);

      place = {
        name: formData.get('name'),
        link: formData.get('link')
      }

      renderPlace(place);

    }
  }

  showForm(formObject);

}

// Обработчики событий

buttonProfileEdit.addEventListener('click', showFormEditProfile);
buttonAddPlace.addEventListener('click', showFormAddPlace);
buttonPopupClose.addEventListener('click', hidePopup);
