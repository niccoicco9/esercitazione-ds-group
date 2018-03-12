/* jshint esversion:6 */
/* global require */

const jshint = require('gulp-jshint');
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('jshint', function() {
    'use strict';
    return gulp.src('./source/js/*.js').pipe(jshint()).pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function() {
    'use strict';
    gulp.src('./source/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./source/css/'));
});

gulp.task('sass-watch', function() {
    'use strict';
	gulp.watch('./source/sass/*.scss', ['sass']);
});
