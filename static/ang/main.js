(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");






var routes = [
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
    },
    {
        path: 'blog',
        component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"],
    },
    {
        path: 'contact',
        component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
    },
    {
        path: '**',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n}\r\n\r\nh1.example-app-name {\r\n    margin-left: 8px;\r\n}\r\n\r\n.example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n        causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    flex: 1;\r\n}\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n        `<body>` to be our scrolling element for mobile layouts. */\r\n    flex: 1 0 auto;\r\n}\r\n\r\nbutton.mat-icon-button {\r\n    outline: none;  \r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\"> -->\n  <app-nav></app-nav>\n<!-- </div> -->\n\n\n<!-- <router-outlet></router-outlet> -->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'presentation';
        this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array.from({ length: 50 }, function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("test");
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            console.log("success!");
            jquery__WEBPACK_IMPORTED_MODULE_2__["ajax"]({
                url: 'http://127.0.0.1:8000/api/posts',
                data: '',
                success: function (result) {
                    console.log(result);
                    result.forEach(function (post) {
                        console.log(post.content);
                    });
                },
                dataType: "JSON"
            });
        });
    };
    ;
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _nav_nav_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav/nav.module */ "./src/app/nav/nav.module.ts");












// import { BlogComponent } from './pages/blog/blog.component';
// import { HomeComponent } from './pages/home/home.component';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                // MatCommonModule,
                // MatTableModule,
                // MatCardModule,
                // MatInputModule,
                // MatFormFieldModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                // MatRadioModule,
                // MatDialogModule,
                // MatSlideToggleModule,
                // MatCheckboxModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                // MatMenuModule,
                // MatProgressSpinnerModule,
                // HttpClientModule,
                // BlogPostsService,
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_12__["PagesModule"],
                _nav_nav_module__WEBPACK_IMPORTED_MODULE_13__["NavModule"],
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"], useValue: '' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-posts.service.ts":
/*!***************************************!*\
  !*** ./src/app/blog-posts.service.ts ***!
  \***************************************/
/*! exports provided: BlogPostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostsService", function() { return BlogPostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BlogPostsService = /** @class */ (function () {
    function BlogPostsService(http) {
        this.http = http;
        // url = 'http://127.0.0.1:8000/api/posts';
        this.url = 'http://18.209.24.24/api/posts';
        this.commentUrl = 'http://127.0.0.1:8000/api/posts/comments';
    }
    BlogPostsService.prototype.getBlogPosts = function () {
        return this.http.get(this.url);
    };
    BlogPostsService.prototype.getComments = function () {
        return this.http.get(this.commentUrl);
    };
    BlogPostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BlogPostsService);
    return BlogPostsService;
}());



/***/ }),

/***/ "./src/app/nav/nav-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/nav/nav-routing.module.ts ***!
  \*******************************************/
/*! exports provided: NavRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavRoutingModule", function() { return NavRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/home/home.component */ "./src/app/pages/home/home.component.ts");






var routes = [
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
    },
    {
        path: 'blog',
        component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"],
    },
    {
        path: 'contact',
        component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
    },
    {
        path: '**',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
    },
];
var NavRoutingModule = /** @class */ (function () {
    function NavRoutingModule() {
    }
    NavRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NavRoutingModule);
    return NavRoutingModule;
}());



/***/ }),

/***/ "./src/app/nav/nav.module.ts":
/*!***********************************!*\
  !*** ./src/app/nav/nav.module.ts ***!
  \***********************************/
/*! exports provided: NavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavModule", function() { return NavModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav/nav.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _nav_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-routing.module */ "./src/app/nav/nav-routing.module.ts");








// import { NavComponent } from './nav/nav.component';

var NavModule = /** @class */ (function () {
    function NavModule() {
    }
    NavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // MatCommonModule,
                // MatTableModule,
                // MatCardModule,
                // MatInputModule,
                // MatFormFieldModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                // MatRadioModule,
                // MatDialogModule,
                // MatSlideToggleModule,
                // MatCheckboxModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                // MatMenuModule,
                // MatProgressSpinnerModule,
                // HttpClientModule,
                // BlogPostsService,
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"],
                _nav_routing_module__WEBPACK_IMPORTED_MODULE_8__["NavRoutingModule"],
            ],
            exports: [
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"],
            ]
        })
    ], NavModule);
    return NavModule;
}());



/***/ }),

