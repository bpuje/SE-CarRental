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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-car/car.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-car/car.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top:1em;margin-bottom: 4em;\" class=\"container\">\r\n  <div>\r\n    <span style=\"font-size: 2em; color: #32a5e7;\">List of cars</span>\r\n    <span style=\"float:right;\">\r\n        <a class=\"btn btn-outline-success btn-lg\" href=\"\" routerLink=\"/car-register\">Add New Car</a>\r\n    </span>\r\n  </div>\r\n\r\n  <p>&nbsp;</p>\r\n  <div style=\"font-size: 1em\">\r\n    <!-- Search -->\r\n    <div style=\"padding-top:1em; padding-bottom: 1em;\" class=\"container\">\r\n\r\n      <form id=\"formSearchStudents\" method=\"get\" class=\"form-inline\" action=\"/eregistrar/student/search\">\r\n        <fieldset style=\"width: 100%;\">\r\n          <div class=\"row pull-right\">\r\n            <div class=\"form-group\">\r\n              <input id=\"term\" name=\"term\" type=\"text\" #txtSearch class=\"form-control\">\r\n            </div>\r\n            <div style=\"margin-left: 5px;\">\r\n              <button id=\"btnSubmit\" type=\"submit\" class=\"btn btn-outline-success\"\r\n                      (click)=\"searchCar(txtSearch.value)\">\r\n                <i class=\"fas fa-search\"></i> Search</button>\r\n            </div>\r\n          </div>\r\n\r\n        </fieldset>\r\n      </form>\r\n    </div><!-- End of Form Search -->\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">Brand</th>\r\n        <th scope=\"col\">Model</th>\r\n        <th scope=\"col\">Year</th>\r\n        <th scope=\"col\">Description</th>\r\n        <th scope=\"col\">Price (Per day)</th>\r\n        <th scope=\"col\">Status</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let car of cars; let i = index;\">\r\n        <td scope=\"col\">{{ i+1 }}</td>\r\n        <td scope=\"col\">{{ car.carBrand }}</td>\r\n        <td scope=\"col\">{{ car.model }}</td>\r\n        <td scope=\"col\">{{ car.year }}</td>\r\n        <td scope=\"col\">{{ car.description | ellipsis:50 }}</td>\r\n        <td scope=\"col\">{{ car.price | currency }}</td>\r\n        <td scope=\"col\">{{ car | carStatus }}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <!-- Pagination -->\r\n    <div *ngIf=\"page\">\r\n      <ul class=\"pagination\">\r\n        <li class=\"page-item disabled\">\r\n          <a class=\"page-link\" href=\"#\">Pages: </a>\r\n        </li>\r\n        <li *ngFor=\"let number of arrayOfPages()\" class=\"page-item\">\r\n          <a [routerLink]=\"\" (click)=\"loadCars(number-1)\" href=\"#\" class=\"page-link\" [ngClass]=\"getPageItemClass(number-1)\">{{ number }} </a></li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-rental/rental.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-rental/rental.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top:1em;margin-bottom: 4em;\" class=\"container\">\r\n  <div>\r\n    <span style=\"font-size: 2em; color: #32a5e7;\">List of Rentals</span>\r\n  </div>\r\n\r\n  <p>&nbsp;</p>\r\n  <div style=\"font-size: 1em\">\r\n    <!-- Search -->\r\n    <div style=\"padding-top:1em; padding-bottom: 1em;\" class=\"container\">\r\n\r\n      <form id=\"formSearchStudents\" method=\"get\" class=\"form-inline\">\r\n        <fieldset style=\"width: 100%;\">\r\n          <div class=\"row pull-right\">\r\n            <div class=\"form-group\">\r\n              <input id=\"term\" name=\"term\" type=\"text\" #txtSearch class=\"form-control\">\r\n            </div>\r\n            <div style=\"margin-left: 5px;\">\r\n              <button id=\"btnSubmit\" type=\"submit\" class=\"btn btn-outline-success\"\r\n                (click)=\"searchRental(txtSearch.value)\">\r\n                <i class=\"fas fa-search\"></i> Search</button>\r\n            </div>\r\n          </div>\r\n\r\n        </fieldset>\r\n      </form>\r\n    </div><!-- End of Form Search -->\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">Car</th>\r\n        <th scope=\"col\">Renter</th>\r\n        <th scope=\"col\">Price Per Day</th>\r\n        <th scope=\"col\">Created</th>\r\n        <th scope=\"col\">Pickup</th>\r\n        <th scope=\"col\">Return</th>\r\n        <th scope=\"col\">Status</th>\r\n        <th scope=\"col\"></th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let rental of rentals; let i = index;\">\r\n        <td scope=\"col\">{{ i+1 }}</td>\r\n        <td scope=\"col\">{{ rental.car.carBrand }}</td>\r\n        <td scope=\"col\">{{ rental.user.userName }}</td>\r\n        <td scope=\"col\">{{ rental.car.price | currency }}</td>\r\n        <td scope=\"col\">{{ rental.createDate | date : 'MM/dd/yyyy' }}</td>\r\n        <td scope=\"col\">{{ rental.pickUpDate | date : 'MM/dd/yyyy' }}</td>\r\n        <td scope=\"col\">{{ rental.expectedDate | date : 'MM/dd/yyyy' }}</td>\r\n        <td scope=\"col\"><span [ngClass]=\"getRentalStatusClass(rental)\" style=\"padding: 0.1rem 0.5rem;\">{{ rental.status}}</span></td>\r\n        <td scope=\"col\" *ngIf=\"rental.status === 'PENDING'\">\r\n          <a class=\"btn btn-sm btn-outline-success\" (click)=\"sendApprove(rental)\" [routerLink]=\"\" style=\"margin-right: 2px;\" >approve</a>\r\n          <a class=\"btn btn-sm btn-outline-danger\" (click)=\"sendReject(rental)\" [routerLink]=\"\" >reject</a></td>\r\n        <td scope=\"col\" *ngIf=\"rental.status === 'APPROVED'\">\r\n          <a class=\"btn btn-sm btn-outline-danger\" (click)=\"sendFinish(rental)\" [routerLink]=\"\" >finish</a></td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <!-- Pagination -->\r\n    <div *ngIf=\"page\">\r\n      <ul class=\"pagination\">\r\n        <li class=\"page-item disabled\">\r\n          <a class=\"page-link\" href=\"#\">Pages: </a>\r\n        </li>\r\n        <li *ngFor=\"let number of arrayOfPages()\" class=\"page-item\">\r\n          <a [routerLink]=\"\" (click)=\"loadRentals(number-1)\" href=\"#\" class=\"page-link\" [ngClass]=\"getPageItemClass(number-1)\">{{ number }} </a></li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-statistic/statistic.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-statistic/statistic.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding-top:1em;\" class=\"container\">\r\n  <div>\r\n    <span style=\"font-size: 2em; color: #32a5e7;\">System statistic</span>\r\n  </div>\r\n\r\n  <p>&nbsp;</p>\r\n  <div style=\"font-size: 1em\">\r\n\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-user/user.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-user/user.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div style=\"margin-top:1em;margin-bottom: 4em;\" class=\"container\">\r\n  <div>\r\n    <span style=\"font-size: 2em; color: #32a5e7;\">List of users</span>\r\n    <span style=\"float:right;\">\r\n        <a class=\"btn btn-outline-success btn-lg\" href=\"\" routerLink=\"/user-add\">Add New User</a>\r\n    </span>\r\n  </div>\r\n\r\n  <p>&nbsp;</p>\r\n  <div style=\"font-size: 1em\">\r\n    <!-- Search -->\r\n    <div style=\"padding-top:1em; padding-bottom: 1em;\" class=\"container\">\r\n\r\n      <form id=\"formSearchStudents\" method=\"get\" class=\"form-inline\" action=\"/eregistrar/student/search\">\r\n        <fieldset style=\"width: 100%;\">\r\n          <div class=\"row pull-right\">\r\n            <div class=\"form-group\">\r\n              <input id=\"term\" name=\"term\" type=\"text\" #txtSearch class=\"form-control\">\r\n            </div>\r\n            <div style=\"margin-left: 5px;\">\r\n              <button id=\"btnSubmit\" type=\"submit\" class=\"btn btn-outline-success\"\r\n               (click)=\"searchUser(txtSearch.value)\">\r\n                <i class=\"fas fa-search\"></i> Search</button>\r\n            </div>\r\n          </div>\r\n\r\n        </fieldset>\r\n      </form>\r\n    </div><!-- End of Form Search -->\r\n\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">First name</th>\r\n        <th scope=\"col\">Last name</th>\r\n        <th scope=\"col\">Username</th>\r\n        <th scope=\"col\">Email</th>\r\n        <th scope=\"col\">Status</th>\r\n        <th scope=\"col\">&nbsp;</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let user of users; let i = index;\">\r\n        <td scope=\"col\">{{ i+1 }}</td>\r\n        <td scope=\"col\">{{ user.firstName }}</td>\r\n        <td scope=\"col\">{{ user.lastName }}</td>\r\n        <td scope=\"col\">{{ user.userName }}</td>\r\n        <td scope=\"col\">{{ user.email }}</td>\r\n        <td scope=\"col\"><span [ngClass]=\"getUserStatusClass(user)\" style=\"padding: 0.1rem 0.5rem;\">{{ user.status }}</span></td>\r\n        <td scope=\"col\">\r\n          <a *ngIf=\"user.status === 'Active'\" [routerLink]=\"\" class=\"btn btn-outline-danger\" (click)=\"blockUser(user)\">block</a>\r\n          <a *ngIf=\"user.status === 'Blocked'\" [routerLink]=\"\" class=\"btn btn-outline-danger\" (click)=\"unBlockUser(user)\">unblock</a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n    <!-- Pagination -->\r\n    <div *ngIf=\"page\">\r\n      <ul class=\"pagination\">\r\n        <li class=\"page-item disabled\">\r\n          <a class=\"page-link\" href=\"#\">Pages: </a>\r\n        </li>\r\n        <li *ngFor=\"let number of arrayOfPages()\" class=\"page-item\">\r\n          <a [routerLink]=\"\" (click)=\"loadUsers(number-1)\" href=\"#\" class=\"page-link\" [ngClass]=\"getPageItemClass(number-1)\">{{ number }} </a></li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-detail/car-detail.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-detail/car-detail.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container car-detail-container\" *ngIf=\"car\">\r\n\r\n  <div class=\"row\">\r\n    <span style=\"font-size: 2em; color: #32a5e7;\">Car Detail</span>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 col-md-8\">\r\n      <div *ngIf=\"hasImages()\">\r\n        <ul id=\"galary-thumbnail\">\r\n          <li *ngFor=\"let img of car.images\" (click)=\"selectImage(img)\"> <img [src]=\"img.path\"> </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"galary\">\r\n        <img [src]=\"thumbnailImgPath\" class=\"img-thumbnail\" width=\"100%\" height=\"auto\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4 col-md-4\">\r\n      <div class=\"row\">\r\n        <span class=\"car-title\">{{ car.carBrand | uppercase }}</span>\r\n      </div>\r\n\r\n      <ul class=\"lst-feature\">\r\n        <li><i class=\"fas fa-id-card\"></i><span class=\"car-property\">Contact: </span><span style=\"color: red;\">{{ car.owner.phone }}</span></li>\r\n        <li><i class=\"fas fa-car\"></i><span class=\"car-property\">Model: </span> {{ car.model }}</li>\r\n        <li><i class=\"fas fa-clock\"></i><span class=\"car-property\">Year: </span> {{ car.year }}</li>\r\n        <li><i class=\"fas fa-dollar-sign\"></i><span class=\"car-property\">Price: </span> {{ car.price | currency }}</li>\r\n        <li><i class=\"fas fa-table\"></i><span class=\"car-property\">Seats: </span> {{ car.seats }}</li>\r\n        <li><i class=\"fas fa-quote-left\"></i><span class=\"car-property\">Description: </span> {{ car.description }}</li>\r\n        <li><i class=\"fas fa-circle\"></i><span class=\"car-property\">Status: </span> {{ car | carStatus }}</li>\r\n        <li><i class=\"fas fa-map-marker-alt\"></i><span class=\"car-property\">Pick up location: </span> {{ car.pickUpLocation }}</li>\r\n      </ul>\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-header alert alert-success\">Rental Request</div>\r\n        <div class=\"row card-body\">\r\n          <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"datePickup\">Date Pickup</label>\r\n              <input id=\"datePickup\" name=\"datePickup\" type=\"date\" class=\"form-control\" aria-describedby=\"dateSuppliedHelp\"\r\n               [(ngModel)]=\"rental.pickUpDate\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"dateExpected\">Date Return</label>\r\n              <input id=\"dateExpected\" name=\"dateExpected\" type=\"date\" class=\"form-control\" aria-describedby=\"dateExpectedHelp\"\r\n                 [(ngModel)]=\"rental.expectedDate\" required>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-12\">\r\n            <button class=\"btn btn-outline-success\" style=\"float: right;\"\r\n              (click)=\"sendRentalRequest()\">I Want This Car</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\" style=\"margin-top: 5em;\">\r\n    <button class=\"btn btn-outline-success\" routerLink=\"/\">Back</button>\r\n  </div>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"confirmRentReq\" tabindex=\"-1\" role=\"dialog\"\r\n       aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content panel-warning\">\r\n        <div class=\"modal-header alert alert-success\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Confirmation!!!</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          A Rent Request is created for you. Please check your dashboard for status.\r\n          As soon as our admin can verify and approve, you can contact with the Owner\r\n          and pick your car at specific location.\r\n          <p style=\"margin-top: 15px;\">\r\n          <i>Thank you!</i></p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-primary\"\r\n            style=\"padding: 12px 2em;\">OK</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-register/car-register.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-register/car-register.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container car-detail-container\" style=\"margin-top: 1em; margin-bottom: 4em;\">\r\n  <div class=\"container\">\r\n    <h2 class=\"page-title\">Register New Car</h2>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n\r\n    <form id=\"frmCarRegister\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <!-- CarBrand -->\r\n          <div class=\"form-group\">\r\n            <label for=\"txtCarBrand\">Car Brand <span class=\"field-must\">(*)</span></label>\r\n            <input type=\"text\" class=\"form-control\" name=\"carBrand\" id=\"txtCarBrand\" required tabindex=\"1\"\r\n              [(ngModel)]=\"car.carBrand\" #carBrand=\"ngModel\" placeholder=\"Toyota, Ford, ...\">\r\n            <div *ngIf=\"carBrand.invalid && (carBrand.dirty || carBrand.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <span *ngIf=\"carBrand.errors.required\">Brand is required.</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <!-- CarModel -->\r\n          <div class=\"form-group\">\r\n            <label for=\"txtModel\">Model <span class=\"field-must\">(*)</span></label>\r\n            <input type=\"text\" class=\"form-control\" name=\"location\" id=\"txtModel\" required tabindex=\"2\"\r\n               [(ngModel)]=\"car.model\" #txtModel=\"ngModel\" placeholder=\"Car Model\">\r\n            <div *ngIf=\"txtModel.invalid && (txtModel.dirty || txtModel.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <span *ngIf=\"txtModel.errors.required\">Model is required.</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <!-- Year -->\r\n          <div class=\"form-group\">\r\n            <label for=\"txtYear\">Year <span class=\"field-must\">(*)</span></label>\r\n            <input type=\"number\" class=\"form-control\" name=\"year\" id=\"txtYear\" required tabindex=\"3\"\r\n               [(ngModel)]=\"car.year\" #txtYear=\"ngModel\" placeholder=\"Year\">\r\n            <div *ngIf=\"txtYear.invalid && (txtYear.dirty || txtYear.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <span *ngIf=\"txtYear.errors.required\">Car produce year is required.</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <!-- Price  -->\r\n          <div class=\"form-group\">\r\n            <label for=\"txtPrice\">Price ($) - Price per day <span class=\"field-must\">(*)</span></label>\r\n            <input type=\"number\" class=\"form-control\" name=\"price\" id=\"txtPrice\" required tabindex=\"4\"\r\n               [(ngModel)]=\"car.price\" #txtPrice=\"ngModel\" placeholder=\"Price\">\r\n            <div *ngIf=\"txtPrice.invalid && (txtPrice.dirty || txtPrice.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <span *ngIf=\"txtPrice.errors.required\">Price is required.</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <!-- seats number -->\r\n          <div class=\"form-group\">\r\n            <label for=\"txtSeatsNumber\">Seats number <span class=\"field-must\">(*)</span></label>\r\n            <input type=\"number\" class=\"form-control\" name=\"seats\" id=\"txtSeatsNumber\" required tabindex=\"5\"\r\n               [(ngModel)]=\"car.seats\" #txtSeatsNumber=\"ngModel\" placeholder=\"Seats number\">\r\n            <div *ngIf=\"txtSeatsNumber.invalid && (txtSeatsNumber.dirty || txtSeatsNumber.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <span *ngIf=\"txtSeatsNumber.errors.required\">Seats number is required.</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <!-- Status -->\r\n          <div class=\"form-group\">\r\n            <label for=\"txtStatus\">Status <span class=\"field-must\">(*)</span></label>\r\n            <select class=\"form-control\"  name=\"status\" id=\"txtStatus\" [(ngModel)]=\"car.status\"  required tabindex=\"6\">\r\n              <option value=\"1\" selected>Very good</option>\r\n              <option value=\"2\">Good</option>\r\n              <option value=\"3\">Fair</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <!-- Pick up pickUpLocation -->\r\n          <div class=\"form-group\">\r\n            <label for=\"txtLocation\">Pickup location <span class=\"field-must\">(*)</span></label>\r\n            <input type=\"text\" class=\"form-control\" name=\"model\" id=\"txtLocation\" required tabindex=\"7\"\r\n               [(ngModel)]=\"car.pickUpLocation\" #pickupLocation=\"ngModel\" placeholder=\"Address\">\r\n            <div *ngIf=\"pickupLocation.invalid && (pickupLocation.dirty || pickupLocation.touched)\"\r\n                 class=\"alert alert-danger\">\r\n              <span *ngIf=\"pickupLocation.errors.required\">Pickup location is required.</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <!-- Description -->\r\n          <div class=\"form-group\">\r\n            <label for=\"txtDesciption\">Description</label> <small> - Give a short description about your car.</small>\r\n            <textarea class=\"form-control\" name=\"description\" id=\"txtDesciption\" tabindex=\"8\"\r\n              [(ngModel)]=\"car.description\" placeholder=\"Description\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <!-- Photos -->\r\n          <div class=\"form-group\">\r\n            <label for=\"images\">Photos</label>\r\n            <input type=\"file\" multiple id=\"images\" name=\"images\" class=\"form-control\" tabindex=\"9\"\r\n              (change)=\"onChange({event : $event})\" />\r\n          </div>\r\n          <div class=\"row\">\r\n            <ul id=\"lsUploadedImages\">\r\n              <li *ngFor=\"let image of images\">\r\n                <img [src]=\"image.src\" [alt]=\"image.alt\">\r\n                <span>{{image.alt}}</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" style=\"float: right; margin-right: 0;\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickSubmitRegister()\">Submit</button>\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-thumbnail/car-thumbnail.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-thumbnail/car-thumbnail.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6 col-lg-3 col-sm6 car-thumbnail\">\r\n  <div class=\"car-title\">{{ car.carBrand | uppercase }}</div>\r\n  <div class=\"img-container\">\r\n    <img [src]=\"carThumbnailImg()\" class=\"img-thumbnail\" width=\"100%\" height=\"auto\">\r\n    <span class=\"rent-price\">{{ car.price | currency }} Per Day</span>\r\n  </div>\r\n  <div>\r\n    <p class=\"description\">{{ car.description | ellipsis:50 }}</p>\r\n  </div>\r\n  <div>\r\n    <button class=\"btn btn-outline-success\" (click)=\"onCarSelected()\">View Car</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>cs425.swe - Car Rental Management System</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\">\r\n  <!-- Images and text -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <a class=\"navbar-brand\" href=\"#\" routerLink=\"/\">\r\n      <img src=\"/assets/logo.svg\" width=\"180\" class=\"d-inline-block align-top\" alt=\"\">\r\n    </a>\r\n\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\"\r\n      aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n\r\n        <li *ngIf=\"isAdminLoggedIn()\" class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/user\">Users</a>\r\n        </li>\r\n        <li *ngIf=\"isAdminLoggedIn()\" class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/car\">Cars</a>\r\n        </li>\r\n\r\n        <li *ngIf=\"isAdminLoggedIn()\" class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/rental\">Rentals</a>\r\n        </li>\r\n        <li *ngIf=\"isAuthenticated()\" class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" routerLink=\"/dashboard\">Dashboard</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <a *ngIf=\"!isAuthenticated()\" class=\"nav-link\" href=\"#\" routerLink=\"/login\">Login</a>\r\n          <!--<a *ngIf=\"isAuthenticated()\" class=\"nav-link\" [routerLink]=\"\" (click)=\"doLogout()\">Logout</a>-->\r\n        </li>\r\n      </ul>\r\n\r\n      <form class=\"form-inline my-2 my-lg-0\" *ngIf=\"isAuthenticated()\">\r\n        <div>\r\n          <span style=\"color: white; font-weight: bold; margin-right: 10px;\">\r\n            <i class=\"fas fa-user\"></i> Welcome {{getUserName()}}</span>\r\n          <a [routerLink]=\"\" (click)=\"doLogout()\">\r\n            <span style=\"color: white;\"><i class=\"fas fa-power-off\"></i></span></a>\r\n        </div>\r\n        <br/>\r\n      </form>\r\n    </div>\r\n\r\n  </nav>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding-top:1em;\" class=\"container\">\r\n  <div>\r\n    <span style=\"font-size: 2em; color: #32a5e7;\">Dashboard</span>\r\n    <span *ngIf=\"isCarOwner()\" style=\"float:right;\">\r\n        <a class=\"btn btn-outline-success btn-lg\" href=\"\" routerLink=\"/car-register\">Register a car</a>\r\n    </span>\r\n  </div>\r\n\r\n  <p>&nbsp;</p>\r\n  <div *ngIf=\"isCarOwner()\" class=\"row\" style=\"font-size: 1em\">\r\n    <div class=\"col-md-12\">\r\n      <label>My Rented Cars</label>\r\n\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\">#</th>\r\n          <th scope=\"col\">Car</th>\r\n          <th scope=\"col\">Renter</th>\r\n          <th scope=\"col\">Price Per Day</th>\r\n          <th scope=\"col\">Created</th>\r\n          <th scope=\"col\">Pickup</th>\r\n          <th scope=\"col\">Return</th>\r\n          <th scope=\"col\">Status</th>\r\n          <th scope=\"col\"></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let rental of myCarRent; let i = index;\">\r\n          <td scope=\"col\">{{ i+1 }}</td>\r\n          <td scope=\"col\">{{ rental.car.carBrand }}</td>\r\n          <td scope=\"col\">{{ rental.user.userName }}</td>\r\n          <td scope=\"col\">{{ rental.car.price | currency }}</td>\r\n          <td scope=\"col\">{{ rental.createDate | date : 'MM/dd/yyyy' }}</td>\r\n          <td scope=\"col\">{{ rental.pickUpDate | date : 'MM/dd/yyyy' }}</td>\r\n          <td scope=\"col\">{{ rental.expectedDate | date : 'MM/dd/yyyy' }}</td>\r\n          <td scope=\"col\"><span [ngClass]=\"getRentalStatusClass(rental)\" style=\"padding: 0.1rem 0.5rem;\">{{ rental.status}}</span></td>\r\n          <td scope=\"col\" *ngIf=\"rental.status === 'APPROVED'\">\r\n            <a class=\"btn btn-sm btn-outline-danger\" (click)=\"sendFinish(rental)\" [routerLink]=\"\" >Finish</a></td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n    <div *ngIf=\"page\">\r\n      <ul class=\"pagination\">\r\n        <li class=\"page-item disabled\">\r\n          <a class=\"page-link\" href=\"#\">Pages: </a>\r\n        </li>\r\n        <li *ngFor=\"let number of arrayOfPages()\" class=\"page-item\">\r\n          <a [routerLink]=\"\" (click)=\"loadMyRentals(number-1)\" href=\"#\" class=\"page-link\" [ngClass]=\"getPageItemClass(number-1)\">{{ number }} </a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" style=\"font-size: 1em\">\r\n      <div class=\"col-md-12\">\r\n          <label>My Renting\r\n          </label>\r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Car</th>\r\n            <th scope=\"col\">Renter</th>\r\n            <th scope=\"col\">Price Per Day</th>\r\n            <th scope=\"col\">Created</th>\r\n            <th scope=\"col\">Pickup</th>\r\n            <th scope=\"col\">Return</th>\r\n            <th scope=\"col\">Status</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let rental of myRenting; let i = index;\">\r\n            <td scope=\"col\">{{ i+1 }}</td>\r\n            <td scope=\"col\">{{ rental.car.carBrand }}</td>\r\n            <td scope=\"col\">{{ rental.user.userName }}</td>\r\n            <td scope=\"col\">{{ rental.car.price | currency }}</td>\r\n            <td scope=\"col\">{{ rental.createDate | date : 'MM/dd/yyyy' }}</td>\r\n            <td scope=\"col\">{{ rental.pickUpDate | date : 'MM/dd/yyyy' }}</td>\r\n            <td scope=\"col\">{{ rental.expectedDate | date : 'MM/dd/yyyy' }}</td>\r\n            <td scope=\"col\"><span [ngClass]=\"getRentalStatusClass(rental)\" style=\"padding: 0.1rem 0.5rem;\">{{ rental.status}}</span></td>\r\n        </table>\r\n        </div>\r\n      <div *ngIf=\"page\">\r\n        <ul class=\"pagination\">\r\n          <li class=\"page-item disabled\">\r\n            <a class=\"page-link\" href=\"#\">Pages: </a>\r\n          </li>\r\n          <li *ngFor=\"let number of arrayOfPages()\" class=\"page-item\">\r\n            <a [routerLink]=\"\" (click)=\"loadMyRenting(number-1)\" href=\"#\" class=\"page-link\" [ngClass]=\"getPageItemClass(number-1)\">{{ number }} </a></li>\r\n        </ul>\r\n      </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>profile works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/sign-in.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/sign-in.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h2 class=\"page-title\">Login</h2>\r\n</div>\r\n<div class=\"container\">\r\n  <!-- action='/Spitter/j_spring_security_check' -->\r\n  <form style=\"max-width: 480px;\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"uName\">Username</label>\r\n      <input type=\"text\" id=\"uName\" name=\"uName\" class=\"form-control\" required tabindex=\"1\"\r\n         [(ngModel)]=\"user.userName\" #uName=\"ngModel\" (keyup)=\"onKeyUpPressed($event)\">\r\n\r\n      <div *ngIf=\"uName.invalid && (uName.dirty || uName.touched)\"\r\n           class=\"alert alert-danger\">\r\n        <span *ngIf=\"uName.errors.required\">Username is required.</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"txtPwd\">Password</label>\r\n      <input type=\"password\" id=\"txtPwd\" class=\"form-control\" name=\"password\" required tabindex=\"2\"\r\n        [(ngModel)]=\"user.password\" #password=\"ngModel\" placeholder=\"Password\" (keyup)=\"onKeyUpPressed($event)\">\r\n\r\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\r\n           class=\"alert alert-danger\">\r\n        <span *ngIf=\"password.errors.required\">Password is required.</span>\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"button\" class=\"btn btn-primary\"\r\n      (click)=\"onBtnLoginClicked(uName.value, password.value)\">Submit</button>\r\n  </form>\r\n\r\n  <small><i>Don't have an account. Click <a href=\"\" routerLink=\"/register\"><b>here</b></a> to create new one.</i></small>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/sign-up.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/sign-up.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h2 class=\"page-title\">Register</h2>\r\n</div>\r\n<div class=\"container\" style=\"margin-bottom: 3em;\">\r\n  <!-- action='/Spitter/j_spring_security_check' -->\r\n  <form action=\"#\" style=\"max-width: 480px;\">\r\n\r\n    <!-- Username -->\r\n    <div class=\"form-group\">\r\n      <label for=\"uName\">Username</label>\r\n      <input type=\"text\" id=\"uName\" name=\"uName\" class=\"form-control\" required\r\n        [(ngModel)]=\"user.userName\" #uName=\"ngModel\" >\r\n\r\n      <div *ngIf=\"uName.invalid && (uName.dirty || uName.touched)\"\r\n           class=\"alert alert-danger\">\r\n        <span *ngIf=\"uName.errors.required\">Username is required.</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Password -->\r\n    <div class=\"form-group\">\r\n      <label for=\"txtPwd\">Password</label>\r\n      <input type=\"password\" id=\"txtPwd\" name=\"txtPwd\" class=\"form-control\" required #txtPwd=\"ngModel\"\r\n         [(ngModel)]=\"user.password\" minlength=\"9\" placeholder=\"Password\">\r\n      <div *ngIf=\"txtPwd.invalid && (txtPwd.dirty || txtPwd.touched)\"\r\n           class=\"alert alert-danger\">\r\n        <span *ngIf=\"txtPwd.errors.required\">Password is required.</span>\r\n        <span *ngIf=\"txtPwd.errors.minlength\">Password must be at least 9 characters long.</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Password confirm -->\r\n    <div class=\"form-group\">\r\n      <label for=\"txtPwdConfirm\">Password</label>\r\n      <input type=\"password\" id=\"txtPwdConfirm\" name=\"txtPwdConfirm\" class=\"form-control\" required\r\n         [(ngModel)]=\"user.passwordConfirm\" #txtPwdConfirm=\"ngModel\" placeholder=\"Confirm password\">\r\n      <div *ngIf=\"txtPwdConfirm. invalid && (txtPwdConfirm.dirty || txtPwdConfirm.touched)\"\r\n           class=\"alert alert-danger\">\r\n        <span *ngIf=\"txtPwdConfirm.errors.required\">Password confirmation is required.</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- First name -->\r\n    <div class=\"form-group\">\r\n      <label for=\"txtFirstname\">First name</label>\r\n      <input type=\"text\" id=\"txtFirstname\" name=\"txtFirstname\" class=\"form-control\"\r\n         [(ngModel)]=\"user.firstName\" placeholder=\"First Name\">\r\n    </div>\r\n\r\n    <!-- Last name -->\r\n    <div class=\"form-group\">\r\n      <label for=\"txtLastname\">Last name</label>\r\n      <input type=\"text\" id=\"txtLastname\" name=\"txtLastname\" class=\"form-control\"\r\n         [(ngModel)]=\"user.lastName\"placeholder=\"Last Name\">\r\n    </div>\r\n\r\n    <!-- Email -->\r\n    <div class=\"form-group\">\r\n      <label for=\"txtEmail\">Email</label>\r\n      <input type=\"text\" name=\"txtEmail\" id=\"txtEmail\" class=\"form-control\" required\r\n         [(ngModel)]=\"user.email\" ngModel [email]=\"true\" placeholder=\"Email\">\r\n<!--      <div *ngIf=\"txtEmail.invalid && (txtEmail.dirty || txtEmail.touched)\"-->\r\n<!--           class=\"alert alert-danger\">-->\r\n<!--        <span *ngIf=\"txtEmail.errors.required\">Email is required.</span>-->\r\n<!--      </div>-->\r\n    </div>\r\n\r\n    <div class=\"form-check\" style=\"margin-bottom: 10px;\">\r\n      <input type=\"checkbox\" class=\"form-check-input\" #isCarOwner id=\"chkCarOwner\" [(ngModel)]=\"isCarOwner.value\">\r\n      <label class=\"form-check-label\" for=\"chkCarOwner\">Be CarOwner</label>\r\n    </div>\r\n\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onBtnSubmitClicked(isCarOwner.checked)\">Submit</button>\r\n\r\n  </form>\r\n\r\n  <small><i>Already have an account?. Click <a href=\"\" routerLink=\"/login\"><b>here</b></a> to login.</i></small>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding-top:1em;\" class=\"container\">\r\n  <div>\r\n    <span style=\"font-size: 2em; color: #32a5e7;\">Test page</span>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <app-car-thumbnail *ngFor=\"let car of cars\" [car]=\"car\"></app-car-thumbnail>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <!-- Search -->\r\n  <div class=\"row box-search\">\r\n    <form style=\"padding: 9px 10px;\">\r\n      <!-- Search form -->\r\n      <div class=\"md-form mt-0 \">\r\n        <input #searchTerm\r\n          class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\"\r\n          (keyup)=\"onKeyUpOnSearchField($event, searchTerm.value)\">\r\n      </div>\r\n    </form>\r\n  </div> <!-- End of Form Search -->\r\n\r\n  <div class=\"container\" style=\"margin-top: 1em; margin-bottom: 2em;\">\r\n    <h2 class=\"title\">Most Popular Cars</h2>\r\n    <app-car-thumbnail\r\n      *ngFor=\"let car of cars\" [car]=\"car\"\r\n      (viewDetailSelected)=\"onViewDetailSelected($event)\"></app-car-thumbnail>\r\n  </div>\r\n\r\n</div>\r\n");

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

