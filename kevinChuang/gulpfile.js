/*jshint esversion:6*/
/*eslint-env es6*/

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const webpack = require('webpack-stream');

gulp.task('copy', ()=> {
  return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('bundle', ()=> {
  return gulp.src('./app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('build',['copy','bundle']);


gulp.task('default',['build'], () => {});

gulp.task('lint', () => {
  gulp.src([
    './*.js',
    './gulpfile.js',
    './test/*.js',
    './routes/*.js',
    './schema/*.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.results(function(results) {
    console.log('Total results: ' + results.length);
    console.log('Total warnings: ' + results.warningCount);
    console.log('Total errors: ' + results.errorCount);
  }));
});

gulp.task('Mochai', () => {
  gulp.src('./test/*.js')
  .pipe(mocha());
});


gulp.task('watch', () => {
  gulp.watch(['./*.js','./test*.js'],['lint','Mochai']);
});