/***/ "./src/app/nav/nav/nav.component.css":
/*!*******************************************!*\
  !*** ./src/app/nav/nav/nav.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\n\r\nh1.example-app-name {\r\n  margin-left: 8px;\r\n}\r\n\r\n.example-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n      causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  flex: 1;\r\n}\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n      `<body>` to be our scrolling element for mobile layouts. */\r\n  flex: 1 0 auto;\r\n}\r\n\r\nbutton.mat-icon-button {\r\n  outline: none;\r\n}\r\n\r\n/* .example-toolbar {\r\n  height: 100%;\r\n} */\r\n\r\n.mat-toolbar.mat-primary {\r\n  background: #007AFF;\r\n  color: #fff;\r\n}\r\n\r\n.btn-info {\r\n  font-weight: 600;\r\n  color: white;\r\n  border-color: white;\r\n  background-color: inherit !important;\r\n  border: 0px !important;\r\n  box-shadow: 0 0 0 0rem !important;\r\n}\r\n\r\n.btn-info:hover, .btn-info:active, .btn-info:not(:disabled):not(.disabled):active {\r\n  font-weight: 600;\r\n  /* color: black;\r\n  border-color: white;\r\n  background-color: white;     */\r\n}\r\n\r\n.btn-info:active {\r\n  background-color: inherit;\r\n}\r\n\r\n.dropdown-item {\r\n  color: black;\r\n  background-color: white;\r\n}\r\n\r\n/* .dropdown.show, .dropdown-menu.show {\r\n  color: inherit;\r\n  background-color: inherit;\r\n} */\r\n\r\n.dropdown.show > .btn-info {\r\n  font-weight: 600;\r\n  color: black;\r\n  border-color: white;\r\n  background-color: white;\r\n}\r\n\r\na:hover, #dropdownMenuButton:hover {\r\n  opacity: 1;\r\n  color: white;\r\n}\r\n\r\na:not(:hover), #dropdownMenuButton:not(:hover) {\r\n  opacity: .75;\r\n}\r\n\r\na:hover, a:not(:hover) {\r\n  color: inherit !important;\r\n}\r\n\r\n.color-white {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav/nav/nav.component.html":
/*!********************************************!*\
  !*** ./src/app/nav/nav/nav.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\">\r\n\r\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\r\n      <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n      <h1 class=\"example-app-name\">Dillon Stock</h1>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"col col-lg-4 offset-lg-8\">\r\n      <a href=\"https://www.linkedin.com/in/william-joe-wallace-a7691878/\" target=\"_blank\" class=\"btn btn-lg linked-in\"><i class=\"fab fa-linkedin\" aria-hidden=\"true\"></i></a>\r\n      <a href=\"#\" class=\"btn btn-lg instagram\" target=\"_blank\"><i class=\"fab fa-instagram\" aria-hidden=\"true\"></i> </a>\r\n      <a href=\"#\" class=\"btn btn-lg twitter\" target=\"_blank\"><i class=\"fab fa-twitter\" aria-hidden=\"true\"></i> </a>\r\n      <a href=\"https://www.facebook.com/joe.wallace.33046\" class=\"btn btn-lg facebook\" target=\"_blank\"><i class=\"fab fa-facebook\" aria-hidden=\"true\"></i> </a>\r\n    </div>\r\n    <div class=\"row\">\r\n    </div>\r\n  </div>\r\n  </mat-toolbar>\r\n\r\n  <mat-sidenav-container class=\"example-sidenav-container\"\r\n                          [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n      <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\r\n                  [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\r\n      <mat-nav-list>\r\n          <!-- <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a> -->\r\n          <a mat-list-item routerLink=\"home\">\r\n              <i class=\"material-icons\">\r\n                  home\r\n              </i>\r\n                  Home\r\n          </a>\r\n          <a mat-list-item routerLink=\".\">\r\n              <i class=\"material-icons\">\r\n                  info\r\n              </i>\r\n                  About\r\n          </a>\r\n          <a mat-list-item routerLink=\".\">\r\n              <i class=\"material-icons\">\r\n                  computer\r\n              </i>\r\n                  Patient Portal\r\n          </a>\r\n          <a mat-list-item routerLink=\".\">\r\n              <i class=\"material-icons\">\r\n                  list\r\n              </i>\r\n                  Services\r\n          </a>\r\n          <a mat-list-item routerLink=\"blog\" color=\"my-theme-accent\">\r\n              <i class=\"material-icons\">\r\n                  textsms\r\n              </i>\r\n                  Blog\r\n          </a>\r\n          <a mat-list-item routerLink=\"contact\">\r\n              <i class=\"material-icons\">\r\n                  perm_contact_calendar\r\n              </i>\r\n                  Contact Us\r\n          </a>\r\n      </mat-nav-list>\r\n      </mat-sidenav>\r\n\r\n      <mat-sidenav-content>\r\n          <!-- <div class=\"container\">\r\n            <div class=\"col\">\r\n              <router-outlet></router-outlet>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"container\">\r\n            <div class=\"col\">\r\n              <router-outlet></router-outlet>\r\n            </div>\r\n          </div>\r\n      </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>\r\n<!-- <div class=\"container\">\r\n    <a href=\"https://www.linkedin.com/in/william-joe-wallace-a7691878/\" target=\"_blank\" class=\"btn btn-lg linked-in\"><i class=\"fab fa-linkedin\" aria-hidden=\"true\"></i></a>\r\n    <a href=\"#\" class=\"btn btn-lg instagram\" target=\"_blank\"><i class=\"fab fa-instagram\" aria-hidden=\"true\"></i> </a>\r\n    <a href=\"#\" class=\"btn btn-lg twitter\" target=\"_blank\"><i class=\"fab fa-twitter\" aria-hidden=\"true\"></i> </a>\r\n    <a href=\"https://www.facebook.com/joe.wallace.33046\" class=\"btn btn-lg facebook\" target=\"_blank\"><i class=\"fab fa-facebook\" aria-hidden=\"true\"></i> </a>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/nav/nav/nav.component.ts":
/*!******************************************!*\
  !*** ./src/app/nav/nav/nav.component.ts ***!
  \******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");



var NavComponent = /** @class */ (function () {
    function NavComponent(changeDetectorRef, media) {
        this.title = 'presentation';
        this.shouldRun = true;
        this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog-post/blog-post.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/blog/blog-post/blog-post.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.joe-blog-post-header-image {\r\n  background-image: url('https://media.licdn.com/dms/image/C4E03AQHpjjJtFgSQxQ/profile-displayphoto-shrink_800_800/0?e=1564617600&v=beta&t=cQktx0JS6fdlb4TEuWNtKziODwsWICnoZmBYUtQ2060');\r\n  background-size: cover;\r\n}\r\n\r\n.mat-button {\r\n  outline: none;\r\n  /* background-color: #00BAFF; */\r\n}\r\n\r\nmat-card {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.mat-card {\r\n  /* background-color: #999999 */\r\n}\r\n\r\n.fa-thumbs-down, .fa-thumbs-up {\r\n  /* background-color: inherit; */\r\n  color: #006AFF;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/blog/blog-post/blog-post.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/blog/blog-post/blog-post.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <!-- <li *ngFor=\"let obj of posts\">{{obj | json}}</li> -->\n    <mat-card-header>\n      <mat-card-title>{{post.title}}</mat-card-title>\n      <mat-card-subtitle>{{post.publish_on}}</mat-card-subtitle>\n      <div mat-card-avatar class=\"joe-blog-post-header-image\">\n        <!-- <i class=\"material-icons\">person</i> -->\n      </div>\n    </mat-card-header>\n    <mat-card-content>\n      <p>\n          {{post.content}}\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-button>\n          <i class=\"material-icons\">\n            thumb_up\n          </i>\n        </button>\n        <button mat-button>\n          <i class=\"material-icons\">\n            thumb_down\n          </i>\n        </button>\n        <!-- <button mat-button>SHARE</button> -->\n        <!-- <a>\n            <i class=\"fas fa-thumbs-up\" style=\"color:blue;\"></i>\n        </a>\n        <a>\n            <i class=\"fas fa-thumbs-down\" style=\"color:blue;\"></i>\n        </a> -->\n      </mat-card-actions>\n    <!-- <li *ngFor=\"let obj of posts\">{{obj.title}}</li> -->\n\n    <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Comment\n            </mat-panel-title>\n            <!-- <mat-panel-description>\n              Create a new blog post\n            </mat-panel-description> -->\n          </mat-expansion-panel-header>\n\n          <mat-form-field>\n            <input matInput placeholder=\"Your comment\">\n          </mat-form-field>\n          <mat-action-row>\n              <button mat-button (click)=\"clicked()\">Click me</button>\n            </mat-action-row>\n        </mat-expansion-panel>\n    </mat-accordion>\n</mat-card>\n\n\n<!-- SNACK BAR BEGIN -->\n<!-- <mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field> -->\n\n<!-- <button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button> -->\n<!-- SNACK BAR END -->\n"

/***/ }),

/***/ "./src/app/pages/blog/blog-post/blog-post.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/blog/blog-post/blog-post.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogPostComponent, PizzaPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostComponent", function() { return BlogPostComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyComponent", function() { return PizzaPartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");



var BlogPostComponent = /** @class */ (function () {
    function BlogPostComponent(_snackBar) {
        this._snackBar = _snackBar;
        this.durationInSeconds = 2;
    }
    BlogPostComponent.prototype.ngOnInit = function () {
    };
    BlogPostComponent.prototype.clicked = function () {
        console.log('comment submitted!');
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: this.durationInSeconds * 1000,
        });
    };
    BlogPostComponent.prototype.openSnackBar = function () {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: this.durationInSeconds * 1000,
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlogPostComponent.prototype, "post", void 0);
    BlogPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-post',
            template: __webpack_require__(/*! ./blog-post.component.html */ "./src/app/pages/blog/blog-post/blog-post.component.html"),
            styles: [__webpack_require__(/*! ./blog-post.component.css */ "./src/app/pages/blog/blog-post/blog-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], BlogPostComponent);
    return BlogPostComponent;
}());

var PizzaPartyComponent = /** @class */ (function () {
    function PizzaPartyComponent() {
    }
    PizzaPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'snack-bar-component-example-snack',
            template: __webpack_require__(/*! ./snack-bar-component-example-snack.html */ "./src/app/pages/blog/blog-post/snack-bar-component-example-snack.html"),
            styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "]
        })
    ], PizzaPartyComponent);
    return PizzaPartyComponent;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog-post/snack-bar-component-example-snack.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/blog/blog-post/snack-bar-component-example-snack.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"example-pizza-party\">\r\n    Comment Posted! 🍕\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/blog/blog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog-post-card {\r\n  max-width: 400px;\r\n}\r\n\r\n.joe-blog-post-header-image {\r\n  background-image: url('https://media.licdn.com/dms/image/C4E03AQHpjjJtFgSQxQ/profile-displayphoto-shrink_800_800/0?e=1564617600&v=beta&t=cQktx0JS6fdlb4TEuWNtKziODwsWICnoZmBYUtQ2060');\r\n  background-size: cover;\r\n}\r\n\r\n.mat-button {\r\n  outline: none;\r\n  background-color: #00BAFF\r\n}\r\n\r\n.mat-card {\r\n  /* background-color: #999999 */\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/blog/blog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-lg-8\" *ngFor=\"let p of posts; index as i\">\n    <app-blog-post [post]=\"p\"></app-blog-post>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blog-posts.service */ "./src/app/blog-posts.service.ts");


// import { BlogPostsService } from '../../blog-posts.service';

// export interface Post{
//   id: number;
//   title: string;
//   content: string;
//   updated_on: string;
//   created_on: string;
//   publish_on: string;
// }
var BlogComponent = /** @class */ (function () {
    function BlogComponent(blogPostsService) {
        this.blogPostsService = blogPostsService;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogPostsService.getBlogPosts().subscribe(function (posts) {
            _this.posts = posts;
            posts.forEach(function (post) {
                console.log("title: " + post.title);
            });
            // console.log(`Result of service: ${result.title}`);
        }, function (error) { return console.log(error); });
        this.blogPostsService.getComments().subscribe(function (comments) {
            _this.comments = comments;
            comments.forEach(function (comment) {
                console.log("title: " + comment.text);
            });
        }, function (error) { return console.log(error); });
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/pages/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/pages/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blog_posts_service__WEBPACK_IMPORTED_MODULE_2__["BlogPostsService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _blog_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/blog-post/blog-post.component */ "./src/app/pages/blog/blog-post/blog-post.component.ts");












var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _blog_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_10__["BlogPostComponent"],
                _blog_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_10__["PizzaPartyComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            ],
            exports: [
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
            ],
            // providers: [
            //   BlogPostsService,
            // ]
            entryComponents: [_blog_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_10__["PizzaPartyComponent"]],
        })
    ], PagesModule);
    return PagesModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\JIM2\Documents\django_website\joe\mysite\presentation\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);