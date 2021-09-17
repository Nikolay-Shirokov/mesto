export default class Section {

  constructor({ items, renderer }, containerSelector) {
    this._items     = items;
    this._renderer  = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach(item => {
      const element = this._renderer(item);
      this.addItem(element, 'append');
    });
  }

  addItem(element, method='prepend') {
    this._container[method](element);
  }

}
