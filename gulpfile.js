var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');




/**
 * SASS
 */
gulp.task('sass', function () {
  return gulp.src(`./src/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/'));
});

gulp.task('watch-scss', function() {
    watch(`./src/**/*.scss`, function(){
        gulp.start('sass');
    });
});


gulp.task('watch', ['sass', 'watch-scss']);