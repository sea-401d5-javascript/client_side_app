'use strict';
const gulp = require('gulp');
const webpack = require('webpack-stream');
const lint = require('gulp-eslint');

var paths = {
  copy: {
    css: 'app/css/**/*.css',
    html: 'app/**/*.html',
    js: 'app/js/**/*.js',
    test: 'test/*_test.js'
  },
  build: {
    main: 'build/',
    css: 'build/css',
    js: 'build/js',
    test: 'test/'
  }
};

gulp.task('watch', function () {
  gulp.watch(paths.dev.html, ['statichtmlfiles:dev']);
  gulp.watch(paths.dev.js, ['bundle']);
  gulp.watch(paths.dev.css, ['staticcssfiles:dev']);
  gulp.watch(paths.dev.test, ['bundle:test']);
});

gulp.task('copy', () => {
  return gulp.src(__dirname + '/app/index.html')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('bundle', () => {
  return gulp.src(__dirname + '/app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('bundle:test', () => {
  return gulp.src(__dirname + '/test/*test.js')
    .pipe(webpack({
      output: {
        filename: 'test_bundle.js'
      }
    }))
    .pipe(gulp.dest(__dirname + '/test'));
});

gulp.task('lint' , () => {
  return gulp.src([paths.dev.js, paths.dev.test])
    .pipe(lint())
    .pipe(lint.format());
});

gulp.task('default', ['bundle', 'copy']);
