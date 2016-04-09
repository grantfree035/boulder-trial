// packages
const gulp    = require('gulp');
const jshint  = require('gulp-jshint');
const eslint  = require('gulp-eslint');

// default task
gulp.task('default', ['watch']);

// jshint
gulp.task('jshint', function () {
  return gulp.src('app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// eslint
gulp.task('eslint', function () {
  return gulp.src('app/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// configure watchers
gulp.task('watch', function () {
  gulp.watch('app/**/*.js', ['jshint']);
});
