const nodePlaces = document.querySelector('.places');

let userPlacesList = [
  {
    image: './images/yandex-praktikum.svg',
    imageAlt: 'Логотип Яндекс.Практикум',
    caption: 'Яндекс.Практикум'
  },
  {
    image: 'https://svgsilh.com/svg/1363011.svg',
    imageAlt: 'Логотип HTML Academy',
    caption: 'HTML Academy'
  },
  {
    image: 'https://svgsilh.com/svg/1363011.svg',
    imageAlt: 'Логотип Нетология',
    caption: 'Нетология'
  },
  {
    image: 'https://svgsilh.com/svg/1363011.svg',
    imageAlt: 'Логотип Skillbox',
    caption: 'Skillbox'
  },
  {
    image: 'https://svgsilh.com/svg/1363011.svg',
    imageAlt: 'Логотип Udemy',
    caption: 'Udemy'
  },
  {
    image: 'https://svgsilh.com/svg/1363011.svg',
    imageAlt: 'Логотип Skillfactory',
    caption: 'Skillfactory'
  },
];

function renderPlace(place) {

  let placeHTML =
  `<li class="place">
    <img class="place__image" src="${place.image}" alt="${place.imageAlt}">
    <h2 class="place__caption page-text">${place.caption}</h2>
    <button class="place__like button" type="button" aria-label="Нравится"></button>
  </li>`;

  nodePlaces.insertAdjacentHTML('beforeend', placeHTML);

}

for (let index = 0; index < userPlacesList.length; index++) {
  renderPlace(userPlacesList[index]);
}
