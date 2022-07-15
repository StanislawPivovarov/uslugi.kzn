const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const cssmin = require('gulp-cssmin')
const paths ={
    css: ['./main.css']
}

exports.default = () =>(
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
);

gulp.task('default', this.default)