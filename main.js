//Перекрашивание всех карточек в зелёный
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

function initCardHandlers() {
  const productCards = document.querySelectorAll('.card-container');
  const changeColorAllCardButton = document.querySelector('#all-cards-colors-change-button');

  if (changeColorAllCardButton && productCards.length > 0) {
    changeColorAllCardButton.addEventListener('click', () => {
      productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
    });
  }

  //Перекрашивание первой карточки в синий
  const firstProductCard = document.querySelector('.card-container');
  const changeColorFirstCardButton = document.querySelector('#first-card-colors-change-button');

  if (changeColorFirstCardButton && firstProductCard) {
    changeColorFirstCardButton.addEventListener('click', () => {
      firstProductCard.style.backgroundColor = blueColorHash
    });
  }
}

// Вызываем после загрузки DOM и создания карточек
document.addEventListener('DOMContentLoaded', () => {
  // Ждем немного, чтобы homework-8.js успел создать карточки
  setTimeout(initCardHandlers, 100);
});

// Также экспортируем функцию для вызова из homework-8.js
window.initCardHandlers = initCardHandlers;

//Кнопка открыть гугл сайт
const openGoogleButton = document.querySelector('#google-open-button');
openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

//Вывод консоль лог
const outputLogButton = document.querySelector('#console-log-output-button')
outputLogButton.addEventListener('click', () => outputConsoleLog('Дз №4'))

function outputConsoleLog(message) {
  alert('10')
  console.log(message)
}

//Меняем цвет кнопки
const changeColorButton = document.querySelector('#color-change-button')
changeColorButton.addEventListener('click', () => {
  changeColorButton.style.backgroundColor = greenColorHash
  changeColorButton.classList.toggle('pink-mode');
})

//Задача с зоголвоком, чтобы он выводился в консоль лог
const pageTitle = document.querySelector('.title');
pageTitle.addEventListener('mouseenter', () => {
  console.log(pageTitle.textContent);
});
