const categoriesListElement = document.querySelector('#categories');
const categoriesListItemElement = document.querySelectorAll('.item');

const headersTextContent = [...categoriesListItemElement].map(el => {
  return `Категория: ${el.querySelector('h2').textContent}, количество элементов: ${el.lastElementChild.childElementCount}`;
});


console.log(`В списке ${categoriesListElement.childElementCount} категории.`);
console.log( headersTextContent.join( '; \n' ));