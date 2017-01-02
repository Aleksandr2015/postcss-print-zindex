# PostCSS Print Zindex [![Build Status][ci-img]][ci]

[PostCSS] plugin prints out z-index values into terminal.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/rosivanov/postcss-print-zindex.svg
[ci]:      https://travis-ci.org/rosivanov/postcss-print-zindex

Output example  
[https://travis-ci.org/rosivanov/postcss-print-zindex/jobs/188204960#L593](https://travis-ci.org/rosivanov/postcss-print-zindex/jobs/188204960#L593)

## Usage

```js
postcss([ require('postcss-print-zindex') ])
```

See [PostCSS] docs for examples for your environment.

### Usage with Gulp

```js
npm install --save-dev gulp gulp-postcss github:rosivanov/postcss-print-zindex
```

```js
var gulp = require('gulp'),
postcss = require('gulp-postcss'),
printZ = require('postcss-print-zindex');

gulp.task('print-z', function() {
    return gulp.src('styles.css')
    .pipe(postcss([ printZ ]));
});
```

[gulp.task.js](gulp.task.js)