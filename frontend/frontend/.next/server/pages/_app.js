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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ myApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/AppBar/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/Toolbar/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/IconButton/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/Menu/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Container,IconButton,Menu,MenuItem,Toolbar,Typography!=!@mui/material */ \"./node_modules/@mui/material/node/MenuItem/index.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"@mui/icons-material/Menu\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n// import '@fontsource/roboto'\nfunction myApp({ Component, pageProps }) {\n    let client = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const anchored = Boolean(open);\n    function setAnchor(event) {\n        event.preventDefault();\n        setOpen(event.currentTarget);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"QC Bike Management System\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6___default()), {\n                style: {\n                    height: \"10vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            size: \"large\",\n                            edge: \"start\",\n                            color: \"inherit\",\n                            onClick: setAnchor,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9___default()), {\n                            variant: \"h6\",\n                            style: {\n                                marginLeft: \"2vw\"\n                            },\n                            children: \" QC Bike Management System \"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                            lineNumber: 37,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10___default()), {\n                keepMounted: true,\n                open: anchored,\n                anchorEl: open,\n                onClose: ()=>{\n                    setOpen(null);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_barrel_optimize_names_AppBar_Container_IconButton_Menu_MenuItem_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11___default()), {\n                    children: \"Haha\"\n                }, void 0, false, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                    lineNumber: 48,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 42,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    maxHeight: \"100%\",\n                    maxWidth: \"100%\",\n                    fontFamily: \"Roboto\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n                    client: client,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                        lineNumber: 55,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                    lineNumber: 54,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/_app.js\",\n                lineNumber: 53,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRztBQUMxQjtBQUN6QjtBQUNKO0FBQ2hCO0FBQ0s7QUFFakMsOEJBQThCO0FBRWYsU0FBU2EsTUFBTSxFQUFDQyxTQUFTLEVBQUVDLFNBQVMsRUFBQztJQUNoRCxJQUFJQyxTQUFTLElBQUlULDhEQUFXQTtJQUM1QixNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMsTUFBTVMsV0FBV0MsUUFBUUg7SUFFekIsU0FBU0ksVUFBVUMsS0FBSztRQUNwQkEsTUFBTUMsY0FBYztRQUNwQkwsUUFBUUksTUFBTUUsYUFBYTtJQUMvQjtJQUNBLHFCQUNJOzswQkFDSSw4REFBQ1osa0RBQUlBOztrQ0FDRCw4REFBQ2E7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO2tDQUFNOzs7Ozs7Ozs7Ozs7MEJBSVAsOERBQUM1Qix5SUFBTUE7Z0JBQUM2QixPQUFPO29CQUFDQyxRQUFRO2dCQUFNOzBCQUMxQiw0RUFBQ3pCLHlJQUFPQTs7c0NBQ0osOERBQUNILHlJQUFVQTs0QkFDWDZCLE1BQUs7NEJBQ0xDLE1BQUs7NEJBQ0xDLE9BQU07NEJBQ05DLFNBQVNiO3NDQUVMLDRFQUFDWixpRUFBUUE7Ozs7Ozs7Ozs7c0NBRWIsOERBQUNILHlJQUFVQTs0QkFBQzZCLFNBQVE7NEJBQUtOLE9BQU87Z0NBQUVPLFlBQVk7NEJBQU07c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUsvRCw4REFBQ2pDLDBJQUFJQTtnQkFDTGtDLFdBQVc7Z0JBQ1hwQixNQUFNRTtnQkFDTm1CLFVBQVlyQjtnQkFDWnNCLFNBQVM7b0JBQU9yQixRQUFRO2dCQUFLOzBCQUV6Qiw0RUFBQ2QsMElBQVFBOzhCQUFDOzs7Ozs7Ozs7OzswQkFLViw4REFBQ29DO2dCQUFJWCxPQUFPO29CQUFDWSxXQUFXO29CQUFRQyxVQUFVO29CQUFRQyxZQUFZO2dCQUFROzBCQUNsRSw0RUFBQ25DLHNFQUFtQkE7b0JBQUNRLFFBQVFBOzhCQUN6Qiw0RUFBQ0Y7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcEJhciwgQ29udGFpbmVyLCBJY29uQnV0dG9uLCBNZW51LCBNZW51SXRlbSwgVG9vbGJhciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5cbi8vIGltcG9ydCAnQGZvbnRzb3VyY2Uvcm9ib3RvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBteUFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KXtcbiAgICBsZXQgY2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgYW5jaG9yZWQgPSBCb29sZWFuKG9wZW4pO1xuXG4gICAgZnVuY3Rpb24gc2V0QW5jaG9yKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0T3BlbihldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIFFDIEJpa2UgTWFuYWdlbWVudCBTeXN0ZW1cbiAgICAgICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPiBcbiAgICAgICAgICAgICAgICA8QXBwQmFyIHN0eWxlPXt7aGVpZ2h0OiAnMTB2aCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2V0QW5jaG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzJ2dycgfX0+IFFDIEJpa2UgTWFuYWdlbWVudCBTeXN0ZW0gPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgICAgICA8L0FwcEJhcj5cblxuICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgICAgICBvcGVuPXthbmNob3JlZH1cbiAgICAgICAgICAgICAgICBhbmNob3JFbCA9IHtvcGVufVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtzZXRPcGVuKG51bGwpfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhhaGFcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21heEhlaWdodDogJzEwMCUnLCBtYXhXaWR0aDogJzEwMCUnLCBmb250RmFtaWx5OiAnUm9ib3RvJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG5cbiAgICApXG59Il0sIm5hbWVzIjpbIkFwcEJhciIsIkNvbnRhaW5lciIsIkljb25CdXR0b24iLCJNZW51IiwiTWVudUl0ZW0iLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIk1lbnVJY29uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwibXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJvcGVuIiwic2V0T3BlbiIsImFuY2hvcmVkIiwiQm9vbGVhbiIsInNldEFuY2hvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwidGl0bGUiLCJzdHlsZSIsImhlaWdodCIsInNpemUiLCJlZGdlIiwiY29sb3IiLCJvbkNsaWNrIiwidmFyaWFudCIsIm1hcmdpbkxlZnQiLCJrZWVwTW91bnRlZCIsImFuY2hvckVsIiwib25DbG9zZSIsImRpdiIsIm1heEhlaWdodCIsIm1heFdpZHRoIiwiZm9udEZhbWlseSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();