/***/ "./src/app/admin-car/car.component.scss":
/*!**********************************************!*\
  !*** ./src/app/admin-car/car.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNhci9jYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin-car/car.component.ts":
/*!********************************************!*\
  !*** ./src/app/admin-car/car.component.ts ***!
  \********************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _service_car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/car-service */ "./src/app/service/car-service.ts");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/base.component */ "./src/app/base/base.component.ts");
/* harmony import */ var _service_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/notify.service */ "./src/app/service/notify.service.ts");






let CarComponent = 
// @ts-ignore
class CarComponent extends _base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(injector, logger, notifier, carService) {
        super(injector);
        this.injector = injector;
        this.logger = logger;
        this.notifier = notifier;
        this.carService = carService;
        this.pageTile = 'Cars Administration';
        this.page = {};
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
        super.ngOnInit();
        this.logger.info('car-component -> initial -> loading cars list.');
        // this.cars[0].images[0].path
        this.loadCars(0);
        // this.carService.getAllCars()
        // .then((cars: Car[]) => {
        //   this.cars = cars;
        // })
        // .catch(err => {
        //   this.logger.error('failed to load cars -> ', err);
        // });
    }
    loadCars(pageno) {
        this.carService.getCarsPaging(pageno)
            .then((response) => {
            // @ts-ignore
            this.cars = response.content;
            // @ts-ignore
            this.page = response.pageable;
            // @ts-ignore
            this.page.totalPages = response.totalPages;
        })
            .catch(err => {
            this.logger.error('failed to load users -> ', err);
            this.notifier.error('Cannot load user data. See log for more detail.');
        });
    }
    searchCar(term) {
        this.carService.searchCars(term)
            .then((cars) => {
            this.cars = cars;
            this.page = null;
        })
            .catch(err => {
            this.logger.error('failed to search cars -> ', err);
            this.notifier.error('Cannot search cars. See log for more detail.');
        });
    }
    getPageItemClass(pno) {
        const classes = [];
        if (pno === this.page.pageNumber) {
            classes.push('active');
        }
        return classes;
    }
    arrayOfPages() {
        return Array.from({ length: this.page.totalPages }, (v, k) => k + 1);
    }
};
CarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _service_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"] },
    { type: _service_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifierService"] },
    { type: _service_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"] }
];
CarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./car.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-car/car.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./car.component.scss */ "./src/app/admin-car/car.component.scss")).default]
    })
    // @ts-ignore
], CarComponent);



