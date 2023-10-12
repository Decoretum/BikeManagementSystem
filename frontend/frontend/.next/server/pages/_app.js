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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ myApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/AppBar/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/Toolbar/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/IconButton/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/Menu/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/MenuItem/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"@mui/icons-material/Menu\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n// import '@fontsource/roboto'\nfunction myApp({ Component, pageProps }) {\n    let client = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const anchored = Boolean(open);\n    function setAnchor(event) {\n        event.preventDefault();\n        setOpen(event.currentTarget);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"QC Bike Management System\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8___default()), {\n                style: {\n                    height: \"10vh\",\n                    backgroundColor: \"#9A4444\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10___default()), {\n                            size: \"large\",\n                            edge: \"start\",\n                            color: \"inherit\",\n                            onClick: setAnchor,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/home\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11___default()), {\n                                variant: \"h6\",\n                                style: {\n                                    marginLeft: \"2vw\"\n                                },\n                                children: \" QC Bike Management System \"\n                            }, void 0, false, {\n                                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                                lineNumber: 40,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                    lineNumber: 30,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 29,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12___default()), {\n                keepMounted: true,\n                open: anchored,\n                anchorEl: open,\n                onClose: ()=>{\n                    setOpen(null);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/bikes\",\n                            children: \"Bicycle Inventory\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                            lineNumber: 52,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/technical\",\n                            children: \"System Specifications\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                src: \"/bike1.avif\",\n                style: {\n                    position: \"absolute\",\n                    left: \"2vw\",\n                    top: \"13vh\",\n                    borderRadius: \"9px\"\n                },\n                width: 250,\n                height: 300,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 62,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                src: \"/bike2.avif\",\n                style: {\n                    position: \"absolute\",\n                    left: \"78vw\",\n                    bottom: \"8vh\",\n                    borderRadius: \"9px\"\n                },\n                width: 250,\n                height: 300,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 63,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                src: \"/bike3.avif\",\n                style: {\n                    position: \"absolute\",\n                    left: \"2vw\",\n                    top: \"70vh\",\n                    borderRadius: \"9px\"\n                },\n                width: 250,\n                height: 300,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 64,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    maxHeight: \"100%\",\n                    maxWidth: \"100%\",\n                    fontFamily: \"Roboto\",\n                    fontWeight: \"100\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n                    client: client,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                        lineNumber: 67,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                    lineNumber: 66,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 65,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUc7QUFDMUI7QUFDekI7QUFDSjtBQUNoQjtBQUNDO0FBQ0k7QUFDRjtBQUUvQiw4QkFBOEI7QUFFZixTQUFTZSxNQUFNLEVBQUNDLFNBQVMsRUFBRUMsU0FBUyxFQUFDO0lBQ2hELElBQUlDLFNBQVMsSUFBSVgsOERBQVdBO0lBQzVCLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNVyxXQUFXQyxRQUFRSDtJQUV6QixTQUFTSSxVQUFVQyxLQUFLO1FBQ3BCQSxNQUFNQyxjQUFjO1FBQ3BCTCxRQUFRSSxNQUFNRSxhQUFhO0lBQy9CO0lBQ0EscUJBQ0k7OzBCQUNJLDhEQUFDZCxrREFBSUE7O2tDQUNELDhEQUFDZTt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7a0NBQU07Ozs7Ozs7Ozs7OzswQkFJUCw4REFBQzlCLHlJQUFNQTtnQkFBQytCLE9BQU87b0JBQUNDLFFBQVE7b0JBQVFDLGlCQUFpQjtnQkFBUzswQkFDdEQsNEVBQUM1Qix5SUFBT0E7O3NDQUNKLDhEQUFDSCwwSUFBVUE7NEJBQ1hnQyxNQUFLOzRCQUNMQyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNOQyxTQUFTZDtzQ0FFTCw0RUFBQ2QsaUVBQVFBOzs7Ozs7Ozs7O3NDQUViLDhEQUFDSSxrREFBSUE7NEJBQUN5QixNQUFNO3NDQUNSLDRFQUFDaEMsMElBQVVBO2dDQUFDaUMsU0FBUTtnQ0FBS1IsT0FBTztvQ0FBRVMsWUFBWTtnQ0FBTTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLbkUsOERBQUNyQywwSUFBSUE7Z0JBQ0xzQyxXQUFXO2dCQUNYdEIsTUFBTUU7Z0JBQ05xQixVQUFZdkI7Z0JBQ1p3QixTQUFTO29CQUFPdkIsUUFBUTtnQkFBSzs7a0NBRXpCLDhEQUFDaEIsMElBQVFBO2tDQUNMLDRFQUFDUyxrREFBSUE7NEJBQUN5QixNQUFNO3NDQUFVOzs7Ozs7Ozs7OztrQ0FJMUIsOERBQUNsQywwSUFBUUE7a0NBQ0wsNEVBQUNTLGtEQUFJQTs0QkFBQ3lCLE1BQU07c0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtsQyw4REFBQ3hCLG1EQUFLQTtnQkFBQzhCLEtBQUs7Z0JBQWViLE9BQU87b0JBQUNjLFVBQVU7b0JBQVlDLE1BQU07b0JBQU9DLEtBQUs7b0JBQVFDLGNBQWM7Z0JBQUs7Z0JBQUdDLE9BQU87Z0JBQUtqQixRQUFRO2dCQUFLa0IsUUFBUTs7Ozs7OzBCQUMxSSw4REFBQ3BDLG1EQUFLQTtnQkFBQzhCLEtBQUs7Z0JBQWViLE9BQU87b0JBQUNjLFVBQVU7b0JBQVlDLE1BQU07b0JBQVFLLFFBQVE7b0JBQU9ILGNBQWM7Z0JBQUs7Z0JBQUdDLE9BQU87Z0JBQUtqQixRQUFRO2dCQUFLa0IsUUFBUTs7Ozs7OzBCQUM3SSw4REFBQ3BDLG1EQUFLQTtnQkFBQzhCLEtBQUs7Z0JBQWViLE9BQU87b0JBQUNjLFVBQVU7b0JBQVlDLE1BQU07b0JBQU9DLEtBQUs7b0JBQVFDLGNBQWM7Z0JBQUs7Z0JBQUdDLE9BQU87Z0JBQUtqQixRQUFRO2dCQUFLa0IsUUFBUTs7Ozs7OzBCQUN0SSw4REFBQ0U7Z0JBQUlyQixPQUFPO29CQUFDc0IsV0FBVztvQkFBUUMsVUFBVTtvQkFBUUMsWUFBWTtvQkFBVUMsWUFBWTtnQkFBSzswQkFDckYsNEVBQUNoRCxzRUFBbUJBO29CQUFDVSxRQUFRQTs4QkFDekIsNEVBQUNGO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBCYXIsIENvbnRhaW5lciwgSWNvbkJ1dHRvbiwgTWVudSwgTWVudUl0ZW0sIFRvb2xiYXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbi8vIGltcG9ydCAnQGZvbnRzb3VyY2Uvcm9ib3RvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBteUFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KXtcbiAgICBsZXQgY2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgYW5jaG9yZWQgPSBCb29sZWFuKG9wZW4pO1xuXG4gICAgZnVuY3Rpb24gc2V0QW5jaG9yKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0T3BlbihldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIFFDIEJpa2UgTWFuYWdlbWVudCBTeXN0ZW1cbiAgICAgICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPiBcbiAgICAgICAgICAgICAgICA8QXBwQmFyIHN0eWxlPXt7aGVpZ2h0OiAnMTB2aCcsIGJhY2tncm91bmRDb2xvcjogJyM5QTQ0NDQnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NldEFuY2hvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvaG9tZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcydncnIH19PiBRQyBCaWtlIE1hbmFnZW1lbnQgU3lzdGVtIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgICAgIDwvQXBwQmFyPlxuXG4gICAgICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgICAgIG9wZW49e2FuY2hvcmVkfVxuICAgICAgICAgICAgICAgIGFuY2hvckVsID0ge29wZW59XG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4ge3NldE9wZW4obnVsbCl9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9iaWtlcyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpY3ljbGUgSW52ZW50b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvdGVjaG5pY2FsJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3lzdGVtIFNwZWNpZmljYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9eycvYmlrZTEuYXZpZid9IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICcydncnLCB0b3A6ICcxM3ZoJywgYm9yZGVyUmFkaXVzOiAnOXB4J319IHdpZHRoPXsyNTB9IGhlaWdodD17MzAwfSBwcmlvcml0eSAvPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9eycvYmlrZTIuYXZpZid9IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICc3OHZ3JywgYm90dG9tOiAnOHZoJywgYm9yZGVyUmFkaXVzOiAnOXB4J319IHdpZHRoPXsyNTB9IGhlaWdodD17MzAwfSBwcmlvcml0eSAvPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9eycvYmlrZTMuYXZpZid9IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICcydncnLCB0b3A6ICc3MHZoJywgYm9yZGVyUmFkaXVzOiAnOXB4J319IHdpZHRoPXsyNTB9IGhlaWdodD17MzAwfSBwcmlvcml0eSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWF4SGVpZ2h0OiAnMTAwJScsIG1heFdpZHRoOiAnMTAwJScsIGZvbnRGYW1pbHk6ICdSb2JvdG8nLCBmb250V2VpZ2h0OiAnMTAwJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG5cbiAgICApXG59Il0sIm5hbWVzIjpbIkFwcEJhciIsIkNvbnRhaW5lciIsIkljb25CdXR0b24iLCJNZW51IiwiTWVudUl0ZW0iLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIk1lbnVJY29uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiTGluayIsIkltYWdlIiwibXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJvcGVuIiwic2V0T3BlbiIsImFuY2hvcmVkIiwiQm9vbGVhbiIsInNldEFuY2hvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwidGl0bGUiLCJzdHlsZSIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInNpemUiLCJlZGdlIiwiY29sb3IiLCJvbkNsaWNrIiwiaHJlZiIsInZhcmlhbnQiLCJtYXJnaW5MZWZ0Iiwia2VlcE1vdW50ZWQiLCJhbmNob3JFbCIsIm9uQ2xvc2UiLCJzcmMiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsInByaW9yaXR5IiwiYm90dG9tIiwiZGl2IiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
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