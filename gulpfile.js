var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('js', function() {
  gulp.src('app/assets/js/app.js')
    .pipe($.webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('app/build/js'));
});

gulp.task('watch', function() {
  gulp.watch('app/assets/**/*.*', ['default']);
});

gulp.task('default', ['js']);
