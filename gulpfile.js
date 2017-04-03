var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    soucre = require("vinyl-source-stream"),
    browserify = require("bowserify"),
    watchify = require("watchify"),
    babelify = require("babelify");

gulp.task("scripts:server", () => {
    return gulp.src("./src-server/**/*.js")
        .pipe($.babel())
        .pipe(gulp.dest("./build"));
})

gulp.task("watch:scripts:server", () => {
    return gulp.watch("./src-server/**/*.js", gulp.series("scripts:server"));
});