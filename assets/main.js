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

/***/ "./src/app/api-calls.service.ts":
/*!**************************************!*\
  !*** ./src/app/api-calls.service.ts ***!
  \**************************************/
/*! exports provided: ApiCallsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCallsService", function() { return ApiCallsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiCallsService = /** @class */ (function () {
    function ApiCallsService(http) {
        this.http = http;
    }
    ApiCallsService.prototype.get = function (url) {
        return this.http.get(('/api/' + url), { observe: 'response' });
    };
    ApiCallsService.prototype.post = function (url, postObj, headers) {
        return this.http.post(('/api/' + url), postObj, { headers: headers, observe: 'response' });
    };
    ApiCallsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiCallsService);
    return ApiCallsService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _user_info_page_user_info_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-info-page/user-info-page.component */ "./src/app/user-info-page/user-info-page.component.ts");
/* harmony import */ var _test_list_test_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test-list/test-list.component */ "./src/app/test-list/test-list.component.ts");
/* harmony import */ var _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test-page/test-page.component */ "./src/app/test-page/test-page.component.ts");
/* harmony import */ var _result_page_result_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./result-page/result-page.component */ "./src/app/result-page/result-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    {
        path: 'login',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],
    },
    {
        path: 'user',
        component: _user_info_page_user_info_page_component__WEBPACK_IMPORTED_MODULE_6__["UserInfoPageComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'test-list',
        component: _test_list_test_list_component__WEBPACK_IMPORTED_MODULE_7__["TestListComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'test/:id',
        component: _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_8__["TestPageComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'test-result/:id',
        component: _result_page_result_page_component__WEBPACK_IMPORTED_MODULE_9__["ResultPageComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: '**',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],
                _user_info_page_user_info_page_component__WEBPACK_IMPORTED_MODULE_6__["UserInfoPageComponent"],
                _test_list_test_list_component__WEBPACK_IMPORTED_MODULE_7__["TestListComponent"],
                _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_8__["TestPageComponent"],
                _result_page_result_page_component__WEBPACK_IMPORTED_MODULE_9__["ResultPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["StorageServiceModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.checkToken() === true) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
        this.haveToken = false;
    }
    AuthService.prototype.getCookie = function (cname) {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    };
    AuthService.prototype.deleteCookie = function (cname) {
        var expires = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';
        document.cookie = cname + '=;' + expires + ';path=/';
    };
    AuthService.prototype.checkToken = function () {
        if (this.getCookie('token') === '') {
            return this.haveToken = false;
        }
        else {
            return this.haveToken = true;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login_screen {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: relative;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;\r\n    background-image: url(https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg);\r\n    background-color: #000000;\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n}\r\n\r\n.login_card {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50% , -50%) ;\r\n            transform: translate(-50% , -50%) ;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    border-top: 3px solid #449db8ec;\r\n}\r\n\r\n.login_form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    justify-content: center;\r\n    padding: 20px 25px;\r\n}\r\n\r\n.login_form input{\r\n    width: calc(270px - 10px);\r\n    height: 40px;\r\n    margin-bottom: 20px;\r\n    border:none;\r\n    padding-left: 10px;\r\n}\r\n\r\n.login_form input:focus{\r\n    outline: solid 2px  #449db8ec;\r\n}\r\n\r\n.login_card h1{\r\n    text-align: center;\r\n    padding-bottom: 20px; ;\r\n}\r\n\r\n.Login_form_submit {\r\n    width: 75px;\r\n    text-align: center;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    padding: 10px 15px;\r\n    cursor: pointer;\r\n    border-bottom: 1px solid transparent;\r\n    transition: border 200ms linear;\r\n    transition: background-color  200ms linear;\r\n}\r\n\r\n.Login_form_submit:hover {\r\n    transition: border 200ms linear;\r\n    transition: background-color 200ms linear;\r\n    border-bottom-color: #449db8ec;\r\n    background-color: #ffffff;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login-page/login-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-page/login-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login_screen\">\r\n  <div class=\"login_card\">\r\n    <div class=\"login_form\">\r\n      <h1>Login</h1>\r\n      <div>\r\n          <input type=\"text\" placeholder=\"Login\" [formControl]=\"login\">\r\n      </div>\r\n      <div>\r\n          <input type=\"password\" placeholder=\"Password\" [formControl]=\"password\">\r\n      </div>\r\n      <div class=\"Login_form_submit\" (click)=\"sendLoginData()\">Login</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-calls.service */ "./src/app/api-calls.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(api, router) {
        this.api = api;
        this.router = router;
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                responseType: 'text'
            })
        };
    }
    LoginPageComponent.prototype.sendLoginData = function () {
        var _this = this;
        var data = {
            login: this.login.value,
            password: this.password.value,
        };
        this.api.post('auth/login', data, this.httpOptions)
            .subscribe(function (res) {
            if (res.status === 200) {
                _this.router.navigate(['user']);
            }
        });
    };
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [_api_calls_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/result-page/result-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/result-page/result-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result_screen {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: relative;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;\r\n    background-image: url(https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg);\r\n    background-color: #000000;\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n}\r\n\r\n.result_card {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50% , -50%) ;\r\n            transform: translate(-50% , -50%) ;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    border-top: 3px solid #449db8ec;\r\n}\r\n\r\n.result_form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    justify-content: center;\r\n    padding: 20px 25px;\r\n}\r\n\r\n.result_card h1,.result_card div{\r\n    text-align: center;\r\n    padding-bottom: 20px; ;\r\n}\r\n\r\n.result_button {\r\n    text-align: center;\r\n    border-radius: 7px;\r\n    background-color: rgba(68, 157, 184, 0.2);\r\n    transition:  background-color 250ms linear;\r\n    padding: 10px 15px;\r\n    border: none;\r\n    height: auto;\r\n}\r\n\r\n.result_button:hover{\r\n    transition:  background-color 250ms linear;\r\n    background-color: rgba(68, 157, 184, 1);\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/result-page/result-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/result-page/result-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"result_screen\">\r\n  <div class=\"result_card\">\r\n    <div class=\"result_form\">\r\n      <h1>Test result:</h1>\r\n      <div>\r\n        <p>{{result.questionsRight}} / {{result.questionsMax}}</p>\r\n        <p>procent: {{((result.questionsRight * 100 ) / result.questionsMax ) | number}} %</p>\r\n      </div>\r\n      <div class=\"result_button\" [routerLink]=\"['/user']\">Return</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/result-page/result-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/result-page/result-page.component.ts ***!
  \******************************************************/
/*! exports provided: ResultPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageComponent", function() { return ResultPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-calls.service */ "./src/app/api-calls.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultPageComponent = /** @class */ (function () {
    function ResultPageComponent(api, activatedroute) {
        this.api = api;
        this.activatedroute = activatedroute;
    }
    ResultPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.url.subscribe(function (data) {
            _this.selectedTestId = data[1].path;
            var url = _this.selectedTestId.split('/');
            _this.selectedTestId = url.slice(-1)[0];
        });
        this.api.get(('results/' + this.selectedTestId))
            .subscribe(function (res) {
            _this.result = res.body;
        });
    };
    ResultPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result-page',
            template: __webpack_require__(/*! ./result-page.component.html */ "./src/app/result-page/result-page.component.html"),
            styles: [__webpack_require__(/*! ./result-page.component.css */ "./src/app/result-page/result-page.component.css")]
        }),
        __metadata("design:paramtypes", [_api_calls_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ResultPageComponent);
    return ResultPageComponent;
}());



/***/ }),

