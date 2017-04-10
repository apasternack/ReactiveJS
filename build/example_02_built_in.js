"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Rx.Observable.interval(500)
//     .take(5)
//     .subscribe(createSubscriber("interval"));

_Rx2.default.Observable.timer(1000, 500).take(3).subscribe((0, _util.createSubscriber)("timer"));