/***/ }),

/***/ "./src/app/admin-rental/rental.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin-rental/rental.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXJlbnRhbC9yZW50YWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin-rental/rental.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin-rental/rental.component.ts ***!
  \**************************************************/
/*! exports provided: RentalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalComponent", function() { return RentalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _service_rental_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/rental-service */ "./src/app/service/rental-service.ts");
/* harmony import */ var _service_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/notify.service */ "./src/app/service/notify.service.ts");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/base.component */ "./src/app/base/base.component.ts");
/* harmony import */ var _model_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/constant */ "./src/app/model/constant.ts");







let RentalComponent = 
// @ts-ignore
class RentalComponent extends _base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"] {
    constructor(injector, rentalService, logger, notifier) {
        super(injector);
        this.injector = injector;
        this.rentalService = rentalService;
        this.logger = logger;
        this.notifier = notifier;
        this.page = {};
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
        super.ngOnInit();
        this.logger.info('rental-component -> initial -> loading rentals list.');
        this.loadRentals(0);
    }
    loadRentals(pageno) {
        this.rentalService.getRentalsPaging(pageno)
            .then((response) => {
            // @ts-ignore
            this.rentals = response.content;
            // @ts-ignore
            this.page = response.pageable;
            // @ts-ignore
            this.page.totalPages = response.totalPages;
        })
            .catch(err => {
            this.logger.error('failed to load rental -> ', err);
            this.notifier.error('Cannot load rental data. See log for more detail.');
        });
    }
    searchRental(term) {
        this.rentalService.searchRentals(term)
            .then((rentals) => {
            this.rentals = rentals;
            this.page = null;
            if (!rentals || rentals.length <= 0) {
                this.notifier.error('No result found.');
            }
        })
            .catch(err => {
            this.logger.error('failed to search rentals -> ', err);
            this.notifier.error('Cannot search rentals. See log for more detail.');
        });
        // this.notifier.error('Function is not implemented yet. SORRY!');
    }
    sendApprove(rental) {
        this.rentalService.sendApprove(rental)
            .then((isOk) => {
            this.notifier.success('Rent request is approved!');
            rental.status = _model_constant__WEBPACK_IMPORTED_MODULE_6__["RentalStatus"].Approved;
        })
            .catch((err) => this.notifier.error('Failed to approve.'));
    }
    sendReject(rental) {
        this.rentalService.sendReject(rental)
            .then((isOk) => {
            this.notifier.success('Rent request is rejected!');
            rental.status = _model_constant__WEBPACK_IMPORTED_MODULE_6__["RentalStatus"].Declined;
        })
            .catch((err) => this.notifier.error('Failed to reject.'));
    }
    sendFinish(rental) {
        this.rentalService.sendFinish(rental)
            .then((isOk) => {
            this.notifier.success('Renta is done!');
            rental.status = _model_constant__WEBPACK_IMPORTED_MODULE_6__["RentalStatus"].Returned;
        })
            .catch((err) => this.notifier.error('Failed to finish a rental..'));
    }
    getRentalStatusClass(rental) {
        const classes = ['alert'];
        switch (rental.status) {
            case _model_constant__WEBPACK_IMPORTED_MODULE_6__["RentalStatus"].Pending:
                classes.push('alert-warning');
                break;
            case _model_constant__WEBPACK_IMPORTED_MODULE_6__["RentalStatus"].Approved:
                classes.push('alert-success');
                break;
            case _model_constant__WEBPACK_IMPORTED_MODULE_6__["RentalStatus"].Declined:
                classes.push('alert-danger');
                break;
            case _model_constant__WEBPACK_IMPORTED_MODULE_6__["RentalStatus"].Returned:
                classes.push('alert-success');
                break;
            default:
                break;
        }
        return classes;
    }
    getPageItemClass(pno) {
        const classes = [];
        if (pno === this.page.pageNumber) {
            classes.push('active');
        }
        return classes;
    }
    arrayOfPages() {
        return Array.from({ length: this.page.totalPages }, (v, k) => k + 1);
    }
};
RentalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _service_rental_service__WEBPACK_IMPORTED_MODULE_3__["RentalService"] },
    { type: _service_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"] },
    { type: _service_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifierService"] }
];
RentalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rental',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rental.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-rental/rental.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rental.component.scss */ "./src/app/admin-rental/rental.component.scss")).default]
    })
    // @ts-ignore
], RentalComponent);



