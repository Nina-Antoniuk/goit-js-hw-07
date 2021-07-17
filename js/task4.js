let counterValue = document.querySelector('#value'); 
const decrementBtnEl = document.querySelector('[data-action="decrement"]')
const incrementBtnEl = document.querySelector('[data-action="increment"]')

decrementBtnEl.addEventListener('click', decrement)
incrementBtnEl.addEventListener('click', increment);



function increment() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

function decrement() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}


