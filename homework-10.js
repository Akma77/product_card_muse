// homework-10.js - Testing Drink abstract class and subclasses
// Classes are defined in: Drink.js, Coffee.js, Tea.js, Lemonade.js, HotChocolate.js

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
