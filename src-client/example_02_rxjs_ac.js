import $ from "jquery";
import Rx from "rxjs/Rx";

const $title = $("#title");
const $results = $("#results");

const keyUps$ = Rx.Observable.fromEvent($title, "keyup");

keyUps$.subscribe(e => {
    getItems(e.target.value)
        .then(items => {
            $results.empty();
            console.log(items);
            $results.append(items.map(r => $(`<li />`).text(r)));
        });
});

// --------------------
//Library
function getItems(title) {
    console.log(`Querying ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "Item 2", `Another ${Math.random()}`]);
        }, 500 + (Math.random() * 1000));

    });
}