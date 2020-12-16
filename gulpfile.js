'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream');
const rename = require('gulp-rename')
const htmlmin = require('gulp-htmlmin');


gulp.task('compile-compress-scss', function() {
  return gulp.src('./style/scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('./style/css/'));
});

gulp.task('compress-js', function() {
  return gulp.src('./js/script.js')
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('./js/'));
});

gulp.task('compress-html', function() {
  return gulp.src('./index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./html-min'));
});


gulp.task('watch', function() {
  gulp.watch('./style/scss/**/*.scss', gulp.series('compile-compress-scss'));
  gulp.watch('./js/script.js', gulp.series('compress-js'));
  gulp.watch('./index.html', gulp.series('compress-html'));
});
 
