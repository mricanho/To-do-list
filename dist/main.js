/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const listContainer = document.getElementById(\"data-lists\");\nconst newListForm = document.getElementById(\"data-new-list-form\");\nconst newListInput = document.getElementById(\"data-new-list-input\");\nconst deleteListButton = document.getElementById(\"data-delete-list-button\");\nconst listDisplayContainer = document.getElementById(\n  \"data-list-display-container\"\n);\nconst listTitleElemnt = document.getElementById(\"data-list-title\");\nconst tasksContainer = document.getElementById(\"data-tasks\");\nconst taskTemplate = document.getElementById(\"task-template\");\n\nconst LOCAL_STORAGE_LIST_KEY = \"task.lists\";\nconst LOCAL_STORAGE_SELECTED_LIST_ID_KEY = \"task.selectedListId\";\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\nlet selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);\n\ndeleteListButton.addEventListener(\"click\", (e) => {\n  lists = lists.filter((list) => list.id !== selectedListId);\n  selectedListId = null;\n  saveAndRender();\n});\n\nlistContainer.addEventListener(\"click\", (e) => {\n  if (e.target.tagName.toLowerCase() === \"li\") {\n    selectedListId = e.target.dataset.listId;\n    saveAndRender();\n  }\n});\n\nnewListForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const listName = newListInput.value;\n  if (listName == null || listName === \"\") return;\n  const list = createList(listName);\n  newListInput.value = null;\n  lists.push(list);\n  saveAndRender();\n});\n\nfunction createList(name) {\n  return {\n    id: Date.now().toString(),\n    name: name,\n    tasks: [],\n  };\n}\n\nfunction saveAndRender() {\n  save();\n  render();\n}\n\nfunction save() {\n  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));\n  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);\n}\n\nfunction render() {\n  clearElement(listContainer);\n  renderLists();\n\n  const selectedList = lists.find((list) => list.id === selectedListId);\n  if (selectedListId == null) {\n    listDisplayContainer.style.display = \"none\";\n  } else {\n    listDisplayContainer.style.display = \"\";\n    listTitleElemnt.innerText = selectedList.name;\n    clearElement(tasksContainer);\n    renderTasks(selectedList);\n  }\n}\n\nfunction renderTasks(selectedList) {\n  selectedList.tasks.forEach((task) => {\n    const taskElement = document.importNode(taskTemplate.content, true);\n    const checkbox = taskElement.querySelector(\"input\");\n    checkbox.id = task.id;\n    checkbox.checked = task.complete;\n    const label = taskElement.querySelector(\"label\");\n    label.htmlfor = task.id;\n    label.append(task.name);\n    tasksContainer.appendChild(taskElement);\n  });\n}\n\nfunction renderLists() {\n  lists.forEach((list) => {\n    const listElement = document.createElement(\"li\");\n    listElement.dataset.listId = list.id;\n    listElement.setAttribute(\n      \"class\",\n      \"subtitle ml-3 is-justify-content-space-between\"\n    );\n    listElement.innerText = list.name;\n    if (list.id === selectedListId) {\n      listElement.classList.add(\"active-list\");\n    }\n    listContainer.appendChild(listElement);\n  });\n}\n\nfunction clearElement(element) {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n\nrender();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;