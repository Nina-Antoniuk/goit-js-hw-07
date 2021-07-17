const controlInputEl = document.querySelector('input');
const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');
const divBoxesEl = document.querySelector('#boxes');


renderBtnEl.addEventListener('click', () => createBoxes(controlInputEl.value));
destroyBtnEl.addEventListener('click', destroyBoxes)


function createBoxes(amount) {
  destroyBoxes();

  for (let i = 0; i < Number(amount); i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.marginTop = '20px';
    divEl.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    divBoxesEl.insertAdjacentElement('beforeend', divEl)
  }
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}