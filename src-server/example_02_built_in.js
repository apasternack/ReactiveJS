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
