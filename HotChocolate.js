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
