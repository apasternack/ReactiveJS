"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

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
function createSubscriber(tag) {
    return {
        next: function next(item) {
            console.log(tag + ".next " + item);
        },
        error: function error(_error) {
            console.log(tag + ".error " + (_error.stack || _error));
        },
        complete: function complete() {
            console.log(tag + ".complete");
        }
    };
}

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

var everySecond$ = createInterval$(1000);
var subscription = everySecond$.take(3).subscribe(createSubscriber("one"));

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 3500);