webpackJsonp([1,4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hobby_hobby_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web_dev_web_dev_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__travel_travel_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__roller_skating_roller_skating_component__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'hobby', redirectTo: 'hobby/web-dev', pathMatch: 'full' },
    { path: 'hobby', children: [
            { path: 'web-dev', component: __WEBPACK_IMPORTED_MODULE_5__web_dev_web_dev_component__["a" /* WebDevComponent */] },
            { path: 'travel', component: __WEBPACK_IMPORTED_MODULE_6__travel_travel_component__["a" /* TravelComponent */] },
            { path: 'roller-skating', component: __WEBPACK_IMPORTED_MODULE_7__roller_skating_roller_skating_component__["a" /* RollerSkatingComponent */] },
        ], component: __WEBPACK_IMPORTED_MODULE_3__hobby_hobby_component__["a" /* HobbyComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            //     RouterModule.forChild([ { path: 'hobby/web-dev', component: WebDevComponent} ]),
            //   RouterModule.forChild([ { path: 'hobby/travel', component: TravelComponent} ]),
            // RouterModule.forChild([ { path: 'hobby/roller-skating', component: RollerSkatingComponent} ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'LOGO!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(167),
        styles: [__webpack_require__(159)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hobby_hobby_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_app_routing_module__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__web_dev_web_dev_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__travel_travel_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__roller_skating_roller_skating_component__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__hobby_hobby_component__["a" /* HobbyComponent */],
            __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_9__web_dev_web_dev_component__["a" /* WebDevComponent */],
            __WEBPACK_IMPORTED_MODULE_10__travel_travel_component__["a" /* TravelComponent */],
            __WEBPACK_IMPORTED_MODULE_11__roller_skating_roller_skating_component__["a" /* RollerSkatingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_app_app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "h3{\n  font-weight:800;\n  color:#35d8b3;\n}\n.about_img, .about_text{\n  margin-top: 50px;\n}\nimg{\n  display: inline-block;\n  box-sizing: border-box;\n  width: 75%;\n  height: 400px;\n  border: 5px solid #35d8b3;\n  border-radius: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "@media (min-width: @screen-sm-min) {\n  .header-top, .nav{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n}\n.header-top{\n  margin-top: 20px;\n}\n.logo {\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n  background: radial-gradient(farthest-side ellipse at top left, #fff, #35d8b3);\n  font-weight: 700; }\n\n.logo-link {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-decoration: none;\n  font-size: 50px;\n  color: #fff; }\n\n.other-i {\n  display: inline-block;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n.nav-item{\n  list-style-type: none;\n  margin-right: 15px;\n}\n.nav-link{\n  margin-left: 15px;\n  font-size: 18px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #35d8b3;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  list-style-type: none;\n  font-weight: 700;\n}\n#nav-link:focus, #nav-link:hover{\n  color: #fff !important;\n  background-color: #35d8b3 !important;\n  /*box-shadow: 7px 10px 20px rgba(0, 0, 0, 0.3);*/\n  background: radial-gradient(farthest-side ellipse at top left, #fff, #35d8b3);\n}\n\n\n.hobby-nav-link{\n  width: 150px;\n  height: 150px;\n  display: block;\n  background-image: url(" + __webpack_require__(61) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "#map{\n  width: 100%;\n  height: 300px;\n  margin-top: 20px;\n}\nh3{\n  padding-bottom: 20px;\n}\n\n.contacts-wrapper,\n.contacts-input-text,\n.contacts-btn {\n  margin-bottom: 20px; }\n\n.contacts-input {\n  border: 3px solid #35d8b3;\n  border-radius: 5px; }\n.contacts-input:focus {\n  border: 3px solid #FFA500;\n  outline: none; }\n\n.contacts-input-text textarea {\n  width: 90%; }\n\n.contacts-input-name,\n.contacts-input-mail {\n  display: inline-block;\n  width: 100%;}\n.contacts-input-name input,\n.contacts-input-mail input {\n  width: 90%;\n  height: 45px; }\n\n.contacts-btn {\n  font-size: 18px;\n  width: 90%;\n  box-sizing: border-box;\n  background: #fff;\n  color: #35d8b3;\n  padding: 8px 40px;\n  border-radius: 5px;\n  border: 3px solid #35d8b3;\n  outline: none; }\n.contacts-btn:hover {\n  cursor: pointer;\n  color: #fff;\n  background: #35d8b3;\n  /*text-shadow: 1px 1px 5px #000;*/\n  /*box-shadow: 8px 10px 10px 0px #aaa;}*/\n}\n.location div{\n  line-height: 34px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".hobby-wrapper{\n  margin-top: 20px;\n}\n.hobby-nav-link{\n  width: 260px;\n  height: 160px;\n  display: block;\n  background-image: url(" + __webpack_require__(61) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n  font-size: 30px;\n  text-transform: uppercase;\n  padding-top: 25%;\n  text-align: center;\n  line-height: 34px;\n  text-decoration: none;\n}\n.hobby-nav-link:hover{\n  color: #35d8b3;\n}\n.hobby-nav-item{\n  margin-top: 15px;\n}\n.hobby-nav-item:first-child{\n  margin-top: 0px;\n}\n.web{\n  background-image: url(" + __webpack_require__(207) + ");\n}\n.travel{\n  background-image: url(" + __webpack_require__(206) + ");\n}\n.roller{\n  background-image: url(" + __webpack_require__(61) + ");\n}\n.hobby-wrapper{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.hobby-nav{\n  display: block;\n  float: none;\n}\n.hobby-nav>li{\n  list-style-type: none;\n  float: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "h3{\r\n  text-align: center;\r\n  font-weight: 800;\r\n  color: #35d8b3;\r\n}\r\n.slide{\r\n  height:600px;\r\n}\r\n.carousel-inner > .item > a > img, .carousel-inner > .item > img {\r\n  height: 600px;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".blog-wrapper {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-flow: row wrap;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row wrap;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  justify-content: center;\r\n  -ms-flex-line-pack: center;\r\n  align-content: center; }\r\n\r\n.blog-img {\r\n  width: 350px;\r\n  height: 245px;\r\n  /*background: url(\"../img/work.png\");*/\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  overflow: hidden; }\r\n\r\n.blog-img1 {\r\n  background: url(" + __webpack_require__(202) + "); }\r\n\r\n.blog-img2 {\r\n  background: url(" + __webpack_require__(203) + "); }\r\n\r\n.blog-img3 {\r\n  background: url(" + __webpack_require__(204) + "); }\r\n\r\n.blog-img5 {\r\n  background: url(" + __webpack_require__(205) + "); }\r\n\r\n\r\n.blog-text {\r\n  box-sizing: border-box;\r\n  padding: 15px 10px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 350px;\r\n  height: 245px;\r\n  transition: all 0.5s ease;\r\n  opacity: 0;\r\n  background: rgba(53, 216, 179, 0.1);\r\n  text-align: center; }\r\n.blog-text:hover {\r\n  -webkit-animation: flash 0.5s ease-in;\r\n  animation: flash 0.5s ease-in;\r\n  opacity: 1;\r\n  color: #fff;\r\n  background: rgba(53, 216, 179, 0.5);\r\n  font-size: 18px;\r\n  text-align: center;\r\n  cursor: pointer; }\r\n\r\n@-webkit-keyframes flash {\r\n  0% {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1); }\r\n  10% {\r\n    -webkit-transform: scale(0.3, 0.3);\r\n    transform: scale(0.3, 0.3); }\r\n  100% {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1); } }\r\n\r\n@keyframes flash {\r\n  0% {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1); }\r\n  10% {\r\n    -webkit-transform: scale(0.3, 0.3);\r\n    transform: scale(0.3, 0.3); }\r\n  100% {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1); } }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "@media (min-width: @screen-sm-min) {\r\n  .slide{\r\n    width:140%;\r\n  }\r\n}\r\n  .carousel {\r\n    border: 5px solid #35d8b3;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .carousel-control {\r\n    opacity: 0.3;\r\n  }\r\n\r\n  .carousel-caption {\r\n    color: #35d8b3;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    text-shadow: 1px 1px 3px #000;\r\n  }\r\n\r\n  .glyphicon-chevron-right, .glyphicon-chevron-left {\r\n    color: #35d8b3;\r\n  }\r\n\r\n  .glyphicon-chevron-right {\r\n    right: 7%;\r\n  }\r\n\r\n  .glyphicon-chevron-left {\r\n    left: 7%;\r\n  }\r\n\r\n  .carousel-indicators .active {\r\n    background-color: #35d8b3;\r\n  }\r\n\r\n  .carousel-indicators li {\r\n    border: 1px solid #35d8b3;\r\n  }\r\n\r\n  a {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 500px;\r\n  }\r\n\r\n  img {\r\n    width: 100%;\r\n    height: 500px;\r\n  }\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = " <div class=\"about_img col-sm-12 col-md-6 col-lg-6\"><img src=\"assets/img/iren.jpg\" alt=\"iren\" width=\"300px\" height=\"300px\">\n  </div>\n  <div class=\"about_text col-sm-12 col-md-6 col-lg-6\">\n    <h3>Hello, my friend!</h3>\n    <p>My name is Iryna. I'm beginner frontend developer.</p>\n    <p>I'm active and inquisitive person, I often explore new things. That's why I tried to create a web-site some time ago. Of course, my first site was not very nice and user-friendly. But I liked this process, it impressed me.Now I continue to improve my development skills.</p>\n    <p>As for this site, here you can find some information about my travels and hobbies and just my thoughts about life.</p>\n    <p>Welcome, my friend!</p>\n  </div>\n\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<header class=\"header container\">\n  <div class=\"row header-top\">\n  <div class=\"logo col-xs-12 col-sm- 12 col-md-3 col-lg-3\">\n    <a class=\"logo-link\" href=\"#\">i<span class=\"other-i\">i</span></a>\n  </div>\n    <div class=\"col-xs-0 col-sm-0 col-md-5 col-lg-5\"></div>\n<ul class=\"nav navbar-nav col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n  <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a class=\"nav-link\" id=\"nav-link\" [routerLink]=\"['/about']\">About</a></li>\n  <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\"><a class=\"nav-link\" id=\"nav-link\" [routerLink]=\"['/hobby']\">Hobby</a></li>\n  <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\"><a class=\"nav-link\" id=\"nav-link\" [routerLink]=\"['/contact']\">Contact</a></li>\n</ul>\n  </div>\n</header>\n<div class=\"container\">\n  <div class=\"row\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts col-lg-6 col-md-6\">\n  <h3>Let's work together</h3>\n  <form class=\"contacts-form\" action=\"mailto:ivasenko.iren@gmail.com\" method=\"post\" enctype=\"text/plain\">\n    <div class=\"contacts-wrapper\">\n      <p class=\"contacts-input-name\">Your name<br><input class=\"contacts-input\" type=\"text\" name=\"name\" placeholder=\"Name\"></p>\n      <p class=\"contacts-input-mail\">Your e-mail<br><input class=\"contacts-input\" type=\"email\" name=\"mail\" placeholder=\"E-mail\"></p>\n    </div>\n    <div class=\"contacts-input-text\">Tell me about your project<br><textarea class=\"contacts-input\" placeholder=\"Message\" name=\"\" id=\"\" cols=\"30\" rows=\"7\"></textarea></div>\n    <button class=\"contacts-btn\" type=\"submit\" value=\"Send\">Send</button>\n  </form>\n</div>\n<div class=\"location col-lg-6 col-md-6\">\n  <h3>Contacts</h3>\n  <div>\n    Phone: +38(093)8609750 <br>\n    E-mail: <a href=\"mailto:ivasenko.iren@gmail.com\">ivasenko.iren@gmail.com</a><br>\n    Skype: <a href=\"skype:irina_ivasenko?call\" onclick=\"return skypeCheck()\"></a><a href=\"skype:irina_ivasenko?call\" onclick=\"return skypeCheck()\">irina_ivasenko</a>\n  </div>\n\n  <div id=\"map\"></div>\n\n</div>\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<div class=\"hobby-wrapper\">\n  <ul class=\"hobby-nav navbar-nav col-lg-3 col-md-3\">\n    <li class=\"hobby-nav-item\"><a class=\"hobby-nav-link web\" [routerLink]=\"['web-dev']\">web Development</a></li>\n    <li class=\"hobby-nav-item\"><a class=\"hobby-nav-link travel\" [routerLink]=\"['travel']\">Travels</a></li>\n    <li class=\"hobby-nav-item\"><a class=\"hobby-nav-link roller\" [routerLink]=\"['roller-skating']\">Roller-skating</a></li>\n  </ul>\n  <div class=\"hobby-content col-lg-9 col-md-9\"><router-outlet></router-outlet></div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div id=\"carousel-example-generic\" class=\"carousel slide col-md-12 col-lg-12\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n    </ol>\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"item active\">\n        <img src=\"assets/img/roll1.jpg\" alt=\"image01\">\n      </div>\n      <div class=\"item\">\n        <img src=\"assets/img/roll2.jpg\" alt=\"image02\">\n      </div>\n      <div class=\"item\">\n       <img src=\"assets/img/roll3.jpg\" alt=\"image03\">\n      </div>\n      <div class=\"item\">\n        <img src=\"assets/img/roll4.jpg\" alt=\"image04\">\n      </div>\n      <div class=\"item\">\n        <img src=\"assets/img/roll5.jpg\" alt=\"image05\">\n      </div>\n      <div class=\"item\">\n        <img src=\"assets/img/roll6.jpg\" alt=\"image06\">\n      </div>\n      <div class=\"item\">\n        <img src=\"assets/img/roll7.jpg\" alt=\"image07\">\n      </div>\n    </div>\n\n    <!-- Controls -->\n    <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n</div>\n  <div class=\"introduction row\">\n    <div class=\"col-md-12 col-lg-12\">\n      <h3>Let's skate together!</h3>\n      <p>Roller skating is the perfect way to combine fitness with fun. It helps people develop a fitness habit with a sport that’s enjoyable for all ages. Here are the top 10 health benefits of roller skating: 1.Easy on the joints; 2.Great as a cross training exercise; 3.Calorie burning (fat burning); 4.Good for mood; 5.Works the arms and legs;\n        6.Great for improving balance, agility and coordination; 7.Strengthen the heart;\n        8.Improve endurance; 9.Can be done anywhere; 10.Social.</p>\n      <p>Join our team. We gather at Rynok Square every Saturday on 18:00. Let's skate together</p>\n    </div>\n  </div>\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-wrapper\">\n<div class=\"blog-img blog-img1\">\n  <div class=\"blog-text\">Карпаты.Приехав в горы однажды,хочется возвращаться снова и снова</div>\n</div>\n<div class=\"blog-img blog-img2\">\n  <div class=\"blog-text\"></div>\n</div>\n<div class=\"blog-img blog-img3\">\n  <div class=\"blog-text\">Будапешт.Куда не глянь-везде красоты, и каждое здание-шедевр</div>\n</div>\n<div class=\"blog-img blog-img5\">\n  <div class=\"blog-text\">Кошице-это город,где уютно...</div>\n</div>\n</div>\n"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"3\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"4\"></li>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"item active\">\n      <a class=\"test\" href=\"https://ivasenko.github.io/strict/\"><img src=\"assets/img/loom.png\" alt=\"image01\"></a>\n      <div class=\"carousel-caption\">\n        HTML, CSS, JS, JQuery\n      </div>\n    </div>\n    <div class=\"item\">\n      <a href=\"#\"><img src=\"assets/img/metro.png\" alt=\"image02\"></a>\n      <div class=\"carousel-caption\">\n        HTML, CSS, SASS, SMACSS\n      </div>\n    </div>\n    <div class=\"item\">\n      <a href=\"#\"><img src=\"assets/img/work.png\" alt=\"image03\"></a>\n      <div class=\"carousel-caption\">\n\n      </div>\n    </div>\n    <div class=\"item\">\n      <a href=\"#\"><img src=\"assets/img/strict.png\" alt=\"image04\"></a>\n      <div class=\"carousel-caption\">\n\n      </div>\n    </div>\n    <div class=\"item\">\n      <a href=\"#\"><img src=\"assets/img/phototime.png\" alt=\"image05\"></a>\n      <div class=\"carousel-caption\">\n        PixelPerfect\n      </div>\n    </div>\n    <div class=\"item\">\n      <a href=\"#\"><img src=\"assets/img/work-img2.png\" alt=\"image02\"></a>\n      <div class=\"carousel-caption\">\n        SASS,Responsive design,PixelPerfect\n      </div>\n    </div>\n  </div>\n  <!-- Controls -->\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "blog-img1.139ade5485218dfa6653.jpg";

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "blog-img2.e45334615ce7c3d87427.jpg";

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "blog-img3.670ae2454fd22542d864.jpg";

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "blog-img5.7e29eb69f3dcf648e8b4.jpg";

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "travel.264f77a57220087fb466.jpg";

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "web.9430ff6f69a73e62bb88.jpg";

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "roller.8e1fd46a775e96e9e5ac.jpg";

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(166),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(168),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HobbyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HobbyComponent = (function () {
    function HobbyComponent() {
    }
    HobbyComponent.prototype.ngOnInit = function () {
    };
    return HobbyComponent;
}());
HobbyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-hobby',
        template: __webpack_require__(169),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [])
], HobbyComponent);

//# sourceMappingURL=hobby.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RollerSkatingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RollerSkatingComponent = (function () {
    function RollerSkatingComponent() {
    }
    RollerSkatingComponent.prototype.ngOnInit = function () {
    };
    return RollerSkatingComponent;
}());
RollerSkatingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-roller-skating',
        template: __webpack_require__(170),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [])
], RollerSkatingComponent);

//# sourceMappingURL=roller-skating.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TravelComponent = (function () {
    function TravelComponent() {
    }
    TravelComponent.prototype.ngOnInit = function () {
    };
    return TravelComponent;
}());
TravelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-travel',
        template: __webpack_require__(171),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [])
], TravelComponent);

//# sourceMappingURL=travel.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebDevComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebDevComponent = (function () {
    function WebDevComponent() {
    }
    WebDevComponent.prototype.ngOnInit = function () {
    };
    return WebDevComponent;
}());
WebDevComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-web-dev',
        template: __webpack_require__(172),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [])
], WebDevComponent);

//# sourceMappingURL=web-dev.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 92;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(104);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.bundle.js.map