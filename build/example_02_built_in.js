"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Rx.Observable.interval(500)
//     .take(5)
//     .subscribe(createSubscriber("interval"));

// Rx.Observable.timer(1000, 500)
//     .take(3)
//     .subscribe(createSubscriber("timer"));

_Rx2.default.Observable.of(["this is an array!", "hey"]).subscribe((0, _util.createSubscriber)("of"));

// .from takes an iterable/array like thing and .next returns each of them
var arr = [1, 2, 3, 4, 5];
_Rx2.default.Observable.from(arr).map(function (i) {
    return i * 5;
}).subscribe((0, _util.createSubscriber)("from"));

//passing an error in from or of does not stop execution, throw opperator does
_Rx2.default.Observable.from([new Error("HEY")]).subscribe((0, _util.createSubscriber)("from"));

_Rx2.default.Observable.throw(new Error("HEY")).subscribe((0, _util.createSubscriber)("error"));

//used to return an empty observable when you need to return an observable but with no value or changes
_Rx2.default.Observable.empty().subscribe((0, _util.createSubscriber)("empty"));

var sideEffect = 0;
var defer$ = _Rx2.default.Observable.defer(function () {
    sideEffect++;
    return _Rx2.default.Observable.of(sideEffect);
});

defer$.subscribe((0, _util.createSubscriber)("defer$.one"));
defer$.subscribe((0, _util.createSubscriber)("defer$.two"));
defer$.subscribe((0, _util.createSubscriber)("defer$.three"));

_Rx2.default.Observable.never().subscribe((0, _util.createSubscriber)("never"));

_Rx2.default.Observable.range(10, 20).subscribe((0, _util.createSubscriber)("range"));