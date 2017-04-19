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

// const currentUser$ = new Rx.BehaviorSubject({isLoggedIn: false});  //BehaviorSubject expects you enter the initial state
// const isLoggedIn$ = currentUser$.map(u => u.isLoggedIn);

// currentUser$.next({ isLoggedIn: false });

// isLoggedIn$.subscribe(createSubscriber("isLoggedIn"));

// setTimeout(() => {
//     currentUser$.next({isLoggedIn: true, name: "nelson" });
// }, 3000);

// setTimeout(() => {
//     isLoggedIn$.subscribe(createSubscriber("delayed"));
// }, 1500);


//Example 4

// const replay$ = new Rx.ReplaySubject(3);
// replay$.next(1);
// replay$.next(2);

// replay$.subscribe(createSubscriber("one"));

// replay$.next(3);
// replay$.next(4);
// replay$.next(5);

// replay$.subscribe(createSubscriber("two"));

// replay$.next(6);

// Example 5 Async Subject

const apiCall$ = new Rx.AsyncSubject();
apiCall$.next(1);

apiCall$.subscribe(createSubscriber("one"));
apiCall$.next(2);
apiCall$.complete();  //this activates the async subject which does not get triggered by subscriptions until this function is invoked

setTimeout(() => {
    apiCall$.subscribe(createSubscriber("two"));
}, 2000);