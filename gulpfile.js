'use strict';

const gulp = require('gulp');
const runSeq = require('run-sequence');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const notify = require('gulp-notify');


// Development tasks
// --------------------------------------------------------------

// Live reload business.
gulp.task('reload', function () {
    livereload.reload();
});

gulp.task('reloadCSS', function () {
    return gulp.src('./public/main.css').pipe(livereload());
});

gulp.task('buildCSS', function () {

    var sassCompilation = sass();
    sassCompilation.on('error', console.error.bind(console));

    return gulp.src('./browser/scss/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError('SASS processing failed! Check your gulp process.')
        }))
        .pipe(sourcemaps.init())
        .pipe(sassCompilation)
        .pipe(sourcemaps.write())
        .pipe(rename('main.css'))
        .pipe(gulp.dest('./public'));
});

// Composed tasks
// --------------------------------------------------------------

gulp.task('build', function () {
    runSeq(['buildCSS']);
});

gulp.task('default', function () {

    gulp.start('build');

    gulp.watch('browser/scss/**', function () {
        runSeq('buildCSS', 'reloadCSS');
    });

    livereload.listen();

});
