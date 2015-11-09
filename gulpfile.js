var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var watch = require('gulp-watch');

gulp.task('default', ['jsx', 'watch']);

gulp.task("jsx", function () {
  return gulp.src("_src/jsx/_*.jsx")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("assets/js/app.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build"));
});

gulp.task('watch', function() {

  gulp.watch('_src/jsx/_*.jsx', ['jsx']);

});
