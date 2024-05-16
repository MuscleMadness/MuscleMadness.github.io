const { src, dest, watch, series } = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("./styles/scss/**/*.scss")
    .pipe(sass())
    .pipe(concat("main.css"))
    .pipe(dest("./styles/css"));
}

function watchTask() {
  watch(["./styles/scss/**/*.scss"], buildStyles);
}

// Server task
gulp.task("serve", function () {
  connect.server({
    root: ".", // Your project root
    livereload: true,
    port: 8080,
  });

  gulp.src("./index.html").pipe(open({ uri: "http://localhost:8080" }));
});

// Default task
gulp.task("default", gulp.series("serve"));

exports.default = series(buildStyles, watchTask);