/***/ "./src/app/test-list/test-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/test-list/test-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test-list_screen {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: relative;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;\r\n    background-image: url(https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg);\r\n    background-color: #000000;\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n}\r\n\r\n.test-list_card {\r\n    position: absolute;\r\n    width: 50vw;\r\n    height: 70vh;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50% , -50%) ;\r\n            transform: translate(-50% , -50%) ;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    border-top: 3px solid #449db8ec;\r\n}\r\n\r\n.test-list_card h1{\r\n    text-align: center;\r\n    padding: 20px 0px; ;\r\n}\r\n\r\n.test-list-data-container {\r\n    width: 100%;\r\n    height: calc(100% - 180px);\r\n    overflow:auto;\r\n}\r\n\r\n.test-list-data {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 10fr;\r\n        grid-template-columns: 1fr 10fr;\r\n    margin: 0 10% ;\r\n    font-size: 22pt;\r\n    cursor: pointer;\r\n    border: 3px solid transparent;\r\n}\r\n\r\n.test-list-data:nth-of-type(odd) {\r\nbackground-color: #fafafa;\r\n}\r\n\r\n.test-list-data h3 {\r\n    text-align: center;\r\n}\r\n\r\n.test-list_menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    padding-top: 25px;\r\n    padding-right: 15px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.test-list_menu_button {\r\n    margin-right: 20px;\r\n    border-radius: 7px;\r\n    background-color: rgba(68, 157, 184, 0.2);\r\n    transition:  background-color 250ms linear;\r\n    padding: 10px 15px;\r\n    border: none;\r\n}\r\n\r\n.test-list_menu_button:not([disabled]):hover{\r\n    transition:  background-color 250ms linear;\r\n    background-color: rgba(68, 157, 184, 1);\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n}\r\n\r\n.test-list-data-active {\r\n    border: 3px solid rgba(68, 157, 184, 0.7);\r\n}"

