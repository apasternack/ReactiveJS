import $ from "jquery";

const $title = $("#title");
const $results = $("#results");

$title.on("keyup", e => {
    const title = e.target.value;
    getItems(title)
        .then(items => {
            $results.empty();

            const $items = items.map(item => $(`<li />`).text(item));
            $results.append($items);

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