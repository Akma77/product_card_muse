// 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.
import { products } from './products.js';

const productList = document.querySelector('.product-list');
const productTemplate = document.querySelector('#product-template');

function formatPrice(price) {
  return price.toLocaleString('ru-RU') + ' ₽';
}

// 5. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt)
// "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить
// введенное количество. Должна быть защита от ввода других значений (проверка if).
// То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести,
// другая - рендерить эти карточки (принимая массив аргументом)
function getCountFromUser() {
  const input = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = parseInt(input);

  if (count >= 1 && count <= 5) {
    return count;
  } else {
    alert("Ошибка! Введите число от 1 до 5.");
    return 0;
  }
}

// 4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
function getProductNameDescriptionArray(productsArray) {
  return productsArray.reduce((acc, product) => {
    acc.push({ [product.name]: product.description });
    return acc;
  }, []);
}

// Рендеринг карточек
function renderProducts(productsArray) {
  productsArray.forEach(product => {
    const templateContent = productTemplate.content.cloneNode(true);

    const productImage = templateContent.querySelector('.product-image');
    const productCategory = templateContent.querySelector('.product-category');
    const productName = templateContent.querySelector('.product-name');
    const productDescription = templateContent.querySelector('.product-description');
    const productCompound = templateContent.querySelector('.product-compound');
    const productPrice = templateContent.querySelector('.product-price');

    productImage.src = product.image;
    productImage.alt = product.name;
    productCategory.textContent = product.category;
    productName.textContent = product.name;
    productDescription.textContent = product.description;
    productPrice.textContent = formatPrice(product.price);

    product.compound.forEach(ingredient => {
      const compoundItem = document.createElement('li');
      compoundItem.className = 'product-compound-list';
      compoundItem.textContent = ingredient;
      productCompound.appendChild(compoundItem);
    });

    productList.appendChild(templateContent);
  });
}

// 5. Запуск логики
const countToDisplay = getCountFromUser();
if (countToDisplay > 0) {
  // Отрисовываем только нужное количество
  renderProducts(products.slice(0, countToDisplay));
}
