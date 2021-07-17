const inputControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputControlEl.addEventListener('change', shriftResizing)

function  shriftResizing() {
  textEl.style.fontSize = `${inputControlEl.value}px`;
}