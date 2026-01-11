import { socialMediaComments } from './comments.js';

// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, чтобы мы получили массив чисел, начиная с 5
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayNumbers);

const newArrayNumbers = arrayNumbers.filter(num => num >= 5);
console.log(newArrayNumbers);

// 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность
const fruitArray = ['apple', 'banana', 'cherry', 'grape'];
const searchFruit = 'apple';
const isExist = fruitArray.includes(searchFruit);
console.log(isExist);

// 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать"). Два вышеуказанных массива с помощью этой функции перевернуть
function reverseArray(array) {
  return array.reverse();
}
console.log(reverseArray(arrayNumbers));
console.log(reverseArray(fruitArray));

// 5.

const filteredComments = socialMediaComments.filter(comment => comment.email.endsWith('.com'));
console.log(filteredComments);

// 8. Перебрать массив таким образом, чтобы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
const updatedComments = socialMediaComments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log(updatedComments);

// 9. Перебрать массив, чтобы объекты состояли только из айди и имени
const idAndName = socialMediaComments.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log(idAndName);

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, иначе false
const checkedBodyLength = socialMediaComments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
console.log(checkedBodyLength);

// 11. Используем reduce для получения массива почт
const emailsByReduce = socialMediaComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailsByReduce);

// То же самое с помощью map
const emailsByMap = socialMediaComments.map(comment => comment.email);
console.log(emailsByMap);

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке

// 1. Используя toString()
const emailsText = emailsByReduce.toString();
console.log('emailsText:', emailsText);

// 2. Используя join() с запятой (по умолчанию)
const joinedEmails = emailsByReduce.join();
console.log('joinedEmails:', joinedEmails);

// 3. Используя join() с другим разделителем, например "; "
const emailsStringJoinSemicolon = emailsByReduce.join('; ');
console.log('emailsStringJoinSemicolon:', emailsStringJoinSemicolon);
