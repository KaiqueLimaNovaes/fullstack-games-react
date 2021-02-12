/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".index.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nvar PORT = process.env.PORT || 3008;\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('/', function (req, res) {\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> body{\\n|     padding-top: 150px;\\n| }\");\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _componentes_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .//componentes/menu.js */ \"./src/componentes/menu.js\");\n/* harmony import */ var _rotas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rotas.js */ \"./src/rotas.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n //import Footer from './componentes/footer.js';\n\n\n\n\n\nvar Footer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./componentes/footer.js */ \"./src/componentes/footer.js\"));\n});\n\nfunction App() {\n  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"BrowserRouter\"], null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/React.createElement(\"header\", null, /*#__PURE__*/React.createElement(_componentes_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), /*#__PURE__*/React.createElement(\"main\", null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    fluid: true\n  }, /*#__PURE__*/React.createElement(_rotas_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))), /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_5__[\"Suspense\"], {\n    fallback: /*#__PURE__*/React.createElement(\"p\", null, \"Carregando ...\")\n  }, /*#__PURE__*/React.createElement(Footer, null))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Pages/comentarios/FormNew.css":
/*!*******************************************!*\
  !*** ./src/Pages/comentarios/FormNew.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> :root {\\n|     --yellow: #ecffad;\\n|     --blue: #d7eff1;\");\n\n//# sourceURL=webpack:///./src/Pages/comentarios/FormNew.css?");

/***/ }),

/***/ "./src/Pages/comentarios/FormNew.js":
/*!******************************************!*\
  !*** ./src/Pages/comentarios/FormNew.js ***!
  \******************************************/
/*! exports provided: FormNew, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormNew\", function() { return FormNew; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _FormNew_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormNew.css */ \"./src/Pages/comentarios/FormNew.css\");\n/* harmony import */ var _FormNew_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FormNew_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar FormNew = function FormNew(_ref) {\n  var history = _ref.history;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit;\n\n  var handleOnSubmit = function handleOnSubmit(data) {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"http://localhost:3005/comentarios\", data).then(function (response) {\n      if (response.data.status === \"OK\") {\n        alert(\"Cadastrado com Sucesso\");\n        history.push(\"/comentarios\");\n        window.location.reload();\n      }\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    id: \"corpo\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    id: \"gameboyHeader\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    id: \"wordGeneral\"\n  }, \"Deixe um coment\\xE1rio\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    id: \"screen\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"glass\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    id: \"formComentario\",\n    onSubmit: handleSubmit(handleOnSubmit)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    id: \"wordScreen\"\n  }, \"Nome:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"inputScreen\",\n    type: \"text\",\n    name: \"nome\",\n    ref: register\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    id: \"wordScreen\"\n  }, \"Coment\\xE1rio:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"inputScreenC\",\n    type: \"text\",\n    name: \"comentario\",\n    ref: register\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    id: \"wordName\"\n  }, \"Full stack games\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    id: \"tabela\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"directions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"bLeft\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"bTop\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"bRigth\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"bBottom\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"buttonL\",\n    type: \"submit\",\n    form: \"formComentario\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"buttonS\",\n    onClick: function onClick() {\n      history.push(\"/comentarios\");\n    }\n  }, \"Sair\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"start\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"select\"\n  })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormNew);\n\n//# sourceURL=webpack:///./src/Pages/comentarios/FormNew.js?");

/***/ }),

/***/ "./src/Pages/comentarios/comentarios.css":
/*!***********************************************!*\
  !*** ./src/Pages/comentarios/comentarios.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> #rowHeader{\\n|     justify-content:space-between;\\n|     margin-bottom: 20px;\");\n\n//# sourceURL=webpack:///./src/Pages/comentarios/comentarios.css?");

/***/ }),

