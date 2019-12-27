(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-header/app-header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-header/app-header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <img class=\"navbar-header\"\n                src={{companyLogo}}\n                width=\"75\" alt=\"Allstate Logo\">\n            &nbsp; &nbsp; &nbsp;\n        </div>\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">\n                <h1> Allstate New Joiner's Learning App</h1>\n            </a>\n        </div>\n        <form class=\"navbar-form navbar-right \" action=\"/action_page.php\">\n            <div style=\"color:aqua; font-size: 200%;\">Hi Rajesh! &nbsp;&nbsp;&nbsp;&nbsp;\n                    <button type=\"button\" class=\"btn btn-default btn-sm\" style=\"float: right;\" > \n                            <span class=\"glyphicon glyphicon-log-out\">Logout</span></button>\n                    </div>\n            <br>    \n            <div class=\"input-group \" >\n            <input type=\"text\" class=\"form-control\" style=\"align-items: center; float : right;\" placeholder=\"Coming Soon...\"\n                    disabled=\"true\"/>\n                <div class=\"input-group-btn\">\n                    <button class=\"btn btn-default\" type=\"submit\" disabled=\"true\">\n                        <i class=\"glyphicon glyphicon-search\"></i>\n                    </button>\n                </div>\n            \n            \n            </div>\n        </form>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n  <head>\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n      <script src=\"https://cdn.ckeditor.com/ckeditor5/16.0.0/classic/ckeditor.js\"></script>\n  </head>\n  <body>\n      <app-app-header></app-app-header>\n      <app-main-nav></app-main-nav>\n      <router-outlet></router-outlet>           \n    </body>\n  \n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-about/home-about.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-about/home-about.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n        <button type=\"button\" class=\"glyphicon glyphicon-edit btn btn-danger\" style=\"float: right;\">Edit</button>\n    <div class=\"jumbotron jumbotron-fluid header\">\n        <h1 style=\"font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; color: darkturquoise;\">Welcome to Allstate Insurance</h1>\n    </div>\n    <form>\n        <div style=\"font-size: x-large;\">\n            <p >The Allstate Corporation is an American insurance company that is in the United States. The company also has personal lines insurance operations in Canada. Allstate was founded in 1931 as part of Sears, Roebuck and Co., and was spun off in 1993.<br> \n                The Allstate Corporation protects people from life's uncertainties with more than 113 million proprietary policies. Allstate offers a broad array of protection products through multiple brands and diverse distribution channels, including auto, home, life and other insurance offered through its Allstate, Esurance, Encompass, SquareTrade and Answer Financial brands. Allstate is widely known from the slogan \"You're in Good Hands with Allstate\"<br>\n                Allstate is involved in Insuring the below mentioned Line of Business:\n                </p>\n                <i class=\"fa fa-car\"></i> Auto Personal <br>\n                <i class=\"fa fa-taxi\"></i> Auto Commercial<br>\n                <i class=\"fa fa-home\"></i> Property<br>\n                        <i class=\"fa fa-ship\"></i> Boat/RV <br>\n                    \n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\" style=\"position: sticky; top: 105px; background-color: transparent;\">\n  <mat-sidenav #drawer class=\"sidenav\" style=\"width:16%\" fixedInViewport=\"true\"\n  style=\"background-image: url('https://images.unsplash.com/photo-1517758478390-c89333af4642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');\"\n  [fixedTopGap] = 88\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"false\">\n    <mat-toolbar class=\"mat-button-toggle-focus-overlay\"><b>Content</b></mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"/TeamsOverview\" >Teams Overview</a>\n      <a mat-list-item href=\"#\">Claims Overview</a>   \n      <a mat-list-item href=\"#\">Access & Installation</a>\n      <a mat-list-item href=\"#\">Setting Up Localhost</a>\n      <a mat-list-item href=\"#\">Basic Tools & E-Mails</a>\n      <a mat-list-item href=\"#\">Team Components</a>\n      <a mat-list-item href=\"#\">Environment Tools</a>\n      <a mat-list-item href=\"#\">Deployment Validation</a>\n      <a mat-list-item href=\"#\">Agile Overview</a>\n      <a mat-list-item href=\"#\">IM Avtivities</a>\n      <a mat-list-item href=\"#\">DevOps Overview</a>\n      </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n      <button class=\"btn btn-success\"\n        type=\"button\"  \n        (click)=\"drawer.toggle() ; isSideNavCollapsed()\">\n        <!-- *ngIf=\"isHandset$ | async\"> -->\n        <!-- <mat-icon>Show Content</mat-icon> -->\n       <p  *ngIf=\"bCollapsed ; else hideContent\">Show Content</p>\n       <ng-template #hideContent >\n         <p>X</p>\n        </ng-template>\n      </button>\n    <!-- </mat-toolbar> -->\n    <!-- Add Content Here -->\n  </mat-sidenav-content>\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams-overview/about-team/about-team.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teams-overview/about-team/about-team.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>about-team works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams-overview/add-team/add-team.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teams-overview/add-team/add-team.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"jumbotron\">\n        Please Fill in your Team Details\n    </div>\n    <form>\n        <div class=\"form-group\">\n            <label for=\"teamFullName\">Team Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"teamFullName\" placeholder=\"Example: FNOL, Desktop & Utilities\">\n            <small id=\"teamFullNameHelp\" class=\"form-text text-muted\">Please Enter your Team's Full Name</small>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"teamAbbreviatedName\">Team's Short Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"teamAbbreviatedName\" placeholder=\"FUNDU\">\n            <small id=\"teamAbbreviatedNameHelp\" class=\"form-text text-muted\">Please Enter your Team's Abbreviated Name</small>\n        </div>\n        <div id=\"editor\"></div>\n        <ckeditor [editor]=\"Editor\" data=\"<p>Hello, world!</p>\"></ckeditor>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </form>   \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams-overview/teams-overview.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teams-overview/teams-overview.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" >\n    <div class=\"jumbotron\">Which Team Would you Like to know about...</div>\n    <div class=\" row row-md-2\">\n        <a class=\"btn btn-primary\" style=\"float: right;\" href=\"/AddTeam\">+ Add New Team</a>\n    </div>\n    <hr><hr>\n\n    <div class=\"item\" *ngFor=\"let teamDetail of teamDetails; let i = index\">\n        <a href=\"/AboutTeam\" > <img  onerror=\"this.onerror=null;this.src = '../../assets/noImageAvailable.jpg';\"   src={{teamDetail.teamImagePath}} alt=\"\"></a>\n        <span class=\"caption\">{{teamDetail.teamAbbrevation}}</span>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-header/app-header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/app-header/app-header.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app-header/app-header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-header/app-header.component.ts ***!
  \****************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppHeaderComponent = class AppHeaderComponent {
    constructor() {
        this.companyLogo = "../../assets/AllstateLogo.png";
    }
    ngOnInit() {
    }
};
AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-header/app-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app-header.component.css */ "./src/app/app-header/app-header.component.css")).default]
    })
], AppHeaderComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _teams_overview_teams_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teams-overview/teams-overview.component */ "./src/app/teams-overview/teams-overview.component.ts");
/* harmony import */ var _teams_overview_about_team_about_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teams-overview/about-team/about-team.component */ "./src/app/teams-overview/about-team/about-team.component.ts");
/* harmony import */ var _teams_overview_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teams-overview/add-team/add-team.component */ "./src/app/teams-overview/add-team/add-team.component.ts");
/* harmony import */ var _home_about_home_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-about/home-about.component */ "./src/app/home-about/home-about.component.ts");







const routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: _home_about_home_about_component__WEBPACK_IMPORTED_MODULE_6__["HomeAboutComponent"] },
    { path: 'TeamsOverview', component: _teams_overview_teams_overview_component__WEBPACK_IMPORTED_MODULE_3__["TeamsOverviewComponent"] },
    { path: 'AboutTeam', component: _teams_overview_about_team_about_team_component__WEBPACK_IMPORTED_MODULE_4__["AboutTeamComponent"] },
    { path: 'AddTeam', component: _teams_overview_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_5__["AddTeamComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [_home_about_home_about_component__WEBPACK_IMPORTED_MODULE_6__["HomeAboutComponent"], _teams_overview_teams_overview_component__WEBPACK_IMPORTED_MODULE_3__["TeamsOverviewComponent"], _teams_overview_about_team_about_team_component__WEBPACK_IMPORTED_MODULE_4__["AboutTeamComponent"], _teams_overview_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_5__["AddTeamComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'MyKTApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, TeamDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetails", function() { return TeamDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-header/app-header.component */ "./src/app/app-header/app-header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__["MainNavComponent"],
            _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_12__["AppHeaderComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["routingComponents"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);

class TeamDetails {
    constructor(teamID, teamName, teamAbbrevation, teamDescription, teamImagePath) {
        this.teamID = teamID;
        this.teamName = teamName;
        this.teamAbbrevation = teamAbbrevation;
        this.teamDescription = teamDescription;
        this.teamImagePath = teamImagePath;
    }
}


/***/ }),

/***/ "./src/app/home-about/home-about.component.css":
/*!*****************************************************!*\
  !*** ./src/app/home-about/home-about.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.jumbotron{\r\n    background-image:url('HomeImage.jpg');\r\n    background-size: 100% 100%;\r\n};\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1hYm91dC9ob21lLWFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQ0FBa0Q7SUFDbEQsMEJBQTBCO0FBQzlCLENBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lLWFib3V0L2hvbWUtYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5qdW1ib3Ryb257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vYXNzZXRzL0hvbWVJbWFnZS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59OyJdfQ== */");

/***/ }),

