"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------------------
//Part 1
// const simple$ = new Rx.Observable(observer => {
//     console.log("Generating observable");
//     setTimeout(() => {
//         observer.next("an item");
//         setTimeout(() => {
//             observer.next("another item!");
//             observer.complete();
//         }, 1000);
//     }, 1000);
// });

// const error$ = new Rx.Observable(observer => {
//     observer.error(new Error("WHOA!"));
// });

// error$.subscribe(
//     item => console.log(`one.next ${item}`),        //next
//     error => console.log(`one.error ${error.stack}`),     //error
//     () => console.log("one.complete"));             //complete

// setTimeout(() => {
//     simple$.subscribe({
//         //all three variations of syntax works:
//         next: item => console.log(`two.next ${item}`),  //this one hoists the executions context
//         error(error) {
//             console.log(`two.error ${error}`)
//         },
//         complete: function () {
//             console.log("two.complete");
//         }
//     });
// }, 3000);


//ASIDE
// const promise = new Promise((resolve, reject) => {
//     console.log("IN PROMISE");
//     resolve("hey");
// });

// promise.then(item => console.log(item));

//--------------------------
//Part 2


function createInterval$(time) {
    return new _Rx2.default.Observable(function (observer) {
        var index = 0;
        var interval = setInterval(function () {
            console.log("Generating " + index);
            observer.next(index++);
        }, time);

        return function () {
            clearInterval(interval); //clearInterval gets invoked when we unsubscribe
        };
    });
}

//custom operator
function take$(sourceObservable$, amount) {
    return new _Rx2.default.Observable(function (observer) {
        var count = 0;
        var subscription = sourceObservable$.subscribe({
            next: function next(item) {
                observer.next(item);
                if (++count >= amount) observer.complete();
            },
            error: function error(_error) {
                observer.error(_error);
            },
            complete: function complete() {
                observer.complete;
            }
        });

        return function () {
            return subscription.unsubscribe();
        };
    });
}

var everySecond$ = createInterval$(1000);
var firstFiveSeconds$ = take$(everySecond$, 5);
var subscription = firstFiveSeconds$.subscribe((0, _util.createSubscriber)("one"));

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 3500);