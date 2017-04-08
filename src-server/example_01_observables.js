import Rx from "rxjs/Rx";

const simple$ = new Rx.Observable(observer => {
    console.log("Generating observable");
    setTimeout(() => {
        observer.next("an item");
        setTimeout(() => {
            observer.next("another item!");
            observer.complete();
        }, 1000);
    }, 1000);
});







// const promise = new Promise((resolve, reject) => {
//     console.log("IN PROMISE");
//     resolve("hey");
// });

// promise.then(item => console.log(item));