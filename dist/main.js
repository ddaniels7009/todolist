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

/***/ "./src/createNote.js":
/*!***************************!*\
  !*** ./src/createNote.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"note\": () => (/* binding */ note)\n/* harmony export */ });\n\n\n// Create note objects using a factory function\nconst note = (title, date) => {\n\n\n    const getTitle = () => title;\n    const getDate = () => date;\n    \n\nreturn {title, date, getTitle, getDate }\n\n\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/createNote.js?");

/***/ }),

/***/ "./src/default.js":
/*!************************!*\
  !*** ./src/default.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultPageLoader\": () => (/* binding */ defaultPageLoader)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n//code to run default page when the web page is first loaded\nconst defaultPageLoader = (function() {\n\n// Create divs for default screen \nconst content = document.getElementById('content');\nconst header = document.createElement('div');\nconst outerContainer = document.createElement('div')\nconst nav = document.createElement('div');\nconst innerContainer = document.createElement('div');\nconst lowerInnerContainer = document.createElement('div');\nconst upperInnerContainer = document.createElement('div');\n\n// Create Add Note Button\nconst addNoteButton = document.createElement('button');\n\nnav.setAttribute('id', 'nav');\nheader.setAttribute('id', 'header');\nouterContainer.setAttribute('id', 'outer');\ninnerContainer.setAttribute('id', 'inner');\nlowerInnerContainer.setAttribute('id', 'lowerInner');\nupperInnerContainer.setAttribute('id', 'upperInner');\n\n// Set add button ID\naddNoteButton.setAttribute('id', 'addNoteButton');\naddNoteButton.innerText = \"Add New Note\";\naddNoteButton.addEventListener('click', function () { \n    \n    _ui__WEBPACK_IMPORTED_MODULE_0__.ui.additionForm.classList.toggle('invisible');\n});\n\n\ncontent.appendChild(header);\ncontent.appendChild(outerContainer);\nouterContainer.appendChild(nav);\nouterContainer.appendChild(innerContainer);\ninnerContainer.appendChild(upperInnerContainer);\ninnerContainer.appendChild(lowerInnerContainer);\n\n//Append add new note button to the lower-inner container\nlowerInnerContainer.appendChild(addNoteButton);\n\nreturn { content, outerContainer, nav, innerContainer, upperInnerContainer, lowerInnerContainer }\n\n})();\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/default.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default */ \"./src/default.js\");\n/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes */ \"./src/notes.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _createNote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createNote */ \"./src/createNote.js\");\n\n\n\n\n\n\n\n\n\n// Run default notes upon first page load\n_ui__WEBPACK_IMPORTED_MODULE_3__.ui.startup();\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navbar\": () => (/* binding */ navbar)\n/* harmony export */ });\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ \"./src/default.js\");\n\n\n// Function to add nav elements\nconst navbar = (function() {\n\n    const primaryListBtn = document.createElement('button');\n    primaryListBtn.classList.add('navButtons');\n    primaryListBtn.innerText = \"Primary List\"\n    _default__WEBPACK_IMPORTED_MODULE_0__.defaultPageLoader.nav.appendChild(primaryListBtn);\n\n\n    // Add default button\n\n\n    // Add new list buttons\n\n\n    // Delete list buttons\n\n})();\n\n\n\n//# sourceURL=webpack://todolist/./src/nav.js?");

/***/ }),

