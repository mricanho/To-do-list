/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/logic */ \"./src/modules/logic.js\");\n/* harmony import */ var _modules_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/listeners */ \"./src/modules/listeners.js\");\n\n\n\n(0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.render)();\n(0,_modules_listeners__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.defaultProject)();\n(0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.defaultTask)();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/listeners.js":
/*!**********************************!*\
  !*** ./src/modules/listeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/modules/logic.js\");\n\n\nconst displayModal = document.getElementById('launch-modal');\nconst taskModal = document.getElementById('task-modal');\nconst closeModal = document.querySelector('#close-modal');\nconst closeModal2 = document.querySelector('#close-modal2');\nconst closeModal3 = document.querySelector('#close-modal3');\nconst openTaskForm = document.getElementById('newtask-b');\nconst deleteListButton = document.getElementById('data-delete-list-button');\nconst cancelForm = document.getElementById('cancel-form');\nconst cancelForm2 = document.getElementById('cancel-form2');\nconst cancelForm3 = document.getElementById('cancel-form3');\nconst newListForm = document.getElementById('data-new-list-form');\nconst deleteModal = document.getElementById('delete-modal');\n\nconst editTaskForm = document.getElementById('yay');\n\nconst listeners = () => {\n\n  \n  openTaskForm.addEventListener('click', () => {\n    displayModal.classList.add('is-active');\n  });\n\n  closeModal.addEventListener('click', () => {\n    displayModal.classList.remove('is-active');\n  });\n\n  cancelForm.addEventListener('click', () => {\n    displayModal.classList.remove('is-active');\n  });\n\n  document.addEventListener('keydown', ({ key }) => {\n    if (key === 'Escape') {\n      displayModal.classList.remove('is-active');\n    }\n  });\n\n  closeModal2.addEventListener('click', () => {\n    taskModal.classList.remove('is-active');\n  });\n\n  cancelForm2.addEventListener('click', () => {\n    taskModal.classList.remove('is-active');\n  });\n\n  document.addEventListener('keydown', ({ key }) => {\n    if (key === 'Escape') {\n      taskModal.classList.remove('is-active');\n    }\n  });\n\n  closeModal3.addEventListener('click', () => {\n    deleteModal.classList.remove('is-active');\n  });\n\n  cancelForm3.addEventListener('click', () => {\n    deleteModal.classList.remove('is-active');\n  });\n\n  document.addEventListener('keydown', ({ key }) => {\n    if (key === 'Escape') {\n      deleteModal.classList.remove('is-active');\n    }\n  });\n\n  deleteListButton.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.deleteProject);\n\n  _logic__WEBPACK_IMPORTED_MODULE_0__.listContainer.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.selectListContainer);\n\n  _logic__WEBPACK_IMPORTED_MODULE_0__.taskForm.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.formLogic);\n\n  _logic__WEBPACK_IMPORTED_MODULE_0__.editForm.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.editLogic);\n\n  _logic__WEBPACK_IMPORTED_MODULE_0__.deleteForm.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.deleteLogic);\n\n  document.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.deleteTask);\n\n  _logic__WEBPACK_IMPORTED_MODULE_0__.taskForm.addEventListener('submit', _logic__WEBPACK_IMPORTED_MODULE_0__.formLogic);\n\n  newListForm.addEventListener('submit', _logic__WEBPACK_IMPORTED_MODULE_0__.submitList);\n\n  document.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.clickHandler);\n\n/*   document.addEventListener('click', deleteTask); */\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listeners);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/listeners.js?");

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultProject\": () => (/* binding */ defaultProject),\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"selectListContainer\": () => (/* binding */ selectListContainer),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"listContainer\": () => (/* binding */ listContainer),\n/* harmony export */   \"formLogic\": () => (/* binding */ formLogic),\n/* harmony export */   \"taskForm\": () => (/* binding */ taskForm),\n/* harmony export */   \"submitList\": () => (/* binding */ submitList),\n/* harmony export */   \"clickHandler\": () => (/* binding */ clickHandler),\n/* harmony export */   \"defaultTask\": () => (/* binding */ defaultTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"editForm\": () => (/* binding */ editForm),\n/* harmony export */   \"editLogic\": () => (/* binding */ editLogic),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"deleteObject\": () => (/* binding */ deleteObject),\n/* harmony export */   \"deleteForm\": () => (/* binding */ deleteForm),\n/* harmony export */   \"deleteLogic\": () => (/* binding */ deleteLogic)\n/* harmony export */ });\nconst listContainer = document.getElementById('data-lists');\nconst newListInput = document.getElementById('data-new-list-input');\nconst listDisplayContainer = document.getElementById(\n  'data-list-display-container',\n);\nconst listTitleElemnt = document.getElementById('data-list-title');\nconst tasksContainer = document.getElementById('data-tasks');\nconst taskTemplate = document.getElementById('task-template');\nconst displayModal = document.getElementById('launch-modal');\nconst taskForm = document.querySelector('[data-submit-task]');\nconst titleTask = document.querySelector('[data-title-task]');\nconst descriptionTask = document.querySelector('[data-description-task]');\nconst dateTask = document.querySelector('[data-date-task]');\nconst priorityTask = document.querySelector('[data-priority-task]');\n\nconst LOCAL_STORAGE_LIST_KEY = 'task.lists';\nconst LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\nlet selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);\n\nconst taskModal = document.getElementById('task-modal');\nconst editForm = document.querySelector('[data-submit-task2]');\nconst deleteObject = document.querySelector('[data-delete-button]');\nconst titleTask2 = document.querySelector('[data-title-task2]');\nconst descriptionTask2 = document.querySelector('[data-description-task2]');\nconst dateTask2 = document.querySelector('[data-date-task2]');\nconst priorityTask2 = document.querySelector('[data-priority-task2]');\n\nconst deleteModal = document.getElementById('delete-modal');\nconst deleteForm = document.querySelector('[data-submit-task3]');\n\n\nconst taskManipulation = (task) => {\n  \n  const taskElement = document.importNode(taskTemplate.content, true);\n  const listElement = document.createElement('li');\n  listElement.dataset.listId = task.id;\n  const checkbox = taskElement.querySelector('input');\n  checkbox.id = task.id;\n  const contentTask = taskElement.querySelector('p');\n  const descTask = taskElement.getElementById('description');\n  const dateTask = taskElement.getElementById('date-task');\n  const priorityTask = taskElement.getElementById('final-priority');\n  const editButton=taskElement.getElementById('edit');\n  editButton.id = task.id;\n  const deleteButton = taskElement.getElementById('delete-task');\n  deleteButton.id = task.id;\n  contentTask.htmlfor = task.id;\n  contentTask.append(task.name);\n  descTask.append(task.description);\n  dateTask.append(task.date);\n\n  priorityTask.append(task.priority);\n  listElement.appendChild(taskElement);\n  tasksContainer.appendChild(listElement);\n};\n\nconst clearElement = (element) => {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n};\n\nconst renderTasks = (selectedList) => {\n  selectedList.tasks.forEach((task) => {\n    taskManipulation(task);\n  });\n};\n\n\n// CHANGE HERE\n\n\nconst showRender = () => {\n  const selectedList = lists.find((list) => list.id === selectedListId);\n  if (selectedListId === null || selectedListId === 'null') {\n    listDisplayContainer.style.display = 'none';\n  } else {\n    listDisplayContainer.style.display = '';\n    listTitleElemnt.innerText = selectedList.name;\n    clearElement(tasksContainer);\n    renderTasks(selectedList);\n  }\n};\n\n\n// CHANGE HERE\n\nconst renderLists = () => {\n  lists.forEach((list) => {\n    const listElement = document.createElement('li');\n    listElement.dataset.listId = list.id;\n    listElement.setAttribute(\n      'class',\n      'subtitle ml-3 is-justify-content-space-between',\n    );\n    listElement.innerText = list.name;\n    if (list.id === selectedListId) {\n      listElement.classList.add('active-list');\n    }\n    listContainer.appendChild(listElement);\n  });\n};\n\nconst save = () => {\n  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));\n  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);\n};\n\nconst render = () => {\n  clearElement(listContainer);\n  renderLists();\n  showRender();\n};\n\nconst saveAndRender = () => {\n  save();\n  render();\n};\n\nconst deleteProject = () => {\n  lists = lists.filter((list) => list.id !== selectedListId);\n  selectedListId = null;\n  saveAndRender();\n};\n\nconst selectListContainer = (e) => {\n  if (e.target.tagName.toLowerCase() === 'li') {\n    selectedListId = e.target.dataset.listId;\n    saveAndRender();\n  }\n};\n\nconst createTask = (name, description, date, priority) => ({\n  id: Date.now().toString(),\n  name,\n  description,\n  date,\n  priority,\n});\n\nconst formLogic = (e) => {\n  e.preventDefault();\n  const taskTitle = titleTask.value;\n  if (taskTitle === null || taskTitle === '') return;\n  const taskDescription = descriptionTask.value;\n  if (taskDescription === null || taskDescription === '') return;\n  const taskDate = dateTask.value;\n  if (taskDate === null || taskDate === '') return;\n  const taskPriority = priorityTask.value;\n  if (taskPriority === null || taskPriority === '') return;\n  const task = createTask(taskTitle, taskDescription, taskDate, taskPriority);\n  titleTask.value = null;\n  descriptionTask.value = null;\n  dateTask.value = null;\n  priorityTask.value = null;\n  displayModal.classList.remove('is-active');\n  const selectedList = lists.find((list) => list.id === selectedListId);\n  selectedList.tasks.push(task);\n  saveAndRender();\n};\n\nconst editLogic = (e) => {\n  e.preventDefault();\n  const taskTitle = titleTask2.value;\n  if (taskTitle === null || taskTitle === '') return;\n  const taskDescription = descriptionTask2.value;\n  if (taskDescription === null || taskDescription === '') return;\n  const taskDate = dateTask2.value;\n  if (taskDate === null || taskDate === '') return;\n  const taskPriority = priorityTask2.value;\n  if (taskPriority === null || taskPriority === '') return;\n  const task = createTask(taskTitle, taskDescription, taskDate, taskPriority);\n  titleTask2.value = null;\n  descriptionTask2.value = null;\n  dateTask2.value = null;\n  priorityTask2.value = null;\n  taskModal.classList.remove('is-active');\n  const projectIndex = getProjectIndex(selectedListId);\n  const taskIndex = lists[projectIndex].tasks.findIndex((pj) => pj.id == e.target.id);\n  const selectedList = lists.find((list) => list.id === selectedListId);\n\n  lists[projectIndex].tasks.splice(taskIndex, 1);\n  selectedList.tasks.push(task);\n\n  saveAndRender();\n};\n\nconst deleteLogic = (e) => {\n  e.preventDefault();\n  deleteModal.classList.remove('is-active');\n  const projectIndex = getProjectIndex(selectedListId);\n  const taskIndex = lists[projectIndex].tasks.findIndex((pj) => pj.id == e.target.id);\n  lists[projectIndex].tasks.splice(taskIndex, 1);\n  console.log(e.target.id);\n  saveAndRender();\n}\n\n\n\nconst createList = (name) => ({\n  id: Date.now().toString(),\n  name,\n  tasks: [],\n});\n\nconst submitList = (e) => {\n  e.preventDefault();\n  const listName = newListInput.value;\n  if (listName === null || listName === '') return;\n  const list = createList(listName);\n  newListInput.value = null;\n  lists.push(list);\n  saveAndRender();\n};\n\nconst defaultProject = () => {\n  const list = createList('Default Project');\n  if (lists === undefined || lists.length === 0) {\n    lists.push(list);\n  }\n  saveAndRender();\n};\n\nconst defaultTask = () => {\n  const task = createTask(\n    'The firt task',\n    'Here you need to write the description of the task',\n    '2021-12-12',\n    '9',\n  );\n  const selectedList = lists[0];\n  if (selectedList.tasks === undefined || selectedList.tasks.length === 0) {\n    selectedList.tasks.push(task);\n  }\n  saveAndRender();\n};\n\n// CHANGE HERE\n\nconst deleteTask = (e) => {\n  if (e.target.matches('.delete-task')) {\n    deleteModal.classList.add('is-active');\n    const projectIndex = getProjectIndex(selectedListId);\n    const task = lists[projectIndex].tasks.find(\n      task => task.id === e.target.id\n    )\n  }\n};\n\nconst clickHandler = (e) => {\n  if (e.target.matches('.tryYes')) {\n    taskModal.classList.add('is-active');\n    const projectIndex = getProjectIndex(selectedListId);\n    const task = lists[projectIndex].tasks.find(\n      task => task.id === e.target.id\n    )\n    const title = document.getElementById('titleModal');\n    const description=document.getElementById('descriptionModal');\n    title.value = task.name;\n    description.value = task.description;\n    const date = document.getElementById('dateModal');\n    date.value = task.date;\n    const priority=document.getElementById('priorityModal');\n    priority.value = task.priority;\n  }\n};\n\n\n// CHANGE HERE\n\n\n\n// try the next method, but didn't work, it's not use it in any \nconst editTask = () => {\n  const button = [...document.querySelectorAll('.tryYes')];\n  button.map((btn) => {\n    btn.addEventListener('click', (e) => {\n      const { id } = e.target;\n      const projectIndex = getProjectIndex(selectedListId);\n      const taskIndex = lists[projectIndex].tasks.findIndex(\n        (task) => task.id == id,\n      );\n\n      lists[projectIndex][taskIndex] = newvalue;\n    });\n  });\n};\n\nconst getProjectIndex = (id) => lists.findIndex((pj) => pj.id == id);\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/logic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;