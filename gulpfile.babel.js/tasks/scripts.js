import gulp from 'gulp';
import paths from '../paths';
import gulpLoadPlugin from 'gulp-load-plugins';
const $ = gulpLoadPlugin();

const scripts = () => {
  return gulp.src(paths.scripts.watch)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.concat('scripts.js', {newLine: ';'}))
    .pipe($.uglify())
    .pipe(gulp.dest(paths.scripts.dist));
}

export default scripts;