/***/ "./src/Pages/comentarios/comentarios.js":
/*!**********************************************!*\
  !*** ./src/Pages/comentarios/comentarios.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lista_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista.js */ \"./src/Pages/comentarios/lista.js\");\n/* harmony import */ var _comentarios_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comentarios.css */ \"./src/Pages/comentarios/comentarios.css\");\n/* harmony import */ var _comentarios_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_comentarios_css__WEBPACK_IMPORTED_MODULE_6__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nfunction Comentarios(_ref) {\n  var history = _ref.history;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      comentarios = _useState2[0],\n      setComentarios = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://localhost:3005/comentarios\").then(function (response) {\n      setComentarios(response.data.comentarios);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    id: \"rowHeader\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Coment\\xE1rios\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"btnC\",\n    onClick: function onClick() {\n      history.push(\"/comentarios/new\");\n    }\n  }, \"Escrever um coment\\xE1rio\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], {\n    path: [\"/comentarios\", \"/comentarios/new\"],\n    component: _lista_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comentarios);\n\n//# sourceURL=webpack:///./src/Pages/comentarios/comentarios.js?");

/***/ }),

/***/ "./src/Pages/comentarios/lista.js":
/*!****************************************!*\
  !*** ./src/Pages/comentarios/lista.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _FormNew_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormNew.js */ \"./src/Pages/comentarios/FormNew.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nfunction Lista(_ref) {\n  var history = _ref.history;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      comentarios = _useState2[0],\n      setComentarios = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"http://localhost:3005/comentarios\").then(function (response) {\n      setComentarios(response.data.comentarios);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"container-fluid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], {\n    striped: true,\n    bordered: true,\n    hover: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Nome\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Coment\\xE1rios\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, comentarios && comentarios.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n      key: item.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, item.nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, item.comentario));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"/comentarios/new\",\n    component: _FormNew_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lista);\n\n//# sourceURL=webpack:///./src/Pages/comentarios/lista.js?");

/***/ }),

/***/ "./src/Pages/contato.js":
/*!******************************!*\
  !*** ./src/Pages/contato.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Contatos = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../componentes/contatos.js */ \"./src/componentes/contatos.js\"));\n});\n\nfunction Contato() {\n  return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n    fallback: /*#__PURE__*/React.createElement(\"p\", null, \"Carregando ...\")\n  }, /*#__PURE__*/React.createElement(Contatos, null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contato);\n\n//# sourceURL=webpack:///./src/Pages/contato.js?");

/***/ }),

/***/ "./src/Pages/lojas.js":
/*!****************************!*\
  !*** ./src/Pages/lojas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Lojas() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    class: \"container-fluid\"\n  }, /*#__PURE__*/React.createElement(\"h2\", null, \"Nossas lojas\"), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(\"div\", {\n    class: \"container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    class: \"row\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    class: \"col\"\n  }, /*#__PURE__*/React.createElement(\"ul\", {\n    class: \"list-group\"\n  }, /*#__PURE__*/React.createElement(\"li\", {\n    class: \"list-group-item\"\n  }, /*#__PURE__*/React.createElement(\"h3\", null, \"S\\xE3o Paulo\")), /*#__PURE__*/React.createElement(\"li\", {\n    class: \"list-group-item\"\n  }, \"Rua kaique, 2500\"), /*#__PURE__*/React.createElement(\"li\", {\n    class: \"list-group-item\"\n  }, \"Centro\"), /*#__PURE__*/React.createElement(\"li\", {\n    class: \"list-group-item\"\n  }, \"11 2525-2525\"))), /*#__PURE__*/React.createElement(\"div\", {\n    class: \"col\"\n  }, /*#__PURE__*/React.createElement(\"ul\", {\n    class: \"list-group\"\n  }, /*#__PURE__*/React.createElement(\"li\", {\n    class: \"list-group-item\"\n  }, /*#__PURE__*/React.createElement(\"h3\", null, \"Guarulhos\")), /*#__PURE__*/React.createElement(\"li\", {\n    class: \"list-group-item\"\n  }, \"Rua Lima, 2500\"), /*#__PURE__*/React.createElement(\"li\", {\n    class: \"list-group-item\"\n  }, \"Centro\"), /*#__PURE__*/React.createElement(\"li\", {\n    class: \"list-group-item\"\n  }, \"11 2827-2827\"))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lojas);\n\n//# sourceURL=webpack:///./src/Pages/lojas.js?");

/***/ }),

/***/ "./src/Pages/pedidos.css":
/*!*******************************!*\
  !*** ./src/Pages/pedidos.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> #inputScreenP{\\n|     width:100%;\\n| }\");\n\n//# sourceURL=webpack:///./src/Pages/pedidos.css?");

/***/ }),

