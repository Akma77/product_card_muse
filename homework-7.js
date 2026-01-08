// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrayNumbers)

const newArrayNumbers = arrayNumbers.slice(4);  
console.log(newArrayNumbers); 

// 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.
const arrayStrings = ['apple', 'banana', 'cherry', 'grape']
const isExist = arrayStrings.includes('apple')
console.log(isExist)

// 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.
function reverseArray(array) {
  return array.reverse()
}
console.log(reverseArray(arrayNumbers))
console.log(reverseArray(arrayStrings))

// 5.
import { socialMediaComments } from './comments.js';

const usersWithComEmail = socialMediaComments.filter(comment => comment.email.endsWith('.com'));
console.log(usersWithComEmail);

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
const postIdChange = socialMediaComments.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});
console.log(postIdChange);

// 9. Перебрать массив, что бы объекты состояли только из айди и имени
const idAndName = socialMediaComments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  };
});
console.log(idAndName);

// 10.  Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false
const isInvalid = socialMediaComments.map(comment => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180 ? true : false
  };
});
console.log(isInvalid); 

//11 Используем reduce для получения массива почт
const emailsByReduce = socialMediaComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailsByReduce);

// То же самое с помощью map
const emailsByMap = socialMediaComments.map(comment => comment.email);
console.log(emailsByMap);

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

// 1. Используя toString()
const emailsStringToString = emailsByReduce.toString();
console.log('emailsStringToString:', emailsStringToString);

// 2. Используя join() с запятой (по умолчанию)
const emailsStringJoinDefault = emailsByReduce.join();
console.log('emailsStringJoinDefault:', emailsStringJoinDefault);

// 3. Используя join() с другим разделителем, например "; "
const emailsStringJoinSemicolon = emailsByReduce.join('; ');
console.log('emailsStringJoinSemicolon:', emailsStringJoinSemicolon);
