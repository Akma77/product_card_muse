// homework-11.js - Testing Cafe class with drinks
// Classes are defined in: Drink.js, Coffee.js, Tea.js, Lemonade.js, HotChocolate.js, Cafe.js

const coffee = new Coffee("Капучино", "medium", 55, 85, "арабика", "овсяное");
const tea = new Tea("Чай", "large", 40, 90, "зелёный", true);

const cafe = new Cafe("Уютное место", "ул. Манаса, 5");

cafe.getInfo();
cafe.orderDrink(coffee);
cafe.orderDrink(tea);
