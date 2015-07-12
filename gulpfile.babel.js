import gulp from 'gulp';
import sequence from 'run-sequence';
import clean from 'del';

gulp.task('default', cb => sequence(
  'clean',
  cb));

gulp.task('clean', cb => sequence(
  [ 'clean::src',
    'clean::test' ],
  cb));

gulp.task('clean::src', cb => clean(['www/**/*.js', 'www/**/*.js.map'], cb));
gulp.task('clean::test', cb => clean(['test/**/*.js', 'www/**/*.js.map'], cb));
