import { Parody, ParodyDom } from '../parody';
import InputNumber from './input-number';

export default class Cart extends Parody {
  constructor(props) {
    super(props);

    this.initState({
      products: [
        { price: 1000, rest: 10, current: 1 },
        { price: 2000, rest: 5, current: 2 },
      ],
    });
  }

  onChange(ind, val) {
    this.state.products[ind].current = val;

    /*  
            получить this.state.products
            заменить объект product[i], на объект с новой ценой
            setState products
        */

    /* 
            п. №1
            в идеале здесь не хотелось бы вызывать render вручную
            на уровне базового класса скрестите state и watchObj из дз№2 для минимальной реактивности
            она не будет настоящей, например, this.state.products.push таким образом реактивным не станет
        */
  }

  onAdd = () => {
    /*let products = [...this.state.products, {
            price: 500, 
            rest: 20, 
            current: 1
        }];
        
        this.setState({
            products
        });*/

    this.state.products.push({
      price: 500,
      rest: 20,
      current: 1,
    });
  };

  onRemove(ind) {
    this.state.products.splice(ind, 1);
    /*let products = [...this.state.products];
        products.splice(ind, 1);

        this.setState({
            products
        });*/
  }

  render() {
    let sum = this.state.products.reduce((total, item) => {
      return total + item.price * item.current;
    }, 0);

    let inputs = this.state.products.map((item, i) => {
      return (
        <div>
          {item.price}
          <InputNumber
            min={1}
            max={item.rest}
            value={item.current}
            change={this.onChange.bind(this, i)}
          />
          <input
            type="button"
            value="x"
            onclick={this.onRemove.bind(this, i)}
          />
          <hr />
        </div>
      );
    });

    return super.render(
      <div>
        {inputs}
        <div>{sum}</div>
        <hr />
        <input type="button" value="+" onclick={this.onAdd} />
      </div>
    );

    /*
            // правильный вариант
            let inputs = this.state.products.map((item, i) => {
                return <InputNumber min={1} max={item.rest} value={item.current}
                                    change={this.onChange.bind(this, i)}/>
            });

            return super.render(
                <div>
                    {inputs}
                    <hr/>
                    <div>{sum}</div>
                </div>
            );

            // но он не сработает! inputs - массив, в ParodyDom его приравняют к textNode
            // в итоге получится [object HTMLDivElement],[object HTMLDivElement] вместо компонетов
            // поправьте данный момент
        */
  }
}
