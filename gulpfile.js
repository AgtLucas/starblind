var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// JS task
gulp.task('js', function() {
  gulp.src('app/assets/js/app.jsx')
    .pipe($.webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('app/build/js'));
});

// Sass task
gulp.task('sass', function() {
  gulp.src('app/assets/sass/**/*.scss')
    .pipe($.sass())
    .pipe(gulp.dest('app/build/css'))
});

gulp.task('watch', function() {
  gulp.watch('app/assets/**/*.*', ['default']);
});

gulp.task('default', ['js']);
