
const listContainer = document.getElementById('data-lists');
const newListInput = document.getElementById('data-new-list-input');
const listDisplayContainer = document.getElementById('data-list-display-container');
const listTitleElemnt = document.getElementById('data-list-title');
const tasksContainer = document.getElementById('data-tasks');
const taskTemplate = document.getElementById('task-template');
const displayModal = document.getElementById('launch-modal');
const taskForm = document.querySelector('[data-submit-task]');
const titleTask = document.querySelector('[data-title-task]');
const descriptionTask = document.querySelector('[data-description-task]');
const dateTask = document.querySelector('[data-date-task]');
const priorityTask = document.querySelector('[data-priority-task]')

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

function deleteProject(e) {
  lists = lists.filter((list) => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
}

function selectListContainer(e) {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
}

function formLogic(e) {
  e.preventDefault();
  const taskTitle = titleTask.value;
  if (taskTitle == null || taskTitle === '') return;
  const taskDescription = descriptionTask.value;
  if (taskDescription == null || taskDescription === '') return;
  const taskDate = dateTask.value;
  if (taskDate == null || taskDate === '') return;
  const taskPriority = priorityTask.value;
  if (taskPriority == null || taskPriority === '') return;
  const task = createTask(taskTitle, taskDescription, taskDate, taskPriority);
  titleTask.value = null;
  descriptionTask.value = null;
  dateTask.value = null;
  priorityTask.value = null;
  displayModal.classList.remove('is-active');
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks.push(task);
  saveAndRender();
}

function submitList(e) {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === '') return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
}

function createList(name) {
  return {
    id: Date.now().toString(),
    name,
    tasks: [],
  };
}

function createTask(name, description, date, priority) {
  return {
    id: Date.now().toString(),
    name,
    description,
    date,
    priority
  };
}

function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

function render() {
  clearElement(listContainer);
  renderLists();
  showRender();
}

function showRender() {
  const selectedList = lists.find((list) => list.id === selectedListId);
  if (selectedListId == null) {
    listDisplayContainer.style.display = 'none';
  } else {
    listDisplayContainer.style.display = '';
    listTitleElemnt.innerText = selectedList.name;
    clearElement(tasksContainer);
    renderTasks(selectedList);
  }
}

function renderTasks(selectedList) {
  selectedList.tasks.forEach((task) => {
    taskManipulation(task);
  });
}

function taskManipulation(task) {
  const taskElement = document.importNode(taskTemplate.content, true);
  const checkbox = taskElement.querySelector('input');
  checkbox.id = task.id;
  // checkbox.checked = task.complete;
  const contentTask = taskElement.querySelector('p');
  const descTask = taskElement.getElementById('description');
  const dateTask = taskElement.getElementById('date-task');
  const priorityTask = taskElement.getElementById('final-priority');
      
  contentTask.htmlfor = task.id;
  contentTask.append(task.name);
  descTask.append(task.description);
  dateTask.append(task.date);
  priorityTask.append(task.priority);
  tasksContainer.appendChild(taskElement);
}


function renderLists() {
  lists.forEach((list) => {
    const listElement = document.createElement('li');
    listElement.dataset.listId = list.id;
    listElement.setAttribute(
      'class',
      'subtitle ml-3 is-justify-content-space-between',
    );
    listElement.innerText = list.name;
    if (list.id === selectedListId) {
      listElement.classList.add('active-list');
    }
    listContainer.appendChild(listElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export {
  render, selectListContainer, deleteProject, listContainer, formLogic, taskForm, submitList,
};
