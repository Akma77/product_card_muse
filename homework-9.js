// ===== Форма подписки (футер) =====
const subscribeForm = document.querySelector('.site-footer__form');
const emailInput = document.querySelector('.site-footer__input');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!email || !email.includes('@')) {
    emailInput.focus();
    return;
  }

  console.log({ email });
});

// ===== Модальное окно ====
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const registerOpenButton = document.getElementById('register-open-button');
const modalCloseButton = document.getElementById('modal-close');
const registerForm = document.getElementById('register-form');

let user = null;

function openModal() {
  modal.classList.add('modal-showed');
  overlay.classList.add('modal-showed');
}

function closeModal() {
  modal.classList.remove('modal-showed');
  overlay.classList.remove('modal-showed');
}

registerOpenButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// ===== Форма регистрации =====
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!registerForm.checkValidity()) {
    alert('Пожалуйста, заполните все поля корректно. Регистрация отклонена.');
    return;
  }

  const password = registerForm.password.value;
  const passwordRepeat = registerForm.passwordRepeat.value;

  if (password !== passwordRepeat) {
    alert('Пароли не совпадают. Регистрация отклонена.');
    return;
  }

  user = {
    firstName: registerForm.firstName.value.trim(),
    lastName: registerForm.lastName.value.trim(),
    birthDate: registerForm.birthDate.value,
    login: registerForm.login.value.trim(),
    password: password,
    createdOn: new Date(),
  };

  console.log(user);
  closeModal();
});
