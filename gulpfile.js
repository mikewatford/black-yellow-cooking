'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var  del = require('del');
var notify = require('gulp-notify');

// DEFAULT
gulp.task('default', function() {
    gulp.start('sass');
});

// SASS
gulp.task('sass', function () {
	gulp.src('./src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
    includePaths: ['node_modules/foundation-sites/scss']
  }))
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(sourcemaps.write('./'))

	.pipe(gulp.dest('./build/styles/'))
	.pipe(notify({ message: 'Styles task complete'}));
});

// Watch
gulp.task('watch', function () {
	// Watch .scss files
	gulp.watch('./src/scss/**/*.scss', ['sass']);
});