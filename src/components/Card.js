export default class Card {

  constructor(cardObject, templateSelector, handleCardClick) {
    this.name = cardObject.name;
    this.link = cardObject.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _cloneTemplate() {

    const placeTemplate = document.querySelector(this._templateSelector).content;
    const placeElementReference = placeTemplate.querySelector('.place');
    const placeElement = placeElementReference.cloneNode(true);

    this._placeElement = placeElement;

  }

  _parseElement() {
    this._placeImage        = this._placeElement.querySelector('.place__image');
    this._placeCaption      = this._placeElement.querySelector('.place__caption');
    this._placeDeleteButton = this._placeElement.querySelector('.place__delete');
    this._placeLikeButton   = this._placeElement.querySelector('.place__like');
  }

  _fill() {
    this._placeImage.setAttribute('src', this.link);
    this._placeImage.setAttribute('alt', this.name);
    this._placeCaption.textContent = this.name;
  }

  _setEventListeners() {
    this._placeImage.addEventListener('click', () => this._handleCardClick(this.name, this.link));
    this._placeDeleteButton.addEventListener('click', () => this._placeElement.remove());
    this._placeLikeButton.addEventListener('click', () => this._placeLikeButton.classList.toggle('place__like_active'));
  }

  createPlaceElement() {

    this._cloneTemplate();
    this._parseElement();
    this._fill();
    this._setEventListeners();

    return this._placeElement;

  }

}
