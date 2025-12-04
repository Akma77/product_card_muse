//Перекрашивание всех карточек в зелёный
const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardButton = document.querySelector('#change-all-cards-colors-button');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

//Перекрашивание первой карточки в синий
const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-first-card-color-button');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash
})

//Кнопка открыть гугл сайт
const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }}

//Вывод консоль лог
const outputLogButton = document.querySelector('#output-console-log')
outputLogButton.addEventListener('click', () => outputConsoleLog('Дз №4'))

function outputConsoleLog(message) {
  alert('10')
  console.log(message)
}

//Меняем цвет кнопки
const changeColorButton = document.querySelector('#change-color-button')
changeColorButton.addEventListener('click', () => {
  changeColorButton.style.backgroundColor = greenColorHash
  changeColorButton.classList.toggle('pink-mode');
})
 
