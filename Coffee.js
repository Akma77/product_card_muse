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
