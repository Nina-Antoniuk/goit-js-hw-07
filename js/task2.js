const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListElelements = document.querySelector('#ingredients')

const createListElement = arr => {
  return arr.map(el => {
    const ingredientsListItemEl = document.createElement('li')
    ingredientsListItemEl.textContent = el;
    return ingredientsListItemEl;
  })
}
const ingredientsListItemElelements = createListElement(ingredients);

ingredientsListElelements.append(...ingredientsListItemElelements)