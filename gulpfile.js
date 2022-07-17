const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const cssmin = require('gulp-cssmin')
const zip = require('gulp-zip');
const { series } = require('gulp');
const jsmin = require('gulp-jsmin');


gulp.task('css-min', (cb) => {
  gulp.src('./style.css')
  .pipe(cssmin())
  .pipe(gulp.dest('dist'))
  cb()
});
gulp.task('js-min', (cb) => {
  gulp.src('./script.js')
  .pipe(jsmin())
  .pipe(gulp.dest('dist'))
  cb()
})
gulp.task('html', (cb) => {
  gulp.src('index.html')
  .pipe(gulp.dest('dist'))
  gulp.src('jquery.js')
  .pipe(gulp.dest('dist'))
  cb()
})
gulp.task('imgs', (cb) =>{
  gulp.src('imgs/**')
  .pipe(gulp.dest('dist/imgs'))
  cb()
})
gulp.task('fonts', (cb) =>{
  gulp.src('fonts/**')
  .pipe(gulp.dest('dist/fonts'))
  cb()
})
gulp.task('to-zip', (cb) =>{
  gulp.src('dist/**')
  .pipe(zip('archive.zip'))
  .pipe(gulp.dest('dist'))
  cb()
})

gulp.task('build', gulp.series('css-min', 'js-min', 'html', 'imgs', 'fonts'))