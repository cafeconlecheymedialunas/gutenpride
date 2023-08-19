/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/notion-database-value/edit.js":
/*!**************************************************!*\
  !*** ./src/blocks/notion-database-value/edit.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */



/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
const options = [{
  key: 'small',
  name: 'Small',
  style: {
    fontSize: '50%'
  }
}, {
  key: 'normal',
  name: 'Normal',
  style: {
    fontSize: '100%'
  }
}, {
  key: 'large',
  name: 'Large',
  style: {
    fontSize: '200%'
  }
}, {
  key: 'huge',
  name: 'Huge',
  style: {
    fontSize: '300%'
  }
}];
function Edit({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const [fontSize, setFontSize] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(options[0]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CustomSelectControl, {
    __nextUnconstrainedWidth: true,
    label: "Font Size",
    options: options,
    onChange: ({
      selectedItem
    }) => setFontSize(selectedItem),
    value: options.find(option => option.key === fontSize.key)
  }));
}

/***/ }),

/***/ "./src/blocks/notion-database-value/save.js":
/*!**************************************************!*\
  !*** ./src/blocks/notion-database-value/save.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 */
function save({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, attributes.message);
}

/***/ }),

/***/ "./src/blocks/notion-database-value/editor.scss":
/*!******************************************************!*\
  !*** ./src/blocks/notion-database-value/editor.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/notion-database-value/style.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/notion-database-value/style.scss ***!
  \*****************************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Cannot find module '../../assets/gilbert-color.otf'\n    at tryRunOrWebpackError (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\HookWebpackError.js:88:9)\n    at __webpack_require_module__ (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:5067:12)\n    at __webpack_require__ (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:5024:18)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:5095:20\n    at symbolIterator (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:5002:43\n    at symbolIterator (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:4967:16\n    at symbolIterator (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3527:9)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:4882:8\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:3363:5\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Cache.js:93:5\n    at Hook.eval [as callAsync] (eval at create (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Cache.js:75:18)\n    at ItemCacheFacade.get (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:3331:9)\n    at codeGen (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:4870:11)\n    at symbolIterator (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:4935:15\n    at symbolIterator (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3485:9)\n    at timesSync (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:4900:14\n    at processQueue (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\util\\processAsyncTree.js:61:4)\n    at processTicksAndRejections (node:internal/process/task_queues:78:11)\n-- inner error --\nError: Cannot find module '../../assets/gilbert-color.otf'\n    at webpackMissingModule (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[1]!C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[2]!C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[3]!C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\src\\blocks\\notion-database-value\\style.scss:12:113)\n    at Module.<anonymous> (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[1]!C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[2]!C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[3]!C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\src\\blocks\\notion-database-value\\style.scss:12:218)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\javascript\\JavascriptModulesPlugin.js:452:10\n    at Hook.eval [as call] (eval at create (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\tapable\\lib\\HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:5069:39\n    at tryRunOrWebpackError (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\HookWebpackError.js:83:7)\n    at __webpack_require_module__ (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:5067:12)\n    at __webpack_require__ (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:5024:18)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:5095:20\n    at symbolIterator (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:5002:43\n    at symbolIterator (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:4967:16\n    at symbolIterator (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3527:9)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:4882:8\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:3363:5\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Cache.js:93:5\n    at Hook.eval [as callAsync] (eval at create (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Cache.js:75:18)\n    at ItemCacheFacade.get (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:3331:9)\n    at codeGen (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:4870:11)\n    at symbolIterator (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:4935:15\n    at symbolIterator (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3485:9)\n    at timesSync (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\Compilation.js:4900:14\n    at processQueue (C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\webpack\\lib\\util\\processAsyncTree.js:61:4)\n    at processTicksAndRejections (node:internal/process/task_queues:78:11)\n\nGenerated code for C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[1]!C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[2]!C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[3]!C:\\laragon\\www\\notion-frontent\\wp-content\\plugins\\gutenpride\\src\\blocks\\notion-database-value\\style.scss\n 1 | __webpack_require__.r(__webpack_exports__);\n 2 | /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"C:\\\\laragon\\\\www\\\\notion-frontent\\\\wp-content\\\\plugins\\\\gutenpride\\\\node_modules\\\\css-loader\\\\dist\\\\runtime\\\\sourceMaps.js\");\n 3 | /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n 4 | /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"C:\\\\laragon\\\\www\\\\notion-frontent\\\\wp-content\\\\plugins\\\\gutenpride\\\\node_modules\\\\css-loader\\\\dist\\\\runtime\\\\api.js\");\n 5 | /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n 6 | /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"C:\\\\laragon\\\\www\\\\notion-frontent\\\\wp-content\\\\plugins\\\\gutenpride\\\\node_modules\\\\css-loader\\\\dist\\\\runtime\\\\getUrl.js\");\n 7 | /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n 8 | // Imports\n 9 | \n10 | \n11 | \n12 | var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../assets/gilbert-color.otf'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\n13 | var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n14 | var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n15 | // Module\n16 | ___CSS_LOADER_EXPORT___.push([module.id, \"/**\\n * The following styles get applied both on the front of your site\\n * and in the editor.\\n *\\n * Replace them with your own styles or remove the file completely.\\n */\\n@font-face {\\n  font-family: Gilbert;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: 700;\\n}\\n.wp-block-create-block-database-value {\\n  font-family: Gilbert, sans-serif;\\n  font-size: 64px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/blocks/notion-database-value/style.scss\"],\"names\":[],\"mappings\":\"AAAA;;;;;EAAA;AAOA;EACC,oBAAA;EACA,4CAAA;EACA,gBAAA;AAAD;AAGA;EACC,gCAAA;EACA,eAAA;AADD\",\"sourcesContent\":[\"/**\\n * The following styles get applied both on the front of your site\\n * and in the editor.\\n *\\n * Replace them with your own styles or remove the file completely.\\n */\\n\\n@font-face {\\n\\tfont-family: Gilbert;\\n\\tsrc: url(../../assets/gilbert-color.otf);\\n\\tfont-weight: 700;\\n}\\n\\n.wp-block-create-block-database-value {\\n\\tfont-family: Gilbert, sans-serif;\\n\\tfont-size: 64px;\\n}\"],\"sourceRoot\":\"\"}]);\n17 | // Exports\n18 | /* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n19 | ");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/blocks/notion-database-value/block.json":
/*!*****************************************************!*\
  !*** ./src/blocks/notion-database-value/block.json ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"notion/database-value","version":"0.1.0","title":"Notion Database Value","category":"text","icon":"flag","description":"A Field of Notions database.","attributes":{"message":{"type":"string","source":"text","selector":"div"}},"supports":{"html":false},"textdomain":"notion","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***************************************************!*\
  !*** ./src/blocks/notion-database-value/index.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/notion-database-value/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/notion-database-value/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/notion-database-value/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/notion-database-value/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/blocks/notion-database-value/block.json");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_6__.name, {
  /**
   * Used to construct a preview for the block to be shown in the block inserter.
   */
  example: {
    attributes: {
      message: 'Gutenpride'
    }
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"],
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      height: "2500",
      width: "2500",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "12 0.18999999999999906 487.619 510.941"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934 100.889 154.171V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z",
      "fill-rule": "evenodd"
    }))
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map