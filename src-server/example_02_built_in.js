import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

// Rx.Observable.interval(500)
//     .take(5)
//     .subscribe(createSubscriber("interval"));

// Rx.Observable.timer(1000, 500)
//     .take(3)
//     .subscribe(createSubscriber("timer"));

Rx.Observable.of(["this is an array!", "hey"])
    .subscribe(createSubscriber("of"));

// .from takes an iterable/array like thing and .next returns each of them
const arr = [1,2,3,4,5];
Rx.Observable.from(arr)
    .map(i => i * 5)
    .subscribe(createSubscriber("from"));

//passing an error in from or of does not stop execution, throw opperator does
Rx.Observable.from([new Error("HEY")])
    .subscribe(createSubscriber("from"));

Rx.Observable.throw(new Error("HEY"))
    .subscribe(createSubscriber("error"));

//used to return an empty observable when you need to return an observable but with no value or changes
Rx.Observable.empty()
    .subscribe(createSubscriber("empty"));

let sideEffect = 0;
const defer$ = Rx.Observable.defer(() => {
    sideEffect++;
    return Rx.Observable.of(sideEffect);
});

defer$.subscribe(createSubscriber("defer$.one"));
defer$.subscribe(createSubscriber("defer$.two"));
defer$.subscribe(createSubscriber("defer$.three"));

Rx.Observable.never()
    .subscribe(createSubscriber("never"));

Rx.Observable.range(10,20)
    .subscribe(createSubscriber("range"));