/***/ }),

/***/ "./src/app/admin-statistic/statistic.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin-statistic/statistic.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXN0YXRpc3RpYy9zdGF0aXN0aWMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin-statistic/statistic.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-statistic/statistic.component.ts ***!
  \********************************************************/
/*! exports provided: StatisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticComponent", function() { return StatisticComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatisticComponent = class StatisticComponent {
    constructor() { }
    ngOnInit() {
    }
};
StatisticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statistic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-statistic/statistic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./statistic.component.scss */ "./src/app/admin-statistic/statistic.component.scss")).default]
    })
], StatisticComponent);



/***/ }),

/***/ "./src/app/admin-user/user.component.scss":
/*!************************************************!*\
  !*** ./src/app/admin-user/user.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.page-link.active {\n  background: lightcyan;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tdXNlci9DOlxcVXNlcnNcXERpb3NcXElkZWFQcm9qZWN0c1xcY3M0MjUuc3dlLmNhci1yZW50YWxcXHNyY1xcbWFpblxccmVzb3VyY2VzXFxjczQyNS1zd2UtZnJvbnRlbmQvc3JjXFxhcHBcXGFkbWluLXVzZXJcXHVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluLXVzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi11c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLnBhZ2UtbGluay5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Y3lhbjtcclxufVxyXG4iLCJhLnBhZ2UtbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaWdodGN5YW47XG59Il19 */");

/***/ }),

/***/ "./src/app/admin-user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin-user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user-service */ "./src/app/service/user-service.ts");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _service_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/notify.service */ "./src/app/service/notify.service.ts");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/base.component */ "./src/app/base/base.component.ts");






let UserComponent = 
// @ts-ignore
class UserComponent extends _base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"] {
    constructor(injector, userService, logger, notifier) {
        super(injector);
        this.injector = injector;
        this.userService = userService;
        this.logger = logger;
        this.notifier = notifier;
        this.pageTile = 'Users Administration';
        // pageNumber, pageSize
        this.page = {};
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
        super.ngOnInit();
        this.logger.info('User-Component -> initial -> loading users list.');
        // this.userService.getAllUsers()
        this.loadUsers(0);
    }
    loadUsers(pageno) {
        this.userService.getUsersPaging(pageno)
            .then((response) => {
            // @ts-ignore
            this.users = response.content;
            // @ts-ignore
            this.page = response.pageable;
            // @ts-ignore
            this.page.totalPages = response.totalPages;
        })
            .catch(err => {
            this.logger.error('failed to load users -> ', err);
            this.notifier.error('Cannot load user data. See log for more detail.');
        });
    }
    searchUser(term) {
        // this.notifier.error('Feature is being implemented...');
        this.userService.searchUsers(term)
            .then((response) => {
            // @ts-ignore
            this.users = response.list;
            this.logger.info('Search result -> ');
            this.logger.info(this.users);
            this.page = null;
        })
            .catch(err => {
            this.logger.error('failed to search users -> ', err);
            this.notifier.error('Cannot search user. See log for more detail.');
        });
    }
    blockUser(user) {
        this.userService.blockUser(user)
            .then((isOk) => {
            this.notifier.success('Blocked user ' + user.userName);
            user.status = 'Blocked';
        })
            .catch((err) => this.notifier.error('Failed to block user (server error).'));
    }
    unBlockUser(user) {
        this.userService.unBlockUser(user)
            .then((isOk) => {
            this.notifier.success('Unblocked user ' + user.userName);
            user.status = 'Active';
        })
            .catch((err) => this.notifier.error('Failed to un-block user (server error).'));
    }
    getUserStatusClass(user) {
        const classes = ['alert'];
        classes.push(user.status === 'Active' ? 'alert-success' : 'alert-danger');
        return classes;
    }
    getPageItemClass(pno) {
        const classes = [];
        if (pno === this.page.pageNumber) {
            classes.push('active');
        }
        return classes;
    }
    arrayOfPages() {
        return Array.from({ length: this.page.totalPages }, (v, k) => k + 1);
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _service_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] },
    { type: _service_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifierService"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/admin-user/user.component.scss")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    // @ts-ignore
], UserComponent);

class UserComponentImpl extends UserComponent {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signin_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/sign-in.component */ "./src/app/signin/sign-in.component.ts");
/* harmony import */ var _signup_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/sign-up.component */ "./src/app/signup/sign-up.component.ts");
/* harmony import */ var _admin_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-user/user.component */ "./src/app/admin-user/user.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _car_register_car_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./car-register/car-register.component */ "./src/app/car-register/car-register.component.ts");
/* harmony import */ var _admin_rental_rental_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-rental/rental.component */ "./src/app/admin-rental/rental.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _admin_car_car_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-car/car.component */ "./src/app/admin-car/car.component.ts");
/* harmony import */ var _admin_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-statistic/statistic.component */ "./src/app/admin-statistic/statistic.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./car-detail/car-detail.component */ "./src/app/car-detail/car-detail.component.ts");














const routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"] },
    { path: 'login', component: _signin_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"] },
    { path: 'register', component: _signup_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'car-detail', component: _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_13__["CarDetailComponent"] },
    { path: 'car-register', component: _car_register_car_register_component__WEBPACK_IMPORTED_MODULE_7__["CarRegisterComponent"] },
    /* Admin area */
    { path: 'user', component: _admin_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"] },
    { path: 'car', component: _admin_car_car_component__WEBPACK_IMPORTED_MODULE_10__["CarComponent"] },
    { path: 'rental', component: _admin_rental_rental_component__WEBPACK_IMPORTED_MODULE_8__["RentalComponent"] },
    { path: 'user-add', component: _signup_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: 'statistic', component: _admin_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_11__["StatisticComponent"] },
    /* Test */
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_12__["TestComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
    isAuthenticatedPage(path) {
        let isAuthPage = true;
        switch (path) {
            case '':
            case 'login':
            case 'logout':
            case 'register':
            case 'test':
                isAuthPage = false;
                break;
        }
        return isAuthPage;
    }
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  display: flex;\n  width: 100%;\n  align-items: stretch;\n}\n\n#sidebar {\n  min-width: 250px;\n  max-width: 250px;\n  min-height: 100vh;\n  padding-top: 1em;\n  border-right: 1px solid lightgray;\n  height: 100%;\n}\n\n#sidebar.active {\n  margin-left: -250px;\n}\n\n@media (max-width: 768px) {\n  #sidebar {\n    margin-left: -250px;\n  }\n\n  #sidebar.active {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxEaW9zXFxJZGVhUHJvamVjdHNcXGNzNDI1LnN3ZS5jYXItcmVudGFsXFxzcmNcXG1haW5cXHJlc291cmNlc1xcY3M0MjUtc3dlLWZyb250ZW5kL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxtQkFBQTtFQ0NGOztFRENBO0lBQ0UsY0FBQTtFQ0VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuI3NpZGViYXIge1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgI3NpZGViYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxuICB9XHJcbiAgI3NpZGViYXIuYWN0aXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuI3NpZGViYXIge1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmF5O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjc2lkZWJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcbiAgfVxuXG4gICNzaWRlYmFyLmFjdGl2ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn0iXX0= */");

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
        this.title = 'cs425-swe-frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppInjector, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInjector", function() { return AppInjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-user/user.component */ "./src/app/admin-user/user.component.ts");
/* harmony import */ var _admin_car_car_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-car/car.component */ "./src/app/admin-car/car.component.ts");
/* harmony import */ var _admin_rental_rental_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-rental/rental.component */ "./src/app/admin-rental/rental.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signin_sign_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signin/sign-in.component */ "./src/app/signin/sign-in.component.ts");
/* harmony import */ var _signup_sign_up_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup/sign-up.component */ "./src/app/signup/sign-up.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _car_register_car_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./car-register/car-register.component */ "./src/app/car-register/car-register.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _admin_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-statistic/statistic.component */ "./src/app/admin-statistic/statistic.component.ts");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/http-service */ "./src/app/service/http-service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/user-service */ "./src/app/service/user-service.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _service_car_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./service/car-service */ "./src/app/service/car-service.ts");
/* harmony import */ var _service_notify_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./service/notify.service */ "./src/app/service/notify.service.ts");
/* harmony import */ var _car_thumbnail_car_thumbnail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./car-thumbnail/car-thumbnail.component */ "./src/app/car-thumbnail/car-thumbnail.component.ts");
/* harmony import */ var _service_rental_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./service/rental-service */ "./src/app/service/rental-service.ts");
/* harmony import */ var _pipes_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/ellipsis-pipe */ "./src/app/pipes/ellipsis-pipe.ts");
/* harmony import */ var _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./car-detail/car-detail.component */ "./src/app/car-detail/car-detail.component.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./service/util-service */ "./src/app/service/util-service.ts");
/* harmony import */ var _pipes_car_status__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/car-status */ "./src/app/pipes/car-status.ts");

































let AppInjector;
let AppModule = class AppModule {
    constructor(injector) {
        this.injector = injector;
        AppInjector = this.injector;
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _admin_user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
            _admin_car_car_component__WEBPACK_IMPORTED_MODULE_10__["CarComponent"],
            _admin_rental_rental_component__WEBPACK_IMPORTED_MODULE_11__["RentalComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _signin_sign_in_component__WEBPACK_IMPORTED_MODULE_13__["SignInComponent"],
            _signup_sign_up_component__WEBPACK_IMPORTED_MODULE_14__["SignUpComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
            _car_register_car_register_component__WEBPACK_IMPORTED_MODULE_16__["CarRegisterComponent"],
            _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_30__["CarDetailComponent"],
            _common_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
            _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_19__["WelcomeComponent"],
            _admin_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_20__["StatisticComponent"],
            _test_test_component__WEBPACK_IMPORTED_MODULE_24__["TestComponent"],
            _car_thumbnail_car_thumbnail_component__WEBPACK_IMPORTED_MODULE_27__["CarThumbnailComponent"],
            _pipes_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_29__["EllipsisPipe"],
            _pipes_car_status__WEBPACK_IMPORTED_MODULE_32__["CarStatus"],
            _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_30__["CarDetailComponent"]
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot()
        ],
        providers: [
            _service_util_service__WEBPACK_IMPORTED_MODULE_31__["UtilService"],
            _service_log_service__WEBPACK_IMPORTED_MODULE_21__["LogService"],
            _service_notify_service__WEBPACK_IMPORTED_MODULE_26__["NotifierService"],
            _service_http_service__WEBPACK_IMPORTED_MODULE_22__["HttpService"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_23__["UserService"],
            _service_car_service__WEBPACK_IMPORTED_MODULE_25__["CarService"],
            _service_rental_service__WEBPACK_IMPORTED_MODULE_28__["RentalService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/base/base.component.ts":
/*!****************************************!*\
  !*** ./src/app/base/base.component.ts ***!
  \****************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/notify.service */ "./src/app/service/notify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var BaseComponent_1;






let BaseComponent = BaseComponent_1 = class BaseComponent {
    constructor(injector) {
        this.injector = injector;
        this.pageTile = 'CarRental Administrator';
    }
    static isAuthenticatedPage(path) {
        // return false;
        let isAuthPage = true;
        switch (path) {
            case '/':
            case '/login':
            case '/logout':
            case '/register':
            // case '/dashboard':
            case '/test':
                isAuthPage = false;
                break;
        }
        return isAuthPage;
    }
    ngOnInit() {
        const logger = this.injector.get(_service_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]);
        const authService = this.injector.get(_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]);
        const notifier = this.injector.get(_service_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]);
        const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]);
        logger.info('onInit -> pageTile = ' + this.pageTile);
        const loggedInUser = authService.getLoggedInUser();
        const path = router.url;
        if (!loggedInUser && BaseComponent_1.isAuthenticatedPage(path)) {
            notifier.error('Not authenticated access -> BuZZ');
            router.navigate(['login']).then();
        }
    }
};
BaseComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
BaseComponent = BaseComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base',
        template: ''
    })
], BaseComponent);



