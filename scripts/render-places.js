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

  const placeImage = placeElement.querySelector('.place__image');
  placeImage.setAttribute('src', place.link);
  placeImage.setAttribute('alt', place.name);

  placeImage.addEventListener('click', () => {showFigure(place)});

  const placeCaption = placeElement.querySelector('.place__caption');
  placeCaption.textContent = place.name;

  const placeDeleteButton = placeElement.querySelector('.place__delete');
  placeDeleteButton.addEventListener('click', () => {placeElement.remove()});

  const placeLikeButton = placeElement.querySelector('.place__like');
  placeLikeButton.addEventListener('click', () => {placeLikeButton.classList.toggle('place__like_active')});

  nodePlaces.prepend(placeElement);

}

initialCards.forEach(renderPlace);

