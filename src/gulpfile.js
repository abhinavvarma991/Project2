var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function () {
  return gulp.src('source/**/*.jsx')
    .pipe(babel())
    .pipe(gulp.dest('build'));
});
