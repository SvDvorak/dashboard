var gulp = require('gulp');
var connect = require('gulp-connect');
var gulp_rename = require('gulp-rename')

gulp.task('scripts', function() {
  return gulp.src([
      'node_modules/angular/angular.js',
      'node_modules/jquery/dist/jquery.js',
      'src/app.js',
      'src/**/*.js'
  ])
  .pipe(gulp_rename({dirname:''}))
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src([
      'src/**/*.html'
  ])
  .pipe(gulp_rename({dirname:''}))
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload());
});

gulp.task('css', function() {
  return gulp.src([
      'src/**/*.css',
  ])
  .pipe(gulp_rename({dirname:''}))
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload());
});

gulp.task('watch', ['scripts', 'html', 'css'], function() {
    gulp.watch(['src/**/*.js'], ['scripts']);
    gulp.watch(['src/**/*.html'], ['html']);
    gulp.watch(['src/**/*.css'], ['css']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('default', ['connect', 'watch']);
