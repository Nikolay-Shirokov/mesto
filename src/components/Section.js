export default class Section {

  constructor({ renderer }, containerSelector) {
    this._renderer  = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach(item => {
      this.addItem(item, 'append');
    });
  }

  addItem(item, method='prepend') {
    const element = this._renderer(item);
    this._container[method](element);
  }

}
