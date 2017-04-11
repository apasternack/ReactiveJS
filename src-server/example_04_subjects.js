import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

// const simple$ = new Rx.Subject();

// simple$.subscribe(createSubscriber("simple$"));

// simple$.next("HELLO");
// simple$.next("WORLD");
// simple$.complete();

const interval$ = Rx.Observable.interval(1000).take(5);
const intervalSubject$ = new Rx.Subject();
interval$.subscribe(intervalSubject$);

intervalSubject$.subscribe(createSubscriber("sub1"));
intervalSubject$.subscribe(createSubscriber("sub2"));
intervalSubject$.subscribe(createSubscriber("sub3"));

setTimeout(() => {
    intervalSubject$.subscribe(createSubscriber("LOOK AT ME!"));
}, 2000);