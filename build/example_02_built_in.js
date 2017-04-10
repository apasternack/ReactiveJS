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