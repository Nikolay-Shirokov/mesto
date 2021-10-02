export default class Card {

  constructor(cardObject, templateSelector, handleCardClick, userId) {
    this._name = cardObject.name;
    this._link = cardObject.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;

    this.id = cardObject._id;

    this._isMyCard = !cardObject.owner? true: cardObject.owner._id === userId;

    this._isLiked       = false;
    this._likesQuantity = 0;

    if (cardObject.likes) {
      this._isLiked       = cardObject.likes.some(item => item._id === userId);
      this._likesQuantity = cardObject.likes.length;
    }
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
    this._placeLikeCounter  = this._placeElement.querySelector('.place__like-counter');
  }

  _prepare() {
    this._placeImage.setAttribute('src', this._link);
    this._placeImage.setAttribute('alt', this._name);
    this._placeCaption.textContent     = this._name;

    this._placeLikeCounter.textContent = this._likesQuantity;
    if (this._isLiked) {
      this._placeLikeButton.classList.add('place__like_active')
    }
    if (!this._isMyCard) {
      this._placeDeleteButton.remove();
    }
  }

  _setEventListeners() {
    this._placeImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    this._placeLikeButton.addEventListener('click', () => this._placeLikeButton.classList.toggle('place__like_active'));
    if (this._isMyCard) {
      this._placeDeleteButton.addEventListener('click', () => this._placeElement.remove());
    }
  }

  createPlaceElement() {

    this._cloneTemplate();
    this._parseElement();
    this._prepare();
    this._setEventListeners();

    return this._placeElement;

  }

}
