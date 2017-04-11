import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

const simple$ = new Rx.Subject();

simple$.subscribe(createSubscriber("simple$"));

simple$.next("HELLO");
simple$.next("WORLD");
simple$.complete();