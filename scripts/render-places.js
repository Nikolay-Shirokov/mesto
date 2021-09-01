import { Card } from "./classes/card.js";

const nodePlaces = document.querySelector('.places');

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

function prependPlace(place) {
  const card = new Card(place, '#place');
  const placeElement = card.createPlaceElement(place);
  nodePlaces.prepend(placeElement);
}

function appendPlace(place) {
  const card = new Card(place, '#place');
  const placeElement = card.createPlaceElement(place);
  nodePlaces.append(placeElement);
}

initialCards.forEach(appendPlace);

export {prependPlace};
