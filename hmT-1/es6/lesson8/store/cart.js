// Импортируем observable, computed и action из библиотеки mobx
import { observable, computed, action } from 'mobx';
// Импортируем productsStore из файла './products'
import productsStore from './products';

// Создаем класс Cart
class Cart {
  @observable idProducts = []; // Массив идентификаторов продуктов в корзине

  @computed get cnt() {
    // Вычисляемое свойство, возвращает количество продуктов в корзине
    return this.idProducts.length;
  }

  @computed get inCart() {
    // Вычисляемое свойство, проверяет, содержится ли продукт в корзине
    return id => this.idProducts.indexOf(id) !== -1;
  }

  @computed get total() {
    // Вычисляемое свойство, возвращает общую стоимость продуктов в корзине
    return this.idProducts.reduce((total, id) => {
      return total + productsStore.item(id).price; // Суммирует цены продуктов из общего хранилища (productsStore)
    }, 0);
  }

  @action add(id) {
    // Действие, добавляет продукт в корзину по его идентификатору
    if (this.idProducts.indexOf(id) === -1) {
      // Проверка, что продукт еще не находится в корзине
      this.idProducts.push(id); // Добавление идентификатора продукта в массив
    }
  }

  @action remove(id) {
    // Действие, удаляет продукт из корзины по его идентификатору
    let ind = this.idProducts.indexOf(id); // Находим индекс продукта в массиве
    if (this.idProducts.indexOf(id) !== -1) {
      // Проверка, что продукт находится в корзине
      this.idProducts.splice(ind, 1); // Удаление продукта из массива
    }
  }

  @action clear() {
    // Действие, очищает корзину
    this.idProducts = []; // Присваиваем пустой массив для удаления всех продуктов из корзины
  }
}

export default new Cart(); // Экспорт экземпляра класса Cart в качестве модуля по умолчанию