/***/ }),

/***/ "./src/app/test-list/test-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/test-list/test-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"test-list_screen\">\r\n    <div class=\"test-list_card\">\r\n        <h1>Select test</h1>\r\n        <div class=\"test-list-data-container\">\r\n            <div  [ngClass]=\"{'test-list-data-active': i==selectedIndex}\"\r\n            *ngFor=\"let test of testList; let i = index\" \r\n            class=\"test-list-data\" \r\n            (click)=\"onTestSelect(i)\">\r\n                <h3>{{i+1}}</h3>\r\n                <div>{{test.name}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"test-list_menu\">\r\n            <button type=\"button\" class=\"test-list_menu_button\" \r\n            [routerLink]=\"['/test']\" \r\n            [disabled]=\"itemSelected !== true\" (click)=\"onTestStart()\">Start test</button>\r\n            <div class=\"test-list_menu_button\" [routerLink]=\"['/user']\">Back</div>\r\n        </div>  \r\n   </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/test-list/test-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/test-list/test-list.component.ts ***!
  \**************************************************/
/*! exports provided: TestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestListComponent", function() { return TestListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-calls.service */ "./src/app/api-calls.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestListComponent = /** @class */ (function () {
    function TestListComponent(api, router) {
        this.api = api;
        this.router = router;
    }
    TestListComponent.prototype.onTestSelect = function (i) {
        this.selectedIndex = i;
        this.selectedTestId = this.testList[i]._id;
        this.itemSelected = true;
    };
    TestListComponent.prototype.onTestStart = function () {
        this.router.navigate(['/test', this.selectedTestId]);
    };
    TestListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemSelected = false;
        this.api.get('tests')
            .subscribe(function (res) {
            _this.testList = res.body;
        });
    };
    TestListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-list',
            template: __webpack_require__(/*! ./test-list.component.html */ "./src/app/test-list/test-list.component.html"),
            styles: [__webpack_require__(/*! ./test-list.component.css */ "./src/app/test-list/test-list.component.css")]
        }),
        __metadata("design:paramtypes", [_api_calls_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TestListComponent);
    return TestListComponent;
}());



/***/ }),

