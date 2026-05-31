const productImageExtensions = ['jpg', 'jpeg', 'png', 'gif'];

function clearProductErrors(form) {
  form.querySelectorAll('.client-error').forEach(error => error.remove());
  form.querySelectorAll('.input-error').forEach(field => field.classList.remove('input-error'));
}

function showProductError(field, message) {
  field.classList.add('input-error');
  const error = document.createElement('small');
  error.className = 'form-error client-error';
  error.innerText = message;
  field.insertAdjacentElement('afterend', error);
}

function hasValidImageExtension(value) {
  if (!value.trim()) return true;
  const extension = value.split('.').pop().toLowerCase();
  return productImageExtensions.includes(extension);
}

const productForm = document.querySelector('.validate-product');

if (productForm) {
  productForm.addEventListener('submit', event => {
    clearProductErrors(productForm);
    let hasErrors = false;

    const name = productForm.name;
    const description = productForm.description;
    const image = productForm.image;
    const category = productForm.category_id;
    const brand = productForm.brand_id;
    const price = productForm.price;

    if (!name.value.trim() || name.value.trim().length < 5) {
      showProductError(name, 'El nombre es obligatorio y debe tener al menos 5 caracteres.');
      hasErrors = true;
    }

    if (!description.value.trim() || description.value.trim().length < 20) {
      showProductError(description, 'La descripción debe tener al menos 20 caracteres.');
      hasErrors = true;
    }

    if (!hasValidImageExtension(image.value)) {
      showProductError(image, 'La imagen debe tener extensión JPG, JPEG, PNG o GIF.');
      hasErrors = true;
    }

    if (!category.value) {
      showProductError(category, 'Seleccioná una categoría.');
      hasErrors = true;
    }

    if (!brand.value) {
      showProductError(brand, 'Seleccioná una marca.');
      hasErrors = true;
    }

    if (!price.value || Number(price.value) <= 0) {
      showProductError(price, 'El precio debe ser mayor a cero.');
      hasErrors = true;
    }

    if (hasErrors) event.preventDefault();
  });
}
