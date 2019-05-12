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
    switch (form.domain.value) {
      case 'Sky':
      pantheonListItem.classList.add('sky');
      break;
      case 'War':
      pantheonListItem.classList.add('war');
      break;
      case 'Hearth':
      pantheonListItem.classList.add('hearth');
      break;
      case 'Ocean':
      pantheonListItem.classList.add('ocean');
      break;
      case 'Underworld':
      pantheonListItem.classList.add('underworld');
      break;
      case 'Sun':
      pantheonListItem.classList.add('sun');
      break;
      case 'Earth':
      pantheonListItem.classList.add('earth');
      break;
    }

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  pantheonListItem.appendChild(name);

  const roman_name = document.createElement('h3');
  roman_name.textContent = `Roman Name: ${form.roman_name.value}`;
  pantheonListItem.appendChild(roman_name);

  const domain = document.createElement('p');
  domain.textContent = `Domain: ${form.domain.value}`;
  pantheonListItem.appendChild(domain);

  return pantheonListItem;
}

const handleDeleteClick = function (event) {
  const pantheonList = document.querySelector('#pantheon-list');
  pantheonList.innerHTML = '';
}