/***/ "./src/notes.js":
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"noteList\": () => (/* binding */ noteList)\n/* harmony export */ });\n/* harmony import */ var _createNote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNote */ \"./src/createNote.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\nconst noteList = (function () {\n\n    // Create default array\n    const defaultNoteArray = [];\n\n    // Function to add a note to the default array\n    function addNote(title, date) {\n\n        defaultNoteArray.push((0,_createNote__WEBPACK_IMPORTED_MODULE_0__.note)(title, date));\n\n    }\n\n    // TODO create a function to delete a note from the array\n    function removeNoteFromArray (innerNote1) {\n        \n        let titleHolder = \"\";\n        \n        for(let i = 0; i < defaultNoteArray.length; i++){\n            if(defaultNoteArray[i].title == innerNote1.innerText){\n                titleHolder = defaultNoteArray[i];\n            }\n        }\n\n        let index = defaultNoteArray.indexOf(titleHolder);\n        console.log(index);\n        defaultNoteArray.splice(index,1);\n\n    }\n\n\n    // Test addNote function\n    addNote('eat food', 1993);\n    \n    return {defaultNoteArray, addNote, removeNoteFromArray}\n\n})();\n\n\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/notes.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ui\": () => (/* binding */ ui)\n/* harmony export */ });\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ \"./src/default.js\");\n/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes */ \"./src/notes.js\");\n//import { format } from 'date-fns'\n\n\n\n// Module to control entire interface\nconst ui = (function () {\n\n    const titleBars = document.getElementsByClassName('noteTitle');\n    const dateBar = document.getElementsByClassName('noteDate');\n    const priorityBar = document.getElementsByClassName('notePriority');\n    const deleteBar = document.getElementsByClassName('noteDelete');\n    const additionForm = document.createElement('div');\n\n\n    function startup() {\n\n        ui.populateContainer();\n        ui.submissionForm();\n\n    }\n\n    //function to add new list to the navbar using an add list button\n    function submissionForm () {\n        \n        //const additionForm = document.createElement('div');\n        additionForm.setAttribute('id', 'additionForm');\n        _default__WEBPACK_IMPORTED_MODULE_0__.defaultPageLoader.lowerInnerContainer.appendChild(additionForm);\n        additionForm.classList.toggle('invisible');\n       \n\n        //Begin\n        let label1 = document.createElement(\"label\");\n        additionForm.appendChild(label1);\n\n        label1.setAttribute(\"for\", \"title\"); //* update id\n        label1.innerHTML = \"\"\n\n        let titleInput = document.createElement(\"input\");\n        additionForm.appendChild(titleInput);\n        titleInput.setAttribute(\"type\", \"text\");\n        titleInput.setAttribute(\"id\", \"title\"); ///* update id\n        titleInput.setAttribute(\"name\", \"title\");\n        titleInput.setAttribute(\"value\", \"Task Name\");\n        //End\n\n        //Begin\n        let label2 = document.createElement(\"label\");\n        additionForm.appendChild(label2);\n\n        label2.setAttribute(\"for\", \"date\");\n        label2.innerHTML = \"\"\n\n        let authorInput = document.createElement(\"input\");\n        additionForm.appendChild(authorInput);\n        authorInput.setAttribute(\"type\", \"date\");\n        authorInput.setAttribute(\"id\", \"date\");\n        authorInput.setAttribute(\"name\", \"date\");\n        authorInput.setAttribute(\"value\", \"\");\n        //End\n\n        //Begin\n        const submitButton = document.createElement('button');\n        submitButton.setAttribute('id', 'submitButton');\n        submitButton.innerText = \"Add\"\n        additionForm.appendChild(submitButton);\n\n\n        submitButton.addEventListener('click', function () {\n           _notes__WEBPACK_IMPORTED_MODULE_1__.noteList.addNote((document.getElementById(\"title\").value),\n            document.getElementById(\"date\").value);\n            console.log('working');\n            additionForm.classList.toggle('invisible');\n            populateContainer();\n            resetFields();\n            \n        \n        })\n        //End\n\n    \n        \n    }\n    \n    // Function to add object to container elements\n    function populateContainer () {\n        createNoteContainer();\n        _notes__WEBPACK_IMPORTED_MODULE_1__.noteList.defaultNoteArray.forEach(myFunction);\n\n    };\n\n    function myFunction (item, index, array) {\n\n        ui.titleBars[index].innerText = item.getTitle();\n        ui.dateBar[index].innerText = item.getDate();\n\n    };\n\n    function resetFields() {\n        document.getElementById(\"title\").value = \"\";\n        document.getElementById(\"date\").value = \"\";\n    }\n\n\n\n    //function to remove projects from the nav bar\n\n\n    //funtion to create a new note/note container using object information\n    function createNoteContainer () {\n\n        //Create Note Container\n        const noteContainer = document.createElement('div');\n        const innerNote1 = document.createElement('div');\n        const innerNote2 = document.createElement('div');\n        const innerNote3 = document.createElement('div');\n        const innerNote4 = document.createElement('div');\n        const deleteButton = document.createElement('button');\n\n        noteContainer.classList.add('listItem');\n       \n        \n        innerNote1.classList.add('noteTitle');\n        innerNote2.classList.add('noteDate');\n        innerNote3.classList.add('notePriority');\n        innerNote4.classList.add('noteDelete');\n        \n        \n        _default__WEBPACK_IMPORTED_MODULE_0__.defaultPageLoader.upperInnerContainer.appendChild(noteContainer);\n        noteContainer.appendChild(innerNote1);\n        noteContainer.appendChild(innerNote2);\n        noteContainer.appendChild(innerNote3);\n        noteContainer.appendChild(innerNote4);\n\n        // Format Delete Button\n        deleteButton.classList.add('deleteButton');\n        deleteButton.innerText = \"delete\";\n        deleteButton.addEventListener('click', function() { \n            deleteNoteContainer(noteContainer);\n            _notes__WEBPACK_IMPORTED_MODULE_1__.noteList.removeNoteFromArray(innerNote1);\n        });\n\n        innerNote4.appendChild(deleteButton);\n\n        return noteContainer, innerNote1,innerNote2,innerNote3,innerNote4;\n    }\n\n    \n    //create a function to delete a note's container\n    function deleteNoteContainer(noteContainer) {\n        _default__WEBPACK_IMPORTED_MODULE_0__.defaultPageLoader.upperInnerContainer.removeChild(noteContainer);\n\n    }\n\n    //function to change note priority\n\nreturn {startup, additionForm, submissionForm, populateContainer, myFunction, createNoteContainer, titleBars, dateBar, priorityBar, deleteBar, submissionForm }\n\n\n\n})();\n\n\n\n//# sourceURL=webpack://todolist/./src/ui.js?");

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