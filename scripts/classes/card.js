import { showPicture } from "../popups.js";

export class Card {

  constructor(cardObject, templateSelector) {
    this.name = cardObject.name;
    this.link = cardObject.link;
    this._templateSelector = templateSelector;
  }

  _cloneTemplate() {

    /* В задании оговорено что в конструктор класса должен передаваться селектор шаблона
    поэтому приходится шаблон искать каждый раз снова */
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
    this._placeImage.addEventListener('click', () => { showPicture(this) });
    this._placeDeleteButton.addEventListener('click', () => { this._placeElement.remove() });
    this._placeLikeButton.addEventListener('click', () => { this._placeLikeButton.classList.toggle('place__like_active') });
  }

  createPlaceElement() {

    this._cloneTemplate();
    this._parseElement();
    this._fill();
    this._setEventListeners();

    return this._placeElement;

  }

}
