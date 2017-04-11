"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fs2.default.readdir("./src-server", function (err, items) {
    if (err) console.error(err);else console.log(items);
});