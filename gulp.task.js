var gulp = require('gulp'),
postcss = require('gulp-postcss'),
printZ = require('postcss-print-zindex');

gulp.task('print-z', function() {
    return gulp.src('styles.css')
    .pipe(postcss([ printZ ]));
});
