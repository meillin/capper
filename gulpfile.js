var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var gujshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var cleanhtml = require('gulp-cleanhtml');
var minifyCSS = require('gulp-minify-css');

var paths = {
	scripts: ['js/**/*.js', 'js/*.js'],
	templates: ['**/*.html', 'index.html'],
	images: 'img/*',
	styles: 'css/*.css',
	bower_components : ['bower_components/**/*.js', 'bower_components/**/*.map']
};

var minPath = 'min/';
var buildPath = "dev/";

var files = {
	js: gulp.src(paths.scripts),
	bower_components: gulp.src(paths.bower_components),
	templates: gulp.src(paths.templates),
	images: gulp.src(paths.images),
	styles: gulp.src(paths.styles),
};
/**
 * ********************************************** Minimize Files************************************************************************************
 */
/**
 * [Minimize js files]
 */
gulp.task('scripts', function() {
	return files.js
		.pipe(uglify({mangle: false})).pipe(gulp.dest( minPath + 'js'));
});
/**
 * [Copey bower components]
 */
gulp.task('bower_components', function() {
	return files.bower_components
		.pipe(gulp.dest( minPath + 'bower_components'));
});
/**
 * [Minimize html files]
 */
gulp.task('templates', function() {
	return files.templates
		.pipe(cleanhtml())
		.pipe(gulp.dest( minPath ));
});

/**
 * [optimize images]
 */
gulp.task('images', function() {
	return files.images
		.pipe(imagemin({optimizationLevel: 5}))
		.pipe(gulp.dest( minPath + 'img' ));
});

/**
 * [Minimize stylesheets]
 */
gulp.task('styles', function() {
	return files.styles
		.pipe(minifyCSS())
		.pipe(gulp.dest( minPath + 'css' ));
});

/**
 * [Watch tasks]
 */
gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.images, ['images']);
});

/**
 * ******************************************************Development Version**********************************************************************
 */
gulp.task('scripts_dev', function() {
	return files.js.pipe(gulp.dest( buildPath + 'js'));
});

gulp.task('bower_components_dev', function() {
	return files.bower_components.pipe(gulp.dest( buildPath + 'bower_components'));
});

gulp.task('templates_dev', function() {
	return files.templates.pipe(gulp.dest( buildPath ));
});

gulp.task('styles_dev', function() {
	return files.styles.pipe(gulp.dest( buildPath + 'css' ));
});

gulp.task('min', ['scripts', 'bower_components','templates', 'images', 'styles', 'watch']);

gulp.task('dev', ['scripts_dev', 'bower_components_dev','templates_dev', 'images', 'styles_dev']);
