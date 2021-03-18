const listContainer = document.getElementById('data-lists');
const newListForm = document.getElementById('data-new-list-form');
const newListInput= document.getElementById('data-new-list-input');

let lists = [{id: 1, name: 'name'}, {id: 2, name: 'name'}];

function render() {
  clearElement(listContainer);
  lists.forEach(list => {
    const listElement = document.createElement('li')
    listElement.dataset.listId = list.id
    listElement.classList.add("subtitle")
    listElement.innerText = list.name
    listContainer.appendChild(listElement)
  })
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

render();