export default class Section {

  constructor({ items, renderer }, containerSelector) {
    this._items     = items;
    this._renderer  = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach(item => {
      this.addItem(item, 'append');
    });
  }

  addItem(item, method='prepend') {
    const element = this._renderer(item);
    this._container[method](element);
  }

}
