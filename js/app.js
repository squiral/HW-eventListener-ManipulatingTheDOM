document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click', handleDeleteClick);

})

const handleFormSubmit = function (event) {
  event.preventDefault();

  const pantheonListItem = createPantheonListItem(event.target);
  const pantheonList = document.querySelector('#pantheon-list');
  pantheonList.appendChild(pantheonListItem);

  event.target.reset();
}

const createPantheonListItem = function (form) {
  const pantheonListItem = document.createElement('li');
  pantheonListItem.classList.add('pantheon-list-item');
  pantheonListItem.classList.add(`${form.domain.value.toLowerCase()}`)
  pantheonListItem.id = `${form.generation.value.toLowerCase()}`

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  pantheonListItem.appendChild(name);

  const roman_name = document.createElement('h3');
  roman_name.textContent = `Roman Name: ${form.roman_name.value}`;
  pantheonListItem.appendChild(roman_name);

  const domain = document.createElement('p');
  domain.textContent = `Domain: ${form.domain.value}`;
  pantheonListItem.appendChild(domain);

  const generation = document.createElement('p');
  generation.textContent = form.generation.value;
  generation.id = `${form.generation.value.toLowerCase()}-p`;
  pantheonListItem.appendChild(generation);

  return pantheonListItem;
}

const handleDeleteClick = function (event) {
  const pantheonList = document.querySelector('#pantheon-list');
  pantheonList.innerHTML = '';
}

// const generationStyle = function (element, value) {
//   switch (value) {
//     case 'Primordial':
//     element.id = 'primordial';
//     break;
//     case 'Titan':
//     element.id = 'titan';
//     break;
//     case 'Olympian':
//     element.id = 'olympian';
//     break;
//   }
// }
