import gulp from 'gulp';
import paths from '../paths';
import gulpLoadPlugin from 'gulp-load-plugins';
const $ = gulpLoadPlugin();

const images = () => {
  return gulp.src(paths.images.src)
    .pipe($.newer(paths.images.dist))
    .pipe($.image())
    .pipe(gulp.dest(paths.images.dist));
}

export default images
