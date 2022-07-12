const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const paths ={
    css: ['./main.css']
}



// gulp.task('sassToCss', function(){
//     return gulp.src('./*.sass')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('dist/'));
// });

gulp.task('liveServer', function(){
    browserSync.init({
        server: {
          baseDir: "./"
        }
      })
})

gulp.task('watcher', function(){
    gulp.watch()
})

gulp.task('default', ['watcher', 'liveServer'])