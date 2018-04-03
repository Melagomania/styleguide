var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('style', function () {
  return gulp.src(['src/sass/**/*.sass', 'src/sass/**/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) 
    .pipe(gulp.dest('dist/css'))
});


gulp.task('html', function() {
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('img', function() {
  gulp.src('src/img/*.*')
  .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', function() {
  gulp.src('src/fonts/**/*.*').pipe(gulp.dest('dist/fonts'));
});

gulp.task('build', ['html', 'style', 'img', 'fonts'], function() {

});

gulp.task('watch', ['build'], function () {
  gulp.watch(['src/sass/**/*.sass','src/sass/**/*.scss', 'src/**/*.html'], ['style', 'html']); 
});

gulp.task('default', ['watch']);