/***/ "./src/Pages/pedidos.js":
/*!******************************!*\
  !*** ./src/Pages/pedidos.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pedidos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedidos.css */ \"./src/Pages/pedidos.css\");\n/* harmony import */ var _pedidos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pedidos_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Pedidos() {\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit;\n\n  var handleOnSubmit = function handleOnSubmit(data) {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(\"http://localhost:3005/pedidos\", data).then(function (response) {\n      if (response.data.status === \"OK\") {\n        alert(\"Pedido efetuado com Sucesso\");\n        window.location.reload();\n      }\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Pedido\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    id: \"formPedido\",\n    onSubmit: handleSubmit(handleOnSubmit)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Cliente:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"inputScreenP\",\n    type: \"text\",\n    name: \"cliente\",\n    placeholder: \"Digite seu nome ...\",\n    ref: register\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Endere\\xE7o:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"inputScreenP\",\n    type: \"text\",\n    name: \"endereco\",\n    placeholder: \"Digite seu endere\\xE7o ...\",\n    ref: register\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Telefone:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"inputScreenP\",\n    type: \"number\",\n    name: \"telefone\",\n    placeholder: \"Digite seu telefone ...\",\n    ref: register\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Produto:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"inputScreenP\",\n    type: \"text\",\n    name: \"produto\",\n    placeholder: \"Digite o produto ...\",\n    ref: register\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Pre\\xE7o:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"inputScreenP\",\n    type: \"number\",\n    name: \"preco\",\n    placeholder: \"Digite o pre\\xE7o ...\",\n    ref: register\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Quantidade:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"inputScreenP\",\n    type: \"number\",\n    name: \"quantidade\",\n    placeholder: \"Digite a quantidade ...\",\n    ref: register\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Total:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"inputScreenP\",\n    type: \"number\",\n    name: \"preco_total\",\n    placeholder: \"Digite o valor total ...\",\n    ref: register\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"btnP\",\n    type: \"submit\",\n    value: \"Enviar\"\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pedidos);\n\n//# sourceURL=webpack:///./src/Pages/pedidos.js?");

/***/ }),

/***/ "./src/Pages/produtos.css":
/*!********************************!*\
  !*** ./src/Pages/produtos.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> #listaLinha {\\n|     list-style: none;\\n|     display: flex;\");\n\n//# sourceURL=webpack:///./src/Pages/produtos.css?");

/***/ }),

/***/ "./src/Pages/produtos.js":
/*!*******************************!*\
  !*** ./src/Pages/produtos.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _produtos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./produtos.css */ \"./src/Pages/produtos.css\");\n/* harmony import */ var _produtos_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_produtos_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n //import Produto from '../componentes/produtos/produto.js';\n\n\nvar Produto = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../componentes/produtos/produto.js */ \"./src/componentes/produtos/produto.js\"));\n});\n\nfunction Produtos() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      produtos = _useState2[0],\n      setProdutos = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"http://localhost:3005/produto\").then(function (response) {\n      setProdutos(response.data.produtos);\n    });\n  }, []);\n  return /*#__PURE__*/React.createElement(\"div\", {\n    class: \"container-fluid\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    class: \"row\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    class: \"col\"\n  }, /*#__PURE__*/React.createElement(\"h3\", null, \"Categorias\"), /*#__PURE__*/React.createElement(\"div\", {\n    class: \"row\"\n  }, /*#__PURE__*/React.createElement(\"ol\", {\n    id: \"listaLinha\"\n  }, /*#__PURE__*/React.createElement(\"li\", {\n    class: \"lisP\",\n    onclick: \"exibirTodos()\"\n  }, \"Todos (16)\"), /*#__PURE__*/React.createElement(\"li\", {\n    class: \"lisP\",\n    onclick: \"exibirCategoria('consoles')\"\n  }, \"Consoles (5)\"), /*#__PURE__*/React.createElement(\"li\", {\n    class: \"lisP\",\n    onclick: \"exibirCategoria('jogos')\"\n  }, \"Jogos (6)\"), /*#__PURE__*/React.createElement(\"li\", {\n    class: \"lisP\",\n    onclick: \"exibirCategoria('acessorios')\"\n  }, \"Acess\\xF3rios (3)\"), /*#__PURE__*/React.createElement(\"li\", {\n    class: \"lisP\",\n    onclick: \"exibirCategoria('pc')\"\n  }, \"PC (2)\"))))), /*#__PURE__*/React.createElement(\"div\", {\n    class: \"container-fluid\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    class: \"row justify-content-around\"\n  }, produtos && produtos.map(function (item) {\n    return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n      fallback: /*#__PURE__*/React.createElement(\"div\", null, \"Carregando ...\")\n    }, /*#__PURE__*/React.createElement(Produto, {\n      key: item.id,\n      imagem: item.imagem,\n      nome: item.descricao,\n      preco: item.preco,\n      precoP: item.preco_venda,\n      categoria: item.categoria\n    }));\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Produtos);\n\n//# sourceURL=webpack:///./src/Pages/produtos.js?");

