import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

// Rx.Observable.interval(500)
//     .take(5)
//     .subscribe(createSubscriber("interval"));

Rx.Observable.timer(1000, 500)
    .subscribe(createSubscriber("timer"));

