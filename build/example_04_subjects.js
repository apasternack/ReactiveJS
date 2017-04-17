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

// const currentUser$ = new Rx.BehaviorSubject({isLoggedIn: false});  //BehaviorSubject expects you enter the initial state
// const isLoggedIn$ = currentUser$.map(u => u.isLoggedIn);

// currentUser$.next({ isLoggedIn: false });

// isLoggedIn$.subscribe(createSubscriber("isLoggedIn"));

// setTimeout(() => {
//     currentUser$.next({isLoggedIn: true, name: "nelson" });
// }, 3000);

// setTimeout(() => {
//     isLoggedIn$.subscribe(createSubscriber("delayed"));
// }, 1500);


//Example 4

var replay$ = new _Rx2.default.ReplaySubject(3);
replay$.next(1);
replay$.next(2);

replay$.subscribe((0, _util.createSubscriber)("one"));

replay$.next(3);
replay$.next(4);
replay$.next(5);

replay$.subscribe((0, _util.createSubscriber)("one"));