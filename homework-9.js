// ===== Форма подписки (футер) =====
const subscribeForm = document.querySelector('.site-footer__form');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(subscribeForm));
  const email = data.email.trim();

  if (!email || !email.includes('@')) {
    alert('Пожалуйста, введите корректный email!');
    subscribeForm.querySelector('.site-footer__input').focus();
    return;
  }

  console.log({ email });
});

// ===== Модальное окно =====
import { Modal } from './Modal.js';

const registerModal = new Modal('modal');
const registerOpenButton = document.getElementById('register-open-button');
const registerForm = document.getElementById('register-form');

let user = null;

registerOpenButton.addEventListener('click', () => registerModal.open());
document.getElementById('overlay').addEventListener('click', () => registerModal.close());

// ===== Форма регистрации =====
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!registerForm.checkValidity()) {
    alert('Пожалуйста, заполните все поля корректно. Регистрация отклонена.');
    return;
  }

  const data = Object.fromEntries(new FormData(registerForm));

  if (data.password !== data.passwordRepeat) {
    alert('Пароли не совпадают. Регистрация отклонена.');
    return;
  }

  user = {
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    birthDate: data.birthDate,
    login: data.login.trim(),
    password: data.password,
    createdOn: new Date(),
  };

  console.log(user);
  registerModal.close();
});
