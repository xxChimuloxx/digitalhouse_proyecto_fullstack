const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedImageExtensions = ['jpg', 'jpeg', 'png', 'gif'];

function clearClientErrors(form) {
  form.querySelectorAll('.client-error').forEach(error => error.remove());
  form.querySelectorAll('.input-error').forEach(field => field.classList.remove('input-error'));
}

function showClientError(field, message) {
  field.classList.add('input-error');
  const error = document.createElement('small');
  error.className = 'form-error client-error';
  error.innerText = message;
  field.insertAdjacentElement('afterend', error);
}

function validateImage(field) {
  if (!field || !field.files || field.files.length === 0) return true;
  const extension = field.files[0].name.split('.').pop().toLowerCase();
  return allowedImageExtensions.includes(extension);
}

function attachRegisterValidation() {
  const form = document.querySelector('.validate-register');
  if (!form) return;

  form.addEventListener('submit', event => {
    clearClientErrors(form);
    let hasErrors = false;

    const firstName = form.firstName;
    const lastName = form.lastName;
    const email = form.email;
    const password = form.password;
    const confirmPassword = form.confirmPassword;
    const image = form.image;

    if (!firstName.value.trim() || firstName.value.trim().length < 2) {
      showClientError(firstName, 'El nombre es obligatorio y debe tener al menos 2 caracteres.');
      hasErrors = true;
    }

    if (!lastName.value.trim() || lastName.value.trim().length < 2) {
      showClientError(lastName, 'El apellido es obligatorio y debe tener al menos 2 caracteres.');
      hasErrors = true;
    }

    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      showClientError(email, 'Ingresá un email válido.');
      hasErrors = true;
    }

    if (!password.value || password.value.length < 8) {
      showClientError(password, 'La contraseña debe tener al menos 8 caracteres.');
      hasErrors = true;
    }

    if (confirmPassword.value !== password.value) {
      showClientError(confirmPassword, 'Las contraseñas no coinciden.');
      hasErrors = true;
    }

    if (!validateImage(image)) {
      showClientError(image, 'La imagen debe ser JPG, JPEG, PNG o GIF.');
      hasErrors = true;
    }

    if (hasErrors) event.preventDefault();
  });
}

function attachLoginValidation() {
  const form = document.querySelector('.validate-login');
  if (!form) return;

  form.addEventListener('submit', event => {
    clearClientErrors(form);
    let hasErrors = false;

    if (!form.email.value.trim() || !emailRegex.test(form.email.value.trim())) {
      showClientError(form.email, 'Ingresá un email válido.');
      hasErrors = true;
    }

    if (!form.password.value) {
      showClientError(form.password, 'La contraseña es obligatoria.');
      hasErrors = true;
    }

    if (hasErrors) event.preventDefault();
  });
}

function attachUserEditValidation() {
  const form = document.querySelector('.validate-user-edit');
  if (!form) return;

  form.addEventListener('submit', event => {
    clearClientErrors(form);
    let hasErrors = false;

    if (!form.firstName.value.trim() || form.firstName.value.trim().length < 2) {
      showClientError(form.firstName, 'El nombre es obligatorio y debe tener al menos 2 caracteres.');
      hasErrors = true;
    }

    if (!form.lastName.value.trim() || form.lastName.value.trim().length < 2) {
      showClientError(form.lastName, 'El apellido es obligatorio y debe tener al menos 2 caracteres.');
      hasErrors = true;
    }

    if (!form.email.value.trim() || !emailRegex.test(form.email.value.trim())) {
      showClientError(form.email, 'Ingresá un email válido.');
      hasErrors = true;
    }

    if (!validateImage(form.image)) {
      showClientError(form.image, 'La imagen debe ser JPG, JPEG, PNG o GIF.');
      hasErrors = true;
    }

    if (hasErrors) event.preventDefault();
  });
}

attachRegisterValidation();
attachLoginValidation();
attachUserEditValidation();
