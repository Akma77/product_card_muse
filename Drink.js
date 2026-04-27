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
