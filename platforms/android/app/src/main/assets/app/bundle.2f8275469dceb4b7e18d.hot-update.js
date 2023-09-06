"use strict";
exports.id = "bundle";
exports.ids = null;
exports.modules = {

/***/ "./src/app/challenges/challenge-edit/challenge-edit.component.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChallengeEditComponent": () => (/* binding */ ChallengeEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@angular/core/fesm2015/core.mjs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@angular/forms/fesm2015/forms.mjs");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/angular/fesm2015/nativescript-angular.mjs");




class ChallengeEditComponent {
    constructor() {
        this.input = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.challengeDescription = '';
    }
    onSetChallenge() {
        this.input.emit(this.challengeDescription);
    }
}
ChallengeEditComponent.ɵfac = function ChallengeEditComponent_Factory(t) { return new (t || ChallengeEditComponent)(); };
ChallengeEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeEditComponent, selectors: [["ns-challenge-edit"]], outputs: { input: "input" }, decls: 3, vars: 1, consts: [["justifyContent", "space-between"], ["hint", "Challenge title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["text", "Set Challenge", 1, "btn", 3, "tap"]], template: function ChallengeEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "FlexboxLayout", 0)(1, "TextField", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChallengeEditComponent_Template_TextField_ngModelChange_1_listener($event) { return ctx.challengeDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "Button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function ChallengeEditComponent_Template_Button_tap_2_listener() { return ctx.onSetChallenge(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.challengeDescription);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__.TextValueAccessor], styles: ["TextField[_ngcontent-%COMP%] {\n    width: 66%;\n}\n\nButton[_ngcontent-%COMP%] {\n    width: 33%;\n}"] });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjJmODI3NTQ2OWRjZWI0YjdlMThkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ1Q7QUFDQztBQUNPO0FBQ3JDO0FBQ1A7QUFDQSx5QkFBeUIsdURBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFLDRDQUE0QywrREFBb0IsR0FBRyw2RUFBNkUsZ0JBQWdCLGdRQUFnUTtBQUNoYSxRQUFRLDREQUFpQjtBQUN6QixRQUFRLHdEQUFhLHdHQUF3RywyQ0FBMkM7QUFDeEssUUFBUSwwREFBZTtBQUN2QixRQUFRLDREQUFpQjtBQUN6QixRQUFRLHdEQUFhLDJFQUEyRSw4QkFBOEI7QUFDOUgsUUFBUSwwREFBZTtBQUN2QixNQUFNO0FBQ04sUUFBUSx1REFBWTtBQUNwQixRQUFRLHdEQUFhO0FBQ3JCLE9BQU8saUJBQWlCLDJEQUFrQixFQUFFLG1EQUFVLEVBQUUsb0VBQW9CLDJDQUEyQyxpQkFBaUIsR0FBRywrQkFBK0IsaUJBQWlCLEdBQUcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL25zLW5nLWNvdXJzZS8uL3NyYy9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuY2hhbGxlbmdlRGVzY3JpcHRpb24gPSAnJztcbiAgICB9XG4gICAgb25TZXRDaGFsbGVuZ2UoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuZW1pdCh0aGlzLmNoYWxsZW5nZURlc2NyaXB0aW9uKTtcbiAgICB9XG59XG5DaGFsbGVuZ2VFZGl0Q29tcG9uZW50Lsm1ZmFjID0gZnVuY3Rpb24gQ2hhbGxlbmdlRWRpdENvbXBvbmVudF9GYWN0b3J5KHQpIHsgcmV0dXJuIG5ldyAodCB8fCBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50KSgpOyB9O1xuQ2hhbGxlbmdlRWRpdENvbXBvbmVudC7JtWNtcCA9IC8qQF9fUFVSRV9fKi8gaTAuybXJtWRlZmluZUNvbXBvbmVudCh7IHR5cGU6IENoYWxsZW5nZUVkaXRDb21wb25lbnQsIHNlbGVjdG9yczogW1tcIm5zLWNoYWxsZW5nZS1lZGl0XCJdXSwgb3V0cHV0czogeyBpbnB1dDogXCJpbnB1dFwiIH0sIGRlY2xzOiAzLCB2YXJzOiAxLCBjb25zdHM6IFtbXCJqdXN0aWZ5Q29udGVudFwiLCBcInNwYWNlLWJldHdlZW5cIl0sIFtcImhpbnRcIiwgXCJDaGFsbGVuZ2UgdGl0bGVcIiwgMSwgXCJmb3JtLWNvbnRyb2xcIiwgMywgXCJuZ01vZGVsXCIsIFwibmdNb2RlbENoYW5nZVwiXSwgW1widGV4dFwiLCBcIlNldCBDaGFsbGVuZ2VcIiwgMSwgXCJidG5cIiwgMywgXCJ0YXBcIl1dLCB0ZW1wbGF0ZTogZnVuY3Rpb24gQ2hhbGxlbmdlRWRpdENvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7IGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcIkZsZXhib3hMYXlvdXRcIiwgMCkoMSwgXCJUZXh0RmllbGRcIiwgMSk7XG4gICAgICAgIGkwLsm1ybVsaXN0ZW5lcihcIm5nTW9kZWxDaGFuZ2VcIiwgZnVuY3Rpb24gQ2hhbGxlbmdlRWRpdENvbXBvbmVudF9UZW1wbGF0ZV9UZXh0RmllbGRfbmdNb2RlbENoYW5nZV8xX2xpc3RlbmVyKCRldmVudCkgeyByZXR1cm4gY3R4LmNoYWxsZW5nZURlc2NyaXB0aW9uID0gJGV2ZW50OyB9KTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgyLCBcIkJ1dHRvblwiLCAyKTtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uIENoYWxsZW5nZUVkaXRDb21wb25lbnRfVGVtcGxhdGVfQnV0dG9uX3RhcF8yX2xpc3RlbmVyKCkgeyByZXR1cm4gY3R4Lm9uU2V0Q2hhbGxlbmdlKCk7IH0pO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpKCk7XG4gICAgfSBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDEpO1xuICAgICAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ01vZGVsXCIsIGN0eC5jaGFsbGVuZ2VEZXNjcmlwdGlvbik7XG4gICAgfSB9LCBkZXBlbmRlbmNpZXM6IFtpMS5OZ0NvbnRyb2xTdGF0dXMsIGkxLk5nTW9kZWwsIGkyLlRleHRWYWx1ZUFjY2Vzc29yXSwgc3R5bGVzOiBbXCJUZXh0RmllbGRbX25nY29udGVudC0lQ09NUCVdIHtcXG4gICAgd2lkdGg6IDY2JTtcXG59XFxuXFxuQnV0dG9uW19uZ2NvbnRlbnQtJUNPTVAlXSB7XFxuICAgIHdpZHRoOiAzMyU7XFxufVwiXSB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==