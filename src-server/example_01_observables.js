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

simple$.subscribe(
    item => console.log(`one.next ${item}`),        //next
    error => console.log(`one.error ${error}`),     //error
    () => console.log("one.complete"));             //complete

setTimeout(() => {
    simple$.subscribe({
        //all three variations of syntax works:
        next: item => console.log(`two.next ${item}`),  //this one hoists the executions context
        error(error) {
            console.log(`two.error ${error}`)
        },
        complete: function () {
            console.log("two.complete");
        }
    });
}, 3000);




// const promise = new Promise((resolve, reject) => {
//     console.log("IN PROMISE");
//     resolve("hey");
// });

// promise.then(item => console.log(item));