/***/ }),

/***/ "./src/app/car-detail/car-detail.component.scss":
/*!******************************************************!*\
  !*** ./src/app/car-detail/car-detail.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".car-detail-container {\n  margin-top: 1em;\n  margin-bottom: 4em;\n}\n.car-detail-container ul#galary-thumbnail {\n  list-style-type: none;\n  display: flex;\n  margin-top: 5px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.car-detail-container ul#galary-thumbnail li {\n  float: left;\n  border: 1px solid lightgray;\n  margin-right: 2px;\n  box-shadow: 1px 1px black;\n  border-radius: 2px;\n}\n.car-detail-container ul#galary-thumbnail li img {\n  width: 50px;\n  height: 32px;\n}\n.car-detail-container ul#galary-thumbnail li:hover {\n  cursor: pointer;\n  border: 1px solid gray;\n}\n.car-detail-container .card-title {\n  font-weight: bold;\n}\n.car-detail-container ul.lst-feature {\n  list-style: none;\n  padding: 1px 1px;\n}\n.car-detail-container ul.lst-feature li {\n  border-bottom: 1px solid darkgray;\n  margin-bottom: 2px;\n}\n.car-detail-container ul.lst-feature li .fas {\n  padding-right: 5px;\n  width: 30px;\n  color: green;\n}\n.car-detail-container ul.lst-feature li .car-property {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLWRldGFpbC9DOlxcVXNlcnNcXERpb3NcXElkZWFQcm9qZWN0c1xcY3M0MjUuc3dlLmNhci1yZW50YWxcXHNyY1xcbWFpblxccmVzb3VyY2VzXFxjczQyNS1zd2UtZnJvbnRlbmQvc3JjXFxhcHBcXGNhci1kZXRhaWxcXGNhci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nhci1kZXRhaWwvY2FyLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0NGO0FES0U7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSEo7QURJSTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FESU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FETUk7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUNKTjtBRFNFO0VBQ0UsaUJBQUE7QUNQSjtBRFVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEVUk7RUFDRSxpQ0FBQTtFQUNBLGtCQUFBO0FDUk47QURVTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNSUjtBRFdNO0VBQ0UsaUJBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL2Nhci1kZXRhaWwvY2FyLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXItZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDRlbTtcclxuXHJcbiAgLmdhbGFyeSB7XHJcblxyXG4gIH1cclxuXHJcbiAgdWwjZ2FsYXJ5LXRodW1ibmFpbCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIGxpIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGk6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICB1bC5sc3QtZmVhdHVyZSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMXB4IDFweDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG5cclxuICAgICAgLmZhcyB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhci1wcm9wZXJ0eSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNhci1kZXRhaWwtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiA0ZW07XG59XG4uY2FyLWRldGFpbC1jb250YWluZXIgdWwjZ2FsYXJ5LXRodW1ibmFpbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4uY2FyLWRldGFpbC1jb250YWluZXIgdWwjZ2FsYXJ5LXRodW1ibmFpbCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uY2FyLWRldGFpbC1jb250YWluZXIgdWwjZ2FsYXJ5LXRodW1ibmFpbCBsaSBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuLmNhci1kZXRhaWwtY29udGFpbmVyIHVsI2dhbGFyeS10aHVtYm5haWwgbGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG4uY2FyLWRldGFpbC1jb250YWluZXIgLmNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXItZGV0YWlsLWNvbnRhaW5lciB1bC5sc3QtZmVhdHVyZSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDFweCAxcHg7XG59XG4uY2FyLWRldGFpbC1jb250YWluZXIgdWwubHN0LWZlYXR1cmUgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyYXk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5jYXItZGV0YWlsLWNvbnRhaW5lciB1bC5sc3QtZmVhdHVyZSBsaSAuZmFzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICB3aWR0aDogMzBweDtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmNhci1kZXRhaWwtY29udGFpbmVyIHVsLmxzdC1mZWF0dXJlIGxpIC5jYXItcHJvcGVydHkge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/car-detail/car-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/car-detail/car-detail.component.ts ***!
  \****************************************************/
/*! exports provided: CarDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailComponent", function() { return CarDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _service_car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/car-service */ "./src/app/service/car-service.ts");
/* harmony import */ var _model_car__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/car */ "./src/app/model/car.ts");
/* harmony import */ var _service_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/notify.service */ "./src/app/service/notify.service.ts");
/* harmony import */ var _service_rental_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/rental-service */ "./src/app/service/rental-service.ts");
/* harmony import */ var _model_rental__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/rental */ "./src/app/model/rental.ts");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../base/base.component */ "./src/app/base/base.component.ts");










let CarDetailComponent = 
// @ts-ignore
class CarDetailComponent extends _base_base_component__WEBPACK_IMPORTED_MODULE_9__["BaseComponent"] {
    constructor(injector, route, carService, rentalService, logger, notifier) {
        super(injector);
        this.injector = injector;
        this.route = route;
        this.carService = carService;
        this.rentalService = rentalService;
        this.logger = logger;
        this.notifier = notifier;
        this.car = new _model_car__WEBPACK_IMPORTED_MODULE_5__["Car"]();
        this.rental = new _model_rental__WEBPACK_IMPORTED_MODULE_8__["Rental"]();
        this.logger.info('[car-detail] Constructor');
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
        super.ngOnInit();
        this.logger.info('[car-detail] onInit');
        this.route.params.subscribe(params => {
            this.logger.info('[car-detail] Prepare to load CarInfo');
            // tslint:disable-next-line:radix
            const carId = parseInt(params.carId);
            this.loadCarDetail(carId);
        });
    }
    loadCarDetail(carId) {
        if (!carId) {
            this.notifier.error('Invalid CarId');
            return;
        }
        this.carService.getCar(carId)
            .then((car) => {
            this.car = car;
            this.selectDefaultThumbnailPath();
            this.notifier.success('Loaded car info.');
        })
            .catch((err) => this.logger.error.bind(null, JSON.stringify(err)));
    }
    sendRentalRequest() {
        if (!this.rental.pickUpDate || !this.rental.expectedDate) {
            this.notifier.error('Please select Pickup and Return dates!');
            return;
        }
        this.rentalService.sendRentalRequest(this.car, this.rental)
            .then((isOk) => {
            this.notifier.success('Request was sent -> Car: ' + this.car.carBrand);
            // @ts-ignore
            $('#confirmRentReq').modal({ show: true });
        })
            .catch((err) => {
            this.notifier.error('Failed to create rent request. Try again later.');
        });
    }
    hasImages() {
        return this.car && this.car.images && this.car.images.length > 0;
    }
    selectImage(img) {
        this.thumbnailImgPath = img.path;
    }
    selectDefaultThumbnailPath() {
        let imgSrc = '/assets/image/no-car.png';
        if (this.car && this.car.images && this.car.images.length > 0) {
            imgSrc = this.car.images[0].path;
        }
        this.thumbnailImgPath = imgSrc;
    }
};
CarDetailComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"] },
    { type: _service_rental_service__WEBPACK_IMPORTED_MODULE_7__["RentalService"] },
    { type: _service_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] },
    { type: _service_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifierService"] }
];
CarDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./car-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-detail/car-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./car-detail.component.scss */ "./src/app/car-detail/car-detail.component.scss")).default]
    })
    // @ts-ignore
], CarDetailComponent);



/***/ }),

/***/ "./src/app/car-register/car-register.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/car-register/car-register.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#frmCarRegister .field-must {\n  color: red;\n}\n#frmCarRegister label {\n  font-weight: bold;\n}\n#frmCarRegister ul#lsUploadedImages {\n  list-style-type: decimal;\n}\n#frmCarRegister ul#lsUploadedImages img {\n  height: 32px;\n  width: auto;\n  margin-right: 5px;\n  border: 1px solid lightgray;\n  box-shadow: 1px 1px black;\n  border-radius: 2px;\n}\n#frmCarRegister ul#lsUploadedImages li {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLXJlZ2lzdGVyL0M6XFxVc2Vyc1xcRGlvc1xcSWRlYVByb2plY3RzXFxjczQyNS5zd2UuY2FyLXJlbnRhbFxcc3JjXFxtYWluXFxyZXNvdXJjZXNcXGNzNDI1LXN3ZS1mcm9udGVuZC9zcmNcXGFwcFxcY2FyLXJlZ2lzdGVyXFxjYXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nhci1yZWdpc3Rlci9jYXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxVQUFBO0FDQUo7QURHRTtFQUNFLGlCQUFBO0FDREo7QURJRTtFQUNFLHdCQUFBO0FDRko7QURJSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNGTjtBREtJO0VBQ0Usa0JBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL2Nhci1yZWdpc3Rlci9jYXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZnJtQ2FyUmVnaXN0ZXIge1xyXG4gIC5maWVsZC1tdXN0IHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIHVsI2xzVXBsb2FkZWRJbWFnZXMge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiIsIiNmcm1DYXJSZWdpc3RlciAuZmllbGQtbXVzdCB7XG4gIGNvbG9yOiByZWQ7XG59XG4jZnJtQ2FyUmVnaXN0ZXIgbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNmcm1DYXJSZWdpc3RlciB1bCNsc1VwbG9hZGVkSW1hZ2VzIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xufVxuI2ZybUNhclJlZ2lzdGVyIHVsI2xzVXBsb2FkZWRJbWFnZXMgaW1nIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuI2ZybUNhclJlZ2lzdGVyIHVsI2xzVXBsb2FkZWRJbWFnZXMgbGkge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/car-register/car-register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/car-register/car-register.component.ts ***!
  \********************************************************/
/*! exports provided: CarRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarRegisterComponent", function() { return CarRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _service_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/notify.service */ "./src/app/service/notify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_car__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/car */ "./src/app/model/car.ts");
/* harmony import */ var _service_car_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/car-service */ "./src/app/service/car-service.ts");
/* harmony import */ var _model_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/images */ "./src/app/model/images.ts");








let CarRegisterComponent = class CarRegisterComponent {
    constructor(logger, notifier, carService, router) {
        this.logger = logger;
        this.notifier = notifier;
        this.carService = carService;
        this.router = router;
        this.formData = new FormData();
        this.car = new _model_car__WEBPACK_IMPORTED_MODULE_5__["Car"]();
    }
    onChange(event) {
        const files = [].slice.call(event.event.target.files);
        // const headers = new HttpHeaders();
        // this is the important step. You need to set content type as null
        // headers.set('Content-Type', null);
        // headers.set('Accept', 'multipart/form-data');
        // const params = new HttpParams();
        this.images = [];
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < files.length; i++) {
            this.formData.append('files', files[i], files[i].name);
            this.readURL(files[i]);
        }
        const response = this.carService.uploadImages(this.formData);
        response.then((rs) => {
            this.logger.info(rs);
        })
            .catch(this.logger.error);
        this.car.images = files.map(f => new _model_images__WEBPACK_IMPORTED_MODULE_7__["Images"](f.name));
    }
    readURL(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.images.push({
                src: e.target.result,
                alt: file.name
            });
        };
        reader.readAsDataURL(file);
    }
    ngOnInit() {
        this.car = new _model_car__WEBPACK_IMPORTED_MODULE_5__["Car"]();
    }
    onClickSubmitRegister() {
        this.car.available = true;
        this.carService.registerCar(this.car)
            .then((resp) => {
            this.logger.info('Car register responded -> ' + JSON.stringify(resp));
            this.notifier.success('Registered new car.');
            this.router.navigate(['/car']).then();
        })
            .catch((err) => {
            this.logger.error('Failed to register carr -> ' + err);
            if (err instanceof Error) {
                this.notifier.error(err);
            }
            else {
                this.notifier.error('Failed to register car. Unknown error.');
            }
        });
    }
};
CarRegisterComponent.ctorParameters = () => [
    { type: _service_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"] },
    { type: _service_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifierService"] },
    { type: _service_car_service__WEBPACK_IMPORTED_MODULE_6__["CarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CarRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./car-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-register/car-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./car-register.component.scss */ "./src/app/car-register/car-register.component.scss")).default]
    })
], CarRegisterComponent);



/***/ }),

