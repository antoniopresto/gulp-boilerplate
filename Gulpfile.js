// gulp vinyl-source-stream browserify watchify reactify gulp-concat
// gulp-less gulp-strip-css-comments gulp-babel gulp-cssmin babel-preset-es2015
// gulp-strip-css-comments react react-dom
// vinyl-buffer gulp-uglify gulp-sourcemaps gulp-util
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify'); //browserify cache
var reactify = require('reactify');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var less = require('gulp-less');
var stripCssComments = require('gulp-strip-css-comments');
var cssmin = require('gulp-cssmin');
var main_js = './main-app.js';
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

var pipelineBrowserify = function (bundle) {
  return bundle.pipe(source('./build/build.js'))
    .pipe(buffer())
    // Add transformation tasks to the pipeline here.
    .pipe(babel({
      "presets": ["es2015"]
    }))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
};

gulp.task('browserify', function () {
  var bundler = browserify({
    entries: './main-app.js',
    debug: true,
    transform: [reactify]
  });

  var watcher = watchify(bundler); //observer
  watcher.on('update', function () {
    console.log('Updating');
    var bundle = watcher.bundle(); // Create new bundle that uses the cache for high performance
    pipelineBrowserify(bundle);
    console.log('Complete');
  });

  return pipelineBrowserify(bundler.bundle()); //initial bundle
});


function lessFiles() {
  gulp.src('./styles/*')
    .pipe(concat('style.min.less'))
    .pipe(less())
    .pipe(cssmin())
    .pipe(stripCssComments({
      all: true
    }))
    .pipe(gulp.dest('./build/'));
}

gulp.task('less', lessFiles);
gulp.watch('./styles/*', lessFiles);


gulp.task('default', ['browserify', 'less']);
