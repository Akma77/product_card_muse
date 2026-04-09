// ===== Форма подписки (футер) =====
const subscribeForm = document.querySelector('.site-footer__form');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(subscribeForm);
  const email = formData.get('email').trim();

  if (!email || !email.includes('@')) {
    subscribeForm.querySelector('.site-footer__input').focus();
    return;
  }

  console.log({ email });
});

// ===== Модальное окно =====
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

  const formData = new FormData(registerForm);
  const password = formData.get('password');
  const passwordRepeat = formData.get('passwordRepeat');

  if (password !== passwordRepeat) {
    alert('Пароли не совпадают. Регистрация отклонена.');
    return;
  }

  user = {
    firstName: formData.get('firstName').trim(),
    lastName: formData.get('lastName').trim(),
    birthDate: formData.get('birthDate'),
    login: formData.get('login').trim(),
    password: password,
    createdOn: new Date(),
  };

  console.log(user);
  closeModal();
});
