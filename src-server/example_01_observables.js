import Rx from "rxjs/Rx";

const promise = new Promise((resolve, reject) => {
    console.log("IN PROMISE");
    resolve("hey");
});

promise.then(item => console.log(item));