/***/ "./src/app/test-page/test-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/test-page/test-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test_screen {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: relative;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;\r\n    background-image: url(https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg);\r\n    background-color: #000000;\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n}\r\n\r\n.test_card {\r\n    position: absolute;\r\n    width: 50vw;\r\n    height: 70vh;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50% , -50%) ;\r\n            transform: translate(-50% , -50%) ;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    border-top: 3px solid #449db8ec;\r\n}\r\n\r\n.test_button_container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-content: center;\r\n    justify-content: flex-end;\r\n    padding-top: 25px;\r\n    padding-right: 15px;\r\n    padding-bottom: 30px; \r\n}\r\n\r\n.test_button {\r\n    margin-right: 20px;\r\n    border-radius: 7px;\r\n    background-color: rgba(68, 157, 184, 0.2);\r\n    transition:  background-color 250ms linear;\r\n    padding: 10px 15px;\r\n    border: none;\r\n    height: auto;\r\n}\r\n\r\n.test_button:hover{\r\n    transition:  background-color 250ms linear;\r\n    background-color: rgba(68, 157, 184, 1);\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n}\r\n\r\n.test_grid {\r\n    width: 100%;\r\n    height:  100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 1fr 5fr;\r\n        grid-template-rows: 1fr 5fr;\r\n}\r\n\r\n.test_question_text {\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -ms-grid-column-align: center;\r\n        justify-self: center;\r\n}\r\n\r\n.test_question_data {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 10fr;\r\n        grid-template-columns: 1fr 10fr;\r\n    margin: 0 10% ;\r\n    font-size: 22pt;\r\n    cursor: pointer;\r\n    border: 3px solid transparent;\r\n}\r\n\r\n.test_question_input {\r\n    text-align: center;\r\n}\r\n\r\n.test_question_input  input{\r\n    width: calc(100% - 120px);\r\n    font-size: 12pt;\r\n    height: 18px;\r\n    padding: 20px 25px;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n/*checkbox custom css*/\r\n\r\n.container {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 22px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n\r\n/* Hide the browser's default checkbox */\r\n\r\n.container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n  }\r\n\r\n/* Create a custom checkbox */\r\n\r\n.checkmark {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n    border: 1px solid transparent;\r\n    -webkit-transform: translate(-50% , 30%);\r\n            transform: translate(-50% , 30%);\r\n  }\r\n\r\n/* On mouse-over, add a grey background color */\r\n\r\n.container:hover input ~ .checkmark {\r\n    border-color: #449db8ec;\r\n  }\r\n\r\n/* When the checkbox is checked, add a blue background */\r\n\r\n.container input:checked ~ .checkmark {\r\n    background-color: #449db8ec;\r\n  }\r\n\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n  }\r\n\r\n/* Show the checkmark when checked */\r\n\r\n.container input:checked ~ .checkmark:after {\r\n    display: block;\r\n  }\r\n\r\n/* Style the checkmark/indicator */\r\n\r\n.container .checkmark:after {\r\n    left: 9px;\r\n    top: 5px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n  }"

/***/ }),

/***/ "./src/app/test-page/test-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/test-page/test-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"test_screen\">\r\n    <div class=\"test_card\">\r\n        <div class=\"test_grid\">\r\n            <div class=\"test_question_text\">\r\n                <h4>{{question.question}}</h4>\r\n            </div>\r\n        <div class=\"test_question_list\" #checkboxes>\r\n            <div class=\"test_question_check\" *ngFor=\"let answer of question.answers; let i = index\">\r\n                <div class=\"test_question_data\">\r\n                    <div>\r\n                        <label class=\"container\">\r\n                            <input type=\"checkbox\" (change)=\"onSelectItem($event,i)\">\r\n                            <span class=\"checkmark\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div>\r\n                        {{answer}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>    \r\n        <div class=\"test_button_container\">\r\n            <div *ngIf=\"!last\" class=\"test_button\" (click)=\"nextQuestion()\">next</div>\r\n            <div *ngIf=\"last\" class=\"test_button\" (click)=\"endTest()\">end</div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/test-page/test-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/test-page/test-page.component.ts ***!
  \**************************************************/