/***/ "./src/app/home-about/home-about.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home-about/home-about.component.ts ***!
  \****************************************************/
/*! exports provided: HomeAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAboutComponent", function() { return HomeAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeAboutComponent = class HomeAboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeAboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-about/home-about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-about.component.css */ "./src/app/home-about/home-about.component.css")).default]
    })
], HomeAboutComponent);



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n  background-color: azure;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  height: auto;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 1;\n  z-index: 1;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxO1xuICB6LWluZGV4OiAxO1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let MainNavComponent = class MainNavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.bCollapsed = true;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
    isSideNavCollapsed() {
        this.bCollapsed = !this.bCollapsed;
    }
};
MainNavComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
];
MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")).default]
    })
], MainNavComponent);



/***/ }),

/***/ "./src/app/teams-overview/about-team/about-team.component.css":
/*!********************************************************************!*\
  !*** ./src/app/teams-overview/about-team/about-team.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW1zLW92ZXJ2aWV3L2Fib3V0LXRlYW0vYWJvdXQtdGVhbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/teams-overview/about-team/about-team.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/teams-overview/about-team/about-team.component.ts ***!
  \*******************************************************************/
/*! exports provided: AboutTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutTeamComponent", function() { return AboutTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutTeamComponent = class AboutTeamComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-team',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams-overview/about-team/about-team.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-team.component.css */ "./src/app/teams-overview/about-team/about-team.component.css")).default]
    })
], AboutTeamComponent);



/***/ }),

/***/ "./src/app/teams-overview/add-team/add-team.component.css":
/*!****************************************************************!*\
  !*** ./src/app/teams-overview/add-team/add-team.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\ndiv.jumbotron{\r\n    font-size: xx-large;\r\n    background-color:skyblue;\r\n    font-weight: bolder;\r\n    font-family: cursive;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMtb3ZlcnZpZXcvYWRkLXRlYW0vYWRkLXRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC90ZWFtcy1vdmVydmlldy9hZGQtdGVhbS9hZGQtdGVhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRpdi5qdW1ib3Ryb257XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpza3libHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/teams-overview/add-team/add-team.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/teams-overview/add-team/add-team.component.ts ***!
  \***************************************************************/
