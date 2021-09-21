(()=>{"use strict";var e={formSelector:".form",inputSelector:".form__input",errorSelector:".form__input-error",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_visible"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var n,r;return n=e,r=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e.addItem(t,"append")}))}},{key:"addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"prepend",n=this._renderer(e);this._container[t](n)}}],r&&t(n.prototype,r),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t.name,this.link=t.link,this._templateSelector=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_cloneTemplate",value:function(){var e=document.querySelector(this._templateSelector).content.querySelector(".place").cloneNode(!0);this._placeElement=e}},{key:"_parseElement",value:function(){this._placeImage=this._placeElement.querySelector(".place__image"),this._placeCaption=this._placeElement.querySelector(".place__caption"),this._placeDeleteButton=this._placeElement.querySelector(".place__delete"),this._placeLikeButton=this._placeElement.querySelector(".place__like")}},{key:"_fill",value:function(){this._placeImage.setAttribute("src",this.link),this._placeImage.setAttribute("alt",this.name),this._placeCaption.textContent=this.name}},{key:"_setEventListeners",value:function(){var e=this;this._placeImage.addEventListener("click",(function(){return e._handleCardClick(e.name,e.link)})),this._placeDeleteButton.addEventListener("click",(function(){return e._placeElement.remove()})),this._placeLikeButton.addEventListener("click",(function(){return e._placeLikeButton.classList.toggle("place__like_active")}))}},{key:"createPlaceElement",value:function(){return this._cloneTemplate(),this._parseElement(),this._fill(),this._setEventListeners(),this._placeElement}}])&&r(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(t),this._hidePopupOnEscButton=this._hidePopupOnEscButton.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._hidePopupOnEscButton)}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),document.removeEventListener("keydown",this._hidePopupOnEscButton)}},{key:"_hidePopupOnEscButton",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._element.addEventListener("click",(function(t){(t.target===e._element||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&i(t.prototype,n),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},l(e,t,n||e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function f(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._element.querySelector(".figure__image"),t._caption=t._element.querySelector(".figure__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.setAttribute("src",t),this._image.setAttribute("alt",e),this._caption.textContent=e,l(p(a.prototype),"open",this).call(this)}}])&&c(t.prototype,n),a}(a);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},d(e,t,n||e)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e,t){var n,r=t.onSubmitForm,o=t.onOpen,s=t.onClose;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._onSubmitForm=r,n._onOpen=o,n._onClose=s,n._formElement=n._element.querySelector(".form"),n._inputList=n._formElement.querySelectorAll(".form__input"),n}return t=a,(n=[{key:"open",value:function(){this._onOpen&&this._onOpen(),this._formValidator&&this._formValidator.checkValidationOnOpenPopup(),d(b(a.prototype),"open",this).call(this)}},{key:"close",value:function(){this.onClose&&this.onClose(),this._formElement.reset(),d(b(a.prototype),"close",this).call(this)}},{key:"getForm",value:function(){return this._formElement}},{key:"setFormValidator",value:function(e){this._formValidator=e}},{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.name in e&&(t.value=e[t.name])}))}},{key:"setEventListeners",value:function(){var e=this;d(b(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._onSubmitForm&&e._onSubmitForm(),e.close()}))}}])&&_(t.prototype,n),a}(a);function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){var n=t.selectorUserName,r=t.selectorUserPosition;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elementUserName=document.querySelector(n),this._elementUserPosition=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._elementUserName.textContent,position:this._elementUserPosition.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.position;this._elementUserName.textContent=t,this._elementUserPosition.textContent=n}}])&&k(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=t,this._validationParameters=n,this._inputList=Array.from(t.querySelectorAll(n.inputSelector)),this._buttonElement=t.querySelector(n.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n="".concat(this._validationParameters.errorSelector,"[data-input-name='").concat(e.name,"']"),r=this._formElement.querySelector(n);e.classList.add(this._validationParameters.inputErrorClass),r.classList.add(this._validationParameters.errorClass),r.textContent=t}},{key:"_hideInputError",value:function(e){var t="".concat(this._validationParameters.errorSelector,"[data-input-name='").concat(e.name,"']"),n=this._formElement.querySelector(t);e.classList.remove(this._validationParameters.inputErrorClass),n.classList.remove(this._validationParameters.errorClass),n.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._validationParameters.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._validationParameters.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"checkValidationOnOpenPopup",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"_setValidationOnInput",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setValidationOnInput()}}])&&S(t.prototype,n),e}(),O=new m("#popup-picture");function P(){O.open.apply(O,arguments)}O.setEventListeners();var L=new n({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){return new o(e,"#place",P).createPlaceElement(e)}},".places");L.renderItems();var C=new g({selectorUserName:".profile__name",selectorUserPosition:".profile__position"});function j(t){var n=t.getForm(),r=new w(n,e);r.enableValidation(),t.setFormValidator(r)}var I=new E("#popup-edit-profile",{onSubmitForm:function(e){C.setUserInfo(this._getInputValues())}});I.setEventListeners(),j(I);var B=new E("#popup-add-place",{onSubmitForm:function(e){var t=this._getInputValues();L.addItem(t)}});B.setEventListeners(),j(B),document.querySelector(".profile__edit").addEventListener("click",(function(){I.setInputValues(C.getUserInfo()),I.open()})),document.querySelector(".profile__add-place").addEventListener("click",(function(){B.open()}))})();