/*! exports provided: TestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageComponent", function() { return TestPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-calls.service */ "./src/app/api-calls.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestPageComponent = /** @class */ (function () {
    function TestPageComponent(route, activatedroute, api) {
        this.route = route;
        this.activatedroute = activatedroute;
        this.api = api;
        this.currentQuestion = 0;
        this.testId = '';
        this.url = '';
        this.testAnswers = [];
        this.questionAnswer = [];
    }
    TestPageComponent.prototype.onSelectItem = function (event, i) {
        var check = event.target.checked;
        this.questionAnswer[i].checked = check;
    };
    TestPageComponent.prototype.arrayRebuild = function () {
        for (var i = 0; i < this.question.answers.length; i++) {
            var obj = {
                index: i,
                answer: this.question.answers[i],
                checked: false,
            };
            this.questionAnswer.push(obj);
        }
    };
    TestPageComponent.prototype.checkIfLast = function () {
        if ((this.questions.length - 1) === this.currentQuestion) {
            this.last = true;
        }
    };
    TestPageComponent.prototype.addToArray = function (arr, obj) {
        arr.push(obj);
    };
    TestPageComponent.prototype.setCheckBoxesToDefault = function () {
        var cbx = this.checkboxesElemRef.nativeElement.getElementsByTagName('input');
        for (var i = 0; i < cbx.length; i++) {
            cbx[i].checked = false;
        }
    };
    TestPageComponent.prototype.nextQuestion = function () {
        this.currentQuestion++;
        this.addToArray(this.testAnswers, this.questionAnswer);
        this.checkIfLast();
        this.questionAnswer = [];
        this.question = this.questions[this.currentQuestion];
        this.arrayRebuild();
        this.setCheckBoxesToDefault();
    };
    TestPageComponent.prototype.endTest = function () {
        var _this = this;
        this.addToArray(this.testAnswers, this.questionAnswer); // push last element
        this.api.post('results', {
            testId: this.testId,
            answers: this.testAnswers
        }, {})
            .subscribe(function (res) {
            _this.url = res.body._id;
            _this.route.navigate(['/test-result', _this.url]);
        });
    };
    TestPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.question = {};
        this.activatedroute.url.subscribe(function (data) {
            _this.testId += data[1].path;
        });
        this.api.get('tests/' + this.testId)
            .subscribe(function (res) {
            var testData = res.body;
            _this.questions = testData.questions;
            _this.question = _this.questions[0];
            _this.checkIfLast();
            _this.arrayRebuild();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('checkboxes'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TestPageComponent.prototype, "checkboxesElemRef", void 0);
    TestPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-page',
            template: __webpack_require__(/*! ./test-page.component.html */ "./src/app/test-page/test-page.component.html"),
            styles: [__webpack_require__(/*! ./test-page.component.css */ "./src/app/test-page/test-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_calls_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallsService"]])
    ], TestPageComponent);
    return TestPageComponent;
}());



/***/ }),

/***/ "./src/app/user-info-page/user-info-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-info-page/user-info-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user_info_screen {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: relative;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;\r\n    background-image: url(https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg);\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n}\r\n\r\n.user_info_card {\r\n    position: absolute;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 3fr;\r\n        grid-template-columns: 1fr 3fr;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 90vw;\r\n    height: 80vh;\r\n    -webkit-transform: translate(-50% , -50%) ;\r\n            transform: translate(-50% , -50%) ;\r\n    background-color: rgba(255, 255, 255 , 0.8);\r\n    box-shadow: 5px 5px 100px  rgba(0, 0, 0, 0.3) ; \r\n}\r\n\r\n.profile_card {\r\n    margin-top: 120px;\r\n    position: relative;\r\n}\r\n\r\n.profile_card_img {\r\n    position: absolute;\r\n    top: 0%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50% , -50%);\r\n            transform: translate(-50% , -50%);\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    border: 3px solid #449db8ec; \r\n    overflow: hidden;\r\n    z-index: 5;\r\n    background-color: #449db8ec;\r\n}\r\n\r\n.profile_card_img img{\r\n    width: 100px;\r\n    height: 100px;    \r\n}\r\n\r\n.profile_card_user_info {\r\n    padding-top: 50px;\r\n    text-align: center;\r\n    padding-bottom: 150px;\r\n    border-top: 3px solid #449db8ec;\r\n    border-bottom: 3px solid #449db8ec;\r\n    background-color: rgba(7, 56, 71, 0.1);\r\n    margin: 0px 15px;\r\n    border-radius: 0% 0% 25% 25% ;\r\n}\r\n\r\n.profile_card_user_info  h1{\r\n    padding-top: 10px;\r\n}\r\n\r\n.user_info_user_details {\r\n    padding: 0px 15px;\r\n    padding-bottom: 25px;\r\n    overflow: hidden;\r\n}\r\n\r\n.details_menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    padding-top: 25px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.details_menu_button {\r\n    margin-right: 20px;\r\n    border-radius: 7px;\r\n    background-color: rgba(68, 157, 184, 0.2);\r\n    transition:  background-color 250ms linear;\r\n    padding: 10px 15px;\r\n}\r\n\r\n.details_menu_button:hover{\r\n    transition:  background-color 250ms linear;\r\n    background-color: rgba(68, 157, 184, 1);\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n}\r\n\r\n.detail_spreadsheet_hedliner{\r\n    border-bottom: 3px solid #449db8ec;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 2fr 5fr 2fr ;\r\n        grid-template-columns: 2fr 5fr 2fr ;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n.detail_spreadsheet {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 2fr 5fr 2fr ;\r\n        grid-template-columns: 2fr 5fr 2fr ;\r\n    text-align: center;\r\n}\r\n\r\n.detail_spreadsheet:nth-of-type(odd) {\r\n    background-color: #ffffff;\r\n}\r\n\r\n.detail_spreadsheet:nth-of-type(even) {\r\n    background-color: #dbdbdb;\r\n}\r\n\r\n.detail_spreadsheet_container {\r\n    height: calc(100% - 142px);\r\n    padding-bottom: 25px;\r\n    overflow: auto;\r\n}"

