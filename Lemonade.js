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