/***/ "./src/app/car-thumbnail/car-thumbnail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/car-thumbnail/car-thumbnail.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".car-thumbnail {\n  display: inline-table;\n  margin-bottom: 10px;\n  padding: 10px 15px;\n}\n.car-thumbnail .car-title {\n  color: green;\n  font-weight: bold;\n}\n.car-thumbnail .img-container {\n  position: relative;\n}\n.car-thumbnail .img-container .rent-price {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  font-size: 80%;\n  color: white;\n  font-style: italic;\n  font-weight: bold;\n}\n.car-thumbnail .img-thumbnail {\n  transition: transform 0.5s ease;\n}\n.car-thumbnail .img-thumbnail:hover {\n  transform: scale(1.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLXRodW1ibmFpbC9DOlxcVXNlcnNcXERpb3NcXElkZWFQcm9qZWN0c1xcY3M0MjUuc3dlLmNhci1yZW50YWxcXHNyY1xcbWFpblxccmVzb3VyY2VzXFxjczQyNS1zd2UtZnJvbnRlbmQvc3JjXFxhcHBcXGNhci10aHVtYm5haWxcXGNhci10aHVtYm5haWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nhci10aHVtYm5haWwvY2FyLXRodW1ibmFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENFO0VBQ0Usa0JBQUE7QUNDSjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NOO0FER0U7RUFDRSwrQkFBQTtBQ0RKO0FER0U7RUFDRSxzQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY2FyLXRodW1ibmFpbC9jYXItdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhci10aHVtYm5haWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuXHJcbiAgLmNhci10aXRsZSB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmltZy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5yZW50LXByaWNlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW1nLXRodW1ibmFpbCB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XHJcbiAgfVxyXG4gIC5pbWctdGh1bWJuYWlsOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xMik7XHJcbiAgfVxyXG59XHJcbiIsIi5jYXItdGh1bWJuYWlsIHtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG4uY2FyLXRodW1ibmFpbCAuY2FyLXRpdGxlIHtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXItdGh1bWJuYWlsIC5pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhci10aHVtYm5haWwgLmltZy1jb250YWluZXIgLnJlbnQtcHJpY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXItdGh1bWJuYWlsIC5pbWctdGh1bWJuYWlsIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbn1cbi5jYXItdGh1bWJuYWlsIC5pbWctdGh1bWJuYWlsOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/car-thumbnail/car-thumbnail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/car-thumbnail/car-thumbnail.component.ts ***!
  \**********************************************************/
/*! exports provided: CarThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarThumbnailComponent", function() { return CarThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarThumbnailComponent = class CarThumbnailComponent {
    constructor() {
        this.viewDetailSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onCarSelected() {
        this.viewDetailSelected.emit(this.car);
    }
    carThumbnailImg() {
        let imgSrc = '/assets/image/no-car.png';
        if (this.car && this.car.images && this.car.images.length > 0) {
            imgSrc = this.car.images[0].path;
        }
        return imgSrc;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CarThumbnailComponent.prototype, "car", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CarThumbnailComponent.prototype, "viewDetailSelected", void 0);
CarThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-thumbnail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./car-thumbnail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-thumbnail/car-thumbnail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./car-thumbnail.component.scss */ "./src/app/car-thumbnail/car-thumbnail.component.scss")).default]
    })
], CarThumbnailComponent);



/***/ }),

/***/ "./src/app/common/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  color: white;\n  text-align: center;\n  background: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2Zvb3Rlci9DOlxcVXNlcnNcXERpb3NcXElkZWFQcm9qZWN0c1xcY3M0MjUuc3dlLmNhci1yZW50YWxcXHNyY1xcbWFpblxccmVzb3VyY2VzXFxjczQyNS1zd2UtZnJvbnRlbmQvc3JjXFxhcHBcXGNvbW1vblxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG4iLCJmb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/common/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/common/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-item {\n  padding-left: 2em;\n}\n.nav-item:not(:last-child) {\n  border-left: lightblue 1px solid;\n  padding-right: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2hlYWRlci9DOlxcVXNlcnNcXERpb3NcXElkZWFQcm9qZWN0c1xcY3M0MjUuc3dlLmNhci1yZW50YWxcXHNyY1xcbWFpblxccmVzb3VyY2VzXFxjczQyNS1zd2UtZnJvbnRlbmQvc3JjXFxhcHBcXGNvbW1vblxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjtBREFFO0VBQ0UsZ0NBQUE7RUFBa0Msa0JBQUE7QUNHdEMiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1sZWZ0OiBsaWdodGJsdWUgMXB4IHNvbGlkOyBwYWRkaW5nLXJpZ2h0OiAyZW07XHJcbiAgfVxyXG5cclxufVxyXG4iLCIubmF2LWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDJlbTtcbn1cbi5uYXYtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWxlZnQ6IGxpZ2h0Ymx1ZSAxcHggc29saWQ7XG4gIHBhZGRpbmctcmlnaHQ6IDJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/notify.service */ "./src/app/service/notify.service.ts");






let HeaderComponent = class HeaderComponent {
    constructor(router, logger, notifier, authService) {
        this.router = router;
        this.logger = logger;
        this.notifier = notifier;
        this.authService = authService;
    }
    ngOnInit() {
    }
    isAuthenticated() {
        const loggedInUser = this.authService.getLoggedInUser();
        return (loggedInUser !== null && loggedInUser !== undefined);
    }
    isAdminLoggedIn() {
        const loggedInUser = this.authService.getLoggedInUser();
        return this.authService.isAdmin(loggedInUser);
    }
    doLogout() {
        const targetPath = '/';
        this.authService.signOut()
            .then((resp) => {
            this.router.navigate([targetPath]);
        })
            .catch((err) => {
            this.router.navigate([targetPath]);
        });
    }
    getUserName() {
        return this.authService.getLoggedInUser().userName;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] },
    { type: _service_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifierService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/common/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.component */ "./src/app/base/base.component.ts");
/* harmony import */ var _service_rental_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/rental-service */ "./src/app/service/rental-service.ts");
/* harmony import */ var _model_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/constant */ "./src/app/model/constant.ts");
/* harmony import */ var _service_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/notify.service */ "./src/app/service/notify.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");








let DashboardComponent = 
// @ts-ignore
class DashboardComponent extends _base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(injector, logger, authService, notifier, rentalService) {
        super(injector);
        this.injector = injector;
        this.logger = logger;
        this.authService = authService;
        this.notifier = notifier;
        this.rentalService = rentalService;
        this.page = {};
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
        super.ngOnInit();
        this.loadMyRentals(0);
        this.loadMyRenting(0);
    }
    sendApprove(rental) {
        this.rentalService.sendApprove(rental)
            .then((isOk) => {
            this.notifier.success('Rent request is approved!');
            rental.status = _model_constant__WEBPACK_IMPORTED_MODULE_5__["RentalStatus"].Approved;
        })
            .catch((err) => this.notifier.error('Failed to approve.'));
    }
    sendReject(rental) {
        this.rentalService.sendReject(rental)
            .then((isOk) => {
            this.notifier.success('Rent request is rejected!');
            rental.status = _model_constant__WEBPACK_IMPORTED_MODULE_5__["RentalStatus"].Declined;
        })
            .catch((err) => this.notifier.error('Failed to reject.'));
    }
    sendFinish(rental) {
        this.rentalService.sendFinish(rental)
            .then((isOk) => {
            this.notifier.success('Renta is done!');
            rental.status = _model_constant__WEBPACK_IMPORTED_MODULE_5__["RentalStatus"].Returned;
        })
            .catch((err) => this.notifier.error('Failed to finish a rental..'));
    }
    getRentalStatusClass(rental) {
        const classes = ['alert'];
        switch (rental.status) {
            case _model_constant__WEBPACK_IMPORTED_MODULE_5__["RentalStatus"].Pending:
                classes.push('alert-warning');
                break;
            case _model_constant__WEBPACK_IMPORTED_MODULE_5__["RentalStatus"].Approved:
                classes.push('alert-success');
                break;
            case _model_constant__WEBPACK_IMPORTED_MODULE_5__["RentalStatus"].Declined:
                classes.push('alert-danger');
                break;
            case _model_constant__WEBPACK_IMPORTED_MODULE_5__["RentalStatus"].Returned:
                classes.push('alert-success');
                break;
            default:
                break;
        }
        return classes;
    }
    getPageItemClass(pno) {
        const classes = [];
        if (pno === this.page.pageNumber) {
            classes.push('active');
        }
        return classes;
    }
    arrayOfPages() {
        return Array.from({ length: this.page.totalPages }, (v, k) => k + 1);
    }
    loadMyRentals(pageno) {
        this.rentalService.getRentalsPagingWithOwnerId(pageno)
            .then((response) => {
            // @ts-ignore
            this.myCarRent = response.content;
            // @ts-ignore
            this.page = response.pageable;
            // @ts-ignore
            this.page.totalPages = response.totalPages;
        })
            .catch(err => {
            this.logger.error('failed to load rental -> ', err);
            this.notifier.error('Cannot load rental data. See log for more detail.');
        });
    }
    loadMyRenting(pageno) {
        this.rentalService.getMyRenting(pageno)
            .then((response) => {
            // @ts-ignore
            // @ts-ignore
            this.myRenting = response.content;
            // @ts-ignore
            this.page = response.pageable;
            // @ts-ignore
            this.page.totalPages = response.totalPages;
        })
            .catch(err => {
            this.logger.error('failed to load rental -> ', err);
            this.notifier.error('Cannot load rental data. See log for more detail.');
        });
    }
    isCarOwner() {
        const loggedInUser = this.authService.getLoggedInUser();
        if (!loggedInUser) {
            return false;
        }
        return (this.authService.isAdmin(loggedInUser) || this.authService.isCarOwner(loggedInUser));
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _service_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _service_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifierService"] },
    { type: _service_rental_service__WEBPACK_IMPORTED_MODULE_4__["RentalService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
    })
    // @ts-ignore
], DashboardComponent);



/***/ }),

/***/ "./src/app/model/car.ts":
/*!******************************!*\
  !*** ./src/app/model/car.ts ***!
  \******************************/
/*! exports provided: Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Car {
    constructor() {
        this.images = [];
    }
}


/***/ }),

/***/ "./src/app/model/constant.ts":
/*!***********************************!*\
  !*** ./src/app/model/constant.ts ***!
  \***********************************/
/*! exports provided: Roles, RentalStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalStatus", function() { return RentalStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Roles {
}
Roles.Admin = 'ADMIN';
Roles.CarOwner = 'OWNER';
Roles.CarRenter = 'RENTER';
class RentalStatus {
}
RentalStatus.Pending = 'PENDING';
RentalStatus.Approved = 'APPROVED';
RentalStatus.Declined = 'DECLINED';
RentalStatus.Returned = 'RETURNED';


/***/ }),

/***/ "./src/app/model/images.ts":
/*!*********************************!*\
  !*** ./src/app/model/images.ts ***!
  \*********************************/
/*! exports provided: Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return Images; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Images {
    constructor(path) {
        this.path = path;
    }
}


/***/ }),

/***/ "./src/app/model/rental.ts":
/*!*********************************!*\
  !*** ./src/app/model/rental.ts ***!
  \*********************************/
/*! exports provided: Rental */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rental", function() { return Rental; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Rental {
}


/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor() {
        this.roles = [];
    }
    setData(userName, firstName, lastName, email, phone, status) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.status = status;
        return this;
    }
}


/***/ }),

/***/ "./src/app/pipes/car-status.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/car-status.ts ***!
  \*************************************/
