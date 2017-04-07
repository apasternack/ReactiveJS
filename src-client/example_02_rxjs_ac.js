import $ from "jquery";
import Rx from "rxjs/Rx";

const $title = $("#title");
const $results = $("#results");

Rx.Observable.fromEvent($title, "keyup")
    .map(e => e.target.value)
    .distinctUntilChanged()
    .debounceTime(500)
    .switchMap(getItems)
    .subscribe(results => {
        $results.empty();
        $results.append(items.map(i => $('<li />').text(i)));

    })


// const keyUps$ = Rx.Observable.fromEvent($title, "keyup");
// const queries$ = keyUps$
//     .map(e => e.target.value)
//     .distinctUntilChanged()
//     .debounceTime(1)
//     .switchMap(query => getItems(query));  //used to be known as flatMapLatest; virtually identical to mergeMap BUT different in that if a new iteam comes in BEFORE everything was returned by the callback function
//     // .mergeMap(query => getItems(query));  same thing as below, longhand
//     // .mergeMap(getItems);  //mergeMap is flatMap alias, also SelectMany from LINQ, basically returns a list of items

// queries$.subscribe(items => {
//             $results.empty();
//             $results.append(items.map(r => $(`<li />`).text(r)));

// });

// --------------------
//Library
function getItems(title) {
    console.log(`Querying ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "Item 2", `Another ${Math.random()}`]);
        }, 500 + (Math.random() * 2000));

    });
}