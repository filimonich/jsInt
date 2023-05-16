import { observable, computed } from 'mobx';

class Products {
  @observable list = [
    { id: 1, title: 'Iphone XX', price: 75000 },
    { id: 2, title: 'Samsung S200', price: 55000 },
    { id: 5, title: 'Asus Zen 500', price: 25000 },
  ];

  @computed get mapId() {
    let map = {};

    this.list.forEach((item, i) => {
      map[item.id] = i;
    });

    return map;
  }

  @computed get item() {
    return id => this.list[this.mapId[id]];
  }
}

export default new Products();
