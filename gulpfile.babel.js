import gulp from 'gulp';
import sequence from 'run-sequence';
import clean from 'del';
import tsc from 'tsproject';
import shell from 'gulp-shell';

gulp.task('default', cb => sequence(
  'rebuild',
  cb));

  gulp.task('test', cb => sequence(
    'rebuild',
    'mocha',
    cb));

gulp.task('rebuild', cb => sequence(
    'clean',
    'build',
    cb));

gulp.task('clean', cb => sequence(
  [ 'clean::src',
    'clean::test' ],
  cb));

gulp.task('clean::src', cb => clean(['www/**/*.js', 'www/**/*.js.map'], cb));
gulp.task('clean::test', cb => clean(['test/**/*.js', 'www/**/*.js.map'], cb));

gulp.task('build', cb => sequence(
  [ 'build::tsc' ],
  cb));

gulp.task('build::tsc', shell.task('tsc'));

gulp.task('mocha', shell.task('mocha'));
