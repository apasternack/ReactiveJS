import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

//Example 1 - simple subject

// const simple$ = new Rx.Subject();

// simple$.subscribe(createSubscriber("simple$"));

// simple$.next("HELLO");
// simple$.next("WORLD");
// simple$.complete();


//example 2 - subject as a proxy

// const interval$ = Rx.Observable.interval(1000).take(5);
// const intervalSubject$ = new Rx.Subject();
// interval$.subscribe(intervalSubject$);

// intervalSubject$.subscribe(createSubscriber("sub1"));
// intervalSubject$.subscribe(createSubscriber("sub2"));
// intervalSubject$.subscribe(createSubscriber("sub3"));

// setTimeout(() => {
//     intervalSubject$.subscribe(createSubscriber("LOOK AT ME!"));
// }, 3000);

//example 3

const currentUser$ = new Rx.BehaviorSubject();
const isLoggedIn$ = currentUser$.map(u => u.isLoggedIn);

isLoggedIn$.subscribe(createSubscriber("isLoggedIn"));

currentUser$.next({ isLoggedIn: false });

setTimeout(() => {
    currentUser$.next({isLoggedIn: true, name: "nelson" });
}, 2000);

setTimeout(() => {
    isLoggedIn$.subscribe(createSubscriber("delayed"));
}, 1000);