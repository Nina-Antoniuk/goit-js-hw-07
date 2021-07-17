const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', inputChangeHandl)

function inputChangeHandl() {
  if (inputEl.value.length === 0) {
    return outputEl.textContent = 'незнакомец'
  }
  return outputEl.textContent = inputEl.value;
}