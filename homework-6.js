// 3. Создайте объект на основе ваших данных.
const akmalInfo = {
  name: "Akmal",
  lastname: "Begmetov",
  age: 27,
  mail: "Akmabeat@gmail.com",
  country: "Kyrgyzstan",
  city: "Bishkek",
  job: "finantion accounting",
  relationship: "married",
  religion: "muslim",
  nationality: "uighur"
}

// 4. Создайте объект, который будет хранить данные об автомобиле
const autoInfo = {
  name: "Weltmeister",
  model: "ex-5",
  color: "gray",
  engine: "electro",
  year: 2020
}
autoInfo.owner = akmalInfo;

// 5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4
function addSpeedIfMissing(car, defaultSpeed) {
  if (car.maxSpeed === undefined) {
    autoInfo.maxSpeed = defaultSpeed;
  } else {
  }
}
addSpeedIfMissing(autoInfo, "250 км")

// 6. Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.
function logObject(object, objectProperties) {
  console.log(object[objectProperties])
}
logObject(autoInfo, 'year');

// 7. Создать массив, который содержит названия продуктов (просто строки)
const products = ['milk', 'water', 'sugar', 'salt', 'potato', 'apple', 'juice']
console.log(products)

// 8. Создать массив, состоящий из объектов, где объект представляет собой книгу , после добавить ещё один мотод в конец списка 
const autoBrandsJapan = [
  { name: 'Toyota', model: 'Camry', year: 2020, color: 'red' },
  { name: 'Honda', model: 'Civic', year: 2021, color: 'blue' },
  { name: 'Ford', model: 'Mustang', year: 2022, color: 'green' },
  { name: 'Chevrolet', model: 'Camaro', year: 2023, color: 'yellow' },
]
autoBrandsJapan.push({ name: 'BMW', model: 'X5', year: 2024, color: 'black' })
console.log(autoBrandsJapan[1])

// 9. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной (Гарри Поттер, Марвел и так далее). (Если используете другую, свою сущность - импровизируйте). С помощью известного нам метода массива или оператора (рекомендую использовать оператор), объединить эти два массива в один
const autoBrandsChina = [
  { name: 'Weltmeister', model: 'EX-5', year: 2021, color: 'blue' },
  { name: 'BYD', model: 'E-300', year: 2022, color: 'green' },
  { name: 'LI', model: '9', year: 2001, color: 'yellow' },
]
const allAutoBrand = [...autoBrandsJapan, ...autoBrandsChina]
console.log(allAutoBrand)

/* 10. Функция принимает массив книг.
  Возвращает новый массив, где у каждой книги есть свойство isRare.
  isRare = true (если год > 2000), иначе false.
*/
const isRare = allAutoBrand.map(auto => {
  auto.isRare = auto.year > 2000 ? true : false
  return auto
})
console.log(isRare)
