var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('style', function () {
  return gulp.src(['src/sass/**/*.sass', 'src/sass/**/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) 
    .pipe(gulp.dest('dist/css'))
});
gulp.task('watch', function () {
  gulp.watch(['src/sass/**/*.sass','src/sass/**/*.scss'], ['style']); 
});
gulp.task('default', ['watch']);