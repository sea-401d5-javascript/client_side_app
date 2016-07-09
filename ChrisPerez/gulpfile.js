const gulp = require('gulp');
const webpack = require('webpack-stream');
const clean = require('gulp-clean');

const paths = {
  js: __dirname + '/dev/**/*.js',
  html: __dirname + '/dev/**/*.html',
  css: __dirname + '/dev/style.css'
};

gulp.task('clean', ()=>{
  return gulp.src('./build/*', {read:false})
    .pipe(clean());
});

gulp.task('copy-html', ['clean'], ()=>{
  return gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-css', ['clean'],()=>{
  return gulp.src(paths.css)
    .pipe(gulp.dest('./build'));
});

gulp.task('copy', ['copy-html', 'copy-css']);

gulp.task('bundle', ['clean'], ()=>{
  return gulp.src(paths.js)
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('bundle:test', () => {
  return gulp.src(__dirname + '/test/*_test.js')
    .pipe(webpack({
      output: {
        filename: 'test_bundle.js'
      }
    }))
    .pipe(gulp.dest(__dirname + '/test'));
});

gulp.task('watch', ()=>{
  gulp.watch('./app/*', ['build']);
});

gulp.task('build', ['clean', 'copy', 'bundle']);

gulp.task('default', ['build']);
