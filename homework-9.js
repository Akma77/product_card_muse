import { Modal } from './Modal.js';
import { Form } from './Form.js';

// ===== Форма подписки (футер) =====
const subscribeForm = new Form('subscribe-form');

subscribeForm.form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = subscribeForm.getValues();
  const email = data.email.trim();

  if (!email || !email.includes('@')) {
    alert('Пожалуйста, введите корректный email!');
    subscribeForm.form.querySelector('.site-footer__input').focus();
    return;
  }

  console.log({ email });
  subscribeForm.reset();
});

// ===== Модальное окно =====
const registerModal = new Modal('modal');
const registerForm = new Form('register-form');

let user = null;

document.getElementById('register-open-button').addEventListener('click', () => registerModal.open());
document.getElementById('overlay').addEventListener('click', () => registerModal.close());

// ===== Форма регистрации =====
document.getElementById('register-form').addEventListener('submit', (event) => {
  event.preventDefault();

  if (!registerForm.isValid()) {
    alert('Пожалуйста, заполните все поля корректно. Регистрация отклонена.');
    return;
  }

  const data = registerForm.getValues();

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
  registerForm.reset();
});
