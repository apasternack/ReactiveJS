"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simple$ = new _Rx2.default.Observable(function (observer) {
    console.log("Generating observable");
    setTimeout(function () {
        observer.next("an item");
        setTimeout(function () {
            observer.next("another item!");
            observer.complete();
        }, 1000);
    }, 1000);
});

var error$ = new _Rx2.default.Observable(function (observer) {
    observer.error(new Error("WHOA!"));
});

error$.subscribe(function (item) {
    return console.log("one.next " + item);
}, //next
function (error) {
    return console.log("one.error " + error.stack);
}, //error
function () {
    return console.log("one.complete");
}); //complete

setTimeout(function () {
    simple$.subscribe({
        //all three variations of syntax works:
        next: function next(item) {
            return console.log("two.next " + item);
        }, //this one hoists the executions context
        error: function error(_error) {
            console.log("two.error " + _error);
        },

        complete: function complete() {
            console.log("two.complete");
        }
    });
}, 3000);

// const promise = new Promise((resolve, reject) => {
//     console.log("IN PROMISE");
//     resolve("hey");
// });

// promise.then(item => console.log(item));