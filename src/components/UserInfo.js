export default class UserInfo {

  constructor({ selectorUserName, selectorUserPosition, selectorAvatar }) {
    this._elementUserName     = document.querySelector(selectorUserName);
    this._elementUserPosition = document.querySelector(selectorUserPosition);
    this._elementAvatar       = document.querySelector(selectorAvatar);
  }

  getUserInfo() {
    return {
      name: this._elementUserName.textContent,
      about: this._elementUserPosition.textContent
    }
  }

  setUserInfo({ name, about, _id, avatar }) {
    this._elementUserName.textContent     = name;
    this._elementUserPosition.textContent = about;
    if (_id) {
      this.id = _id;
    }
    if (avatar && avatar != this._elementAvatar.src) {
      this._elementAvatar.setAttribute('src', avatar)
    }
  }

}
