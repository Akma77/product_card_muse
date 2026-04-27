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
