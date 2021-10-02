export default class UserInfo {

  constructor({ selectorUserName, selectorUserPosition }) {
    this._elementUserName     = document.querySelector(selectorUserName);
    this._elementUserPosition = document.querySelector(selectorUserPosition);
  }

  getUserInfo() {
    return {
      name: this._elementUserName.textContent,
      about: this._elementUserPosition.textContent
    }
  }

  setUserInfo({ name, about }) {
    this._elementUserName.textContent     = name;
    this._elementUserPosition.textContent = about;
  }

}
