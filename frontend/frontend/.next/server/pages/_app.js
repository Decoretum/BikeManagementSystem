/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ myApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/AppBar/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/Toolbar/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/IconButton/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/Menu/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/MenuItem/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"@mui/icons-material/Menu\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n// import '@fontsource/roboto'\nfunction myApp({ Component, pageProps }) {\n    let client = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const anchored = Boolean(open);\n    function setAnchor(event) {\n        event.preventDefault();\n        setOpen(event.currentTarget);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Bisikleta para sa Atenista\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8___default()), {\n                style: {\n                    height: \"10vh\",\n                    backgroundColor: \"#9A4444\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10___default()), {\n                            size: \"large\",\n                            edge: \"start\",\n                            color: \"inherit\",\n                            onClick: setAnchor,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11___default()), {\n                                variant: \"h6\",\n                                style: {\n                                    marginLeft: \"2vw\"\n                                },\n                                children: \" Bisikleta para sa Atenista \"\n                            }, void 0, false, {\n                                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                                lineNumber: 40,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                    lineNumber: 30,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 29,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12___default()), {\n                keepMounted: true,\n                open: anchored,\n                anchorEl: open,\n                onClose: ()=>{\n                    setOpen(null);\n                },\n                disableScrollLock: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/bikes\",\n                            children: \"Bicycle Inventory\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/technical\",\n                            children: \"System Specifications\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    maxHeight: \"100%\",\n                    maxWidth: \"100%\",\n                    fontFamily: \"Roboto\",\n                    fontWeight: \"100\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n                    client: client,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                        lineNumber: 65,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                    lineNumber: 64,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 63,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUc7QUFDMUI7QUFDekI7QUFDSjtBQUNoQjtBQUNDO0FBQ0E7QUFDRTtBQUUvQiw4QkFBOEI7QUFFZixTQUFTZSxNQUFNLEVBQUNDLFNBQVMsRUFBRUMsU0FBUyxFQUFDO0lBQ2hELElBQUlDLFNBQVMsSUFBSVgsOERBQVdBO0lBQzVCLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNVyxXQUFXQyxRQUFRSDtJQUV6QixTQUFTSSxVQUFVQyxLQUFLO1FBQ3BCQSxNQUFNQyxjQUFjO1FBQ3BCTCxRQUFRSSxNQUFNRSxhQUFhO0lBQy9CO0lBQ0EscUJBQ0k7OzBCQUNJLDhEQUFDZCxrREFBSUE7O2tDQUNELDhEQUFDZTt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7a0NBQU07Ozs7Ozs7Ozs7OzswQkFJUCw4REFBQzlCLHlJQUFNQTtnQkFBQytCLE9BQU87b0JBQUNDLFFBQVE7b0JBQVFDLGlCQUFpQjtnQkFBUzswQkFDdEQsNEVBQUM1Qix5SUFBT0E7O3NDQUNKLDhEQUFDSCwwSUFBVUE7NEJBQ1hnQyxNQUFLOzRCQUNMQyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNOQyxTQUFTZDtzQ0FFTCw0RUFBQ2QsaUVBQVFBOzs7Ozs7Ozs7O3NDQUViLDhEQUFDSSxrREFBSUE7NEJBQUN5QixNQUFNO3NDQUNSLDRFQUFDaEMsMElBQVVBO2dDQUFDaUMsU0FBUTtnQ0FBS1IsT0FBTztvQ0FBRVMsWUFBWTtnQ0FBTTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLbkUsOERBQUNyQywwSUFBSUE7Z0JBQ0xzQyxXQUFXO2dCQUNYdEIsTUFBTUU7Z0JBQ05xQixVQUFZdkI7Z0JBQ1p3QixTQUFTO29CQUFPdkIsUUFBUTtnQkFBSztnQkFDN0J3QixtQkFBcUI7O2tDQUVqQiw4REFBQ3hDLDBJQUFRQTtrQ0FDTCw0RUFBQ1Msa0RBQUlBOzRCQUFDeUIsTUFBTTtzQ0FBVTs7Ozs7Ozs7Ozs7a0NBSTFCLDhEQUFDbEMsMElBQVFBO2tDQUNMLDRFQUFDUyxrREFBSUE7NEJBQUN5QixNQUFNO3NDQUFjOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLOUIsOERBQUNPO2dCQUFJZCxPQUFPO29CQUFDZSxXQUFXO29CQUFRQyxVQUFVO29CQUFRQyxZQUFZO29CQUFVQyxZQUFZO2dCQUFLOzBCQUNyRiw0RUFBQ3pDLHNFQUFtQkE7b0JBQUNVLFFBQVFBOzhCQUN6Qiw0RUFBQ0Y7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcEJhciwgQ29udGFpbmVyLCBJY29uQnV0dG9uLCBNZW51LCBNZW51SXRlbSwgVG9vbGJhciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG4vLyBpbXBvcnQgJ0Bmb250c291cmNlL3JvYm90bydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXlBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSl7XG4gICAgbGV0IGNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IGFuY2hvcmVkID0gQm9vbGVhbihvcGVuKTtcblxuICAgIGZ1bmN0aW9uIHNldEFuY2hvcihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldE9wZW4oZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgICAgICAgICBCaXNpa2xldGEgcGFyYSBzYSBBdGVuaXN0YVxuICAgICAgICAgICAgICAgIDwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+IFxuICAgICAgICAgICAgICAgIDxBcHBCYXIgc3R5bGU9e3toZWlnaHQ6ICcxMHZoJywgYmFja2dyb3VuZENvbG9yOiAnIzlBNDQ0NCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2V0QW5jaG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMnZ3JyB9fT4gQmlzaWtsZXRhIHBhcmEgc2EgQXRlbmlzdGEgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICAgICAgPC9BcHBCYXI+XG5cbiAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICAgICAgb3Blbj17YW5jaG9yZWR9XG4gICAgICAgICAgICAgICAgYW5jaG9yRWwgPSB7b3Blbn1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7c2V0T3BlbihudWxsKX19XG4gICAgICAgICAgICAgICAgZGlzYWJsZVNjcm9sbExvY2sgPSB7dHJ1ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYmlrZXMnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWN5Y2xlIEludmVudG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3RlY2huaWNhbCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN5c3RlbSBTcGVjaWZpY2F0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21heEhlaWdodDogJzEwMCUnLCBtYXhXaWR0aDogJzEwMCUnLCBmb250RmFtaWx5OiAnUm9ib3RvJywgZm9udFdlaWdodDogJzEwMCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuXG4gICAgKVxufSJdLCJuYW1lcyI6WyJBcHBCYXIiLCJDb250YWluZXIiLCJJY29uQnV0dG9uIiwiTWVudSIsIk1lbnVJdGVtIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJNZW51SWNvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsIkxpbmsiLCJJbWFnZSIsIm15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50Iiwib3BlbiIsInNldE9wZW4iLCJhbmNob3JlZCIsIkJvb2xlYW4iLCJzZXRBbmNob3IiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudFRhcmdldCIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInRpdGxlIiwic3R5bGUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaXplIiwiZWRnZSIsImNvbG9yIiwib25DbGljayIsImhyZWYiLCJ2YXJpYW50IiwibWFyZ2luTGVmdCIsImtlZXBNb3VudGVkIiwiYW5jaG9yRWwiLCJvbkNsb3NlIiwiZGlzYWJsZVNjcm9sbExvY2siLCJkaXYiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@mui/base":
/*!****************************!*\
  !*** external "@mui/base" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base");

/***/ }),

/***/ "@mui/base/FocusTrap":
/*!**************************************!*\
  !*** external "@mui/base/FocusTrap" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base/FocusTrap");

/***/ }),

/***/ "@mui/base/Portal":
/*!***********************************!*\
  !*** external "@mui/base/Portal" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base/Portal");

/***/ }),

/***/ "@mui/base/composeClasses":
/*!*******************************************!*\
  !*** external "@mui/base/composeClasses" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base/composeClasses");

/***/ }),

/***/ "@mui/base/unstable_useModal":
/*!**********************************************!*\
  !*** external "@mui/base/unstable_useModal" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base/unstable_useModal");

/***/ }),

/***/ "@mui/base/utils":
/*!**********************************!*\
  !*** external "@mui/base/utils" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base/utils");

/***/ }),

/***/ "@mui/icons-material/Menu":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Menu" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@tanstack/react-query");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();