/***/ }),

/***/ "./src/componentes/images/logo.png":
/*!*****************************************!*\
  !*** ./src/componentes/images/logo.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/componentes/images/logo.png?");

/***/ }),

/***/ "./src/componentes/menu.css":
/*!**********************************!*\
  !*** ./src/componentes/menu.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> html {\\n|     font-size: 14px;\\n|     font-family: Arial, Helvetica, sans-serif;  \");\n\n//# sourceURL=webpack:///./src/componentes/menu.css?");

/***/ }),

/***/ "./src/componentes/menu.js":
/*!*********************************!*\
  !*** ./src/componentes/menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.css */ \"./src/componentes/menu.css\");\n/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/logo.png */ \"./src/componentes/images/logo.png\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction BaseMenu(props) {\n  var location = props.location;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"], {\n    className: \"menu navbar-dark\",\n    expand: \"lg\",\n    fixed: \"top\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    width: \"200px\",\n    src: _images_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,\n    alt: \"Logo full stack games\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"].Toggle, {\n    \"aria-controls\": \"item-menu\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"].Collapse, {\n    id: \"item-menu\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"], {\n    activeKey: location.pathname,\n    className: \"ml-auto mr-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"],\n    href: \"/produtos\",\n    to: \"/produtos\"\n  }, \"Produtos\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"],\n    href: \"/lojas\",\n    to: \"/lojas\"\n  }, \"Lojas\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"],\n    href: \"/contato\",\n    to: \"/contato\"\n  }, \"Contato\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"],\n    href: \"/pedido\",\n    to: \"/pedidos\"\n  }, \"Pedidos\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"],\n    href: \"/comentarios\",\n    to: \"/comentarios\"\n  }, \"Coment\\xE1rios\")))));\n}\n\nvar Menu = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(BaseMenu);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./src/componentes/menu.js?");

/***/ }),

/***/ "./src/rotas.js":
/*!**********************!*\
  !*** ./src/rotas.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Pages_produtos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/produtos.js */ \"./src/Pages/produtos.js\");\n/* harmony import */ var _Pages_pedidos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/pedidos.js */ \"./src/Pages/pedidos.js\");\n/* harmony import */ var _Pages_contato_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/contato.js */ \"./src/Pages/contato.js\");\n/* harmony import */ var _Pages_lojas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/lojas.js */ \"./src/Pages/lojas.js\");\n/* harmony import */ var _Pages_comentarios_comentarios_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/comentarios/comentarios.js */ \"./src/Pages/comentarios/comentarios.js\");\n/* harmony import */ var _Pages_comentarios_FormNew_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/comentarios/FormNew.js */ \"./src/Pages/comentarios/FormNew.js\");\n\n\n\n\n\n\n\n\nfunction Rotas() {\n  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Switch\"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/produtos\",\n    component: _Pages_produtos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/pedidos\",\n    component: _Pages_pedidos_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/contato\",\n    component: _Pages_contato_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/lojas\",\n    component: _Pages_lojas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/comentarios\",\n    component: _Pages_comentarios_comentarios_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Route\"], {\n    exact: true,\n    path: \"/comentarios/new\",\n    component: _Pages_comentarios_FormNew_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rotas);\n\n//# sourceURL=webpack:///./src/rotas.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");\n\n//# sourceURL=webpack:///external_%22react-bootstrap%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");\n\n//# sourceURL=webpack:///external_%22react-hook-form%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });