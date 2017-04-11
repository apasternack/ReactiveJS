"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Example 1 - simple subject

// const simple$ = new Rx.Subject();

// simple$.subscribe(createSubscriber("simple$"));

// simple$.next("HELLO");
// simple$.next("WORLD");
// simple$.complete();


//example 2 - subject as a proxy

// const interval$ = Rx.Observable.interval(1000).take(5);
// const intervalSubject$ = new Rx.Subject();
// interval$.subscribe(intervalSubject$);

// intervalSubject$.subscribe(createSubscriber("sub1"));
// intervalSubject$.subscribe(createSubscriber("sub2"));
// intervalSubject$.subscribe(createSubscriber("sub3"));

// setTimeout(() => {
//     intervalSubject$.subscribe(createSubscriber("LOOK AT ME!"));
// }, 3000);

//example 3

var currentUser$ = new _Rx2.default.Subject();
var isLoggedIn$ = currentUser$.map(function (u) {
    return u.isLoggedIn;
});

isLoggedIn$.subscribe((0, _util.createSubscriber)("isLoggedIn"));

currentUser$.next({ isLoggedIn: false });

setTimeout(function () {
    currentUser$.next({ isLoggedIn: true, name: "nelson" });
}, 2000);

setTimeout(function () {
    isLoggedIn$.subscribe((0, _util.createSubscriber)("delayed"));
}, 1000);