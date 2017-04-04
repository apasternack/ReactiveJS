var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    soucre = require("vinyl-source-stream"),
    browserify = require("bowserify"),
    watchify = require("watchify"),
    babelify = require("babelify");
    path = require("path");

gulp.task("scripts:server", () => {
    return gulp.src("./src-server/**/*.js")
        .pipe($.cached("server"))
        .pipe($.babel())
        .pipe(gulp.dest("./build"));
})

gulp.task("watch:scripts:server", gulp.series(
    "scripts:server",
     () => gulp.watch("./src-server/**/*.js", gulp.series("scripts:server"))));

let bundlers = {};
function initBundlerWatch(file) {
    if (bundlers.hasOwnProperty(file))
        return;

    const bundler = createBundler(file);
    const watcher = watchify(bundler);
    const filename = path.basename(file);

    function bundle() {
        return bundler
            .bundle()
            .on("error", error => console.error(error))
            .pipe(source(filename))
            .pipe(gulp.dest("./public/build"));
    }
}

function createBundler(file) {
    const bundler = browserify(file);
    bundler.transform(babelify);
    return bundler;
}