/*! exports provided: AddTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeamComponent", function() { return AddTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import * as ClassicEditor from '@cdk';
let AddTeamComponent = class AddTeamComponent {
    // public Editor = ClassicEditor;
    constructor() {
        this.editorConfig = {
            simpleUpload: {
                // The URL that the images are uploaded to.
                // uploadUrl: environment.postSaveRteImage,
                // Headers sent along with the XMLHttpRequest to the upload server.
                headers: {
                    'X-CSRF-TOKEN': 'CSFR-Token',
                    Authorization: 'Bearer <JSON Web Token>'
                }
            }
        };
    }
    ngOnInit() {
    }
};
AddTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-team',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams-overview/add-team/add-team.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-team.component.css */ "./src/app/teams-overview/add-team/add-team.component.css")).default]
    })
], AddTeamComponent);



/***/ }),

/***/ "./src/app/teams-overview/teams-overview.component.css":
/*!*************************************************************!*\
  !*** ./src/app/teams-overview/teams-overview.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Three image containers (use 25% for four, and 50% for two, etc) */\r\n\r\ndiv.item {\r\n    vertical-align: top;\r\n    display: inline-block;\r\n    text-align: center;\r\n    width: 350px;\r\n    height: 350px;\r\n    background-color:transparent;\r\n    }\r\n\r\nimg {\r\n    width: 200px;\r\n    height: 200px;  \r\n    border-radius: 50%;\r\n    border: medium solid green;\r\n}\r\n\r\n.caption {\r\n    display: block;\r\n    font-size: x-large;\r\n    font-weight: bolder;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\ndiv.item img:hover {\r\n    opacity: .5;\r\n}\r\n\r\ndiv.jumbotron{\r\n    font-size: xx-large;\r\n    background-color:skyblue;\r\n    font-weight: bolder;\r\n    font-family: cursive;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMtb3ZlcnZpZXcvdGVhbXMtb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRUFBb0U7O0FBRXBFO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUI7O0FBRUo7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC90ZWFtcy1vdmVydmlldy90ZWFtcy1vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhyZWUgaW1hZ2UgY29udGFpbmVycyAodXNlIDI1JSBmb3IgZm91ciwgYW5kIDUwJSBmb3IgdHdvLCBldGMpICovXHJcblxyXG5kaXYuaXRlbSB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiBtZWRpdW0gc29saWQgZ3JlZW47XHJcbn1cclxuLmNhcHRpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcbmRpdi5pdGVtIGltZzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufSBcclxuZGl2Lmp1bWJvdHJvbntcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnNreWJsdWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/teams-overview/teams-overview.component.ts":
/*!************************************************************!*\
  !*** ./src/app/teams-overview/teams-overview.component.ts ***!
  \************************************************************/
/*! exports provided: TeamsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsOverviewComponent", function() { return TeamsOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");



let TeamsOverviewComponent = class TeamsOverviewComponent {
    constructor() {
        this.teamDetails = [
            new _app_module__WEBPACK_IMPORTED_MODULE_2__["TeamDetails"](1, 'FNOL, Desktop & Utilities', 'FUNDU', 'Some random shit', 'data:image/png;base64,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'),
            new _app_module__WEBPACK_IMPORTED_MODULE_2__["TeamDetails"](2, 'TREAT', 'TREAT', 'Some random shit', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEXsZ3j////sYnTsZ3nrW27//v/4ytDxlqHsZXbrYXLsZXf98fLrWGvvhZP74eXrXXD97O750NXynqf++fnugI3ucoH3xMnzpa399PXwjJfta3v51trufInzqrLzoav74OPrUmf2ucH1sLnvdoPqTGP0tb32wMg8D4NhAAAFFklEQVR4nO3ZW5uiIAAGYARMMI3Kakyz49b//4kLCojV7F7ptM9+78XMeEj4Qjk4hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPGMfUDgjYsRCxrz236WSSikppSOWwUhbiP4xYiHfF56sW8mIEQXdH7tSqh+4Yasyai2zEQvJ6q6QaJuOWMp35l3Zi1ETrrpCYiQcxfQJJ3wWBWGCDROK5+K/r867I0zTF30+yH+qDRkVQviEwuhqoAePdiPVFRVScd6PaJRnXKksU4I819Ydkvrs9mKCmuvp330bmgundKoBMt3mmu1LFwezkW/MgXa/tjW1JslltsttnZTa7xZlUczrpuJhPfWQp/azZVEUy1miJLFXOAgizC/blxb7bnc1UUJ6jF6UlBG6thuNlNuZ/av9AG3m/amrWziA86Q/VK637hxO1Gsh0Waim9UnCSz1wE8Tu/F13hfdX2u9m6nDYnjyF3ePW0pn/e44imr7uRkX9JMTHvO2upqZ8ag8jty2/X13HTA/hReJ/V+fnvCrfUZjXeE9JeIQD85st468vZLrSV58YkLJ+oSFD5PrhMt3EQ5Ujy/qzQPtEhL5kwmTcj6f25Yp5q1T2Ib2dtM/N0Ld3ebimhx3hd2olRn+fCcTL2az8GE1CfVVl/a7irtC5oephgtBpZK2dqezHgT1AkeECfsvnbLSZmq4opLfXIvq5nB9chzVB8652vQZdUIzuJ7deFgpXcioK7Wh1AzaLmHW7WHPCU+XdZJU0u27ZinTn5JuPLgowt3KoebU3H6p39Em1L1wP+Kbxpt6Qfw6Lw0T1ttMN5kkytZxeVadXzv7OUUqew8W1D5epsHDhB838/YJ4+hxtl84t3elfVw1G6KsqBtTHn6Wwy//SMJgp3T96ouDSuwTuvfPF93/Kwn7OhPfrM9ytba7+x5S3Pycpt3+2IRL4eos2HdN2CXsWtNXP3Wzg09PuPLzTqJso5TLJ/ONdLfkWr5c4dMT3pXfx+0Yt/qVcSszf2VciIP7QjJXfz77LuFPvDq1Cec2YTgeNv3ySNnBIarSbv0uqlxwbha7xL0m0FO47mS5iYYJ3Rpfz43MhyeNmVI3OUkyKlRmKtDPvPuEvnesz2aTkXMdlafHepuKvv7LSulNxrel65JcQtemuzMVNHt5OzAqv+6J73neLGr+PiGT3TcRRyvBleLCpdJzGp8+KvTKn1fXyLMJZWPLiGb7zXpVTNmITF2iUEHeJwyGkGJ1edRu1CjMkxWuDufBWwCfMN1EA2a5OdkbN7EZDnJ6CJTv2rCffQ40pjOS+btDQUKigty6tB2fKp7xVHNd+Ns2JKJfIIZr+DY+b/6YkBH5FeyMzTp7upemQlSDeYruU98mZEGn5NWuLbLLn9uQqcFrDt2nThZQk7fStYv5cRPBXcrCmqSZGzLsd3LNfEtk63DiWjTDWZtZira3inkjYj58VWRKstr59xWnRK9ok6I0q//iOFiq6lbkh5kPUu5u4dOktg93qJhtK7v+6B84wb/8s7hs2Mu79XGlqkruu93ucjyo9sZkHZIOHhe98hW8O/PR7AkX7Tl9hO7QPal4KuwLfj+46z8V3V/bj+ZKTf9v4ZTqMU4pmf61FzdnGrZ52esh2rZPO3cZ3OSCmONcyZ/9pzcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwH/oN0T7QnjtEOy8AAAAAElFTkSuQmCC'),
            new _app_module__WEBPACK_IMPORTED_MODULE_2__["TeamDetails"](3, 'Data Information & Delivery', 'DID', 'Bull shit', ''),
            new _app_module__WEBPACK_IMPORTED_MODULE_2__["TeamDetails"](1, 'FNOL, Desktop & Utilities', 'TESTING', 'Some random shit', 'data:image/png;base64,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'),
            new _app_module__WEBPACK_IMPORTED_MODULE_2__["TeamDetails"](2, 'TREAT', 'CSS', 'Some random shit', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEXsZ3j////sYnTsZ3nrW27//v/4ytDxlqHsZXbrYXLsZXf98fLrWGvvhZP74eXrXXD97O750NXynqf++fnugI3ucoH3xMnzpa399PXwjJfta3v51trufInzqrLzoav74OPrUmf2ucH1sLnvdoPqTGP0tb32wMg8D4NhAAAFFklEQVR4nO3ZW5uiIAAGYARMMI3Kakyz49b//4kLCojV7F7ptM9+78XMeEj4Qjk4hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPGMfUDgjYsRCxrz236WSSikppSOWwUhbiP4xYiHfF56sW8mIEQXdH7tSqh+4Yasyai2zEQvJ6q6QaJuOWMp35l3Zi1ETrrpCYiQcxfQJJ3wWBWGCDROK5+K/r867I0zTF30+yH+qDRkVQviEwuhqoAePdiPVFRVScd6PaJRnXKksU4I819Ydkvrs9mKCmuvp330bmgundKoBMt3mmu1LFwezkW/MgXa/tjW1JslltsttnZTa7xZlUczrpuJhPfWQp/azZVEUy1miJLFXOAgizC/blxb7bnc1UUJ6jF6UlBG6thuNlNuZ/av9AG3m/amrWziA86Q/VK637hxO1Gsh0Waim9UnCSz1wE8Tu/F13hfdX2u9m6nDYnjyF3ePW0pn/e44imr7uRkX9JMTHvO2upqZ8ag8jty2/X13HTA/hReJ/V+fnvCrfUZjXeE9JeIQD85st468vZLrSV58YkLJ+oSFD5PrhMt3EQ5Ujy/qzQPtEhL5kwmTcj6f25Yp5q1T2Ib2dtM/N0Ld3ebimhx3hd2olRn+fCcTL2az8GE1CfVVl/a7irtC5oephgtBpZK2dqezHgT1AkeECfsvnbLSZmq4opLfXIvq5nB9chzVB8652vQZdUIzuJ7deFgpXcioK7Wh1AzaLmHW7WHPCU+XdZJU0u27ZinTn5JuPLgowt3KoebU3H6p39Em1L1wP+Kbxpt6Qfw6Lw0T1ttMN5kkytZxeVadXzv7OUUqew8W1D5epsHDhB838/YJ4+hxtl84t3elfVw1G6KsqBtTHn6Wwy//SMJgp3T96ouDSuwTuvfPF93/Kwn7OhPfrM9ytba7+x5S3Pycpt3+2IRL4eos2HdN2CXsWtNXP3Wzg09PuPLzTqJso5TLJ/ONdLfkWr5c4dMT3pXfx+0Yt/qVcSszf2VciIP7QjJXfz77LuFPvDq1Cec2YTgeNv3ySNnBIarSbv0uqlxwbha7xL0m0FO47mS5iYYJ3Rpfz43MhyeNmVI3OUkyKlRmKtDPvPuEvnesz2aTkXMdlafHepuKvv7LSulNxrel65JcQtemuzMVNHt5OzAqv+6J73neLGr+PiGT3TcRRyvBleLCpdJzGp8+KvTKn1fXyLMJZWPLiGb7zXpVTNmITF2iUEHeJwyGkGJ1edRu1CjMkxWuDufBWwCfMN1EA2a5OdkbN7EZDnJ6CJTv2rCffQ40pjOS+btDQUKigty6tB2fKp7xVHNd+Ns2JKJfIIZr+DY+b/6YkBH5FeyMzTp7upemQlSDeYruU98mZEGn5NWuLbLLn9uQqcFrDt2nThZQk7fStYv5cRPBXcrCmqSZGzLsd3LNfEtk63DiWjTDWZtZira3inkjYj58VWRKstr59xWnRK9ok6I0q//iOFiq6lbkh5kPUu5u4dOktg93qJhtK7v+6B84wb/8s7hs2Mu79XGlqkruu93ucjyo9sZkHZIOHhe98hW8O/PR7AkX7Tl9hO7QPal4KuwLfj+46z8V3V/bj+ZKTf9v4ZTqMU4pmf61FzdnGrZ52esh2rZPO3cZ3OSCmONcyZ/9pzcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwH/oN0T7QnjtEOy8AAAAAElFTkSuQmCC')
        ];
    }
    ngOnInit() {
    }
};
TeamsOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teams-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./teams-overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams-overview/teams-overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./teams-overview.component.css */ "./src/app/teams-overview/teams-overview.component.css")).default]
    })
], TeamsOverviewComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Switch\Angular\MyKTApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);