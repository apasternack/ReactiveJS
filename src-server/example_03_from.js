import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";
import fs from "fs";

fs.readdir("./src-server", (err, items) => {
    if (err) console.error(err);
    else console.log(items);
});