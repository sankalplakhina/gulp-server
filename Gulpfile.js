// include gulp
var gulp = require('gulp');


// js related plug-ins
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

// css related plug-ins
var minifyCSS = require('gulp-minify-css');


gulp.task('express', function() {
    var express = require('express');
    var app = express();
    app.use(express.static(__dirname));
    console.log('Server running at http://localhost:4000/');
    app.listen(4000);
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
    console.log('creating css...');
    gulp.src(['src/css/**/*.css'])
        .pipe(concat('main.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css/'));
});


// JS concat, strip debugging and minify
gulp.task('scripts', function() {
    console.log('creating js..');
    gulp.src(['src/js/**/*.js'])
        .pipe(concat('main.js'))
//        .pipe(stripDebug())
//        .pipe(uglify())
        .pipe(gulp.dest('build/js/'));
});

// default gulp task
gulp.task('default', ['express', 'scripts', 'styles'], function() {

    // watch for JS changes
    gulp.watch('src/js/**/*.js', ['scripts']);

    // watch for CSS changes
    gulp.watch('src/css/**/*.css', ['styles']);
});