/***/ }),

/***/ "./src/app/user-info-page/user-info-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-info-page/user-info-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user_info_screen\">\r\n    <div class=\"user_info_card\">\r\n     <div class=\"user_profile\">\r\n      <div class=\"profile_card\"> \r\n        <div class=\"profile_card_img\">\r\n          <img src=\"{{user.avatar}}\" alt=\"test\">\r\n        </div>\r\n        <div class=\"profile_card_user_info\">\r\n          <h1>{{user.name}}</h1>\r\n          <h2>{{user.lastName}}</h2>\r\n          <p>{{user.email}}</p>\r\n        </div>\r\n      </div>\r\n     </div>\r\n     <div class=\"user_info_user_details\">\r\n       <div class=\"details_menu\">\r\n         <div class=\"details_menu_button\" [routerLink]=\"['/test-list']\">Test List</div>\r\n         <div class=\"details_menu_button\" (click)=\"onLogOut()\">Log Out</div>\r\n       </div>\r\n        <div class=\"detail_spreadsheet_hedliner\">\r\n          <div>Date</div>\r\n          <div>Subject</div>\r\n          <div>%</div>\r\n        </div>\r\n        <div class=\"detail_spreadsheet_container\">\r\n            <div *ngFor=\"let result of results\" class=\"detail_spreadsheet\">\r\n                <div>{{result.date | date:\"dd/MM/yy\"}}</div>\r\n                <div>{{result.test.name}}</div>\r\n                <div>{{((result.questionsRight * 100 ) / result.questionsMax ) | number}}%</div>\r\n              </div>\r\n        </div>\r\n     </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/user-info-page/user-info-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-info-page/user-info-page.component.ts ***!
  \************************************************************/
/*! exports provided: UserInfoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoPageComponent", function() { return UserInfoPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_calls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-calls.service */ "./src/app/api-calls.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserInfoPageComponent = /** @class */ (function () {
    function UserInfoPageComponent(api, auth, router) {
        this.api = api;
        this.auth = auth;
        this.router = router;
    }
    UserInfoPageComponent.prototype.onLogOut = function () {
        this.router.navigate(['']);
        this.auth.deleteCookie('token');
    };
    UserInfoPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = {};
        this.api.get('users/userdata')
            .subscribe(function (res) {
            _this.user = res.body;
        });
        this.api.get('results')
            .subscribe(function (res) {
            _this.results = res.body;
        });
    };
    UserInfoPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info-page',
            template: __webpack_require__(/*! ./user-info-page.component.html */ "./src/app/user-info-page/user-info-page.component.html"),
            styles: [__webpack_require__(/*! ./user-info-page.component.css */ "./src/app/user-info-page/user-info-page.component.css")]
        }),
        __metadata("design:paramtypes", [_api_calls_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallsService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserInfoPageComponent);
    return UserInfoPageComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\Projects\coursework-testing-center-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map