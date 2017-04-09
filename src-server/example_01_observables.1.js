import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

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
    return new Rx.Observable(observer => {
        let index = 0;
        let interval = setInterval(() => {
            console.log(`Generating ${index}`);
            observer.next(index++);
        }, time);

        return () => {
            clearInterval(interval);  //clearInterval gets invoked when we unsubscribe
        }
    });
}

//custom operator
function take$(sourceObservable$, amount) {
    return new Rx.Observable(observer => {
        let count = 0;
        const subscription = sourceObservable$.subscribe({
            next(item) {
                observer.next(item);
                if (++count >= amount)
                    observer.complete();
             },
            error(error) { observer.error(error); },
            complete() { observer.complete }
        });

        return () => subscription.unsubscribe();
    });
}

const everySecond$ = createInterval$(1000);
const firstFiveSeconds$ = take$(everySecond$, 5);
const subscription = firstFiveSeconds$.subscribe(createSubscriber("one"));

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 3500);    