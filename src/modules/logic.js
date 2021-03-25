const listContainer = document.getElementById('data-lists');
const newListInput = document.getElementById('data-new-list-input');
const listDisplayContainer = document.getElementById(
  'data-list-display-container',
);
const listTitleElemnt = document.getElementById('data-list-title');
const tasksContainer = document.getElementById('data-tasks');
const taskTemplate = document.getElementById('task-template');
const displayModal = document.getElementById('launch-modal');
const taskForm = document.querySelector('[data-submit-task]');
const titleTask = document.querySelector('[data-title-task]');
const descriptionTask = document.querySelector('[data-description-task]');
const dateTask = document.querySelector('[data-date-task]');
const priorityTask = document.querySelector('[data-priority-task]');

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

const taskModal = document.getElementById('task-modal');

const deleteProject = (e) => {
  lists = lists.filter((list) => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
};

const selectListContainer = (e) => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
};

const formLogic = (e) => {
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
};

const submitList = (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === '') return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
};

const defaultProject = () => {
  const list = createList('Default Project');
  if (lists === undefined || lists.length == 0) {
    lists.push(list);
  }
  saveAndRender();
};

const defaultTask = () => {
  const task = createTask(
    'The firt task',
    'Here you need to write the description of the task',
    '2021-12-12',
    '9',
  );
  const selectedList = lists[0];
  if (selectedList.tasks === undefined || selectedList.tasks.length == 0) {
    selectedList.tasks.push(task);
  }
  saveAndRender();
};

const createList = (name) => ({
  id: Date.now().toString(),
  name,
  tasks: [],
});

const createTask = (name, description, date, priority) => ({
  id: Date.now().toString(),
  name,
  description,
  date,
  priority,
});

const saveAndRender = () => {
  save();
  render();
};

const save = () => {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
};

const render = () => {
  clearElement(listContainer);
  renderLists();
  showRender();
};

const showRender = () => {
  const selectedList = lists.find((list) => list.id === selectedListId);
  if (selectedListId == null) {
    listDisplayContainer.style.display = 'none';
  } else {
    listDisplayContainer.style.display = '';
    listTitleElemnt.innerText = selectedList.name;
    clearElement(tasksContainer);
    renderTasks(selectedList);
  }
};

const renderTasks = (selectedList) => {
  selectedList.tasks.forEach((task) => {
    taskManipulation(task);
  });
};

const taskManipulation = (task) => {
  const taskElement = document.importNode(taskTemplate.content, true);
  const listElement = document.createElement('li');
  listElement.dataset.listId = task.id;
  const checkbox = taskElement.querySelector('input');
  checkbox.id = task.id;
  const contentTask = taskElement.querySelector('p');
  const descTask = taskElement.getElementById('description');
  const dateTask = taskElement.getElementById('date-task');
  const priorityTask = taskElement.getElementById('final-priority');
  const buttonEdit = taskElement.getElementById('edit');

  buttonEdit.setAttribute('id', task.id);

  contentTask.htmlfor = task.id;
  contentTask.append(task.name);
  descTask.append(task.description);
  dateTask.append(task.date);

  priorityTask.append(task.priority);
  listElement.appendChild(taskElement);
  tasksContainer.appendChild(listElement);
};

const renderLists = () => {
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
};

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const clickHandler = (e) => {
  if (e.target.matches('.tryYes')) {
    taskModal.classList.add('is-active');
  }
};

const editTask = () => {
  const button = [...document.querySelectorAll('.tryYes')];
  button.map((btn) => {
    btn.addEventListener('click', (e) => {
      const { id } = e.target;
      const projectIndex = getProjectIndex(selectedListId);
      const taskIndex = lists[projectIndex].tasks.findIndex(
        (task) => task.id == id,
      );

      lists[projectIndex][taskIndex] = newValue;
    });
  });
};

const getProjectIndex = (id) => lists.findIndex((pj) => pj.id == id);

export {
  editTask,
  defaultProject,
  render,
  selectListContainer,
  deleteProject,
  listContainer,
  formLogic,
  taskForm,
  submitList,
  clickHandler,
  defaultTask,
};
