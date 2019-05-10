document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleFormSubmit);

})

const handleFormSubmit = function (event) {
  event.preventDefault();

  const pantheonListItem = createPantheonListItem(event.target);
  const pantheonList = document.querySelector('#pantheon-list');
  pantheonList.appendChild(pantheonListItem);
}


const createPantheonListItem = function (form) {
  const pantheonListItem = document.createElement('li');
  pantheonListItem.classList.add('pantheon-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  pantheonListItem.appendChild(name);

  return pantheonListItem;


}
