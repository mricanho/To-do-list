
 
const listContainer = document.getElementById("data-lists");
const newListForm = document.getElementById("data-new-list-form");
const newListInput = document.getElementById("data-new-list-input");
const listDisplayContainer = document.getElementById("data-list-display-container");

const listTitleElemnt = document.getElementById("data-list-title");
const tasksContainer = document.getElementById("data-tasks");
const taskTemplate = document.getElementById("task-template");
// const newTaskForm = document.querySelector("[data-new-task-form]");
// const newTaskInput = document.querySelector("[data-new-task-input]");

const displayModal = document.getElementById("launch-modal");
const taskForm = document.querySelector("[data-submit-task]");
const titleTask = document.querySelector("[data-title-task]");
const descriptionTask = document.querySelector("[data-description-task]");
const dateTask = document.querySelector("[data-date-task]");

const LOCAL_STORAGE_LIST_KEY = "task.lists";
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

function deleteProject(e) {
  lists = lists.filter((list) => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
}

function selectListContainer(e) {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  };
}

function formLogic(e) {
  e.preventDefault();
  const taskTitle = titleTask.value;
  if (taskTitle == null || taskTitle === "") return;
  const taskDescription = descriptionTask.value;
  if (taskDescription == null || taskDescription === "") return;
  const task = createTask(taskTitle, taskDescription);
  titleTask.value = null;
  descriptionTask.value = null;
  displayModal.classList.remove('is-active');
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks.push(task);
  saveAndRender();
}

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === "") return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
});

// newTaskForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const taskName = newTaskInput.value;
//   if (taskName == null || taskName === "") return;
//   const task = createTask(taskName);
//   newTaskInput.value = null;
//   const selectedList = lists.find((list) => list.id === selectedListId);
//   selectedList.tasks.push(task);
//   saveAndRender();
// });

function createList(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}

function createTask(name, description) {
  return {
    id: Date.now().toString(),
    name: name,
    description: description,
    // date: date,
    complete: false,
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

  const selectedList = lists.find((list) => list.id === selectedListId);
  if (selectedListId == null) {
    listDisplayContainer.style.display = "none";
  } else {
    listDisplayContainer.style.display = "";
    listTitleElemnt.innerText = selectedList.name;
    clearElement(tasksContainer);
    renderTasks(selectedList);
  }
}

function renderTasks(selectedList) {
  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = task.id;
    // checkbox.checked = task.complete;
    const contentTask = taskElement.querySelector("p");
    const descTask = taskElement.getElementById("description");
    contentTask.htmlfor = task.id;
    contentTask.append(task.name);
    descTask.append(task.description);
    // const dateTask = taskElement.getElementById("date-task");
    // dateTask.append(task.date);
    tasksContainer.appendChild(taskElement);
  });
}

function renderLists() {
  lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.setAttribute(
      "class",
      "subtitle ml-3 is-justify-content-space-between"
    );
    listElement.innerText = list.name;
    if (list.id === selectedListId) {
      listElement.classList.add("active-list");
    }
    listContainer.appendChild(listElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export { render, selectListContainer, deleteProject, listContainer, formLogic, taskForm }

