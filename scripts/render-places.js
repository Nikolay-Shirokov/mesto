const nodePlaces = document.querySelector('.places');
const placeTemplate = document.querySelector('#place').content;
const placeElementReference = placeTemplate.querySelector('.place');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function renderPlace(place) {

  const placeElement = placeElementReference.cloneNode(true);

  const place__image = placeElement.querySelector('.place__image');
  place__image.setAttribute('src', place.link);
  place__image.setAttribute('alt', place.name);

  const place__caption = placeElement.querySelector('.place__caption');
  place__caption.textContent = place.name;

  nodePlaces.prepend(placeElement);

}

initialCards.forEach(renderPlace);

