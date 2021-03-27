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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/modules/logic.js\");\n\r\n\r\nconst displayModal = document.getElementById('launch-modal');\r\nconst taskModal = document.getElementById('task-modal');\r\nconst closeModal = document.querySelector('#close-modal');\r\nconst closeModal2 = document.querySelector('#close-modal2');\r\nconst openTaskForm = document.getElementById('newtask-b');\r\nconst deleteListButton = document.getElementById('data-delete-list-button');\r\nconst cancelForm = document.getElementById('cancel-form');\r\nconst cancelForm2 = document.getElementById('cancel-form2');\r\nconst newListForm = document.getElementById('data-new-list-form');\r\n\r\nconst listeners = () => {\r\n  openTaskForm.addEventListener('click', () => {\r\n    displayModal.classList.add('is-active');\r\n  });\r\n\r\n  closeModal.addEventListener('click', () => {\r\n    displayModal.classList.remove('is-active');\r\n  });\r\n\r\n  cancelForm.addEventListener('click', () => {\r\n    displayModal.classList.remove('is-active');\r\n  });\r\n\r\n  document.addEventListener('keydown', ({ key }) => {\r\n    if (key === 'Escape') {\r\n      displayModal.classList.remove('is-active');\r\n    }\r\n  });\r\n\r\n  closeModal2.addEventListener('click', () => {\r\n    taskModal.classList.remove('is-active');\r\n  });\r\n\r\n  cancelForm2.addEventListener('click', () => {\r\n    taskModal.classList.remove('is-active');\r\n  });\r\n\r\n  document.addEventListener('keydown', ({ key }) => {\r\n    if (key === 'Escape') {\r\n      taskModal.classList.remove('is-active');\r\n    }\r\n  });\r\n\r\n  deleteListButton.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.deleteProject);\r\n\r\n  _logic__WEBPACK_IMPORTED_MODULE_0__.listContainer.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.selectListContainer);\r\n\r\n  _logic__WEBPACK_IMPORTED_MODULE_0__.taskForm.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.formLogic);\r\n\r\n  _logic__WEBPACK_IMPORTED_MODULE_0__.editForm.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.editLogic);\r\n\r\n  _logic__WEBPACK_IMPORTED_MODULE_0__.taskForm.addEventListener('submit', _logic__WEBPACK_IMPORTED_MODULE_0__.formLogic);\r\n\r\n  newListForm.addEventListener('submit', _logic__WEBPACK_IMPORTED_MODULE_0__.submitList);\r\n\r\n  document.addEventListener('click', _logic__WEBPACK_IMPORTED_MODULE_0__.clickHandler);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listeners);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/listeners.js?");

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultProject\": () => (/* binding */ defaultProject),\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"selectListContainer\": () => (/* binding */ selectListContainer),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"listContainer\": () => (/* binding */ listContainer),\n/* harmony export */   \"formLogic\": () => (/* binding */ formLogic),\n/* harmony export */   \"taskForm\": () => (/* binding */ taskForm),\n/* harmony export */   \"submitList\": () => (/* binding */ submitList),\n/* harmony export */   \"clickHandler\": () => (/* binding */ clickHandler),\n/* harmony export */   \"defaultTask\": () => (/* binding */ defaultTask),\n/* harmony export */   \"editForm\": () => (/* binding */ editForm),\n/* harmony export */   \"editLogic\": () => (/* binding */ editLogic),\n/* harmony export */   \"deleteObject\": () => (/* binding */ deleteObject)\n/* harmony export */ });\nconst listContainer = document.getElementById('data-lists');\r\nconst newListInput = document.getElementById('data-new-list-input');\r\nconst listDisplayContainer = document.getElementById(\r\n  'data-list-display-container',\r\n);\r\nconst listTitleElemnt = document.getElementById('data-list-title');\r\nconst tasksContainer = document.getElementById('data-tasks');\r\nconst taskTemplate = document.getElementById('task-template');\r\nconst displayModal = document.getElementById('launch-modal');\r\nconst taskForm = document.querySelector('[data-submit-task]');\r\nconst titleTask = document.querySelector('[data-title-task]');\r\nconst descriptionTask = document.querySelector('[data-description-task]');\r\nconst dateTask = document.querySelector('[data-date-task]');\r\nconst priorityTask = document.querySelector('[data-priority-task]');\r\n\r\nconst LOCAL_STORAGE_LIST_KEY = 'task.lists';\r\nconst LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';\r\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\r\nlet selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);\r\n\r\nconst taskModal = document.getElementById('task-modal');\r\nconst editForm = document.querySelector('[data-submit-task2]');\r\nconst deleteObject = document.querySelector('[data-delete-button]');\r\nconst titleTask2 = document.querySelector('[data-title-task2]');\r\nconst descriptionTask2 = document.querySelector('[data-description-task2]');\r\nconst dateTask2 = document.querySelector('[data-date-task2]');\r\nconst priorityTask2 = document.querySelector('[data-priority-task2]');\r\n\r\nconst taskManipulation = (task) => {\r\n  const taskElement = document.importNode(taskTemplate.content, true);\r\n  const listElement = document.createElement('li');\r\n  listElement.dataset.listId = task.id;\r\n  const checkbox = taskElement.querySelector('input');\r\n  checkbox.id = task.id;\r\n  const contentTask = taskElement.querySelector('p');\r\n  const descTask = taskElement.getElementById('description');\r\n  const dateTask = taskElement.getElementById('date-task');\r\n  const priorityTask = taskElement.getElementById('final-priority');\r\n  const editButton = taskElement.getElementById('edit');\r\n  editButton.id = task.id;\r\n\r\n  contentTask.htmlfor = task.id;\r\n  contentTask.append(task.name);\r\n  descTask.append(task.description);\r\n  dateTask.append(task.date);\r\n\r\n  priorityTask.append(task.priority);\r\n  listElement.appendChild(taskElement);\r\n  tasksContainer.appendChild(listElement);\r\n};\r\n\r\nconst clearElement = (element) => {\r\n  while (element.firstChild) {\r\n    element.removeChild(element.firstChild);\r\n  }\r\n};\r\n\r\nconst renderTasks = (selectedList) => {\r\n  selectedList.tasks.forEach((task) => {\r\n    taskManipulation(task);\r\n  });\r\n};\r\n\r\nconst showRender = () => {\r\n  const selectedList = lists.find((list) => list.id === selectedListId);\r\n  if (selectedListId === null || selectedListId === 'null') {\r\n    listDisplayContainer.style.display = 'none';\r\n  } else {\r\n    listDisplayContainer.style.display = '';\r\n    listTitleElemnt.innerText = selectedList.name;\r\n    clearElement(tasksContainer);\r\n    renderTasks(selectedList);\r\n  }\r\n};\r\n\r\nconst renderLists = () => {\r\n  lists.forEach((list) => {\r\n    const listElement = document.createElement('li');\r\n    listElement.dataset.listId = list.id;\r\n    listElement.setAttribute(\r\n      'class',\r\n      'subtitle ml-3 is-justify-content-space-between',\r\n    );\r\n    listElement.innerText = list.name;\r\n    if (list.id === selectedListId) {\r\n      listElement.classList.add('active-list');\r\n    }\r\n    listContainer.appendChild(listElement);\r\n  });\r\n};\r\n\r\nconst save = () => {\r\n  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));\r\n  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);\r\n};\r\n\r\nconst render = () => {\r\n  clearElement(listContainer);\r\n  renderLists();\r\n  showRender();\r\n};\r\n\r\nconst saveAndRender = () => {\r\n  save();\r\n  render();\r\n};\r\n\r\nconst deleteProject = () => {\r\n  lists = lists.filter((list) => list.id !== selectedListId);\r\n  selectedListId = null;\r\n  saveAndRender();\r\n};\r\n\r\nconst selectListContainer = (e) => {\r\n  if (e.target.tagName.toLowerCase() === 'li') {\r\n    selectedListId = e.target.dataset.listId;\r\n    saveAndRender();\r\n  }\r\n};\r\n\r\nconst createTask = (name, description, date, priority) => ({\r\n  id: Date.now().toString(),\r\n  name,\r\n  description,\r\n  date,\r\n  priority,\r\n});\r\n\r\nconst formLogic = (e) => {\r\n  e.preventDefault();\r\n  const taskTitle = titleTask.value;\r\n  if (taskTitle === null || taskTitle === '') return;\r\n  const taskDescription = descriptionTask.value;\r\n  if (taskDescription === null || taskDescription === '') return;\r\n  const taskDate = dateTask.value;\r\n  if (taskDate === null || taskDate === '') return;\r\n  const taskPriority = priorityTask.value;\r\n  if (taskPriority === null || taskPriority === '') return;\r\n  const task = createTask(taskTitle, taskDescription, taskDate, taskPriority);\r\n  titleTask.value = null;\r\n  descriptionTask.value = null;\r\n  dateTask.value = null;\r\n  priorityTask.value = null;\r\n  displayModal.classList.remove('is-active');\r\n  const selectedList = lists.find((list) => list.id === selectedListId);\r\n  selectedList.tasks.push(task);\r\n  saveAndRender();\r\n};\r\n\r\nconst getProjectIndex = (id) => lists.findIndex((pj) => pj.id === id);\r\n\r\nconst editLogic = (e) => {\r\n  e.preventDefault();\r\n  const taskTitle = titleTask2.value;\r\n  if (taskTitle === null || taskTitle === '') return;\r\n  const taskDescription = descriptionTask2.value;\r\n  if (taskDescription === null || taskDescription === '') return;\r\n  const taskDate = dateTask2.value;\r\n  if (taskDate === null || taskDate === '') return;\r\n  const taskPriority = priorityTask2.value;\r\n  if (taskPriority === null || taskPriority === '') return;\r\n  const task = createTask(taskTitle, taskDescription, taskDate, taskPriority);\r\n  titleTask2.value = null;\r\n  descriptionTask2.value = null;\r\n  dateTask2.value = null;\r\n  priorityTask2.value = null;\r\n  taskModal.classList.remove('is-active');\r\n  const projectIndex = getProjectIndex(selectedListId);\r\n  const taskIndex = lists[projectIndex].tasks.findIndex(\r\n    (pj) => pj.id === e.target.id,\r\n  );\r\n  const selectedList = lists.find((list) => list.id === selectedListId);\r\n\r\n  lists[projectIndex].tasks.splice(taskIndex, 1);\r\n  selectedList.tasks.push(task);\r\n\r\n  saveAndRender();\r\n};\r\n\r\nconst createList = (name) => ({\r\n  id: Date.now().toString(),\r\n  name,\r\n  tasks: [],\r\n});\r\n\r\nconst submitList = (e) => {\r\n  e.preventDefault();\r\n  const listName = newListInput.value;\r\n  if (listName === null || listName === '') return;\r\n  const list = createList(listName);\r\n  newListInput.value = null;\r\n  lists.push(list);\r\n  saveAndRender();\r\n};\r\n\r\nconst defaultProject = () => {\r\n  const list = createList('Default Project');\r\n  if (lists === undefined || lists.length === 0) {\r\n    lists.push(list);\r\n  }\r\n  saveAndRender();\r\n};\r\n\r\nconst defaultTask = () => {\r\n  const task = createTask(\r\n    'The firt task',\r\n    'Here you need to write the description of the task',\r\n    '2021-12-12',\r\n    '9',\r\n  );\r\n  const selectedList = lists[0];\r\n  if (selectedList.tasks === undefined || selectedList.tasks.length === 0) {\r\n    selectedList.tasks.push(task);\r\n  }\r\n  saveAndRender();\r\n};\r\n\r\nconst clickHandler = (e) => {\r\n  if (e.target.matches('.tryYes')) {\r\n    taskModal.classList.add('is-active');\r\n    const projectIndex = getProjectIndex(selectedListId);\r\n    const task = lists[projectIndex].tasks.find(\r\n      (task) => task.id === e.target.id,\r\n    );\r\n    const title = document.getElementById('titleModal');\r\n    const description = document.getElementById('descriptionModal');\r\n    title.value = task.name;\r\n    description.value = task.description;\r\n    const date = document.getElementById('dateModal');\r\n    date.value = task.date;\r\n    const priority = document.getElementById('priorityModal');\r\n    priority.value = task.priority;\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/logic.js?");

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