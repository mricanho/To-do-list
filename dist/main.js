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

eval("const listContainer = document.getElementById('data-lists');\nconst newListForm = document.getElementById('data-new-list-form');\nconst newListInput= document.getElementById('data-new-list-input');\n\nlet lists = [{id: 1, name: 'name'}, {id: 2, name: 'name'}];\n\nfunction render() {\n  clearElement(listContainer);\n  lists.forEach(list => {\n    const listElement = document.createElement('li')\n    listElement.dataset.listId = list.id\n    listElement.classList.add(\"subtitle\")\n    listElement.innerText = list.name\n    listContainer.appendChild(listElement)\n  })\n}\n\nfunction clearElement(element) {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild)\n  }\n}\n\nrender();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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