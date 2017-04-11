"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const simple$ = new Rx.Subject();

// simple$.subscribe(createSubscriber("simple$"));

// simple$.next("HELLO");
// simple$.next("WORLD");
// simple$.complete();

var interval$ = _Rx2.default.Observable.interval(1000).take(5);
var intervalSubject$ = new _Rx2.default.Subject();
interval$.subscribe(intervalSubject$);

intervalSubject$.subscribe((0, _util.createSubscriber)("sub1"));
intervalSubject$.subscribe((0, _util.createSubscriber)("sub2"));
intervalSubject$.subscribe((0, _util.createSubscriber)("sub3"));

setTimeout(function () {
    intervalSubject$.subscribe((0, _util.createSubscriber)("LOOK AT ME!"));
}, 2000);