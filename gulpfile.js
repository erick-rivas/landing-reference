var
  gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  postcss = require('gulp-postcss'),
  cssnano = require('cssnano'),
  imagemin = require('gulp-imagemin'),
  newer = require('gulp-newer'),

  folder = {
    src: 'build/assets/src/',
    build: 'build/assets/'
  };

//Js
gulp.task('js', function () {
  return gulp.src(folder.src + 'js/*')
    .pipe(uglify())
    .pipe(gulp.dest(folder.build + 'js/'));

});

//CSS processing
gulp.task('css', function () {
  return gulp.src(folder.src + 'css/*')
    .pipe(postcss([cssnano]))
    .pipe(gulp.dest(folder.build + 'css/'));

});

//Image processing
gulp.task('images', function() {
  return gulp.src(folder.src + 'images/*')
    .pipe(newer(folder.build + 'images/'))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 10}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest(folder.build + 'images/'));
});

gulp.task('run', ['images','css', 'js']);
gulp.task('compress', ['images']);