/*! exports provided: CarStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarStatus", function() { return CarStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarStatus = class CarStatus {
    transform(car) {
        if (!car || !car.status) {
            return 'Unknown';
        }
        let s;
        switch (car.status) {
            case '1':
                s = 'Very Good';
                break;
            case '2':
                s = 'Good';
                break;
            case '3':
                s = 'Fair';
                break;
            default:
                s = car.status;
                break;
        }
        return s;
    }
};
CarStatus = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'carStatus'
    })
], CarStatus);



/***/ }),

/***/ "./src/app/pipes/ellipsis-pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/ellipsis-pipe.ts ***!
  \****************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EllipsisPipe = class EllipsisPipe {
    transform(val, args) {
        if (args === undefined) {
            return val;
        }
        if (val.length > args) {
            return val.substring(0, args) + '...';
        }
        else {
            return val;
        }
    }
};
EllipsisPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'ellipsis'
    })
], EllipsisPipe);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service */ "./src/app/service/http-service.ts");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _rt_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rt-storage.service */ "./src/app/service/rt-storage.service.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util-service */ "./src/app/service/util-service.ts");
/* harmony import */ var _model_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/constant */ "./src/app/model/constant.ts");
var AuthService_1;







let AuthService = AuthService_1 = class AuthService {
    constructor(logger, httpService, util, rtStorage) {
        this.logger = logger;
        this.httpService = httpService;
        this.util = util;
        this.rtStorage = rtStorage;
    }
    static hasRole(user, role) {
        if (!user || !user.roles || user.roles.length === 0) {
            return false;
        }
        return user.roles.includes(role);
    }
    signup(user) {
        const url = 'auth/signup';
        return this.httpService.sendPostRequest(url, user);
    }
    signin(username, password) {
        const url = 'auth/signin';
        const d = {
            username,
            password
        };
        const http = this.httpService;
        return new Promise((resolve, reject) => {
            http.sendPostRequest(url, d).then((respBody) => {
                console.log(respBody);
                // @ts-ignore
                // this.rtStorage.setData(this.rtStorage.TOKEN_KEY, respBody.response.token);
                this.util.setCookie(this.rtStorage.TOKEN_KEY, respBody.response.token, 1);
                // @ts-ignore
                // this.rtStorage.setData(this.rtStorage.LOGGEDIN_USER, respBody.response.user);
                this.util.setCookie(this.rtStorage.LOGGEDIN_USER, respBody.response.user, 1);
                resolve(true);
            })
                .catch((err) => reject(err));
        });
    }
    signOut() {
        // const url = 'auth/signout';
        //
        // const http = this.httpService;
        //
        // return new Promise((resolve, reject) => {
        //   http.sendPostRequest(url, {}).then((respBody) => {
        //     this.rtStorage.setData(this.rtStorage.LOGGEDIN_USER, null);
        //     this.rtStorage.setData(this.rtStorage.TOKEN_KEY, null);
        //
        //     resolve(true);
        //   })
        //   .catch((err) => reject(err));
        // });
        return new Promise((resolve, reject) => {
            // this.rtStorage.setData(this.rtStorage.LOGGEDIN_USER, null);
            // this.rtStorage.setData(this.rtStorage.TOKEN_KEY, null);
            this.util.eraseCookie(this.rtStorage.LOGGEDIN_USER);
            this.util.eraseCookie(this.rtStorage.TOKEN_KEY);
            setTimeout(resolve.bind(null, true), 100);
        });
    }
    getLoggedInUser() {
        // const loggedInUser = this.rtStorage.getData(this.rtStorage.LOGGEDIN_USER);
        const loggedInUserStr = this.util.getCookie(this.rtStorage.LOGGEDIN_USER);
        if (!loggedInUserStr || loggedInUserStr.length === 0) {
            return null;
        }
        const loggedInUser = JSON.parse(loggedInUserStr);
        return loggedInUser;
    }
    isAdmin(user) {
        if (!user || !user.roles) {
            return false;
        }
        return AuthService_1.hasRole(user, _model_constant__WEBPACK_IMPORTED_MODULE_6__["Roles"].Admin);
    }
    isCarOwner(user) {
        if (!user || !user.roles) {
            return false;
        }
        return AuthService_1.hasRole(user, _model_constant__WEBPACK_IMPORTED_MODULE_6__["Roles"].CarOwner);
    }
};
AuthService.ctorParameters = () => [
    { type: _log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _rt_storage_service__WEBPACK_IMPORTED_MODULE_4__["RtStorageService"] }
];
AuthService = AuthService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/service/car-service.ts":
/*!****************************************!*\
  !*** ./src/app/service/car-service.ts ***!
  \****************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-service */ "./src/app/service/http-service.ts");
/* harmony import */ var _rt_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rt-storage.service */ "./src/app/service/rt-storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");







let CarService = class CarService {
    constructor(logger, auth, http, httpService, rtStorage) {
        this.logger = logger;
        this.auth = auth;
        this.http = http;
        this.httpService = httpService;
        this.rtStorage = rtStorage;
    }
    getAllCars() {
        // const url = 'car/list';
        // const http = this.httpService;
        //
        // return new Promise((resolve, reject) => {
        //   http.sendGetRequest(url, {}).then((respBody) => {
        //     // @ts-ignore
        //     const cars = respBody.response;
        //     resolve(cars);
        //   })
        //     .catch((err) => reject(err));
        // });
        return this.getCarsPaging(-1);
    }
    getCarsByOwner() {
        const url = 'car/list/owner';
        const http = this.httpService;
        const params = {
            userId: this.auth.getLoggedInUser().id,
        };
        return new Promise((resolve, reject) => {
            http.sendGetRequest(url, params).then((respBody) => {
                resolve(respBody);
            })
                .catch((err) => reject(err));
        });
    }
    getCarsPaging(pageno) {
        const url = `car/list`;
        return this.httpService.sendGetRequest(url, {
            pageno
        });
    }
    searchCars(term) {
        const url = 'car/search';
        const d = { searchString: term };
        const http = this.httpService;
        return new Promise((resolve, reject) => {
            http.sendGetRequest(url, d).then((respBody) => {
                // @ts-ignore
                const cars = respBody.list;
                resolve(cars);
            })
                .catch((err) => reject(err));
        });
        // return new Promise((resolve, reject) => {
        //   setTimeout(resolve.bind(null, CARS), 1000);
        // });
    }
    getCar(carId) {
        const url = `car/get/${carId}`;
        const http = this.httpService;
        return new Promise((resolve, reject) => {
            http.sendGetRequest(url, {}).then((respBody) => {
                // @ts-ignore
                const car = respBody.object;
                // const car = respBody.response;
                resolve(car);
            })
                .catch((err) => reject(err));
        });
        // return new Promise((resolve, reject) => {
        //   const car = CARS.find((c: Car) => c.id === carId);
        //   setTimeout(resolve.bind(null, car), 1000);
        // });
    }
    registerCar(car) {
        const url = 'car/register';
        const http = this.httpService;
        car.owner = this.auth.getLoggedInUser();
        //
        // return new Promise((resolve, reject) => {
        //   http.sendPostRequest(url, car).then((respBody) => {
        //     const resp = respBody;
        //     console.log(resp);
        //     resolve(car);
        //   })
        //     .catch((err) => reject(err));
        // });
        return http.sendPostRequest(url, car);
    }
    uploadImages(data) {
        const url = 'upload/uploadMultipleFiles';
        return this.httpService.sendPostRequest(url, data);
    }
};
CarService.ctorParameters = () => [
    { type: _log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _rt_storage_service__WEBPACK_IMPORTED_MODULE_4__["RtStorageService"] }
];
CarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CarService);



/***/ }),

/***/ "./src/app/service/http-service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/http-service.ts ***!
  \*****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _rt_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rt-storage.service */ "./src/app/service/rt-storage.service.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util-service */ "./src/app/service/util-service.ts");
var HttpService_1;






let HttpService = HttpService_1 = class HttpService {
    constructor(http, logger, util, rtStorage) {
        this.http = http;
        this.logger = logger;
        this.util = util;
        this.rtStorage = rtStorage;
        // baseUrl = 'http://localhost:8080/';
        this.baseUrl = '';
    }
    static getErrorMessage(resp) {
        const defError = 'An error occurs while sending request.';
        if (!resp || !resp.body || !resp.body.error || !resp.body.error.errorDesc) {
            return defError;
        }
        return resp.body.error.errorDesc;
    }
    sendGetRequest(url, reqParams) {
        const reqUrl = `${this.baseUrl}/${url}`;
        const httpClient = this.http;
        const logger = this.logger;
        let auth = 'Bearer ';
        const token = this.util.getCookie(this.rtStorage.TOKEN_KEY);
        if (token) {
            auth += token.toString();
        }
        else {
            logger.warn('[http-service][get] no token.');
        }
        const reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .append('Content-Type', 'application/json; charset=utf-8')
            .append('Accept', 'application/json')
            .append('Authorization', auth);
        return new Promise((resolve, reject) => {
            httpClient.request('GET', reqUrl, {
                headers: reqHeaders,
                params: reqParams,
                observe: 'response'
            })
                .toPromise()
                .then(resp => {
                if (resp && resp.status && resp.status === 200) {
                    logger.log('[http-service] http request -> ok');
                    const respBody = resp.body;
                    const dataBody = respBody.body;
                    const respData = dataBody.response;
                    resolve(respData);
                }
                else {
                    logger.error(resp);
                    reject(new Error('An error occurs while sending http request.'));
                }
            })
                .catch((err) => {
                logger.error('[http-service] An error occurs while sending request to ' + url);
                logger.error(err);
                reject(new Error('En unknown error occurs while sending http request.'));
            });
        });
    }
    sendPostRequest(url, postParams) {
        const reqUrl = `${this.baseUrl}/${url}`;
        const httpClient = this.http;
        const logger = this.logger;
        let auth = 'Bearer ';
        const token = this.util.getCookie(this.rtStorage.TOKEN_KEY);
        if (token) {
            auth += token.toString();
        }
        else {
            logger.warn('[http-service][post] no token.');
        }
        const reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            // .append('Content-Type', 'application/json; charset=utf-8')
            .append('Accept', 'application/json')
            .append('Authorization', auth);
        return new Promise((resolve, reject) => {
            httpClient.post(reqUrl, postParams, { headers: reqHeaders })
                .toPromise()
                .then((resp) => {
                if (!resp || !resp.header) {
                    this.logger.error('[http-service][send-post] Invalid response: Expect a header in response.');
                    return reject(new Error('Invalid response: Expect a header in response.'));
                }
                const header = resp.header;
                if (header.code === 200) {
                    logger.log('[http-service][send-post] -> ok');
                    resolve(resp.body);
                }
                else {
                    logger.error('[http-service][send-post] -> receive response with not ok status -> ' + JSON.stringify(resp));
                    reject(new Error(HttpService_1.getErrorMessage(resp)));
                }
            })
                .catch((err) => {
                logger.error('[http-service][send-post] An error occurs while sending request to ' + url);
                logger.error(err);
                reject(new Error('En unknown error occurs while sending http request.'));
            });
        });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _rt_storage_service__WEBPACK_IMPORTED_MODULE_4__["RtStorageService"] }
];
HttpService = HttpService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HttpService);



/***/ }),

/***/ "./src/app/service/log-service.ts":
/*!****************************************!*\
  !*** ./src/app/service/log-service.ts ***!
  \****************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogService = class LogService {
    constructor() { }
    log(msg) { console.log(msg); }
    info(msg) { console.log(msg); }
    error(msg, err = {}) { console.error(msg, err); }
    warn(msg) { console.warn(msg); }
};
LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LogService);



/***/ }),

/***/ "./src/app/service/notify.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/notify.service.ts ***!
  \*******************************************/
/*! exports provided: NotifierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierService", function() { return NotifierService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");



let NotifierService = class NotifierService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    success(msg) { this.toastr.success(msg); }
    error(msg) { this.toastr.error(msg); }
};
NotifierService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
NotifierService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotifierService);



/***/ }),

/***/ "./src/app/service/rental-service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/rental-service.ts ***!
  \*******************************************/
/*! exports provided: RentalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalService", function() { return RentalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service */ "./src/app/service/http-service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");




