import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  constructor(selector) {
    super(selector);
    this._image = this._element.querySelector('.figure__image');
    this._caption = this._element.querySelector('.figure__caption');
  }

  open(name, link) {
    //Дополнительные действия
    this._image.setAttribute('src', link);
    this._image.setAttribute('alt', name);
    this._caption.textContent = name;

    super.open();
  }

}
