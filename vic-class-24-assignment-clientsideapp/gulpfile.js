'use strict';

const gulp = require('gulp');
const eslint = require('eslint');
const webpack = require('webpack-stream');

var files = ['*.js', './app/*.js', './app/js/*.js', './app/js/icecream/*.js', './app/js/milkshake/*.js',  './app/js/icecream/controllers/*.js', './app/js/milkshake/controllers/*.js'];

const paths = {
  js:__dirname + '/app/js/**/**/*.js',
  html:__dirname + '/app/**/*.html'
};

gulp.task('lint', () => {
  return gulp.src(files)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('copy', () => {
  return gulp.src(paths.html)
  .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('bundle', () => {
  return gulp.src(paths.js)
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('bundle:test', () => {
  return gulp.src(__dirname + '/test/*-test.js')
  .pipe(webpack({
    output: {
      filename: 'test_bundle.js'
    },
    module: {
      loaders: [{
        test: /\.html$/,
        loader: 'html'
      }]
    }
  }))
  .pipe(gulp.dest(__dirname + '/test'));
});

gulp.task('default', ['bundle', 'copy']);

gulp.task('watch', () => {
  gulp.watch(paths.js, ['lint', 'bundle']);
  gulp.watch(paths.html, ['copy']);
});
