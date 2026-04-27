class Cafe {
    constructor(name, location) {
          this.name = name;
          this.location = location;
    }

  getInfo() {
        console.log(`Кафе: ${this.name}, адрес: ${this.location}`);
  }

  orderDrink(drink) {
        console.log(` Заказ в кафе "${this.name}" `);
        drink.serve();
        drink.getInfo();
  }
}
