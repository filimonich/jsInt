import { Parody, ParodyDom } from '../parody';

export default class InputNumber extends Parody {
  // - `export default`: Это ключевые слова в JavaScript, которые указывают на экспорт класса,
  // функции или объекта по умолчанию из текущего модуля. В данном случае,
  // класс `InputNumber` будет экспортирован как экспорт по умолчанию
  // и может быть импортирован в других модулях без использования фигурных скобок `{}` при импорте.
  // - `class`: Это ключевое слово в JavaScript, используется для определения класса. В данном случае,
  // мы определяем класс `InputNumber`.
  // - `InputNumber`: Это имя класса, которое задается после ключевого слова `class`. В данном случае,
  // класс называется `InputNumber`.
  // - `extends`: Это ключевое слово в JavaScript, используется для наследования свойств и методов от другого класса.
  // В данном случае, класс `InputNumber` наследуется от класса `Parody`.
  // - `Parody`: Это имя класса, от которого происходит наследование.
  // В данном случае, класс `InputNumber` наследует свойства и методы от класса `Parody`.
  constructor(props) {
    super(props);

    this.onChange = 'change' in props ? props.change : function () {};
  }
  // - `constructor(props)`: Конструктор - это специальный метод класса,
  // который вызывается при создании нового экземпляра класса. Он принимает аргумент `props`,
  // который представляет объект свойств.
  // - `super(props)`: Вызов `super(props)` внутри конструктора используется для вызова конструктора родительского класса.
  // Он передает свойства `props` родительскому классу для инициализации.
  // В данном случае, родительским классом является класс, от которого наследуется `InputNumber`.
  // - `this.onChange`: Создается новое свойство `onChange` для текущего экземпляра класса `InputNumber`.
  // - `'change' in props ? props.change : function () {}`: Это тернарный оператор.
  // Он проверяет наличие свойства с именем `'change'` в объекте `props`.
  // Если свойство `'change'` присутствует, то `this.onChange` будет установлено равным значению `props.change`.
  // Если свойство `'change'` отсутствует, то `this.onChange` будет установлено равным пустой функции
  // (анонимная функция без параметров).

  _normalizeValue(val) {
    let newVal = parseInt(val);

    if (isNaN(newVal) || newVal < this.props.min) {
      newVal = this.props.min;
    } else if (newVal > this.props.max) {
      newVal = this.props.max;
    }

    this.onChange(newVal);
  }

  render() {
    return super.render(
      <div className="inputNumber">
        <input
          type="button"
          value="-"
          className="inputNumber__min"
          onclick={() => this._normalizeValue(this.props.value - 1)}
        />
        <input
          type="text"
          value={this.props.value}
          className="inputNumber__value"
          onchange={e => this._normalizeValue(e.target.value)}
        />
        <input
          type="button"
          value="+"
          className="inputNumber__plus"
          onclick={() => this._normalizeValue(this.props.value + 1)}
        />
      </div>
    );
  }
}