let RentalService = class RentalService {
    constructor(httpService, authService) {
        this.httpService = httpService;
        this.authService = authService;
    }
    getAllRentals() {
        // TODO replace http command
        const url = 'rental/list';
        return this.httpService.sendGetRequest(url, {});
        // return Promise.resolve(RENTALS);
    }
    getRentalsPaging(pageno) {
        const url = `rental/list`;
        return this.httpService.sendGetRequest(url, {
            pageno
        });
    }
    getRentalsPagingWithOwnerId(pageno) {
        const url = 'rental/list/owner/' + this.authService.getLoggedInUser().id;
        const http = this.httpService;
        return new Promise((resolve, reject) => {
            http.sendGetRequest(url, {
                pageno
            }).then((respBody) => {
                resolve(respBody);
            })
                .catch((err) => reject(err));
        });
    }
    getMyRenting(pageno) {
        const url = 'rental/list/user/' + this.authService.getLoggedInUser().id;
        const http = this.httpService;
        return new Promise((resolve, reject) => {
            http.sendGetRequest(url, {
                pageno
            }).then((respBody) => {
                resolve(respBody);
            })
                .catch((err) => reject(err));
        });
    }
    searchRentals(term) {
        const url = 'rental/search';
        const d = { searchString: term };
        const http = this.httpService;
        return new Promise((resolve, reject) => {
            http.sendGetRequest(url, d).then((respBody) => {
                const rentals = respBody.list;
                resolve(rentals);
            })
                .catch((err) => reject(err));
        });
    }
    sendApprove(rental) {
        const url = `rental/${rental.id}/approve`;
        return this.httpService.sendPostRequest(url, rental);
    }
    sendFinish(rental) {
        const url = `rental/${rental.id}/finish`;
        return this.httpService.sendPostRequest(url, rental);
    }
    sendReject(rental) {
        const reason = 'Rental is rejected as requested.';
        const url = `rental/${rental.id}/reject?rejectDesc=${reason}`;
        return this.httpService.sendPostRequest(url, rental);
    }
    sendRentalRequest(carToRent, rental) {
        const url = 'rental/create';
        const loggedInUser = this.authService.getLoggedInUser();
        const d = {
            user: loggedInUser,
            car: carToRent,
            price: carToRent.price,
            status: 'PENDING',
            pickUpDate: rental.pickUpDate,
            expectedDate: rental.expectedDate
        };
        return this.httpService.sendPostRequest(url, d);
    }
};
RentalService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
RentalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RentalService);



/***/ }),

/***/ "./src/app/service/rt-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/rt-storage.service.ts ***!
  \***********************************************/
/*! exports provided: RtStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtStorageService", function() { return RtStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RtStorageService = class RtStorageService {
    constructor() {
        this.TOKEN_KEY = 'car-rental-access-tk';
        this.LOGGEDIN_USER = 'car-rental-logged-in-user';
        this.mData = new Map();
    }
    setData(key, value) {
        this.mData[key] = value;
    }
    getData(key) {
        return this.mData[key];
    }
};
RtStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RtStorageService);



/***/ }),

/***/ "./src/app/service/user-service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user-service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service */ "./src/app/service/http-service.ts");



let UserService = class UserService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getAllUsers() {
        //  const url = 'user/v1/list';
        const url = 'user/list';
        return this.httpService.sendGetRequest(url, {});
        // return Promise.resolve(USERS);
    }
    searchUsers(searchTerm) {
        const url = 'user/search';
        return this.httpService.sendGetRequest(url, {
            searchString: searchTerm
        });
    }
    getUsersPaging(pageno) {
        // const url = `user/v1/list`;
        const url = `user/list`;
        return this.httpService.sendGetRequest(url, {
            pageno
        });
        // return Promise.resolve(USERS);
    }
    getUserById(id) {
        const url = `user/${id}`;
        return this.httpService.sendGetRequest(url, {});
    }
    blockUser(user) {
        // TODO replace http command
        const url = 'user/updateStatus';
        user.status = 'Blocked';
        return this.httpService.sendPostRequest(url, user);
        // return Promise.resolve(true);
    }
    unBlockUser(user) {
        const url = 'user/updateStatus';
        user.status = 'Active';
        return this.httpService.sendPostRequest(url, user);
        // return Promise.resolve(true);
    }
};
UserService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/service/util-service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/util-service.ts ***!
  \*****************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilService = class UtilService {
    constructor() { }
    setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        const storageValue = typeof value === 'string' ? value : JSON.stringify(value);
        document.cookie = name + '=' + (storageValue || '') + expires + '; path=/';
    }
    getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }
    eraseCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
    cleanCookie() {
        this.eraseCookie('bob-usr-login');
        this.eraseCookie('bob-usr-token');
    }
};
UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UtilService);



/***/ }),

/***/ "./src/app/signin/sign-in.component.scss":
/*!***********************************************!*\
  !*** ./src/app/signin/sign-in.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/signin/sign-in.component.ts":
/*!*********************************************!*\
  !*** ./src/app/signin/sign-in.component.ts ***!
  \*********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/notify.service */ "./src/app/service/notify.service.ts");






let SignInComponent = class SignInComponent {
    constructor(router, logger, notifier, authService) {
        this.router = router;
        this.logger = logger;
        this.notifier = notifier;
        this.authService = authService;
        this.hero = {
            name: 'Eugene'
        };
        this.user = {
            // userName: 'locnv',
            // password: '1234565678'
            userName: '',
            password: '1234565678'
        };
    }
    ngOnInit() { }
    doLogin(username, pwd) {
        if (!username || !pwd) {
            this.notifier.error('Username or password is empty.');
            return;
        }
        this.authService.signin(username, pwd)
            .then((isOk) => {
            this.logger.info('Login responded! -> ' + isOk);
            let targetPage = '/dashboard';
            const loggedInUser = this.authService.getLoggedInUser();
            if (this.authService.isAdmin(loggedInUser)) {
                // Default page for admin
                targetPage = '/user';
            }
            this.router.navigate([targetPage]).then();
        })
            .catch((err) => {
            this.logger.error('Failed to logged!');
            this.notifier.error('Login failed. Please check your username and / or password and tray again.');
        });
    }
    onBtnLoginClicked(username, pwd) {
        this.doLogin(username, pwd);
    }
    onKeyUpPressed(e) {
        if (e.key !== 'Enter') {
            return;
        }
        this.doLogin(this.user.userName, this.user.password);
    }
};
SignInComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] },
    { type: _service_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifierService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/sign-in.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/signin/sign-in.component.scss")).default]
    })
], SignInComponent);



/***/ }),

/***/ "./src/app/signup/sign-up.component.scss":
/*!***********************************************!*\
  !*** ./src/app/signup/sign-up.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/signup/sign-up.component.ts":
/*!*********************************************!*\
  !*** ./src/app/signup/sign-up.component.ts ***!
  \*********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/notify.service */ "./src/app/service/notify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/constant */ "./src/app/model/constant.ts");








let SignUpComponent = class SignUpComponent {
    constructor(logger, notifier, authService, router) {
        this.logger = logger;
        this.notifier = notifier;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.user.userName = 'test01';
        this.user.password = '123123123';
        this.user.passwordConfirm = '123123123';
        this.user.firstName = 'user';
        this.user.lastName = 'test';
        this.user.email = 'test01@gmail.com';
        this.user.phone = '64119189118';
    }
    onBtnSubmitClicked(isCarOwner) {
        if (!this.user.userName || !this.user.password) {
            this.notifier.error('Username or password is empty.');
            return;
        }
        if (this.user.password !== this.user.passwordConfirm) {
            this.notifier.error('Password confirmation doesn\'t match.');
            return;
        }
        this.user.roles.push(isCarOwner ? _model_constant__WEBPACK_IMPORTED_MODULE_7__["Roles"].CarOwner : _model_constant__WEBPACK_IMPORTED_MODULE_7__["Roles"].CarRenter);
        this.authService.signup(this.user)
            .then((resp) => {
            this.logger.info('Sign up responded -> ' + JSON.stringify(resp));
            this.notifier.success('Created new user.');
            this.router.navigate(['/login']).then();
        })
            .catch((err) => {
            this.logger.error('Failed to sign up -> ' + err);
            if (err instanceof Error) {
                this.notifier.error(err);
            }
            else {
                this.notifier.error('Failed to create user. Unknown error.');
            }
        });
        this.logger.info('Going to register new users -> ' + JSON.stringify(this.user));
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _service_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] },
    { type: _service_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifierService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/sign-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/signup/sign-up.component.scss")).default]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http-service */ "./src/app/service/http-service.ts");
/* harmony import */ var _model_car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/car */ "./src/app/model/car.ts");




let TestComponent = class TestComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.cars = [
            new _model_car__WEBPACK_IMPORTED_MODULE_3__["Car"](),
        ];
    }
    ngOnInit() {
        setTimeout(this.testSendGetReqWithUrlParam.bind(this), 100);
        setTimeout(this.testSendGetReqWithPathVariable.bind(this), 1000);
        setTimeout(this.testPost.bind(this), 2000);
    }
    testPost() {
        const model = {
            name: 'Eugene',
            age: 61
        };
        const url = 'api/test/post-with-model';
        this.httpService.sendPostRequest(url, model)
            .then((resp) => console.log('Send Post with model responded', resp))
            .catch((err) => console.log('Send Post with model Failed', err));
    }
    testSendGetReqWithPathVariable() {
        const url = 'api/test/get-with-path-variable/123';
        this.httpService.sendGetRequest(url, {})
            .then((resp) => {
            console.log('get-with-url-param responded.', resp);
        })
            .catch((err) => {
            console.log('get-with-url-param failed.', err);
        });
    }
    testSendGetReqWithUrlParam() {
        const url = 'api/test/get-with-url-param';
        const params = {
            pName: 'Eugene',
            nb: 61
        };
        this.httpService.sendGetRequest(url, params)
            .then((resp) => {
            console.log('get-with-url-param responded.', resp);
        })
            .catch((err) => {
            console.log('get-with-url-param failed.', err);
        });
    }
};
TestComponent.ctorParameters = () => [
    { type: _service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")).default]
    })
], TestComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box-search {\n  background-image: url(\"/assets/image/car-2.jpg\");\n  min-height: 480px;\n  background-size: cover;\n}\n.box-search form {\n  position: relative;\n  height: 60px;\n  width: 98%;\n  left: 1%;\n  top: 50px;\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.5);\n  box-shadow: 2px -2px lightgrey;\n  border-bottom: 2px solid gray;\n}\n.car-title {\n  font-weight: bold;\n  color: greenyellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9DOlxcVXNlcnNcXERpb3NcXElkZWFQcm9qZWN0c1xcY3M0MjUuc3dlLmNhci1yZW50YWxcXHNyY1xcbWFpblxccmVzb3VyY2VzXFxjczQyNS1zd2UtZnJvbnRlbmQvc3JjXFxhcHBcXHdlbGNvbWVcXHdlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQ0NKO0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LXNlYXJjaCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZS9jYXItMi5qcGdcIik7XHJcbiAgbWluLWhlaWdodDogNDgwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgbGVmdDogMSU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggLTJweCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JheTtcclxuICB9XHJcbn1cclxuLmNhci10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGdyZWVueWVsbG93O1xyXG59XHJcbiIsIi5ib3gtc2VhcmNoIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZS9jYXItMi5qcGdcIik7XG4gIG1pbi1oZWlnaHQ6IDQ4MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmJveC1zZWFyY2ggZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogOTglO1xuICBsZWZ0OiAxJTtcbiAgdG9wOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYm94LXNoYWRvdzogMnB4IC0ycHggbGlnaHRncmV5O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JheTtcbn1cblxuLmNhci10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JlZW55ZWxsb3c7XG59Il19 */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/notify.service */ "./src/app/service/notify.service.ts");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/log-service */ "./src/app/service/log-service.ts");
/* harmony import */ var _service_car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/car-service */ "./src/app/service/car-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let WelcomeComponent = class WelcomeComponent {
    constructor(router, notifier, logger, carService) {
        this.router = router;
        this.notifier = notifier;
        this.logger = logger;
        this.carService = carService;
        this.cars = [];
    }
    ngOnInit() {
        this.carService.getAllCars()
            .then((respData) => {
            this.cars = respData.list;
        })
            .catch((err) => this.logger.error('Failed to load cars.'));
    }
    onKeyUpOnSearchField(e, value) {
        if (e.key !== 'Enter') {
            return;
        }
        this.carService.searchCars(value)
            .then((cars) => {
            this.cars = cars;
            if (!cars || cars.length <= 0) {
                this.notifier.error('No result found.');
            }
            // this.notifier.success('Search done.');
            // this.logger.info(cars);
        })
            .catch((err) => this.logger.error('Failed to search cars.', err));
    }
    onViewDetailSelected($event) {
        this.logger.info($event);
        this.router.navigate(['car-detail', { carId: $event.id }]).then();
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _service_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifierService"] },
    { type: _service_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"] },
    { type: _service_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")).default]
    })
], WelcomeComponent);



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

module.exports = __webpack_require__(/*! C:\Users\Dios\IdeaProjects\cs425.swe.car-rental\src\main\resources\cs425-swe-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map