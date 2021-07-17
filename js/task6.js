const validationInputEl = document.querySelector('#validation-input');
const inputLength = validationInputEl.getAttribute('data-length');

validationInputEl.addEventListener('blur', checksNumberOfCharacters);

function checksNumberOfCharacters() {
  if (validationInputEl.value.length !== Number(inputLength)) {
    validationInputEl.classList.remove('valid');
    return validationInputEl.classList.add('invalid');
  }
  validationInputEl.classList.remove('invalid');
  return validationInputEl.classList.add('valid');
}
