var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    soucre = require("vinyl-source-stream"),
    browserify = require("bowserify"),
    watchify = require("watchify"),
    babelify = require("babelify");

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
}

function createBundler(file) {
    const bundler = browserify(file);
    bundler.transform(babelify);
    return bundler;
}