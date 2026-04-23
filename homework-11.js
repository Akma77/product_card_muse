class Drink {
  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Нельзя создать объект из абстрактного класса Drink!");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this._temperature = temperature;
  }

  getInfo() {
    console.log(this.name, this.size, this.price, this._temperature);
  }

  getTemperature() {
    console.log(this._temperature);
  }

  setTemperature(temp) {
    this._temperature = temp;
  }

  _prepare() {
    console.log("Готовим " + this.name);
  }

  serve() {
    this._prepare();
    console.log(this.name + " подан!");
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
  }

  getInfo() {
    super.getInfo();
    console.log(this.beanType, this.milkType);
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, withLemon) {
    super(name, size, price, temperature);
    this.teaType = teaType;
    this.withLemon = withLemon;
  }

  getInfo() {
    super.getInfo();
    console.log(this.teaType, this.withLemon);
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor, sparkling) {
    super(name, size, price, temperature);
    this.flavor = flavor;
    this.sparkling = sparkling;
  }

  getInfo() {
    super.getInfo();
    console.log(this.flavor, this.sparkling);
  }
}

class HotChocolate extends Drink {
  constructor(name, size, price, temperature, chocolateType) {
    super(name, size, price, temperature);
    this.chocolateType = chocolateType;
  }

  getInfo() {
    super.getInfo();
    console.log(this.chocolateType);
  }
}

const coffee = new Coffee("Капучино", "medium", 55, 85, "арабика", "овсяное");
const tea = new Tea("Чай", "large", 40, 90, "зелёный", true);
const lemonade = new Lemonade("Лимонад", "large", 65, 5, "мятный", false);
const hotChocolate = new HotChocolate("Горячий шоколад", "medium", 70, 80, "молочный");

coffee.getInfo();
tea.getInfo();
lemonade.getInfo();
hotChocolate.getInfo();

coffee.getTemperature();
coffee.setTemperature(70);
coffee.getTemperature();

coffee.serve();
tea.serve();

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

const cafe = new Cafe("Уютное место", "ул. Манаса, 5");

cafe.getInfo();
cafe.orderDrink(coffee);
cafe.orderDrink(tea);
