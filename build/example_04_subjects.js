"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simple$ = new _Rx2.default.Subject();

simple$.subscribe((0, _util.createSubscriber)("simple$"));

simple$.next("HELLO");
simple$.next("WORLD");
simple$.complete();