import gulp from 'gulp';
import paths from '../paths';
import gulpLoadPlugin from 'gulp-load-plugins';
const $ = gulpLoadPlugin();


const scripts = () => {
  return gulp.src(paths.scripts.watch)
    .pipe($.eslint({
      globals: [
        'Vue'
      ]
    }))
    .pipe($.eslint.format())
    .pipe($.babel())
    .pipe($.concat('script.js', {newLine: ';'}))
    // .pipe($.uglify())
    .pipe(gulp.dest(paths.scripts.dist));
}

const lib = () => {
  return gulp.src(paths.scripts.lib)
    .pipe(gulp.dest(paths.scripts.dist));
}

export { scripts, lib };
