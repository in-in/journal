import gulp from 'gulp';
import paths from '../paths';
import gulpLoadPlugin from 'gulp-load-plugins';
const $ = gulpLoadPlugin();

const stylelint = () => {
  return gulp.src(paths.styles.watch, {since: gulp.lastRun(stylelint)})
    .pipe($.stylefmt())
    .pipe($.stylelint({
      failAfterError: false,
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
    .pipe(gulp.dest(paths.src));
}

export default stylelint;
